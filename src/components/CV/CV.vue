<template>
    <div class="main" @click="handleDisactive" @keydown.esc="inactive">
        <div class="main__download">
            <span class="main__download-text">{{ getContentLang.download_cv }}</span>
            <a class="main__download-link" :title="getContentLang.title.download" :href="link">
                {{ getContentLang.download_cv }}
            </a>
        </div>

        <div class="main__tablet" :class="{overflow: isOverflow}">
            <img class="main__tablet-img" :class="{IMG: isIMG}" src="@/assets/images/bg/cv-bg-img.png" alt="tablet" width="1920"/>
            <button class="main__tablet-btn" :title="getContentLang.title.click" type="button"
                    @click="handleActive"></button>
            <div class="main__tablet-cv" :class="{index: isIndex, active: isActive, static: isStatic}">
                <a class="main__tablet-cv-link" :class="{pointer: isPointer}" :title="getContentLang.title.download"
                   :href="link">
                    <img class="main__tablet-cv-img" :src="cvImg" alt="resume" width="1414"/>
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
            isOverflow: false,
            isPointer: false,
            isIndex: false,
            isActive: false,
            isIMG: false,
            isStatic: false,
            // isIndex: true,
            // isActive: true,
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
            this.isIndex = true
            this.isActive = true
            this.isOverflow = true
            setTimeout(() => {
                this.isIMG = true
                this.isStatic = true
            }, 700)
        },
        inactive() {
            this.isIndex = false
            this.isActive = false
            this.isOverflow = false
            setTimeout(() => {
                this.isIMG = false
                this.isStatic = false
            }, 700)
        },
        handleActive() {
            this.active()
        },
        handleDisactive(e) {
            if (e.target !== e.currentTarget) return
            this.inactive()
        },
    },
}
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";

.main {
    //height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    //position: absolute;
    //top: 0;
    //right: 0;
    //bottom: 0;
    //left: 0;
    background-image: url('~@/assets/images/bg/cv-bg-img.jpg');
    background-attachment: fixed;
    //background-attachment: scroll;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-flow: column;

    &__download {
        //width: fit-content;
        height: 5em;
        //position: relative;
        //top: 8em;
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
        //top: 9.6em;
        //margin: 0 auto 6.4em;
        margin: 1.6em auto 6.4em;
        border-radius: 2em;
        overflow: hidden;
        transition: transform 700ms ease-in;

        &.overflow {
            //overflow: unset;
            //overflow-x: hidden;
            //overflow-y: auto;
        }

        &-img {
            position: relative;
            width: 100%;
            height: 100%;
            //object-fit: contain;
            border-radius: 2em;
            z-index: 1;

            &.IMG {
                position: absolute;
                z-index: -1;
            }
        }

        &-btn {
            width: 100%;
            height: 134%;
            position: absolute;
            top: 21%;
            left: 5%;
            //transform: rotate3D(44, -41, 52, 66deg);
            transform: rotate3D(44, -41, 52, 66deg);
            border: none;
            padding: 0;
            margin: 0;
            background: transparent;
            cursor: pointer;
            z-index: 2;
        }

        &-cv {
            width: 100%;
            position: absolute;
            top: 4%;
            left: -15%;
            //transform: rotate3D(44, -41, 52, 66deg);
            transform: rotate3D(44, -41, 52, 66deg);
            transition: transform 700ms ease-in;

            &.index {
                cursor: pointer;
                z-index: 3;
            }

            &.active {
                //top: 0%;
                //left: 0%;
                transform: rotate3D(0, 0, 0, 0deg);
                //margin-bottom: 3.2em;
            }

            &.static {
                position: static;
            }

            &-link {
                width: 100%;
                height: 100%;
                pointer-events: none;

                &.pointer {
                    pointerEvents: 'auto'
                }
            }

            &-img {
                width: 100%;
                height: 100%;
                //margin-bottom: 8em;
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