<template>
  <div id="visa-card" class="border rounded-[11px] w-[259px] p-3 flex items-center gap-3">
    <img class="rounded-[8px] w-[75px] h-[75px] object-cover" :src="item.image" alt="">
    <div class="w-full">
      <h2 class="text-[18px] text-[#5A5A5A] font-bold">
        {{ item.label }}
      </h2>
      <span class="flex items-center gap-1 text-[12px] text-[#5A5A5A]">
        <Icon name="hugeicons:location-09" class="text[16px]" />
        {{ item.location }}
      </span>
      <p class="flex items-center justify-end w-full gap-2 pt-2">
        <span class="text-green-500 font-bold text-[18px]">
          {{item.discount}}
        </span>
        <span class="text-red-500 font-bold text-[14px] line-through">
          {{item.price}}
        </span>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  item:Object
})
</script>