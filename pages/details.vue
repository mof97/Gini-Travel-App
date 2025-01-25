<template>
  <div id="details" class="pb-5">
    <header class="relative" style="direction: ltr">
      <div class="head flex absolute top-5 w-full z-10 px-5 items-center justify-between">
        <Button @click="Router.go(-1)" icon="tabler:arrow-left" />
        <Button  />
      </div>
      <NCarousel autoplay>
        <img
            class="carousel-img"
            v-for="image in data.images"
            :src="image"
        >
      </NCarousel>
    </header>
    <section class="-mt-10 rounded-t-[24px] bg-white relative py-10">
      <div class="container">
        <div class="head flex items-center justify-between">
          <div>
            <h2 class="text-xl font-medium mb-3">
              {{ data.title }}
            </h2>
            <span class="flex items-center gap-1 text-md text-gray-400">
                <Icon name="hugeicons:location-09" class="" />
                {{ data.location }}
              </span>
          </div>
          <div class="price text-xl text-primary font-medium ">
            {{ data.iqd_price }} د.ع
          </div>
        </div>
        <div class="info flex items-center justify-between mb-3">
          <div class="flex items-center gap-2 w-1/2">
            <Icon class="text-5xl text-primary" name="ph:users"></Icon>
            <NProgress type="line" color="#DA2428" :percentage="data.available_seat_count" :show-indicator="false" />
            <span class="text-primary">
              {{ data.available_seat_count }}/100
            </span>
          </div>
          <div class="p-3  rounded-full text-primary  border-primary border">
            مع مرشد سياحي
          </div>
        </div>
        <NTabs type="line" justify-content="start">
          <NTabPane name="test" tab="تفاصيل الرحلة">
            <DetailsInfo :data="data.info" />
          </NTabPane>
          <NTabPane name="tw" tab="الصور">
            <DetailsImages :images="data.images_section" />
          </NTabPane>
          <NTabPane name="th" tab="التقييمات">
            <DetailsRating :reviews="data.reviews" />
          </NTabPane>
          <NTabPane name="fu" tab="الخدمات">
            <div class="py-2 grid grid-cols-1 gap-3">
              <DetailsServices v-for="(service,index) in data.services" :service="service" :is_active="index === 0 ? true : false" />
            </div>
          </NTabPane>
        </NTabs>
      </div>
    </section>
    <section class="pt-4 border-t">
      <div class="container max-w-screen-sm">
        <NButton round size="large" block type="primary" class="py-2 font-bold">
          حجز الرحلة
        </NButton>
      </div>
    </section>
  </div>
</template>
<script setup>
import {NCarousel, NProgress , NTabs , NTabPane , NButton} from "naive-ui";
import Trips from "@/fakeapi/Trips.json"
const Route = useRoute()
const Router = useRouter()
const data = ref(Trips.find(el=>el.id == Route.query.id))

</script>
<style>
.carousel-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.n-carousel.n-carousel--bottom .n-carousel__dots{
  bottom: 55px;
}
.n-carousel .n-carousel__dots.n-carousel__dots--dot .n-carousel__dot {
  @apply bg-white
}
.n-carousel .n-carousel__dots.n-carousel__dots--dot .n-carousel__dot.n-carousel__dot--active {
  @apply bg-primary;
}
</style>