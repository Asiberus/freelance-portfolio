<template>
    <div class="wrapper">
        <header class="header">
            <h1 class="header__title">Raphael BEEKMANN</h1>
            <nav class="header__menu">
                <template v-for="link of LINKS" :key="link.to">
                    <NuxtLink :to="link.to" class="header__menu__link" active-class="active">
                        {{ link.name }}
                    </NuxtLink>
                </template>
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
    { name: 'Demander un devis', to: '/contact' },
]
</script>

<style scoped lang="scss">
.wrapper {
    min-height: 100vh;
    max-width: 100%;
}

.header {
    //position: sticky;
    //top: 0;
    background-color: #f4a261;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    &__menu {
        display: flex;
        align-items: center;
        column-gap: 2rem;

        &__link {
            color: white;
            transition: all 0.2s ease;

            &:hover {
                color: black;
            }

            &.active {
                color: #222;
            }
        }
    }
}

.main {
    //padding: 1rem;
}

footer {
    background-color: cornflowerblue;
    padding: 1rem;

    display: grid;
    grid-template-columns: 1fr 1fr;

    .plan {
        display: flex;
        flex-direction: column;
    }
}
</style>
