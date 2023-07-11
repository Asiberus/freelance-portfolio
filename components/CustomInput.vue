<template>
    <div class="input-wrapper">
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
.input-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
        padding: 0.75rem 0.75rem;
        border: 1px solid #bbb;
        border-radius: 4px;
        outline: none;

        &:active,
        &:focus,
        &:hover {
            border-color: #888;
        }
    }
}
</style>
