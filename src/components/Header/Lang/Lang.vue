<template>
    <div class="lang-wrap">
        <label
            v-for="data in content"
            :key="data.lang"
            class="label"
            :class="{ enable: localLang === data.lang, disable: localLang !== data.lang }"
            title="language"
        >
            <input
                class="input"
                type="radio"
                :value="data.lang"
                v-model="localLang"
                @change="handleChange"
            />
            <span class="span">{{ data.language }}</span>
            <span class="flag" :class="data.lang"/>
        </label>
    </div>
</template>

<script>
import {mapActions} from "vuex";
import content from "@/content/content.json";

export default {
    name: "Lang",
    data() {
        return {
            content,
            localLang: "",
            enable: false,
            disable: false
        };
    },
    mounted() {
        if (!this.localLang) {
            localStorage.setItem("lang", "en");
            this.localLang = "en";
        }
        this.updateContentLang(this.localLang);
    },
    methods: {
        ...mapActions(["updateContentLang"]),
        handleChange() {
            this.updateContentLang(this.localLang);
            localStorage.setItem("lang", this.localLang);
        }
    }
};
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";

.lang-wrap {
    position: fixed;
    top: 1.2em;
    right: 1.6em;
    z-index: 2;

    .label {
        font-size: 1.6rem; /* 16px */
        position: absolute;
        top: 0;
        right: 0;
        color: $primary-color;
        font-family: $primary-family;
        padding: 0.625em 0;
        cursor: pointer;

        .input {
            display: none;
        }

        .flag {
            width: 1.375em;
            height: 1em;
            position: absolute;
            top: 0.6875em;
            left: -1.625em;
            display: inline-block;
            background-size: contain;
            background-position: right;
            background-repeat: no-repeat;
        }

        .en {
            background-image: url("~@/assets/images/flag/uk.png");
        }

        .ua {
            background-image: url("~@/assets/images/flag/ua.png");
        }

        .ru {
            background-image: url("~@/assets/images/flag/ru.png");
        }
    }

    .enable {
        z-index: 1;
    }

    .disable {
        opacity: 0;
        transition: all 300ms ease-in;
    }

    .disable {
        top: 1.5625em;
        transform: translateY(-1.5625em);
    }

    .disable ~ .disable {
        top: 3.125em;
        transform: translateY(-3.125em);
    }
}

.lang-wrap:hover .disable {
    opacity: 1;
    transform: translateY(0);
}

.lang-wrap:hover .en {
    background-image: url("~@/assets/images/flag/uk.gif");
}

.lang-wrap:hover .ua {
    background-image: url("~@/assets/images/flag/ua.gif");
}

.lang-wrap:hover .ru {
    background-image: url("~@/assets/images/flag/ru.gif");
}

// .enable:hover {
//   color: red;
// }
</style>
