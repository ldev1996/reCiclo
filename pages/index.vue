<template>
    <div class="min-h-screen bg-[#FFF7E3] flex flex-col items-center justify-center px-6 text-gray-800">
      <div class="max-w-xl text-center space-y-6">
        <h1 class="text-4xl font-bold text-green-600">
          ECOmunidade
        </h1>
        <p class="text-lg">
          Conectando pessoas para transformar resíduos em recursos. Doe, troque ou venda materiais recicláveis com impacto social e ambiental.
        </p>
  
        <img
          src="/ecomunidade-illust.svg"
          alt="People recycling together"
          class="mx-auto w-72"
        />
  
        <div class="flex gap-4 justify-center">
          <NuxtLink to="/register" class="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl shadow-md transition">
            Criar Conta
          </NuxtLink>
          <NuxtLink to="/login" class="border border-green-500 text-green-600 px-5 py-2 rounded-xl hover:bg-green-50">
            Entrar
          </NuxtLink>
        </div>
      </div>
    </div>
</template>

<script lang='js'>

</script>