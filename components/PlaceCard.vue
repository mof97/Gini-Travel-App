<template>
  <div class="place-card">
    <img class="w-20 mx-auto h-20 mb-5 rounded-full" :src="item.image" alt="">
    <h2 class="text-center text-[18px]">
      {{ item.label }}
    </h2>
  </div>
</template>
  <script setup lang="ts">
    defineProps({
      item:Object
    })
  </script>