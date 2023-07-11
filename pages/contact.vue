<template>
    <div class="wrapper">
        <div class="form">
            <h2 class="title">Demandez un devis!</h2>
            <p>
                Si vous avez un projet de site vitrine, un e-shop, un site de gestion de société ou
                tout autre projet vous pouvez me contacter grace au formulaire ci dessous ou bien
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
                    souhaitées si vous les savez (par leur référence)
                </li>
                <li>Indiquer votre numéro de téléphone pour que je puisse vous recontacter</li>
            </ul>
            <form>
                <CustomInput v-model="form.name" label="Nom Prénom (ou société)"></CustomInput>
                <CustomInput v-model="form.email" label="Adresse e-mail"></CustomInput>
                <CustomTextArea v-model="form.message" label="Message"></CustomTextArea>
                <button type="button" class="btn mt-1">
                    Envoyer
                    <nuxt-icon name="email-send" filled></nuxt-icon>
                </button>
            </form>
        </div>
        <div class="contact">
            <h2 class="title">Contact</h2>
            <p>
                <nuxt-icon name="email2" class="contact__icon" filled></nuxt-icon>
                <span>:</span>
                contact@raphaelbeekmann.com
            </p>
            <p class="mb-2">
                <nuxt-icon name="phone" class="contact__icon" filled></nuxt-icon>
                <span>:</span>
                +33 6 25 65 22 72
            </p>

            <hr />

            <h2 class="title mt-2">Mes réseaux</h2>
            <div class="social-networks">
                <NuxtLink
                    to="https://www.linkedin.com/in/raphael-beekmann-9379b9134/"
                    target="_blank">
                    <img
                        src="/icon/linkedin.svg"
                        alt="linkedin-logo"
                        class="social-networks__logo" />
                </NuxtLink>
                <NuxtLink to="https://www.instagram.com/raphael.beekmann/" target="_blank">
                    <img
                        src="/icon/instagram.svg"
                        alt="instagram-logo"
                        class="social-networks__logo" />
                </NuxtLink>
            </div>

            <hr />
        </div>
    </div>
</template>

<script setup>
const form = ref({
    name: '',
    email: '',
    message: '',
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

        form {
            display: flex;
            flex-direction: column;
            row-gap: 0.75rem;
        }

        .nuxt-icon {
            font-size: 1.25rem;
        }
    }

    .contact {
        .title {
            margin-bottom: 2rem;
        }

        p {
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

            &__logo {
                max-width: 75px;
                filter: grayscale(50%);
                transition: all 0.2s ease;

                &:hover {
                    filter: grayscale(0);
                }
            }
        }
    }
}
</style>
