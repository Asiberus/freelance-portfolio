<template>
    <div class="jumbotron">
        <img src="/img/build.svg" alt="build" />
        <div class="jumbotron__text">
            <h2>Design & Construction de site web</h2>
            <p>Création de site web performant, impactant et moderne.</p>
            <tile-link to="/contact" include-arrow>Demander un devis</tile-link>
        </div>
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
        </div>
    </div>

    <h3 class="carrousel-title background-primary">Mes prestations</h3>
    <div class="carousel">
        <div to="/prestations" class="carousel__item">
            <img src="/icon/feuille.png" alt="web" width="75" class="carousel__item_icon" />
            <h3 class="carousel__item__title background-primary background-sm">Site Vitrine</h3>
            <ul>
                <li>Mettre en avant votre travail et vos services</li>
                <li>Convaincre vos prospects de travailler avec vous</li>
                <li>Décrire vos valeurs et votre identité visuelle</li>
            </ul>
            <NuxtLink to="/prestations" class="carousel__item__link hover-effect text-primary"
                >En savoir plus
            </NuxtLink>
        </div>

        <div to="/prestations" class="carousel__item">
            <img src="/icon/plante.png" alt="web" width="75" class="carousel__item_icon" />
            <h3 class="carousel__item__title background-primary background-sm">E-Shop</h3>
            <ul>
                <li>Permet l'exposition et la vente de vos produits</li>
                <li>Suivi et fidélisation de votre clientèle</li>
                <li>Système intégré de paiement</li>
            </ul>
            <NuxtLink to="/prestations" class="carousel__item__link hover-effect text-primary"
                >En savoir plus
            </NuxtLink>
        </div>

        <div to="/prestations" class="carousel__item">
            <img src="/icon/plante(1).png" alt="web" width="75" class="carousel__item_icon" />
            <h3 class="carousel__item__title background-primary background-sm">
                Gestion de société
            </h3>
            <ul>
                <li>Optimisation des process de votre entreprise</li>
                <li>Tableau de bord pour mesurer l’évolution de votre performance</li>
                <li>Archivage et sauvegarde de vos données</li>
            </ul>
            <NuxtLink to="/prestations" class="carousel__item__link hover-effect text-primary"
                >En savoir plus
            </NuxtLink>
        </div>

        <div to="/prestations/content" class="carousel__item">
            <img src="/icon/plante-araignee.png" alt="web" width="75" class="carousel__item_icon" />
            <h3 class="carousel__item__title background-primary background-sm">Optimisation SEO</h3>
            <ul>
                <li>Optimisation pour les moteurs de recherche (SEO)</li>
                <li>Boost des visites de votre site</li>
                <li>Référencement sur vos mots clés</li>
            </ul>
            <NuxtLink
                to="/prestations/content"
                class="carousel__item__link hover-effect text-primary"
                >En savoir plus
            </NuxtLink>
        </div>
    </div>

    <div class="prestation-link">
        <NuxtLink to="/prestations" class="prestation-link__link hover-effect text-primary">
            Plus d'informations sur l'ensemble de mes prestations
            <nuxt-icon name="right-arrow"></nuxt-icon>
        </NuxtLink>
    </div>

    <div class="objectif">
        <h3 class="objectif__content">
            Mon objectif en tant que concepteur de site web est de proposer une expérience
            utilisateur fluide et agréable, intuitive dès le premier coup d’œil.
        </h3>
    </div>

    <div class="whoami">
        <img src="/img/whoami.svg" alt="dev" />
        <div class="description">
            <h3 class="background-primary">A propos de moi</h3>
            <p>
                Je suis un développeur de sites web passionné et investi dans la création de sites
                fonctionnels, esthétiques et performants pour mes clients. Mon expérience et ma
                compréhension de vos besoins me permettront de concevoir un site web sur mesure qui
                reflète votre identité. Je suis constamment à jour sur les dernières tendances et
                les meilleures pratiques du développement web afin de fournir des sites modernes et
                innovants. Je m'engage à offrir un service personnalisé et une communication
                transparente pour garantir la satisfaction de mes clients. Travailler avec moi,
                c'est collaborer avec un partenaire fiable et dévoué, prêt à donner vie à votre
                vision en ligne.
            </p>
            <NuxtLink to="/a-propos" class="description__link hover-effect text-primary">
                En savoir plus
                <nuxt-icon name="right-arrow"></nuxt-icon>
            </NuxtLink>
        </div>
    </div>

    <div class="trust-me">
        <h3><span class="background-primary">Ils me font confiance</span></h3>
        <div class="logo-list">
            <div title="Tout Doux" class="logo-list__item">
                <img src="/img/logo/tout_doux.png" alt="Tout Doux" />
            </div>
            <div title="Cardiologs" class="logo-list__item">
                <img src="/img/logo/cardiologs.png" alt="cardiologs" />
            </div>
            <div title="Masa" class="logo-list__item">
                <img src="/img/logo/masa.webp" alt="masa" />
            </div>
            <div title="Messe Basse Production" class="logo-list__item">
                <img src="/img/logo/mbp.png" alt="mbp" />
            </div>
            <div title="Beer Crackerz" class="logo-list__item">
                <img src="/img/logo/beercrackerz.png" alt="beercrackerz" />
            </div>
        </div>
    </div>

    <div class="contact">
        <h3 class="background-primary">Demandez un devis!</h3>
        <ContactForm></ContactForm>
    </div>
