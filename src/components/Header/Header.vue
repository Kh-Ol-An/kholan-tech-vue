<template>
    <header class="main">
        <Lang />

        <router-link class="logo" to="/" title="logo">{{ getContentLang.logo }}</router-link>

        <label class="nav-container">
            <input type="checkbox" />
            <div class="line-wrap">
                <span class="line1" />
                <span class="line2" />
                <span class="line3" />
            </div>
            <ul class="nav">
                <li class="nav__item">
                    <router-link class="link" to="/">{{ (getContentLang && getContentLang.nav) ? getContentLang.nav.main : '' }}</router-link>
                </li>
                <li class="nav__item">
                    <router-link class="link" to="/games">{{ (getContentLang && getContentLang.nav) ? getContentLang.nav.games : '' }}</router-link>
                </li>
                <li class="nav__item">
                    <router-link class="link" to="/cv">{{ (getContentLang && getContentLang.nav) ? getContentLang.nav.cv : '' }}</router-link>
                </li>
                <li class="nav__item">
                    <router-link class="link" to="/contacts">{{ (getContentLang && getContentLang.nav) ? getContentLang.nav.contacts : '' }}</router-link>
                </li>
            </ul>
        </label>
    </header>
</template>

<script>
import Lang from "@/components/Header/Lang/Lang";
import { mapGetters } from "vuex";

export default {
    name: "Header",
    components: { Lang },
    computed: {
        ...mapGetters(["getContentLang"])
    }
};
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";

.main {
    box-sizing: border-box;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1.6em 16em 1.6em 3.2em;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;

    @media (max-width: 800px) {
        padding: 1.6em 3.2em;
    }

    .logo {
        font-size: 3rem; /* 30px */
        line-height: 1.17em;
        background: linear-gradient(
            to right,
            $secondary-color 0%,
            $primary-color 100%
        );
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: $logo-family;
        font-weight: 900;
        margin-top: -0.1666em;
        transition: all 300ms ease-in;
        z-index: 111;

        @media (max-width: 800px) {
            order: 1;
            margin: 0 auto;
        }
    }

    .nav-container {
        @media (max-width: 800px) {
            width: 0;
            position: relative;
        }

        input {
            display: none;

            @media (max-width: 800px) {
                &:checked ~ .nav {
                    height: 4.5em;
                    margin-top: 0.75em;
                    opacity: 1;
                }

                &:checked ~ .nav > .navItem {
                    pointer-events: unset;
                }

                &:checked ~ .lineWrap > .line1::before {
                    transform: translate(0%, 450%) rotate(-45deg);
                }

                &:checked ~ .lineWrap > .line2::before {
                    transform: rotate(45deg);
                }

                &:checked ~ .lineWrap > .line3::before {
                    transform: translate(0%, -450%) rotate(-45deg);
                }
            }
        }

        .line-wrap {
            width: 3em;
            height: 2em;
            position: relative;
            display: none;
            margin-top: 0.5em;
            cursor: pointer;
            z-index: 1;

            @media (max-width: 800px) {
                display: block;

                .line1::before,
                .line2::before,
                .line3::before {
                    width: 100%;
                    height: 0.2em;
                    position: absolute;
                    left: 0;
                    content: "";
                    display: block;
                    background-color: #fff;
                    transition: all 300ms ease-in;
                }

                .line1::before {
                    top: 0;
                }

                .line2::before {
                    top: 50%;
                    transform: translateY(-50%);
                }

                .line3::before {
                    bottom: 0;
                }
            }
        }

        .nav {
            font-size: 1.8rem; /* 18px */
            line-height: 1.5em;
            display: flex;
            align-items: center;
            color: $primary-color;
            font-family: $primary-family;
            list-style: none;

            @media (max-width: 800px) {
                width: 12em;
                height: 0;
                flex-flow: column;
                align-items: flex-start;
                opacity: 0;
                transition: all 300ms ease-in;
            }

            .nav__item {
                @media (max-width: 800px) {
                    pointer-events: none;
                }

                &:not(:last-child) {
                    margin-right: 4.8em;

                    @media (max-width: 800px) {
                        margin: 0;
                    }
                }

                .link {
                    color: $primary-color;
                    transition: color 300ms ease-in;
                }

                .link.router-link-exact-active {
                    color: $active-color;
                }
            }

            .nav__item:hover > .link {
                color: $active-color;
            }
        }
    }
}
</style>
