<template>
   <p class="text-center">Aguardando login</p>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: "auth"
    })

    const user = useSupabaseUser()
    const redirectInfo = useSupabaseCookieRedirect()

    watch(user, () => {
    if (user.value) {
        // Get redirect path, and clear it from the cookie
        const path = redirectInfo.pluck()
        // Redirect to the saved path, or fallback to home
        return navigateTo(path || '/feed/') 
    }
    }, { immediate: true })
</script>