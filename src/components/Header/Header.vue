<template>
    <header class="header">
        <router-link class="header__logo" to="/" title="logo">{{ contentLang.logo }}</router-link>

        <div class="header__nav">
            <button class="header__nav-burger" type="button"
                    @click="handleSwitchNav">
                <span class="header__nav-burger-line1" :class="{active: isHeaderBurger}"/>
                <span class="header__nav-burger-line2" :class="{active: isHeaderBurger}"/>
                <span class="header__nav-burger-line3" :class="{active: isHeaderBurger}"/>
            </button>
            <ul class="header__nav-list" :class="{active: isHeaderBurger}">
                <li class="header__nav-list-item" :class="{active: isHeaderBurger, mount: isLoudPage}">
                    <router-link class="header__nav-list-item-link" to="/">
                        {{ (contentLang && contentLang.nav) ? contentLang.nav.main : '' }}
                    </router-link>
                </li>
                <li class="header__nav-list-item" :class="{active: isHeaderBurger, mount: isLoudPage}">
                    <router-link class="header__nav-list-item-link" to="/game">
                        {{ (contentLang && contentLang.nav) ? contentLang.nav.wens : '' }}
                    </router-link>
                </li>
                <li class="header__nav-list-item" :class="{active: isHeaderBurger, mount: isLoudPage}">
                    <router-link class="header__nav-list-item-link" to="/cv_1.0">
                        {{ (contentLang && contentLang.nav) ? contentLang.nav.cv1 : '' }}
                    </router-link>
                </li>
                <li class="header__nav-list-item" :class="{active: isHeaderBurger, mount: isLoudPage}">
                    <router-link class="header__nav-list-item-link" to="/cv_2.0">
                        {{ (contentLang && contentLang.nav) ? contentLang.nav.cv2 : '' }}
                    </router-link>
                </li>
                <li class="header__nav-list-item" :class="{active: isHeaderBurger, mount: isLoudPage}">
                    <router-link class="header__nav-list-item-link" to="/cv_3.0">
                        {{ (contentLang && contentLang.nav) ? contentLang.nav.cv3 : '' }}
                    </router-link>
                </li>
                <li class="header__nav-list-item" :class="{active: isHeaderBurger, mount: isLoudPage}">
                    <router-link class="header__nav-list-item-link" to="/contacts">
                        {{ (contentLang && contentLang.nav) ? contentLang.nav.contacts : '' }}
                    </router-link>
                </li>
                <li class="header__nav-list-video" :class="{active: isHeaderVideo}">
                    <video muted ref="rafVideo">
                        <source src="@/assets/video/dust.mp4" type='video/mp4'>
                    </video>
                    <div class="header__nav-list-video-shadow"></div>
                </li>
            </ul>
        </div>

        <Lang/>
    </header>
</template>

<script>
import Lang from "@/components/Header/Lang/Lang";
import {mapGetters} from "vuex";

export default {
    name: "Header",
    components: {Lang},
    data() {
        return {
            isHeaderBurger: false,
            isHeaderVideo: false,
            // убирает анимацию во время первой загрузки страницы
            isLoudPage: false,
            isPaused: null,
        }
    },
    computed: {
        ...mapGetters({
            contentLang: "getContentLang"
        }),
    },
    methods: {
        handleSwitchNav() {
            this.isHeaderBurger = !this.isHeaderBurger
            this.isHeaderVideo = this.isHeaderBurger
            // убирает анимацию во время первой загрузки страницы
            this.isLoudPage = true
            if (this.isHeaderBurger) {
                setTimeout(() => this.$refs.rafVideo.play(), 580)
                // setTimeout(() => this.isHeaderVideo = false, 15000)
            } else {
                this.$refs.rafVideo.pause();
                this.$refs.rafVideo.currentTime = 0;
            }
        },
        // handleCloseNav() {
        //     console.log("handleCloseNav")
        //     this.isHeaderBurger = false
        //     this.isHeaderVideo = false
        //     this.$refs.rafVideo.pause();
        //     this.$refs.rafVideo.currentTime = 0;
        // }
        // updatePaused(e) {
        //     this.isPaused = e.target.paused
        // }
    },
    // watch: {
    //     // isPaused() {
    //     //     if (this.$refs.rafVideo.pause()) {
    //     //         return false
    //     //     }
    //     // }
    // }
};
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";

