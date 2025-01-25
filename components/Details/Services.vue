<template>
  <div id="services" class="bg-[#F3F4F6] rounded-lg px-3 py-2">
    <div class="head flex items-center justify-between">
      <div class="flex items-center gap-1">
        <h2 class="text-[18px]">
          {{ service.label }}
        </h2>
        <span class="text-[#4D5761]">
          ({{ service?.categories?.length }} فئات)
        </span>
      </div>
      <div @click="is_active = !is_active" class="flex cursor-pointer items-center justify-center gap-1 w-8 h-8 bg-white text-primary text-2xl rounded-full">
        <Icon name="iconoir:nav-arrow-down" class="duration-300 transform" :class="is_active ? 'rotate-180' : 'rotate-0'" />
      </div>
    </div>
    <ul class="details-list" :class="is_active ? 'active' : ''">
      <li v-for="category in service.categories">
        {{ category }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
  const props = defineProps({
    is_active: {
      type: Boolean,
      default:()=>false
    },
    service:Object
  })
  const is_active = ref(props.is_active)



</script>
<style>
  #services .details-list {
    @apply list-disc grid grid-cols-1 gap-1 px-5 text-[#4D5761] max-h-0 overflow-hidden duration-500
  }
  #services .details-list.active {
    @apply max-h-[1000px]
  }
</style>