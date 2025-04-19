<template>
    <h1 :class="[size? size : 'text-3xl']" class="font-bold text-logo text-center flex items-center justify-center gap-2">
      <span><img src="/icon-192.png" alt="ECOmunidade logo" class="inline-block align-middle h-[1.2em] w-[1.2em]"></span>
      ECOmunidade
    </h1>
</template>

<script setup>
defineProps({
  size: {
    type: String,
    default: '',
  }
})
</script>