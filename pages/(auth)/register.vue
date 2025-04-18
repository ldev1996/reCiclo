<template>
    <div class="flex flex-col items-center space-y-4">
      <form method="post" class="w-full flex flex-col gap-4 px-4 pt-4">
        <input
          type="text" required
          name="username"
          id="username"
          placeholder="Seu nome completo"
        />
        <input
          type="email" required
          name="email"
          id="email"
          placeholder="Seu e-mail"
          class="peer"
        />
        <p class="hidden peer-invalid:block text-error">Por favor, forneça um endereço de e-mail válido.</p>
        <input
          type="password" required
          name="password"
          id="password"
          placeholder="Senha"
        />
        <input
          type="password" required
          name="confirm"
          id="confirm"
          placeholder="Confirme sua senha"
        />
        <button type="submit"
        class="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-xl shadow-md transition">
            Criar minha conta
        </button>
      </form>
    </div>
</template>
  
<script setup lang="js">
    definePageMeta({
        layout: "auth"
    });
</script>
  