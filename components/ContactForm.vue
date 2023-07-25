<template>
    <form
        ref="form"
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="honeypot"
        @input="updateFormValidity()"
        @submit.prevent="submit()">
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="honeypot" />

        <div class="field-wrapper">
            <label for="name">Nom Prénom (ou société)</label>
            <input
                id="name"
                name="name"
                type="text"
                required
                maxlength="250"
                @blur="$event.target.reportValidity()" />
        </div>

        <div class="field-wrapper">
            <label for="email">Adresse e-mail</label>
            <input
                id="email"
                name="email"
                type="email"
                required
                maxlength="250"
                @blur="$event.target.reportValidity()" />
        </div>

        <div class="field-wrapper">
            <label for="message">Message</label>
            <textarea
                id="message"
                name="message"
                required
                maxlength="3000"
                autocomplete="off"
                @blur="$event.target.reportValidity()"></textarea>
        </div>

        <button type="submit" :disabled="!formValidity" class="btn btn-primary mt-1">
            Envoyer
            <nuxt-icon v-if="!loading" name="email-send" filled></nuxt-icon>
            <nuxt-icon v-if="loading" name="loading" filled class="loading-spinner"></nuxt-icon>
        </button>
    </form>
</template>

<script setup lang="ts">
import { Ref } from 'vue'

const form: Ref<HTMLFormElement> = ref(null)
const formValidity: Ref<boolean> = ref(false)
const loading: Ref<boolean> = ref(false)

function updateFormValidity(): void {
    formValidity.value = form.value.checkValidity()
}

function submit(): void {
    const formData = new FormData(form.value)

    loading.value = true
    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => {
            form.value.reset()
            formValidity.value = false
        })
        .catch(error => console.error(error))
        .finally(() => (loading.value = false))
}
</script>

<style scoped lang="scss">
form {
    display: flex;
    flex-direction: column;
    row-gap: 0.75rem;

    .field-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;

        input,
        textarea {
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

        textarea {
            min-height: 150px; // TODO: maybe change for different screen size
            resize: vertical;
        }
    }

    .nuxt-icon {
        font-size: 1.25rem;
    }
}

.loading-spinner {
    animation: loading-spinner 1s linear infinite;
}

@keyframes loading-spinner {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
