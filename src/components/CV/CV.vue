<template>
    <div class="main">
        <div class="download-wrap">
            <span class="download-span">{{ getContentLang.download_cv }}</span>
            <a class="download-link" :title="getContentLang.title.download" :href="link">
                {{ getContentLang.download_cv }}
            </a>
        </div>

        <div class="tablet-wrap" :class="{overflow: isOverflow}">
            <img class="tablet" src="@/assets/images/bg/cv-bg-img.png" alt="tablet" width="1920"/>
            <button class="btn" :title="getContentLang.title.click" type="button" onClick="handleActive"></button>
            <div class="cv-wrap cv-wrap-active-z-index cv-wrap-active">
                <a class="link" :class="{pointer: isPointer}" :title="getContentLang.title.download" :href="link">
                    <img class="cv" v-if="getContentLang.lang === 'en'" src="@/assets/images/cv/cv-en.jpg" alt="resume" width="1414"/>
                    <img class="cv" v-if="getContentLang.lang === 'ua'" src="@/assets/images/cv/cv-ua.jpg" alt="resume" width="1414"/>
                    <img class="cv" v-if="getContentLang.lang === 'ru'" src="@/assets/images/cv/cv-ru.jpg" alt="resume" width="1414"/>
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
    },
    methods: {
        handleActive() {
            console.log("handleActive")
        }
    },
}
</script>

<style scoped lang="scss">
@import "~@/styles/variables.scss";

.main {
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url('~@/assets/images/bg/cv-bg-img.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    flex-flow: column;
}

.download-wrap {
    width: fit-content;
    height: 5em;
    position: relative;
    top: 8em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-family: $primary-family;
    font-weight: 900;
    transition: 500ms;
}

.download-span {
    font-size: 2rem; /* 20px */
    width: fit-content;
    position: absolute;
    padding: 0 1em;
    font-family: $primary-family;
    font-weight: 900;
    color: $active-color;
    text-align: center;
}

.download-link {
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

.tablet-wrap {
    width: 90%;
    position: relative;
    top: 9.6em;
    margin: 0 auto 6.4em;
    overflow: hidden;
    transition: transform 700ms ease-in;
}

.overflow {
    overflow: unset;
}

.tablet {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.btn {
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
}

.cv-wrap {
    width: 100%;
    position: absolute;
    top: 4%;
    left: -15%;
    transform: rotate3D(44, -41, 52, 66deg);
    transition: transform 700ms ease-in;
}

.cv-wrap-active-z-index {
    cursor: pointer;
    z-index: 3;
}

.cv-wrap-active {
    top: 0%;
    left: 0%;
    transform: rotate3D(0, 0, 0, 0deg);
    margin-bottom: 3.2em;
}

.link {
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.pointer {
    pointerEvents: 'auto'
}

.cv {
    width: 100%;
    height: 100%;
}

@media (min-width: 801px) {
    .btn:hover + .cvWrap .cv {
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
</style>