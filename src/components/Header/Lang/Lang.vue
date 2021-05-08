<template>
    <div class="lang" :class="{ 'active': isActive }" @click="isActive = true">
        <ul class="lang__list">
            <li
                v-for="lang in languages"
                :key="lang"
                class="lang__list-item"
                :class="{ 'enable': localLang === lang, 'disable': localLang !== lang }"
                title="language"
            >
                <label
                >
                    <input
                        class="lang__list-item-input"
                        type="radio"
                        :value="lang"
                        v-model="localLang"
                        @change="handleChange"
                    />
                    <span class="lang__list-item-flag" :class="lang"/>
                </label>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "Lang",
    data() {
        return {
            languages: ["en", "ru", "ua"],
            localLang: "",
            isActive: false,
            enable: false,
            disable: false,
        };
    },
    mounted() {
        if (!this.localLang) {
            localStorage.setItem("lang", "en");
            this.localLang = "en";
        } else {
            this.localLang = localStorage.getItem("lang")
        }
        this.updateContentLang(this.localLang);
    },
    methods: {
        ...mapActions(["updateContentLang"]),
        handleChange() {
            this.updateContentLang(this.localLang);
            localStorage.setItem("lang", this.localLang);
            this.isActive = false
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

    &__list {
        &-item {
            font-size: 1.6rem; /* 16px */
            position: absolute;
            top: 0;
            right: 0;
            color: $primary-color;
            font-family: $primary-family;
            padding: 0 0 0.625em;
            transition: all 300ms ease-in;

            &.enable {
                z-index: 3;
            }

            &.disable {
                z-index: 2;
                top: 0;
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
                cursor: pointer;

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
    }

    &.active .disable {
        top: 1.5625em;
    }

    &.active .disable ~ .disable {
        top: 3.125em;
    }

    &.active .en {
        background-image: url("~@/assets/images/flag/uk.gif");
    }

    &.active .ua {
        background-image: url("~@/assets/images/flag/ua.gif");
    }

    &.active .ru {
        background-image: url("~@/assets/images/flag/ru.gif");
    }
}
</style>
