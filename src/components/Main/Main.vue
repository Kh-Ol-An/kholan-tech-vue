<template>
    <div>
        <div class="cv container">
            <div class="cv__left">
                <div class="cv__img">
                    <img src="@/assets/images/cv/ava.jpg" alt="ava">
                </div>
                <h2 class="cv__title-name">Oleg Khristenko</h2>
                <p class="cv__subtitle">Front-End Developer</p>
                <h3 class="cv__title">Summary</h3>
                <p class="cv__text">Results-oriented software developer and research professional. I make it
                    my
                    goal to create software with the user in mind, creating applications with a useable and intuitive
                    user interface experience. I also understand the importance of creating highly readable and easily
                    maintainable source code. I am constantly striving to learn new technologies and look to ways to
                    better myself in this rapidly changing industry.</p>
                <h3 class="cv__title">Tech skills</h3>
                <p class="cv__text">
                    <span>-JavaScript</span>
                    <span>-JQuery</span>
                    <span>-Vue</span>
                    <span>-React</span>
                    <span>-AJAX</span>
                    <span>-Git</span>
                    <span>-WebPack</span>
                    <span>-Gulp</span>
                    <span>-HTML5</span>
                    <span>-CSS3 (Sass, SCSS, Less, Grid, Flexbox)</span>
                    <span>-Adaptive Web Design</span>
                    <span>-Photoshop</span>
                    <span>-English (Pre-Intermediate)</span>
                </p>
                <h3 class="cv__title">Soft skills</h3>
                <p class="cv__text">
                    <span>-Resposible</span>
                    <span>-Scrupulouse</span>
                    <span>-Teamwork</span>
                </p>
                <h3 class="cv__title">Contacts</h3>
                <p class="cv__text">
                    <span>Kyiv, Ukraine</span>
                    <span>Telephone: <a href="tel:+380508899268">+380 50 88 99 268</a></span>
                    <span>Telegram: <a href="tg://resolve?domain=@kholan">@kholan</a></span>
                    <span>Skype: <a href="skype:hristenkoleg?chat">hristenkoleg</a></span>
                    <span>Email: <a href="mailto:olegkhristenko@gmail.com">olegkhristenko@gmail.com</a></span>
                    <span>GitHub: <a href="https://github.com/Kh-Ol-An">github.com/Kh-Ol-An</a></span>
                    <span>LinkedIn: <a href="https://linkedin.com/in/kh-ol-an">linkedin.com/in/kh-ol-an</a></span>
                    <span>Website: <a href="/">kholan.tech</a></span>
                </p>
            </div>

            <div class="cv__right">
                <h3 class="cv__title">Portfolio</h3>
                <p class="cv__name">
                    <span>Smart Group</span>
                    <a href="https://smartgroup.ua">https://smartgroup.ua/</a>
                </p>
                <p class="cv__name">
                    <span>WO</span>
                    <a href="https://wo.ua">https://wo.ua/</a>
                </p>
                <p class="cv__name">
                    <span>Cecotec</span>
                    <a href="https://cecotec.tech">https://cecotec.tech/</a>
                </p>
                <p class="cv__name">
                    <span>Deerma</span>
                    <a href="https://deerma.ua">https://deerma.ua/</a>
                </p>
                <p class="cv__name">
                    <span>Profit Whales</span>
                    <a href="https://profitwhales.com">https://profitwhales.com/</a>
                </p>
                <p class="cv__name">
                    <span>Personal site</span>
                    <a href="http://kholan.tech">http://kholan.tech/</a>
                </p>

                <h3 class="cv__title">Experience</h3>
                <h4 class="cv__name">Smart Group</h4>
                <div class="cv__links">
                    <a href="https://smartgroup.ua">https://smartgroup.ua/</a>
                    <a href="https://yunmai.ua">https://yunmai.ua/</a>
                    <a href="https://wo.ua">https://wo.ua/</a>
                    <a href="https://deebot.ua">https://deebot.ua/</a>
                    <a href="https://cecotec.ua">https://cecotec.tech/</a>
                    <a href="https://ecovacsrobots.ru">https://ecovacsrobots.ru/</a>
                    <a href="https://deerma.ua">https://deerma.ua/</a>
                </div>
                <p class="cv__text">Technology:
                    <span>Vue, JQuery, fetch, Adaptive Web Design.</span>
                </p>
                <p class="cv__text">About:
                    <span>Smart Group is an ecosystem of services between producer and consumer.</span>
                </p>
                <p class="cv__text">Responsibilities and Achievements:
                    <span>-Adaptive web design</span>
                    <span>-Receiving and processing data</span>
                    <span>-Routing</span>
                    <span>-Communication with backend-developers and designer</span>
                </p>

                <h4 class="cv__name">Profit Whales</h4>
                <a class="cv__link" href="https://profitwhales.com">https://profitwhales.com/</a>
                <p class="cv__text">Technology: <span>React.js, Redux, Axios, Adaptive Web Design.</span></p>
                <p class="cv__text">About: <span>Amazon advertising optimization.</span></p>
                <p class="cv__text">Responsibilities and Achievements:
                    <span>-Adaptive web design</span>
                    <span>-Receiving and processing data</span>
                    <span>-Routing</span>
                    <span>-Communication with backend-developers</span>
                </p>
                <p class="cv__name">Sales experience from 2010 to 2018</p>

                <h3 class="cv__title">Education</h3>
                <p class="cv__name">GoIT UP Scale Academy</p>
                <p class="cv__name">Front-End Developer</p>
                <p class="cv__text">
                    <span>-Passed a three-month Bootcamp with full time immersion in the code</span>
                    <span>-Was a Team Lead on "Arrow" and "Go to Goal" projects</span>
                    <span>-High academic performance</span>
                </p>
                <p class="cv__name">Poltava institute of economics and law</p>
                <p class="cv__name">Specialist, Finance</p>

                <h3 class="cv__title">Hobbies</h3>
                <p class="cv__text"><span>Meditanion, books, cycling, snowboarding</span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Main"
}
</script>

