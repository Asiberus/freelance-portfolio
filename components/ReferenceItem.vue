<template>
    <div class="reference">
        <div class="reference__header">
            <div class="reference__header__title">{{ title }}</div>
            <div class="reference__header__ref">{{ reference }}</div>
        </div>
        <div class="reference__content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: { type: String, required: true },
    reference: { type: String, required: true },
})
</script>

<style scoped lang="scss">
.reference {
    background-color: #eee;
    border-radius: 1rem;
    margin-bottom: 1.5rem;
    padding: 1.5rem 2rem;

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;

        &__title {
            font-size: 1.5rem;
            font-weight: bold;
        }

        &__ref {
            color: var(--primary-900);
            font-size: 0.8rem;
            font-style: italic;
        }
    }

    &__content {
    }
}
</style>
