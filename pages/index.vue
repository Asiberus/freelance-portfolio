<template>
    <div class="jumbotron">
        <div class="jumbotron__text">
            <h2>Design & Construction de site web</h2>
            <p>Création de site web performant, impactant et moderne.</p>
            <!--            <p>Je suis à votre service pour créér un site web performat, impactant et moderne</p>-->
            <tile-link to="/contact">
                Demander un devis <nuxt-icon name="right-arrow"></nuxt-icon>
            </tile-link>
            <!--            <p>-->
            <!--                De la conception à l’ouverture du site web, je suis là pour vous accompagner dans la-->
            <!--                réalisation de votre projet, que ce soit pour vous positionner en ligne, vendre vos-->
            <!--                produits ou améliorer la gestion interne de votre société.-->
            <!--            </p>-->
            <!--            <p>-->
            <!--                Si vous n’avez qu’une simple idée ou bien une vision claire en tête, je saurai vous-->
            <!--                guider tout au long du processus pour créer un site web moderne et impactant.-->
            <!--            </p>-->
            <!--            <p>Creation de site web</p>-->
            <!--            <p>Accompagnement digital</p>-->
            <!--            <p>Aide au référencement</p>-->
            <!--            <p>Refonte graphique</p>-->
        </div>
        <img src="/img/build.jpg" alt="build" />
    </div>
    <div class="section">
        <div class="section__content">
            <p>
                De la conception à l’ouverture du site web, je vous accompagne dans la réalisation
                de votre projet, que ce soit pour vous positionner en ligne, vendre vos produits ou
                améliorer la gestion interne de votre société.
            </p>
            <p>
                Si vous n’avez qu’une simple idée ou bien une vision claire en tête, je saurai vous
                guider tout au long du processus pour créer un site web moderne et impactant.
            </p>
            <!--            <p>Voici les prestations généralement choisies par mes clients :</p>-->
        </div>
    </div>

    <div class="carousel">
        <NuxtLink to="/prestations" class="carousel__item">
            <img src="/icon/web-development.png" alt="web" width="75" class="carousel__item_icon" />
            <h3 class="carousel__item__title">Site Vitrine</h3>
            <ul>
                <li>Mettre en avant votre travail et vos services</li>
                <li>Convaincre vos prospects de travailler avec vous</li>
                <li>Décrire vos valeurs et votre identité visuelle</li>
            </ul>
        </NuxtLink>

        <NuxtLink to="/prestations" class="carousel__item">
            <img src="/icon/web-development.png" alt="web" width="75" class="carousel__item_icon" />
            <h3 class="carousel__item__title">E-Shop</h3>
            <ul>
                <li>Mise en place de la vente vos produits</li>
                <li>Suivi et fidélisation de votre clientèle</li>
                <li>Système intégré de paiement</li>
            </ul>
        </NuxtLink>

        <NuxtLink to="/prestations" class="carousel__item">
            <img src="/icon/web-development.png" alt="web" width="75" class="carousel__item_icon" />
            <h3 class="carousel__item__title">Gestion de société</h3>
            <ul>
                <li>Optimisation des process de votre entreprise</li>
                <li>Tableau de bord pour mesurer l’évolution de votre performance</li>
                <li>Archivage et sauvegarde de vos données</li>
            </ul>
        </NuxtLink>

        <NuxtLink to="/prestations/content" class="carousel__item">
            <img src="/icon/web-development.png" alt="web" width="75" class="carousel__item_icon" />
            <h3 class="carousel__item__title">Optimisation SEO</h3>
            <ul>
                <li>Mise en avant lors de recherche</li>
                <li>Positionnement sur des mots clés</li>
                <li>Boost des visites de votre site</li>
            </ul>
        </NuxtLink>
    </div>

    <div class="prestation-link">
        <NuxtLink to="/prestations">
            Plus d'informations sur l'ensemble de mes prestations
            <nuxt-icon name="right-arrow"></nuxt-icon>
        </NuxtLink>
    </div>

    <div class="objectif">
        <h3 class="objectif__content">
            Mon objectif en tant que concepteur de site web est de proposer une expérience
            utilisateur fluide et agréable, intuitive dès le premier coup d’oeil.
        </h3>
    </div>

    <div class="whoami">
        <img src="/img/dev.jpg" alt="dev" width="550" class="img" />
        <div class="description">
            <h3>A propos de moi</h3>
            <p>
                Je suis un développeur de sites web passionné et investit dans la création de sites
                fonctionnels, esthétiques et performants pour mes clients. Mon expérience et ma
                compréhension de vos besoins me permettront de concevoir un site web sur mesure qui
                reflète votre identité. Je suis constamment à jour avec les dernières tendances et
                meilleures pratiques du développement web afin de fournir des sites modernes et
                innovants. Je m'engage à offrir un service personnalisé, une communication
                transparente et un soutien continu pour garantir la satisfaction de mes clients.
                Travailler avec moi, c'est collaborer avec un partenaire fiable et dévoué, prêt à
                donner vie à votre vision en ligne.
            </p>
            <NuxtLink to="/a-propos" class="description__link">
                En savoir plus <nuxt-icon name="right-arrow"></nuxt-icon>
            </NuxtLink>
        </div>
    </div>

    <div class="trust-me">
        <h3>Ils me font confiance</h3>
        <div class="logo-list">
            <div title="Tout Doux" class="logo-list__item">Tout Doux</div>
            <NuxtLink
                to="https://cardiologs.com/"
                target="_blank"
                title="Cardiologs"
                class="logo-list__item">
                <img src="/img/logo/cardiologs.png" alt="cardiologs" width="100" />
            </NuxtLink>
            <NuxtLink
                to="https://www.masasim.com/"
                target="_blank"
                title="Masa"
                class="logo-list__item">
                <img src="/img/logo/masa.webp" alt="masa" width="100" />
            </NuxtLink>
            <NuxtLink
                to="https://messe-basse-production.com/"
                target="_blank"
                title="Messe Basse Production"
                class="logo-list__item">
                <img src="/img/logo/mbp.png" alt="mbp" width="100" />
            </NuxtLink>
            <NuxtLink
                to="https://beercrackerz.org/"
                target="_blank"
                title="Beer Crackerz"
                class="logo-list__item">
                <img src="/img/logo/beercrackerz.svg" alt="beercrackerz" width="100" />
            </NuxtLink>
        </div>
    </div>

    <div class="contact">
        <div class="contact__content">
            <h3>Demandez un devis!</h3>

            <CustomInput v-model="form.name" label="Nom Prénom (ou société)"></CustomInput>

            <CustomInput v-model="form.email" label="Adresse e-mail"></CustomInput>

            <CustomTextArea v-model="form.message" label="Message"></CustomTextArea>

            <button>Envoyer</button>
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
.jumbotron {
    height: 40rem;
    padding: 3rem 3rem;
    display: flex;
    justify-content: space-evenly;

    &__text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 40%;

        h2 {
            font-size: 2rem;
            text-align: center;
        }

        p {
            text-align: center;
            margin-bottom: 1.5rem;
            margin-top: 0;
            font-size: 1.3rem;
        }
    }
}

