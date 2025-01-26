<template>
  <div id="search-page" class="pt-10 pb-32">
    <Navbar />
    <div class="container max-w-screen-sm">
      <h2 class="text-2xl font-bold mb-10">
        البحث
      </h2>
      <FilterSearch class="mb-3" />
      <ul class="flex items-centre gap-3 mb-10 overflow-x-auto text-[14px] scroll-none">
        <li class="px-10 py-3 rounded-full text-white bg-black border">
          لك
        </li>
        <li class="px-10 py-3 rounded-full  border">
          الدينية
        </li>
        <li class="px-10 py-3 rounded-full  border">
          سياحية
        </li>
        <li class="px-10 py-3 rounded-full  border">
          رياضية
        </li>
        <li class="px-10 py-3 rounded-full  border">
          علاجية
        </li>
      </ul>
      <div class="grid grid-cols-2 gap-5">
        <ResultCard v-for="trip in trips" :trip="trip"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import Trips from "@/fakeapi/Trips.json"
  const trips = ref(Trips)
</script>
<style>
</style>