</template>

<script setup lang="ts">
const title = 'Raphael Beekmann - Développeur web'
const description =
    'Création de site web performant, impactant et moderne. Je vous accompagne dans la réalisation de votre projet,  que vous n’ayez qu’une simple idée ou bien une vision claire en tête'

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: 'https://www.raphael-beekmann.com/',
    twitterTitle: title,
    twitterDescription: description,
})
</script>

<style scoped lang="scss">
.jumbotron {
    padding: 0 1rem 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
        width: clamp(16rem, 50vw, 32.5rem);
    }

    &__text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2 {
            font-size: 2rem;
            text-align: center;
            line-height: 2rem;
        }

        p {
            text-align: center;
            margin-bottom: 1.5rem;
            margin-top: 0;
            font-size: 1.3rem;
            line-height: 2rem;
        }
    }
}

@media (min-width: 768px) {
    .jumbotron {
        justify-content: space-evenly;
        flex-direction: row-reverse;
    }
}

.section {
    margin-bottom: 5rem;
    padding: 0 1rem;

    &__content {
        background-color: var(--primary-300);
        padding: 2.5rem;
        border-radius: 3rem;
        margin: auto;

        p {
            margin: 0 auto 1rem;
            font-size: 1rem;
            letter-spacing: 1px;
            line-height: 2rem;
        }
    }
}

@media (min-width: 768px) {
    .section {
        padding: 0 5rem;

        &__content {
            padding: 5rem;

            p {
                font-size: 1.3rem;
            }
        }
    }
}

@media (min-width: 1200px) {
    .section {
        padding: 0 10rem;
    }
}

.carrousel-title {
    font-size: 1.5rem;
    margin-left: 1rem;
}

.carousel {
    padding: 0 1rem;
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    &__item {
        padding: 2rem 1rem 0.75rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        border: 2px solid black;
        border-radius: 1.5rem;
        transition: all 0.2s ease;

        &__title {
            margin: 0;
        }

        ul {
            margin: 0;
            padding-left: 1rem;
            flex-grow: 1;

            li {
                margin-bottom: 0.75rem;
                line-height: 1.5rem;
            }
        }

        &__link {
            align-self: flex-end;
        }
    }
}

.prestation-link {
    padding-right: 1rem;
    margin-bottom: 5rem;
    display: flex;
    justify-content: flex-end;

    &__link {
        max-width: 90%;
        text-align: right;
    }
}

@media (min-width: 768px) {
    .carrousel-title {
        font-size: 2rem;
        margin-left: 5rem;
    }

    .carousel {
        padding: 0 5rem;
        margin-bottom: 1.5rem;
        grid-template-columns: repeat(2, 1fr);
    }

    .prestation-link {
        padding-right: 5rem;
    }
}

@media (min-width: 1200px) {
    .carousel {
        grid-template-columns: repeat(4, 1fr);
    }
}

.objectif {
    padding: 5rem;
    background-color: var(--primary-800);
    color: var(--primary-25);

    &__content {
        position: relative;
        margin: 0 auto;
        line-height: 1.75rem;
        font-size: 1.4rem;
        font-style: italic;
        font-weight: normal;

        &::before {
            content: '"';
            position: absolute;
            top: -20px;
            left: -30px;
            font-size: 3rem;
        }

        &::after {
            content: '"';
            position: absolute;
            bottom: -20px;
            right: -30px;
            font-size: 3rem;
            transform: rotate(180deg);
        }
    }
}

@media (min-width: 1200px) {
    .objectif {
        padding: 5rem 10rem;
    }
}

.whoami {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    column-gap: 3rem;

    img {
        width: clamp(14.5rem, 50%, 25rem);
    }

    .description {
        padding: 1rem;
        display: flex;
        flex-direction: column;

        h3 {
            font-size: 1.5rem;
        }

        p {
            text-align: justify;
        }

        &__link {
            align-self: flex-end;
            white-space: nowrap;

            &:hover {
                color: var(--primary-900);
            }
        }
    }
}

@media (min-width: 1200px) {
    .whoami {
        padding: 5rem;
        flex-direction: row;

        img {
            width: clamp(14.5rem, 50%, 30rem);
        }

        .description {
            max-width: 40%;

            h3 {
                font-size: 2rem;
            }
        }
    }
}

.trust-me {
    padding: 1rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
        font-size: 1.5rem;
    }

    .logo-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 3rem;
        padding: 1rem;

        &__item {
            font-size: 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 75px;
            height: 75px;

            img {
                width: 75px;
            }
        }
    }
}

@media (min-width: 768px) {
    .trust-me {
        h3 {
            font-size: 2rem;
        }

        .logo-list__item {
            width: 100px;
            height: 100px;

            img {
                width: 100px;
            }
        }
    }
}

@media (min-width: 1200px) {
    .trust-me {
        .logo-list {
            gap: 4rem;

            &__item {
                width: 150px;
                height: 150px;

                img {
                    width: 100px;
                }
            }
        }
    }
}

.contact {
    max-width: 700px;
    margin: 0 auto 5rem;
    padding: 0 2rem;

    h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
}

@media (min-width: 768px) {
    .contact h3 {
        font-size: 2rem;
    }
}
</style>
