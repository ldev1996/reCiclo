<template>
   <p class="text-center">Aguardando login</p>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'auth'
    })

    const user = useSupabaseUser()

    watch(user, () => {
        if (user.value && user.value.id && user.value.email_confirmed_at) {
            return navigateTo('/feed')
        }
    }, { immediate: true })
</script>