.header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100vw;
    padding: 1.6em 3.2em 0;

    @media (max-width: 800px) {
        padding: 1.6em 3.2em 0;
    }

    &__logo {
        font-size: 2rem; /* 20px */
        z-index: 11;
        line-height: 1;
        font-family: $logo-family;
        font-weight: bolder;
        background: linear-gradient(
                to right,
                $secondary-color 0%,
                $primary-color 100%
        );
        background-clip: text;
        -webkit-text-fill-color: transparent;
        //transition: all 300ms ease-in;

        @media (max-width: 800px) {
            order: 1;
        }
    }

    &__nav {
        @media (max-width: 800px) {
            position: relative;
        }

        &-burger {
            position: relative;
            z-index: 11;
            display: none;
            width: 3em;
            height: 2em;
            cursor: pointer;
            //transition: all 200ms linear;

            @media (max-width: 800px) {
                display: block;

                &-line1,
                &-line2,
                &-line3 {
                    position: absolute;
                    left: 0;
                    display: block;
                    width: 100%;
                    height: 0.2em;
                    background-color: $primary-color;
                    transition: all 200ms linear;
                }

                &-line1 {
                    top: 0;

                    &.active {
                        top: 50%;
                        transform: translateY(-50%) rotate(-45deg);
                        transition: all 1000ms linear;
                    }
                }

                &-line2 {
                    top: 50%;
                    transform: translateY(-50%);

                    &.active {
                        transform: translateY(-50%) rotate(45deg);
                        transition: all 1000ms linear;
                    }
                }

                &-line3 {
                    bottom: 0;

                    &.active {
                        bottom: 50%;
                        transform: translateY(50%) rotate(-45deg);
                        transition: all 1000ms linear;
                    }
                }
            }
        }

        &-list {
            font-size: 1.4rem; /* 14px */
            line-height: 20px;
            display: flex;
            align-items: center;
            color: $primary-color;
            font-family: $primary-family;

            @media (max-width: 800px) {
                font-size: 2.6rem; /* 26px */
                line-height: 1;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 10;
                width: 100vw;
                height: 100vh;
                flex-flow: column;
                font-weight: bolder;
                backdrop-filter: none;
                background-color: rgba(0, 0, 0, 0);
                transition: all 100ms linear 200ms;

                &.active {
                    backdrop-filter: blur(3px);
                    background-color: rgba(0, 0, 0, 0.9);
                    transition: all 300ms linear;
                }
            }

            &-item {
                margin-left: 4.8em;

                @media (max-width: 800px) {
                    margin: 0;
                    position: absolute;
                    left: 50%;
                    z-index: 2;
                    transform: translateX(-50%);
                }

                &:hover > .header__nav-list-item-link {
                    color: $active-color;
                }

                &:first-child {
                    margin: 0;
                }

                &:nth-child(1),
                &:nth-child(2),
                &:nth-child(3) {
                    @media (max-width: 800px) {
                        top: -100%;
                    }
                }

                &.mount:nth-child(1) {
                    @media (max-width: 800px) {
                        animation: headerInactive1 200ms linear forwards;

                        @keyframes headerInactive1 {
                            0% {
                                top: 76px;
                            }
                            100% {
                                top: -100%;
                            }
                        }
                    }
                }

                &.mount:nth-child(2) {
                    @media (max-width: 800px) {
                        animation: headerInactive2 200ms linear forwards;

                        @keyframes headerInactive2 {
                            0% {
                                top: 176px;
                            }
                            100% {
                                top: -100%;
                            }
                        }
                    }
                }

                &.mount:nth-child(3) {
                    @media (max-width: 800px) {
                        animation: headerInactive3 200ms linear forwards;

                        @keyframes headerInactive3 {
                            0% {
                                top: 276px;
                            }
                            100% {
                                top: -100%;
                            }
                        }
                    }
                }

                &.active:nth-child(1) {
                    animation: headerActive1 1000ms linear forwards;

                    @keyframes headerActive1 {
                        0% {
                            top: -100%;
                        }
                        33% {
                            top: 98px;
                        }
                        43% {
                            top: 54px;
                        }
                        63% {
                            top: 76px;
                        }
                        100% {
                            top: 76px;
                        }
                    }
                }

                &.active:nth-child(2) {
                    animation: headerActive2 1000ms linear forwards;

                    @keyframes headerActive2 {
                        0% {
                            opacity: 0;
                            top: -100%;
                        }
                        32% {
                            opacity: 0;
                        }
                        33% {
                            opacity: 1;
                            top: 98px;
                        }
                        45% {
                            top: 188px;
                        }
                        55% {
                            top: 154px;
                        }
                        75% {
                            top: 176px;
                        }
                        100% {
                            top: 176px;
                        }
                    }
                }

                &.active:nth-child(3) {
                    animation: headerActive3 1000ms linear forwards;

                    @keyframes headerActive3 {
                        0% {
                            opacity: 0;
                            top: -100%;
                        }
                        44% {
                            opacity: 0;
                        }
                        45% {
                            opacity: 1;
                            top: 188px;
                        }
                        55% {
                            top: 285px;
                        }
                        58% {
                            top: 276px;
                        }
                        100% {
                            top: 276px;
                        }
                    }
                }

                &-link {
                    color: $primary-color;
                    transition: color 300ms ease-in;
                }

                &-link.router-link-exact-active {
                    color: $active-color;
                }
            }

            &-video {
                position: fixed;
                top: 102px;
                left: 0;
                z-index: 1;
                width: 100%;
                height: max-content;
                display: none;

                &.active {
                    display: block;
                }

                &-shadow {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    box-shadow: 0px 22px 10px -10px rgba(0, 0, 0, 0.9) inset, 0px -22px 10px -10px rgba(0, 0, 0, 0.9) inset;
                }
            }
        }
    }
}
</style>
