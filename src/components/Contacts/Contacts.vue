<template>
    <div class="main">
        <a class="phone" :title="titlePhone" href="tel:+380508899268">
            <img src="@/assets/images/icons/phone.png" alt="phone-icon" width="50"/>
            {{ titlePhone }}
        </a>

        <a class="telegram" title="Telegram" href="tg://resolve?domain=@kholan">
            <img src="@/assets/images/icons/telegram.png" alt="telegram-icons" width="50"/>
            Telegram
        </a>

        <a v-if="isMobile" class="viber" title="Viber" href="viber://add?number=+380508899268">
            <img src="@/assets/images/icons/viber.png" alt="viber-icons" width="50"/>
            Viber
        </a>

        <a v-else class="viber" title="Viber" href="viber://chat?number=+380508899268">
            <img src="@/assets/images/icons/viber.png" alt="viber-icons" width="50"/>
            Viber
        </a>

        <a class="whatsapp" title="WhatsApp" href="whatsapp://send?phone=+380508899268">
            <img src="@/assets/images/icons/whatsapp.png" alt="whatsapp-icons" width="50"/>
            WhatsApp
        </a>

        <a class="skype" title="Skype" href="skype:hristenkoleg?chat">
            <img src="@/assets/images/icons/skype.png" alt="skype-icons" width="50"/>
            Skype
        </a>

        <a class="mail" title="Mail" href="mailto:olegkhristenko@gmail.com">
            <img src="@/assets/images/icons/mail.png" alt="mail-icons" width="50"/>
            E-mail
        </a>

        <a class="github" title="GitHub" href="https://github.com/Kh-Ol-An/visit-card" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/images/icons/github.png" alt="github-icons" width="50"/>
            GitHub
        </a>

        <a class="linkedin" title="Linkedin" href="https://linkedin.com/in/kh-ol-an/" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/images/icons/linkedin.png" alt="linkedin-icons" width="50"/>
            Linkedin
        </a>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "Contacts",
    computed: {
        ...mapGetters(["getContentLang"]),
        titlePhone() {
            console.log("object >>", this.contentLang)
            return this.getContentLang.lang === "en" ? "Phone" : "Телефон"
        },
        isMobile() {
            return /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent,);
        }
    },
}
</script>

<style scoped lang="scss">
.main {
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url('~@/assets/images/bg/contacts-bg-img.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.main img {
    margin-right: 1em;
}

.phone,
.telegram,
.viber,
.whatsapp,
.skype,
.mail,
.github,
.linkedin {
    font-size: 1.6rem; /* 16px */
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: primary-family;
}

.phone {
    top: 20%;
    left: 10%;
    color: #fff;
}

.telegram {
    top: 30%;
    left: 10%;
    color: #28a4d8;
}

.viber {
    top: 40%;
    left: 10%;
    color: #9069ae;
}

.whatsapp {
    top: 50%;
    left: 10%;
    color: #118e08;
}

.skype {
    top: 20%;
    left: 80%;
    color: #23a9eb;
}

.mail {
    top: 30%;
    left: 80%;
    color: #d54440;
}

.github {
    top: 40%;
    left: 80%;
    color: #fff;
}

.linkedin {
    top: 50%;
    left: 80%;
    color: #005884;
}

@media (max-width: 767px) {
    .main {
        background-image: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.7)
        ),
        url('../../assets/images/bg/contacts-bg-img.jpg');
    }

    .skype {
        left: 70%;
    }

    .mail {
        left: 70%;
    }

    .github {
        left: 70%;
    }

    .linkedin {
        left: 70%;
    }
}

@media (max-width: 639px) {
    .phone,
    .telegram,
    .viber,
    .whatsapp,
    .skype,
    .mail,
    .github,
    .linkedin {
        left: 40%;
    }

    .phone {
        top: 10%;
    }

    .telegram {
        top: 20%;
    }

    .viber {
        top: 30%;
    }

    .whatsapp {
        top: 40%;
    }

    .skype {
        top: 50%;
    }

    .mail {
        top: 60%;
    }

    .github {
        top: 70%;
    }

    .linkedin {
        top: 80%;
    }
}

@media (max-height: 639px) {
    .telegram,
    .mail {
        top: 40%;
    }

    .viber,
    .github {
        top: 60%;
    }

    .whatsapp,
    .linkedin {
        top: 80%;
    }
}

@media (max-width: 413px) {
    .phone,
    .telegram,
    .viber,
    .whatsapp,
    .skype,
    .mail,
    .github,
    .linkedin {
        left: 35%;
    }
}

@media (max-width: 359px) {
    .phone,
    .telegram,
    .viber,
    .whatsapp,
    .skype,
    .mail,
    .github,
    .linkedin {
        left: 30%;
    }
}
</style>