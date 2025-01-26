
<template>
  <NuxtLink :to="`/details?id=${trip.id}`" id="result-card" class="relative">
    <img class="h-[220px] w-full rounded-[18px] object-cover" :src="trip.cover" alt="">
    <div class="overlay w-full h-full rounded-[18px] absolute top-0 left-0"></div>
    <div class="content absolute bottom-0 right-0 w-full h-full flex justify-between flex-col text-white px-3 py-3">
      <div class="card-head flex  items-center justify-between">
        <div style="direction: ltr" class="tag px-2 w-20 h-6 pt-1 flex items-center justify-center  text-sm bg-blur rounded">
           {{ trip.discount }}%  Off
        </div>
        <Button/>
      </div>
      <div>
      <div class="info-card">
          <h2 class="text-[14px] flex-wrap font-bold flex items-center justify-between">
            {{ trip.title }}
            <span class="px-1 font-light text-[12px] text-wrap rounded bg-primary">
              {{ trip.iqd_price }} د.ع
            </span>
          </h2>
          <p class="flex items-center text-[12px] gap-1">
            <Icon name="hugeicons:location-09" class="" />
            {{ trip.location }}
          </p>
      </div>
      <NProgress indicator-text-color="#DA2428" color="#DA2428" :percentage="trip.available_seat_count" />
        <div class="flex items-center gap-1 text-sm font-bold">
          {{ trip.from }}
          <Icon name="hugeicons:arrow-left-01" class="text-lg" />
          {{ trip.to }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
  import {NProgress} from 'naive-ui'
  defineProps({
    trip:Object
  })
</script>
<style>

  #result-card .overlay {
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0) 31%, rgba(0,0,0,1) 100%);
  }

  #result-card .n-progress .n-progress-graph .n-progress-graph-line .n-progress-graph-line-rail
  {
    background-color: #6A6E73;
  }
</style>