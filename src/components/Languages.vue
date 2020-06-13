<template>
    <div class="lang-wrap">
        <label
            class="label"
            :class="disable"
            title="language"
            v-for="lang in langs"
            :key="lang.language"
        >
            <input class="input" type="radio" v-model.lazy="localLang" />
            <span class="span">{{ lang.language }}</span>
            <span class="flag" />
        </label>
    </div>
</template>

<script>
import content from "@/content/content.json";

export default {
    name: "Languages",
    data() {
        return {
            content,
            localLang: localStorage.getItem("lang"),
            langs: "",
            disable: {
                disable1: true,
                disable2: false
            }
        };
    },
    mounted() {
        if (this.localLang) {
            localStorage.setItem("lang", "en");
            this.localLang = "en";
        }
        this.langs = this.content;
    }
};
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";

.lang-wrap {
    position: fixed;
    top: 1.4em;
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
    }
}
</style>
