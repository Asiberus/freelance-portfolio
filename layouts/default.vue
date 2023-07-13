<template>
    <div class="wrapper">
        <header class="header">
            <NuxtLink to="/" class="header__title">
                <h1>Raphael <span class="primary">BEEKMANN</span></h1>
            </NuxtLink>

            <nav class="header__menu">
                <template v-for="link of LINKS" :key="link.to">
                    <NuxtLink :to="link.to" class="header__menu__link" active-class="active">
                        {{ link.name }}
                    </NuxtLink>
                </template>
                <tile-link to="/contact" small>Demander un devis</tile-link>
            </nav>
        </header>

        <main class="main">
            <slot />
        </main>

        <footer>
            <div class="plan">
                <h3>Plan du site</h3>
                <template v-for="link of LINKS" :key="link.to">
                    <NuxtLink :to="link.to">{{ link.name }}</NuxtLink>
                </template>
            </div>
            <div>
                <h3>Raphael BEEKMANN</h3>
                <div>raphael.beekmann@gmail.com</div>
                <div>+33 6 25 65 22 72</div>
                <div>Paris</div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
const LINKS = [
    { name: 'Accueil', to: '/' },
    { name: 'Prestations', to: '/prestations' },
    { name: 'À propos', to: '/a-propos' },
]
</script>

<style scoped lang="scss">
.wrapper {
    min-height: 100vh;
    max-width: 100%;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;

    &__title {
        h1 {
            margin-bottom: 0;
            font-weight: 500;
            font-size: 2.5rem;

            .primary {
                color: var(--primary-800);
                font-weight: 800;
            }
        }
    }

    &__menu {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;

        &__link {
            padding: 0.5rem 1rem;
            transition: all 0.2s ease;

            &:hover {
                color: var(--primary-800);
            }

            &.active {
                color: var(--primary-900);
            }
        }
    }
}

.main {
    //padding: 1rem;
}

footer {
    background-color: var(--primary-200);
    padding: 1rem;

    display: grid;
    grid-template-columns: 1fr 1fr;

    .plan {
        display: flex;
        flex-direction: column;
    }
}
</style>
