<template>
    <div class="textarea-wrapper">
        <label :for="id">{{ label }}</label>
        <textarea
            :id="id"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)">
        </textarea>
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
.textarea-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;

    textarea {
        min-height: 150px; // TODO: maybe change for different screen size
        padding: 0.75rem 0.75rem;
        border: 1px solid #bbb;
        border-radius: 4px;
        outline: none;
        resize: vertical;

        &:active,
        &:focus,
        &:hover {
            border-color: #888;
        }
    }
}
</style>
