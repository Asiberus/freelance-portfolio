<template>
    <div class="reference">
        <div class="reference__header">{{ title }}</div>
        <div class="reference__content">
            <slot></slot>
        </div>
        <div class="reference__footer">
            <div class="reference__footer__ref">{{ reference }}</div>
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
    padding: 1rem;

    &__header {
        margin-bottom: 0.25rem;
        font-size: 1.25rem;
        font-weight: bold;
        color: var(--primary-900);
    }

    &__content {
        font-size: 0.95rem;
    }

    &__footer {
        display: flex;
        justify-content: flex-end;

        &__ref {
            color: var(--primary-700);
            font-size: 0.8rem;
            font-style: italic;
            line-height: 0.8rem;
        }
    }
}

@media (min-width: 768px) {
    .reference {
        padding: 1.5rem 2rem;

        &__header {
            margin-bottom: 0.5rem;
            font-size: 1.5rem;
        }

        &__content {
            font-size: 1rem;
        }
    }
}
</style>
