<template>
    <div class="input-wrapper">
        <label :for="id">{{ label }}</label>
        <input
            :id="id"
            :value="modelValue"
            :name="name"
            :type="type"
            @input="$emit('update:modelValue', $event.target.value)" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    modelValue: { type: String, required: true },
    label: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, default: 'text' },
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
