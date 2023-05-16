<template>
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

    <main>
        <slot />
    </main>
</template>

<script setup lang="ts">
const LINKS = [
    { name: 'Accueil', to: '/' },
    { name: 'Prestations', to: '/prestations' },
    { name: 'Qui suis-je ?', to: '/whoami' },
    { name: 'Contact', to: '/contact' },
]
</script>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    &__menu {
        display: flex;
        align-items: center;
        column-gap: 2rem;

        &__link {
            color: grey;
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
</style>
