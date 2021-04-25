<template>
    <div class="lang" @mouseover="isMount = true">
        <label
            v-for="lang in langs"
            :key="lang"
            class="lang__label"
            :class="{ enable: localLang === lang, disable: localLang !== lang, mount: isMount }"
            title="language"
        >
            <input
                class="lang__label-input"
                type="radio"
                :value="lang"
                v-model="localLang"
                @change="handleChange"
            />
            <span class="lang__label-flag" :class="lang"/>
        </label>
    </div>
</template>

<script>
import {mapActions} from "vuex";
// import content from "@/content/lang.json";

export default {
    name: "Lang",
    data() {
        return {
            langs: ["en", "ru", "ua"],
            localLang: "",
            enable: false,
            disable: false,
            isVideoForward: true,
            isVideoReverse: false,
            // убирает анимацию во время первой загрузки страницы
            isMount: false,
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
        },
    },
};
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";

.lang {
    position: relative;
    width: 22px;
    height: 16px;
    z-index: 11;

    @media (max-width: 800px) {
        order: 1;
    }

    &__label {
        font-size: 1.6rem; /* 16px */
        position: absolute;
        top: 0;
        right: 0;
        color: $primary-color;
        font-family: $primary-family;
        padding: 0 0 0.625em;
        cursor: pointer;

        &.enable {
            z-index: 3;
        }

        &.disable {
            z-index: 2;
        }

        &.disable ~ .disable {
            z-index: 1;
        }

        &-input {
            display: none;
        }

        &-flag {
            width: 1.375em;
            height: 1em;
            display: block;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;

            &.en {
                background-image: url("~@/assets/images/flag/uk.png");
            }

            &.ua {
                background-image: url("~@/assets/images/flag/ua.png");
            }

            &.ru {
                background-image: url("~@/assets/images/flag/ru.png");
            }
        }
    }

    .disable.mount {
        animation: langLeave1 200ms linear forwards;

        @keyframes langLeave1 {
            0% {
                top: 1.5625em;
            }
            100% {
                top: 0;
            }
        }
    }

    .disable.mount ~ .disable.mount {
        animation: langLeave2 200ms linear forwards;

        @keyframes langLeave2 {
            0% {
                top: 3.125em;
            }
            100% {
                top: 0;
            }
        }
    }

    &:hover .lang__label.disable {
        animation: langHover1 400ms linear forwards;

        @keyframes langHover1 {
            0% {
                top: 0;
            }
            40% {
                top: 1.6em;
            }
            64% {
                top: 1.35em;
            }
            100% {
                top: 1.5625em;
            }
        }
    }

    &:hover .lang__label.disable ~ .lang__label.disable {
        animation: langHover2 400ms linear forwards;

        @keyframes langHover2 {
            0% {
                opacity: 0;
                top: 0;
            }
            39% {
                opacity: 0;
            }
            40% {
                opacity: 1;
                top: 1.6em;
            }
            80% {
                opacity: 1;
                top: 3.125em;
            }
            100% {
                opacity: 1;
                top: 3.125em;
            }
        }
    }

    &:hover .en {
        background-image: url("~@/assets/images/flag/uk.gif");
    }

    &:hover .ua {
        background-image: url("~@/assets/images/flag/ua.gif");
    }

    &:hover .ru {
        background-image: url("~@/assets/images/flag/ru.gif");
    }

    //&__video-forward,
    //&__video-reverse {
    //    position: absolute;
    //    left: -37px;
    //    top: 12px;
    //    transform: rotate(90deg);
    //    display: none;
    //    min-width: 95px;
    //    min-height: 47px;
    //
    //    &::before {
    //        content: '';
    //        position: absolute;
    //        top: 0;
    //        left: 0;
    //        width: 100%;
    //        height: 98%;
    //        pointer-events: none;
    //        background: linear-gradient(to right, red, red, yellow, green, blue, orange);
    //        mix-blend-mode: color;
    //    }
    //
    //    &.active {
    //        display: block;
    //    }
    //}
}
</style>
