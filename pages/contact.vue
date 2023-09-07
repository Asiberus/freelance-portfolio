<template>
    <div class="wrapper">
        <div class="form">
            <img src="/img/home.svg" alt="home" class="form__img hide-desktop" />
            <h2 class="background-primary">Demandez un devis!</h2>
            <p>
                Si vous avez un projet de site vitrine, un e-shop, un site de gestion de société ou
                tout autre projet, vous pouvez me contacter soit grâce au formulaire soit à l'aide
                de mes coordonnées ci <span class="hide-mobile">contre</span
                ><span class="hide-desktop">dessous</span>. <br />
            </p>
            <p class="hide-mobile">N’hésitez pas à :</p>
            <ul class="hide-mobile">
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

            <ContactForm class="mt-1"></ContactForm>
        </div>
        <div class="contact">
            <img src="/img/home.svg" alt="home" class="contact__img hide-mobile" />
            <h2 class="background-primary">Contact</h2>
            <div class="contact__item">
                <nuxt-icon name="email2" class="contact__item__icon" filled></nuxt-icon>
                <span>:</span>
                <NuxtLink to="mailto:contact@raphaelbeekmann.com" class="text-primary hover-effect">
                    contact@raphaelbeekmann.com
                </NuxtLink>
            </div>
            <div class="contact__item">
                <nuxt-icon name="phone" class="contact__item__icon" filled></nuxt-icon>
                <span>:</span>
                <NuxtLink to="tel:+33 6 25 65 22 72" class="text-primary hover-effect"
                    >+33 6 25 65 22 72</NuxtLink
                >
            </div>

            <h2 class="background-primary mt-2">Mes réseaux</h2>
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
                    to="https://www.codeur.com/-raphaelbeekmann"
                    target="_blank"
                    class="social-networks__link">
                    <img
                        src="/icon/codeur.svg"
                        alt="codeur-logo"
                        class="social-networks__link__logo" />
                    <span class="social-networks__link__caption">Codeur</span>
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
    padding: 1rem 1rem 2rem;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    & > * {
        flex: 1 1 0;
    }

    h2 {
        font-size: 1.5rem;
        line-height: 2rem;
        margin-bottom: 0.5rem;
    }

    .form {
        &__img {
            display: block;
            width: clamp(13rem, 50%, 18rem);
            margin: 0 auto 1.5rem;
        }

        p {
            margin-bottom: 0;
        }
    }

    .contact {
        &__img {
            width: clamp(13rem, 20vw, 21rem);
            display: block;
            margin: auto auto 1rem;
        }

        &__item {
            width: fit-content;
            display: flex;
            column-gap: 0.5rem;
            margin-bottom: 0.5rem;
            padding-left: 0.5rem;
            font-size: 0.9rem;

            &__icon {
                font-size: 1.25rem;
            }
        }

        .social-networks {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            padding-left: 0.5rem;
            margin-bottom: 2rem;

            &__link {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.25rem;

                &:hover {
                    img {
                        filter: grayscale(0);
                    }

                    span {
                        color: #000;
                    }
                }

                img {
                    max-width: 50px;
                    filter: grayscale(25%);
                    transition: all 0.2s ease;
                }

                span {
                    color: #777;
                    font-size: 0.75rem;
                    line-height: 1.25rem;
                    transition: all 0.2s ease;
                }
            }
        }
    }
}

@media (min-width: 768px) {
    .wrapper {
        flex-direction: row;
        column-gap: 2rem;
        padding: 3rem;

        h2 {
            font-size: 2.5rem;
            line-height: 2.5rem;
            margin-bottom: 1rem;
        }

        .form {
            ul {
                padding-left: 1rem;
                margin: 0 0 1rem;

                li {
                    line-height: 2rem;
                }
            }
        }

        .contact {
            &__item {
                margin-bottom: 0.5rem;
                padding-left: 1rem;
                font-size: 1rem;

                &__icon {
                    font-size: 1.5rem;
                }
            }

            .social-networks {
                padding-left: 1rem;
                gap: 2rem;

                img {
                    max-width: 75px;
                }

                span {
                    font-size: 0.9rem;
                }

                &__link {
                }
            }
        }
    }
}

@media (min-width: 1200px) {
    .wrapper {
        padding: 5rem 10rem;
        column-gap: 5rem;
    }
}
</style>
