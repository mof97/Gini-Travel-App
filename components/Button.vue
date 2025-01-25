<template>
  <div id="button" class="w-8 h-8 flex-center bg-white rounded-full border cursor-pointer" @click="is_active = !is_active">
    <Icon :class="is_active ? 'text-primary':'text-gray-400'" class="text-xl" :name="icon"/>
  </div>
</template>
<script setup>
  const is_active = ref(false);
  defineProps({
    icon: {
      type: String,
      default:()=> 'ri:heart-2-line',
    },
  })
</script>