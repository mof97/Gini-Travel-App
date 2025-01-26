<template>
  <div id="rating-card" class="py-2">
    <div class="main-section grid grid-cols-2 mb-5">
      <div class="p-5">
        <h2 class="text-3xl mb-3 font-bold">
          {{ reviews.result }}
        </h2>
        <NRate readonly :default-value="reviews.stars" :size="25">
          <template #default>
            <Icon name="mingcute:star-fill" />
          </template>
        </NRate>
        <p class="text-gray-400">
          حسب {{ reviews.total_reviews_count }} تقييم

        </p>
      </div>
      <div class="p-5">
        <ul>
          <li class="flex items-center gap-3" v-for="item in reviews.stars_details">
            <span class="text-sm text-gray-400">
              {{ item.label }}
            </span>
            <NProgress type="line" :percentage="(item.count / 100) * 10" color="#FF9141" :show-indicator="false" />
          </li>
        </ul>
      </div>
    </div>
    <div class="user-reviews">
      <h1 class="text-[18px] font-medium mb-5">
        تقييمات المستخدمين
      </h1>
      <ReviewCard class="mb-3 pb-3" v-for="review in reviews.user_reviews" :key="review.id" :review="review" />
    </div>
  </div>
</template>
<script setup>
import {NProgress, NRate} from "naive-ui";
import ReviewCard from "~/components/Details/ReviewCard.vue";

  defineProps({
    reviews:Object,
  })
</script>
<style>

  .user-reviews .review-card {
    @apply border-b
  }

</style>