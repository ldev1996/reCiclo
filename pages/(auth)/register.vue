<template>
  <div class="flex flex-col items-center space-y-4">
    <form method="post" class="w-full flex flex-col gap-4 px-4 pt-4" @submit.prevent="handleSubmit()">
      <input
        type="text" required
        name="username" id="username"
        v-model="form.username"
        placeholder="Seu nome completo"
      />
      <input
        type="email" required
        name="email" id="email"
        v-model="form.email"
        placeholder="Seu e-mail"
        class="peer"
      />
      <p class="hidden peer-invalid:block text-error">Por favor, forneça um endereço de e-mail válido.</p>
      <input
        type="password" required
        name="password" id="password"
        v-model="form.password"
        placeholder="Senha"
      />
      <button type="submit" :disabled="loading"
      class="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-xl shadow-md transition">
        {{ loading ? 'Criando...' : 'Criar minha conta' }}
      </button>
    </form>
    <p>Já tem uma conta? <NuxtLink class="text-primary underline" to="/login">Fazer login</NuxtLink></p>
  </div>
</template>
  
<script setup lang="js">
  definePageMeta({
      layout: "auth"
  })

  const supabase = useSupabaseClient()

  const form = ref({
    username: '',
    email: '',
    password: '',
  })
  const loading = ref(false)

  const handleSubmit = async () => {
    loading.value = true
    const { error } = await supabase.auth.signUp({
      email: form.value.email,
      password: form.value.password,
      options: {
        emailRedirectTo: 'http://localhost:3000/confirm',
        data: {
          full_name: form.value.username
        }
      }
    })
    loading.value = false
    if (error) console.error(error)
    return navigateTo('/confirm')
  }
</script>
  