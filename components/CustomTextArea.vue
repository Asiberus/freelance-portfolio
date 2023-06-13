<template>
    <div class="wrapper">
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
.wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;

    textarea {
        min-width: 700px;
        min-height: 150px;
        resize: vertical;
    }
}
</style>
