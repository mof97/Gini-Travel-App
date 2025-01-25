<template>
  <div id="navbar" class="fixed bottom-0 left-0 w-full z-10 bg-white py-5 ">
    <div class="container">
      <ul class="flex items-center justify-between text-md text-[#484C52]">
        <li class="">
          <NuxtLink to="/" active-class = 'text-primary' class="flex items-center justify-center flex-col ">
            <icon class="text-2xl mb-1" name="hugeicons:earth" />
            الرئيسية
          </NuxtLink>
        </li>
        <li class="">
          <NuxtLink to="/search" active-class = 'text-primary' class="flex items-center justify-center flex-col ">
            <icon class="text-2xl mb-1" name="hugeicons:search-01" />
            بحث
          </NuxtLink>
        </li>
        <li class="">
          <NuxtLink  active-class = 'text-primary' class="flex w-12 rounded-full h-12 bg-primary text-white items-center justify-center ">
            <icon class="text-2xl" name="icon-park-outline:video-two" />
          </NuxtLink>
        </li>
        <li class="">
          <NuxtLink  class="flex items-center justify-center flex-col ">
            <icon class="text-2xl mb-1" name="akar-icons:ticket" />
            الحجوزات
          </NuxtLink>
        </li>
        <li class="">
          <NuxtLink  class="flex items-center justify-center flex-col ">
            <icon class="text-2xl mb-1" name="tabler:user" />
            الحساب
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
#navbar {
  box-shadow: 0px -1px 10px 0px  rgba(0,0,0,.25);
}
</style>