<template>
    <NuxtLink
        :to="props.to"
        class="tile-link"
        :class="{ small: props.small, 'has-arrow': props.includeArrow }">
        <slot></slot>
        <nuxt-icon v-if="props.includeArrow" name="right-arrow" class="arrow"></nuxt-icon>
    </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
    to: { type: String, default: '' },
    small: { type: Boolean, default: false },
    includeArrow: { type: Boolean, default: false },
})
</script>

<style scoped lang="scss">
.tile-link {
    padding: 1rem 1.5rem;
    font-size: 1.25rem;
    background-color: var(--primary-500);
    border-radius: 5rem;
    width: max-content;
    transition: all 0.2s ease;

    &:hover {
        background-color: var(--primary-600);

        .arrow {
            transform: translateX(0);
            margin-left: 1.5rem;
        }
    }

    &.small {
        padding: 0.5rem 1rem;
        font-size: 1rem;
    }

    &.has-arrow {
        padding-left: 2.5rem;
    }

    .arrow {
        display: inline-block;
        margin-left: 1.5rem;
        transform: translateX(-1rem);
        transition: all 0.2s ease;
    }
}
</style>
