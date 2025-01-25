
<template>
  <div id="reels-card" class="relative">
    <img class="h-[300px] w-[250px] rounded-[18px] object-cover" :src="item.image" alt="">
    <div class="overlay w-full h-full rounded-[18px] absolute top-0 left-0"></div>
    <div class="content absolute bottom-0 right-0 w-full text-white px-3 py-3">
      <h2 class="text-lg">
        {{ item.label }}
      </h2>
      <p class="flex items-center gap-1">
        <Icon name="hugeicons:location-09" class="" />
        {{ item.location }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  item:Object
})
</script>
<style>
 #reels-card .overlay {
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,0) 31%, rgba(0,0,0,1) 100%);
}
</style>