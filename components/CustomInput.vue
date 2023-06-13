<template>
    <div class="wrapper">
        <label :for="id">{{ label }}</label>
        <input
            :id="id"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    label: { type: String, required: true },
    modelValue: { type: String, required: true },
})
defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const id = props.label + Math.floor(Math.random() * 1000)
</script>

<style scoped lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;

    input {
        min-width: 700px;
        height: 35px;
    }
}
</style>
