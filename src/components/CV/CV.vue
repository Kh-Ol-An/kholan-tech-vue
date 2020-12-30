<template>
    <div class="CV" @click="handleInActive">
        <div class="CV__download">
            <span class="CV__download-text">{{ getContentLang.download_cv }}</span>
            <a class="CV__download-link" :title="getContentLang.title.download" :href="link">
                {{ getContentLang.download_cv }}
            </a>
        </div>

        <div class="CV__tablet">
            <img class="CV__tablet-img" :class="{absolute: isAbsolute, index: isIndex}"
                 src="@/assets/images/bg/cv-bg-img.png"
                 alt="tablet"
                 width="1920"/>
            <button class="CV__tablet-btn" :class="{none: isNone}" :title="getContentLang.title.click" type="button"
                    @click="handleActive"></button>
            <div class="CV__tablet-cv" :class="{active: isActive, static: isStatic}">
                <a class="CV__tablet-cv-link" :title="getContentLang.title.download"
                   :href="link">
                    <img class="CV__tablet-cv-img" :src="cvImg" alt="resume" width="1414"/>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "CV",
    data() {
        return {
            isAbsolute: false,
            isIndex: false,
            isNone: false,
            isActive: false,
            isStatic: false,
        }
    },
    computed: {
        ...mapGetters(["getContentLang"]),
        link() {
            let tempLink = ""
            if (this.getContentLang.lang === 'en') {
                tempLink = "https://drive.google.com/uc?export=download&id=11vVAXWVAtGT3S3jvlmr2-l7yFOVtcD4U"
            } else if (this.getContentLang.lang === 'ua') {
                tempLink = "https://drive.google.com/uc?export=download&id=1_PXWLhnOMHCdS9aPhyOBGrC2-YEWDATV"
            } else if (this.getContentLang.lang === 'ru') {
                tempLink = "https://drive.google.com/uc?export=download&id=1vNnfHAkqUQZo1LdigKXLYnM1577hwk-b"
            }
            return tempLink
        },
        cvImg() {
            return require(`@/assets/images/cv/cv-${this.getContentLang.lang}.jpg`)
        }
    },
    methods: {
        active() {
            this.isNone = true
            this.isActive = true
            setTimeout(() => {
                this.isAbsolute = true
                this.isIndex = true
                this.isStatic = true
                document.addEventListener("keydown", this.handleEsc)
            }, 700)
        },
        inActive() {
            this.isAbsolute = false
            this.isActive = false
            this.isStatic = false
            setTimeout(() => {
                this.isIndex = false
                this.isNone = false
                document.removeEventListener("keydown", this.handleEsc)
            }, 700)
        },
        handleActive() {
            this.active()
        },
        handleInActive(e) {
            if (e.target !== e.currentTarget) return
            this.inActive()
        },
        handleEsc(e) {
            // console.log(e)
            if (e.key !== "Escape") return
            this.inActive()
        },
    },
    // mounted() {
    //     console.log("mounted")
    // },
    // beforeDestroy() {
    //     console.log("beforeDestroy")
    // }
}
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";

.CV {
    overflow-x: hidden;
    overflow-y: auto;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #DCDBE0;
    display: flex;
    flex-flow: column;

    &__download {
        height: 5em;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 8em auto 0;
        font-family: $primary-family;
        font-weight: 900;
        transition: 500ms;

        &-text {
            font-size: 2rem; /* 20px */
            width: fit-content;
            position: absolute;
            padding: 0 1em;
            font-family: $primary-family;
            font-weight: 900;
            color: $active-color;
            text-align: center;
        }

        &-link {
            font-size: 2rem; /* 20px */
            width: fit-content;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 1em;
            background: rgba(0, 0, 0, 0.7);
            font-family: $primary-family;
            font-weight: 900;
            color: $primary-color;
            -webkit-mask: url('https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png');
            mask: url('https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png');
            -webkit-mask-size: 2300% 100%;
            mask-size: 2300% 100%;
            cursor: pointer;
            animation: ani2 700ms steps(22) forwards;

            &:hover {
                animation: ani 700ms steps(22) forwards;
            }
        }

        @keyframes ani {
            from {
                -webkit-mask-position: 0 0;
                mask-position: 0 0;
            }

            to {
                -webkit-mask-position: 100% 0;
                mask-position: 100% 0;
            }
        }

        @keyframes ani2 {
            from {
                -webkit-mask-position: 100% 0;
                mask-position: 100% 0;
            }

            to {
                -webkit-mask-position: 0 0;
                mask-position: 0 0;
            }
        }
    }

    &__tablet {
        width: 90%;
        position: relative;
        margin: 1.6em auto 6.4em;
        border-radius: 2em;
        overflow: hidden;
        transition: transform 700ms ease-in;
        box-shadow: 0 1px 4px rgba(0, 0, 0, .3),
        -23px 0 20px -23px rgba(0, 0, 0, .6),
        23px 0 20px -23px rgba(0, 0, 0, .6),
        inset 0 0 40px rgba(0, 0, 0, .1);

        &-img {
            position: relative;
            width: 100%;
            height: 100%;
            border-radius: 2em;
            z-index: 1;

            &.absolute {
                position: absolute;
            }

            &.index {
                z-index: 0;
            }
        }

        &-btn {
            width: 100%;
            height: 134%;
            position: absolute;
            top: 21%;
            left: 5%;
            transform: rotate3D(44, -41, 52, 66deg);
            border: none;
            padding: 0;
            margin: 0;
            background: transparent;
            cursor: pointer;
            z-index: 2;

            &.none {
                display: none;
            }
        }

        &-cv {
            width: 100%;
            position: absolute;
            top: 4%;
            left: -15%;
            transform: rotate3D(44, -41, 52, 66deg);
            transition: transform 700ms ease-in,
            top 700ms ease-in,
            left 700ms ease-in;

            &.active {
                top: 0;
                left: 0;
                transform: rotate3D(0, 0, 0, 0deg);
                cursor: pointer;
                z-index: 3;
            }

            &.static {
                position: static;
            }

            &-link {
                width: 100%;
                height: 100%;
                pointer-events: none;
            }

            &-img {
                width: 100%;
                height: 100%;
            }
        }

        @media (min-width: 801px) {
            &-btn:hover + &-cv &-cv-img {
                animation: color 700ms infinite;
            }

            @keyframes color {
                0% {
                    transform: scale(1);
                }
                70% {
                    transform: scale(1.01);
                }
                100% {
                    transform: scale(1);
                }
            }
        }
    }
}
</style>