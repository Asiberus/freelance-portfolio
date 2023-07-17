<template>
    <form
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="honeypot"
        @submit.prevent="submit($event)">
        <input type="hidden" name="honeypot" />
        <input type="hidden" name="form-name" value="contact" />
        <CustomInput v-model="form.name" label="Nom Prénom (ou société)" name="name"></CustomInput>
        <CustomInput v-model="form.email" label="Adresse e-mail" name="email" type="email">
        </CustomInput>
        <CustomTextArea v-model="form.message" label="Message" name="message"> </CustomTextArea>
        <button type="submit" :disabled="!formValidity" class="btn mt-1">
            Envoyer
            <nuxt-icon name="email-send" filled></nuxt-icon>
        </button>
    </form>
</template>

<script setup lang="ts">
import { watch } from 'vue'

const form = reactive({
    name: '',
    email: '',
    message: '',
})
const formValidity = ref(false)

watch(form, value => {
    const { name, email, message } = value
    if (name.length === 0 || name.length > 250) formValidity.value = false
    else if (email.length === 0 || email.length > 250) formValidity.value = false
    else if (message.length === 0 || message.length > 500) formValidity.value = false
    else formValidity.value = true
})

function submit(event): void {
    const formData = new FormData(event.target)
    // const { name, email, message } = form
    // const formData = new FormData()
    // formData.append('name', name)
    // formData.append('email', email)
    // formData.append('message', message)

    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
    })
        .then(() => console.log('form successfully submited'))
        .catch(error => console.error(error))
}
</script>

<style scoped lang="scss">
form {
    display: flex;
    flex-direction: column;
    row-gap: 0.75rem;
}
</style>
