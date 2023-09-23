<template>
    <NuxtLayout>
        <div class="error-page">
            <img src="/img/404.svg" alt="404 error image" />
            <p>La page que vous souhaitez atteindre n'existe pas!</p>
            <TileLink to="/" small>Retourner à l'accueil</TileLink>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
    title: 'Raphael Beekmann - Développeur web',
})
</script>

<style scoped lang="scss">
.error-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 5rem 1rem 5rem;

    img {
        width: clamp(16rem, 70vw, 40rem);
    }

    p {
        margin-bottom: 0;
        font-size: 1rem;
        font-weight: 00;
        text-align: center;

        @media (min-width: 768px) {
            font-size: 1.25rem;
        }
    }
}
</style>
