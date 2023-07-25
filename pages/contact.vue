<template>
    <div class="wrapper">
        <div class="form">
            <h2 class="title">Demandez un devis!</h2>
            <p>
                Si vous avez un projet de site vitrine, un e-shop, un site de gestion de société ou
                tout autre projet, vous pouvez me contacter grace au formulaire ci dessous ou bien
                avec mes coordonnées ci contre. <br />
                N’hésitez pas à :
            </p>
            <p></p>
            <ul>
                <li>Détailler le plus possible votre projet</li>
                <li>
                    Inclure les
                    <NuxtLink to="/prestations" class="text-primary hover-effect">
                        prestations
                    </NuxtLink>
                    souhaitées si vous les connaissez (par leur référence)
                </li>
                <li>Indiquer un numéro de téléphone pour que je puisse vous recontacter</li>
            </ul>

            <ContactForm></ContactForm>
        </div>
        <div class="contact">
            <img src="/img/home.svg" alt="home" class="contact__img" />

            <h2 class="title">Contact</h2>
            <p>
                <nuxt-icon name="email2" class="contact__icon" filled></nuxt-icon>
                <span>:</span>
                contact@raphaelbeekmann.com
            </p>
            <p>
                <nuxt-icon name="phone" class="contact__icon" filled></nuxt-icon>
                <span>:</span>
                +33 6 25 65 22 72
            </p>

            <h2 class="title mt-1">Mes réseaux</h2>
            <div class="social-networks">
                <NuxtLink
                    to="https://www.linkedin.com/in/raphael-beekmann-9379b9134/"
                    target="_blank"
                    class="social-networks__link">
                    <img
                        src="/icon/linkedin.svg"
                        alt="linkedin-logo"
                        class="social-networks__link__logo" />
                    <span class="social-networks__link__caption">LinkedIn</span>
                </NuxtLink>

                <NuxtLink
                    to="https://www.malt.fr/profile/raphaelbeekmann1"
                    target="_blank"
                    class="social-networks__link">
                    <img src="/icon/malt.svg" alt="malt-logo" class="social-networks__link__logo" />
                    <span class="social-networks__link__caption">Malt</span>
                </NuxtLink>

                <NuxtLink
                    to="https://www.instagram.com/raphael.beekmann/"
                    target="_blank"
                    class="social-networks__link">
                    <img
                        src="/icon/instagram.svg"
                        alt="instagram-logo"
                        class="social-networks__link__logo" />
                    <span class="social-networks__link__caption">Instagram</span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import ContactForm from '~/components/ContactForm.vue'

export default defineComponent({
    components: { ContactForm },
})
</script>

<style scoped lang="scss">
.wrapper {
    margin: 3rem 5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5rem;

    h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    .form {
        p {
            margin-bottom: 0;
        }

        ul {
            margin: 0 0 1rem;
        }
    }

    .contact {
        display: flex;
        flex-direction: column;

        &__img {
            align-self: center;
            max-width: 40%;
            margin-bottom: 1rem;
        }

        .title {
            margin-bottom: 2rem;
        }

        & > p {
            display: flex;
            column-gap: 0.5rem;
            margin-bottom: 1rem;
            padding-left: 1rem;
        }

        &__icon {
            font-size: 1.75rem;
        }

        .social-networks {
            display: flex;
            gap: 2rem;
            padding-left: 1rem;

            &__link {
                display: flex;
                flex-direction: column;
                align-items: center;

                &:hover {
                    img {
                        filter: grayscale(0);
                    }

                    span {
                        color: #000;
                    }
                }

                img {
                    max-width: 75px;
                    filter: grayscale(25%);
                    transition: all 0.2s ease;
                }

                span {
                    color: #777;
                    font-size: 0.9rem;
                    line-height: 1.25rem;
                    transition: all 0.2s ease;
                }
            }
        }
    }
}
</style>
