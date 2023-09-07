<template>
    <div class="reference">
        <h2 class="reference__title background-primary">Prestations</h2>
        <div class="reference__description">
            <p>
                Vous trouverez ici une liste des prestations que propose. Celle-ci sont réparties en
                6 principales catégories (Pack, Gestion de projet, Design, Contenu, Fonctionnalité,
                Support).
            </p>
            <p>
                Si votre besoin ne se trouve pas dans liste ci dessous, n’hésitez pas à m’écrire
                (<NuxtLink to="/contact" class="text-primary hover-effect">contact</NuxtLink>). Nous
                pourrons ensuite discuter de la réalisation de votre demande.
            </p>
        </div>

        <div class="reference__menu">
            <NuxtLink to="/prestations" exact-active-class="active" class="reference__menu__item">
                Pack
            </NuxtLink>
            <NuxtLink
                to="/prestations/project"
                exact-active-class="active"
                class="reference__menu__item">
                Gestion de projet
            </NuxtLink>
            <NuxtLink
                to="/prestations/design"
                exact-active-class="active"
                class="reference__menu__item">
                Design
            </NuxtLink>
            <NuxtLink
                to="/prestations/content"
                exact-active-class="active"
                class="reference__menu__item">
                Contenu
            </NuxtLink>
            <NuxtLink
                to="/prestations/fonctionality"
                exact-active-class="active"
                class="reference__menu__item">
                Fonctionnalité
            </NuxtLink>
            <NuxtLink
                to="/prestations/support"
                exact-active-class="active"
                class="reference__menu__item">
                Support
            </NuxtLink>
        </div>
        <div class="reference__content">
            <NuxtPage />
        </div>
    </div>
</template>

<style scoped lang="scss">
.reference {
    padding: 1rem 1rem 2rem;

    &__title {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    &__description {
        margin-bottom: 1.5rem;

        p {
            margin-bottom: 0;
        }
    }

    &__menu {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-bottom: 1rem;

        &__item {
            font-size: 1rem;
            padding: 1rem;
            background-color: #eee;
            transition: all 0.2s ease;
            border-radius: 0.3rem;

            &:hover {
                background-color: var(--primary-300);
            }

            &.active {
                background-color: var(--primary-400);
            }
        }
    }
}

@media (min-width: 768px) {
    .reference {
        padding: 3rem;

        &__title {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
    }
}

@media (min-width: 1200px) {
    .reference {
        padding: 5rem 10rem;

        &__title {
            font-size: 2.5rem;
        }
    }
}
</style>
