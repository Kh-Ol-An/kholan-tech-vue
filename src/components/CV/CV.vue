<template>
    <div class="cv-page" @mousemove="handleMouseMove">
        <div class="cv container" ref="cv">
            <div class="cv__left">
                <div class="cv__left-block">
                    <div class="cv__left-block-img">
                        <img src="@/assets/images/cv/ava.jpg" alt="ava">
                    </div>
                    <h2 class="cv__left-block-name">Oleg Khristenko</h2>
                    <p class="cv__left-block-prof">Front-End Developer</p>
                </div>
                <div class="cv__left-block">
                    <h3 class="cv__left-block-title">Summary</h3>
                    <p class="cv__left-block-text">Results-oriented software developer and research professional. I make
                        it
                        my goal to create software with the user in mind, creating applications with a useable and
                        intuitive
                        user interface experience. I also understand the importance of creating highly readable and
                        easily
                        maintainable source code. I am constantly striving to learn new technologies and look to ways to
                        better myself in this rapidly changing industry.</p>
                </div>
                <div class="cv__left-block">
                    <h3 class="cv__left-block-title">Tech skills</h3>
                    <ul class="cv__left-block-text">
                        <li>-JavaScript</li>
                        <li>-JQuery</li>
                        <li>-Vue</li>
                        <li>-React</li>
                        <li>-AJAX</li>
                        <li>-Git</li>
                        <li>-WebPack</li>
                        <li>-Gulp</li>
                        <li>-HTML5</li>
                        <li>-CSS3 (Sass, SCSS, Less, Grid, Flexbox)</li>
                        <li>-Adaptive Web Design</li>
                        <li>-Photoshop</li>
                        <li>-English (Pre-Intermediate)</li>
                    </ul>
                </div>
                <div class="cv__left-block">
                    <h3 class="cv__left-block-title">Soft skills</h3>
                    <ul class="cv__left-block-text">
                        <li>-Resposible</li>
                        <li>-Scrupulouse</li>
                        <li>-Teamwork</li>
                    </ul>
                </div>
                <div class="cv__left-block">
                    <h3 class="cv__left-block-title">Contacts</h3>
                    <ul class="cv__left-block-text">
                        <li>Telephone: <a href="tel:+380508899268">+380 50 88 99 268</a></li>
                        <li>Telegram: <a href="tg://resolve?domain=@kholan">@kholan</a></li>
                        <li>Skype: <a href="skype:hristenkoleg?chat">hristenkoleg</a></li>
                        <li>Email: <a href="mailto:olegkhristenko@gmail.com">olegkhristenko@gmail.com</a></li>
                        <li>GitHub: <a href="https://github.com/Kh-Ol-An">github.com/Kh-Ol-An</a></li>
                        <li>LinkedIn: <a href="https://linkedin.com/in/kh-ol-an">linkedin.com/in/kh-ol-an</a></li>
                        <li>Website: <a href="/">kholan.tech</a></li>
                    </ul>
                </div>
            </div>

            <div class="cv__right">
                <div class="cv__right-block">
                    <h3 class="cv__right-block-title">Portfolio</h3>
                    <div class="cv__right-block-box">
                        <p class="cv__right-block-box-name">
                            <span>Smart Group</span>
                            <a href="https://smartgroup.ua">https://smartgroup.ua/</a>
                        </p>
                        <p class="cv__right-block-box-name">
                            <span>WO</span>
                            <a href="https://wo.ua">https://wo.ua/</a>
                        </p>
                        <p class="cv__right-block-box-name">
                            <span>Cecotec</span>
                            <a href="https://cecotec.tech">https://cecotec.tech/</a>
                        </p>
                        <p class="cv__right-block-box-name">
                            <span>Deerma</span>
                            <a href="https://deerma.ua">https://deerma.ua/</a>
                        </p>
                        <p class="cv__right-block-box-name">
                            <span>Profit Whales</span>
                            <a href="https://profitwhales.com">https://profitwhales.com/</a>
                        </p>
                        <p class="cv__right-block-box-name">
                            <span>Personal site</span>
                            <a href="http://kholan.tech">http://kholan.tech/</a>
                        </p>
                    </div>
                </div>

                <div class="cv__right-block">
                    <h3 class="cv__right-block-title">Experience</h3>
                    <div class="cv__right-block-box">
                        <h4 class="cv__right-block-box-name">Smart Group</h4>
                        <ul class="cv__right-block-box-list">
                            <li class="cv__right-block-box-list-link"><a href="https://smartgroup.ua">https://smartgroup.ua/</a>
                            </li>
                            <li class="cv__right-block-box-list-link"><a href="https://yunmai.ua">https://yunmai.ua/</a>
                            </li>
                            <li class="cv__right-block-box-list-link"><a href="https://wo.ua">https://wo.ua/</a></li>
                            <li class="cv__right-block-box-list-link"><a href="https://deebot.ua">https://deebot.ua/</a>
                            </li>
                            <li class="cv__right-block-box-list-link"><a
                                href="https://cecotec.ua">https://cecotec.tech/</a></li>
                            <li class="cv__right-block-box-list-link"><a href="https://ecovacsrobots.ru">https://ecovacsrobots.ru/</a>
                            </li>
                            <li class="cv__right-block-box-list-link"><a href="https://deerma.ua">https://deerma.ua/</a>
                            </li>
                        </ul>
                        <p class="cv__right-block-text">Technology:
                            <span>Vue, JQuery, fetch, Adaptive Web Design.</span>
                        </p>
                        <p class="cv__right-block-text">About:
                            <span>Smart Group is an ecosystem of services between producer and consumer.</span>
                        </p>
                        <ul class="cv__right-block-box-list">
                            <li>Responsibilities and Achievements:</li>
                            <li>-Adaptive web design</li>
                            <li>-Receiving and processing data</li>
                            <li>-Routing</li>
                            <li>-Communication with backend-developers and designer</li>
                        </ul>
                    </div>

                    <div class="cv__right-block-box">
                        <h4 class="cv__right-block-box-name">Profit Whales</h4>
                        <a class="cv__right-block-box-link"
                           href="https://profitwhales.com">https://profitwhales.com/</a>
                        <p class="cv__right-block-text">Technology:
                            <span>React.js, Redux, Axios, Adaptive Web Design.</span>
                        </p>
                        <p class="cv__right-block-text">About: <span>Amazon advertising optimization.</span></p>
                        <ul class="cv__right-block-box-list">
                            <li>Responsibilities and Achievements:</li>
                            <li>-Adaptive web design</li>
                            <li>-Receiving and processing data</li>
                            <li>-Routing</li>
                            <li>-Communication with backend-developers</li>
                        </ul>
                    </div>

                    <div class="cv__right-block-box">
                        <p class="cv__right-block-box-name">Sales experience from 2010 to 2018</p>
                    </div>
                </div>

                <div class="cv__right-block">
                    <h3 class="cv__right-block-title">Education</h3>
                    <div class="cv__right-block-box">
                        <p class="cv__right-block-box-name">GoIT UP Scale Academy</p>
                        <p class="cv__right-block-text">Front-End Developer</p>
                        <ul class="cv__right-block-box-list">
                            <li>-Passed a three-month Bootcamp with full time immersion in the code</li>
                            <li>-Was a Team Lead on "Arrow" and "Go to Goal" projects</li>
                            <li>-High academic performance</li>
                        </ul>
                    </div>
                    <div class="cv__right-block-box">
                        <p class="cv__right-block-box-name">Poltava institute of economics and law</p>
                        <p class="cv__right-block-text">Specialist, Finance</p>
                    </div>
                </div>

                <div class="cv__right-block">
                    <h3 class="cv__right-block-title">Hobbies</h3>
                    <p class="cv__right-block-text"><span>Meditanion, books, cycling, snowboarding</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {gsap} from 'gsap';
