<template>
  <div id="category-card" class="border rounded-[11px] w-80 p-5 flex items-center gap-3">
    <img class="rounded-[8px] w-[100px] h-[100px] object-cover" :src="item.image" alt="">
    <div>
      <h2 class="text-[18px] text-[#5A5A5A] font-bold">
        {{ item.label }}
      </h2>
      <p class="text-[#5A5A5A]">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
  defineProps({
    item:Object
  })
</script>