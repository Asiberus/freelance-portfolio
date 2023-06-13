<template>
    <NuxtLink :to="props.to" class="tile-link">
        <slot></slot>
    </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({ to: { type: String, default: '' } })
</script>

<style scoped lang="scss">
.tile-link {
    padding: 1rem 1.5rem;
    font-size: 1.25rem;
    background-color: #f4a261;
    border-radius: 5rem;
    width: max-content;
}
</style>