// import { CSSPlugin } from 'gsap/CSSPlugin';
// gsap.registerPlugin(CSSPlugin);

export default {
    name: "CV",
    data() {
        return {
            cx: window.innerWidth / 2,
            cy: window.innerHeight / 2,
            mouseX: null,
            mouseY: null,
            posX: null,
            posY: null,
            clientX: null,
            clientY: null,
            dx: null,
            dy: null,
            tiltx: null,
            tilty: null,
            request: null,
            radius: null,
            degree: null,
        }
    },
    methods: {
        handleMouseMove(e) {
            this.clientX = e.pageX;
            this.clientY = e.pageY;
            // console.log(this.clientX)
            // console.log(this.$refs.cv)

            this.request = requestAnimationFrame(this.updateMe)
        },
        updateMe() {
            this.dx = this.clientX - this.cx
            this.dy = this.clientY - this.cy
            this.tiltx = this.dy / this.cy
            this.tilty = this.dx / this.cx
            this.radius = Math.sqrt(Math.pow(this.tiltx, 2) + Math.pow(this.tilty, 2))
            this.degree = this.radius * 12
            gsap.to(this.$refs.cv,{transform: `rotate3d( ${this.tiltx}, ${this.tilty}, 0, ${this.degree}deg )`})
            // console.log("x", this.tiltx)
            // console.log("Y", this.tilty)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.cv-page {
    padding: 100px 0;
    width: 100%;
    height: 100vh;
    overflow: auto;
}

.cv {
    //position: relative;
    display: flex;
    width: 100%;
    height: max-content;
    box-shadow: 0px -4px 10px 2px rgba(34, 60, 80, 0.2);
    border-radius: 2px;
    background: #fff;
    font-family: $logo-family;
    font-family: $primary-family;
    font-family: $text-family;
    font-family: "Ubuntu", sans-serif;

    //&::before,
    //&::after {
    //    content: '';
    //    position: absolute;
    //    bottom: 10px;
    //    z-index: -1;
    //    width: 40%;
    //    height: 10px;
    //    box-shadow: 0 5px 14px rgba(0, 0, 0, .7);
    //    transition: all .3s ease-in-out;
    //}
    //
    //&::before {
    //    left: 15px;
    //    transform: skew(-5deg) rotate(-1deg);
    //}
    //
    //&::after {
    //    right: 15px;
    //    transform: skew(5deg) rotate(1deg);
    //}
    //
    //&:hover::before {
    //    left: 5px;
    //    box-shadow: 0 2px 14px rgba(0, 0, 0, .4);
    //}
    //
    //&:hover::after {
    //    right: 5px;
    //    box-shadow: 0 2px 14px rgba(0, 0, 0, .4);
    //}

    &__left {
        width: 40%;
        margin: 30px 0;
        padding: 10px 15px;
        background-image: linear-gradient(rgba(9, 6, 6, 0.9), rgba(44, 34, 43, 0.6)), url("~@/assets/images/cv/cv-bg.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        color: #fff;

        &-block {
            margin-top: 25px;

            &:first-child {
                margin-top: 0;
            }

            &-img {
                width: 360px;
                height: 360px;
                margin: 0 auto;
                border-radius: 50%;
                border: 5px solid #fff;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            &-name {
                margin-top: 10px;
                font-size: 70px;
                font-weight: bolder;
                text-align: center;
                text-transform: uppercase;
            }

            &-prof {
                margin-top: 10px;
                font-size: 40px;
                text-align: center;
            }

            &-title {
                font-size: 40px;
                font-weight: bolder;
                text-transform: uppercase;
            }

            &-text {
                display: flex;
                flex-direction: column;
                margin-top: 10px;
                font-size: 24px;
                line-height: 1.4;

                a {
                    color: #fff;
                    font-style: italic;
                }
            }
        }
    }

    &__right {
        width: 60%;
        margin: 30px 0;
        padding: 0 40px;
        color: #000;
        position: relative;

        &-block {
            margin-top: 25px;

            &:first-child {
                margin-top: 0;
            }

            &-title {
                font-size: 40px;
                font-weight: bolder;
                text-transform: uppercase;
            }

            &-box {
                margin-top: 15px;

                &-name {
                    display: flex;
                    flex-direction: column;
                    margin-top: 10px;
                    font-size: 24px;
                    line-height: 1.5;
                    font-weight: bolder;

                    &:first-child {
                        margin-top: 0;
                    }

                    a {
                        color: #000;
                        font-weight: normal;
                        font-style: italic;
                    }
                }

                &-list {
                    display: flex;
                    flex-wrap: wrap;

                    .cv__right-block-box-list-link {
                        width: 100%;

                        a {
                            font-size: 24px;
                            color: #000;
                            font-style: italic;
                            line-height: 1.4;
                        }
                    }

                    li {
                        width: 100%;
                        font-size: 24px;
                        line-height: 1.4;
                    }
                }

                &-link {
                    font-size: 24px;
                    color: #000;
                    font-style: italic;
                    line-height: 1.4;
                }
            }

            &-text {
                font-size: 24px;
                line-height: 1.4;
            }
        }
    }
}
</style>