<template>
  <div id="details-images" class="py-2">
    <img v-for="image in images" class="rounded-lg mb-3" :src="image" alt="">
  </div>
</template>
<script setup>
  defineProps({
    images:Array,
  })
</script>
<style>
  #details-images {
    column-count: 2;
    column-gap: 10px;
  }
</style>