<style lang="scss" scoped>
.cv {
    position: relative;
    display: flex;
    width: 100%;
    height: max-content;
    margin: 100px auto;
    border-radius: 2px;
    background: #fff;
    box-shadow: 0px -4px 10px 2px rgba(34, 60, 80, 0.2);

    &::before,
    &::after {
        content: '';
        position: absolute;
        bottom: 10px;
        width: 40%;
        height: 10px;
        box-shadow: 0 5px 14px rgba(0,0,0,.7);
        z-index: -1;
        transition: all .3s ease-in-out;
    }

    &::before {
        left: 15px;
        transform: skew(-5deg) rotate(-1deg);
    }

    &::after {
        right: 15px;
        transform: skew(5deg) rotate(1deg);
    }

    &:hover::before {
        left: 5px;
        box-shadow: 0 2px 14px rgba(0,0,0,.4);
    }

    &:hover::after {
        right: 5px;
        box-shadow: 0 2px 14px rgba(0,0,0,.4);
    }

    &__left {
        width: 40%;
        margin: 30px 0;
        padding: 10px 15px;
        background-image: linear-gradient(rgba(9, 6, 6, 0.9), rgba(44, 34, 43, 0.6)), url("~@/assets/images/cv/cv-bg.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        color: #fff;
    }

    &__right {
        width: 60%;
        margin: 30px 0;
        padding: 0 40px;
        color: #000;
        position: relative;
        
        //&::before {
        //    content: '';
        //    position: absolute;
        //    top: 0;
        //    right: 0;
        //    width: 200px;
        //    height: 50px;
        //    background-image: url("~@/assets/images/cv/old.png");
        //}

        .cv__title:first-child {
            margin-top: 0;
        }
    }

    &__img {
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

    &__title-name {
        margin-top: 10px;
        font-size: 70px;
        font-weight: bolder;
        text-align: center;
        text-transform: uppercase;
    }

    &__subtitle {
        margin-top: 10px;
        font-size: 40px;
        text-align: center;
        font-style: italic;
    }

    &__title {
        margin-top: 25px;
        font-size: 40px;
        font-weight: bolder;
        text-transform: uppercase;
    }

    &__text {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        font-size: 24px;
        line-height: 1.4;

        span {
        }

        a {
            color: #fff;
            font-style: italic;
        }
    }
}
</style>