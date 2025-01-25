<template>
  <div class="review-card">
    <div class="head flex items-center justify-between mb-2">
      <div class="user-info flex items-center gap-2 ">
        <img class="w-10 h-10 rounded-full object-cover" :src="review.cover" alt="">
        <div>
          <h2 class="text-[18px] font-medium">
            {{ review.name }}
          </h2>
        </div>
      </div>
      <div class="date text-[#7E7C82]">
        {{ review.date }}
      </div>
    </div>
    <p class="text-[13px] text-[#7E7C82] mb-1">
      {{ review.comment }}
    </p>
    <div class="flex items-centre justify-between">
      <NRate class="pt-2" readonly :default-value="review.stars" :size="20">
        <template #default>
          <Icon name="mingcute:star-fill" />
        </template>
      </NRate>
      <ul class="flex items-center gap-2">
        <li>
          <Button class="shadow-md" icon="iconamoon:like-light"/>
        </li>
        <li>
          <Button class="shadow-md" icon="fluent:comment-48-regular"/>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import {NRate} from "naive-ui";
  defineProps({
    review:Object,
  })
</script>