.section {
    color: #264653;
    padding: 5rem 10rem;

    &__content {
        background-color: #eee;
        padding: 5rem;
        border-radius: 3rem;

        p {
            width: 75%;
            margin: 0 auto 1rem;
            font-size: 1.3rem;
            letter-spacing: 1px;
            line-height: 2rem;
        }
    }
}

.carousel {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    padding: 0 5rem;
    margin-bottom: 2rem;

    &__item {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        border: 2px solid black;
        border-radius: 1.5rem;
        transition: all 0.2s ease;

        &:hover {
            background-color: #eee;
        }

        &__title {
            margin: 0;
        }

        ul {
            margin: 0;
            align-self: flex-start;

            li {
                margin-bottom: 0.5rem;
            }
        }
    }
}

.prestation-link {
    padding-right: 3rem;
    margin-bottom: 5rem;
    display: flex;
    justify-content: flex-end;
}

.objectif {
    padding: 5rem;
    background-color: #555;
    color: white;

    &__content {
        font-style: italic;
        font-weight: normal;
        text-align: center;
        margin: 0;
    }
}

.whoami {
    display: flex;
    padding: 5rem 5rem 5rem 10rem;
    column-gap: 3rem;

    .img {
        border: 3px solid black;
        border-radius: 1.5rem;
    }

    .description {
        padding: 1rem;
        max-width: 40%;
        display: flex;
        flex-direction: column;

        h3 {
            font-size: 2rem;
        }

        p {
            text-align: justify;
            letter-spacing: 1px;
            line-height: 2rem;
        }

        &__link {
            align-self: flex-end;
        }
    }
}

.trust-me {
    padding: 1rem;
    margin-bottom: 5rem;

    h3 {
        font-size: 2rem;
        text-align: center;
    }

    .logo-list {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;
        padding: 1rem;

        &__item {
            font-size: 1.5rem;
            height: 150px;
            width: 150px;
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover img {
                filter: grayscale(0);
            }

            img {
                filter: grayscale(80%);
                transition: all 0.2s ease;
            }
        }
    }
}

.contact {
    margin-bottom: 5rem;

    &__content {
        width: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 0.5rem;

        h3 {
            font-size: 2rem;
        }
    }
}
</style>
