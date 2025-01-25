<template>
  <div id="home-page" class="pb-28">
    <Navbar />
    <header class="relative py-10">
      <div class="overlay absolute top-0 w-full h-full"></div>
      <div class="container max-w-screen-md relative text-white">
        <div class="head flex items-center justify-between mb-16">
          <div class="user-info flex items-center gap-2">
            <img class="w-[44px] h-[44px] rounded-full" src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
            <div>
              <h2 class="text-[18px] font-bold">
                رحلة الصحاري
              </h2>
              <span class="flex items-center gap-1 text-[12px]">
                <Icon name="hugeicons:location-09" class="text-primary" />
                المنصور, بغداد
              </span>
            </div>
          </div>
          <div class="notification w-[38px] h-[38px] relative rounded-full  flex justify-center items-center glass-gray text-2xl text-[#6A6E73]">
            <span class="bg-primary w-2 h-2 border absolute top-2 left-3 z-10 rounded-full"></span>
            <Icon name="lucide:bell" class="" />
          </div>
        </div>
        <FilterSearch class="mb-5" />
      </div>
    </header>
    <section id="places" class=" -mt-10 relative">
      <div class="container max-w-screen-md grid grid-cols-4">
        <PlaceCard v-for="item in HomePage.places" :item="item" />
        <div class="place-card">
          <div class="flex-center w-20 mx-auto shadow-lg h-20 mb-5 rounded-full bg-white border border-primary">
            <Icon name="proicons:grid" class="text-4xl text-primary" />
          </div>
          <h2 class="text-center text-[18px]">
            المزيد
          </h2>
        </div>
      </div>
    </section>
    <section id="places" class="relative pt-5">
      <div class="container max-w-screen-md flex items-stretch w-full gap-5 overflow-x-auto scroll-none">
        <img class="h-full w-11/12" src="@/assets/images/head-slider/02.png">
        <img src="@/assets/images/head-slider/01.png">
      </div>
    </section>
    <section id="categories" class="relative pt-5">
      <div class="container max-w-screen-md">
        <div class="section-head mb-3 flex items-center justify-between">
          <h2 class="text-[20px] font-bold">
            الفئات
          </h2>
          <nuxt-link to="" class="text-primary text-[12px]">
            عرض الكل
          </nuxt-link>
        </div>
        <div class="page-content flex items-stretch w-full gap-5 overflow-x-auto scroll-none">
          <CategoryCard class="flex-none" v-for="item in HomePage.categories" :item="item" />
        </div>
      </div>
    </section>
    <section id="categories" class="relative pt-5">
      <div class="container max-w-screen-md">
        <div class="section-head mb-3 flex items-center justify-between">
          <h2 class="text-[20px] font-bold">
            ريلز
          </h2>
          <nuxt-link to="" class="text-primary text-[12px]">
            عرض الكل
          </nuxt-link>
        </div>
        <div class="page-content flex items-stretch w-full gap-5 overflow-x-auto scroll-none">
          <ReelsCard class="flex-none" v-for="item in HomePage.reels" :item="item" />
        </div>
      </div>
    </section>
    <section id="categories" class="relative pt-5">
      <div class="container max-w-screen-md">
        <div class="section-head mb-3 flex items-center justify-between">
          <h2 class="text-[20px] font-bold">
            فيزا
          </h2>
          <nuxt-link to="" class="text-primary text-[12px]">
            عرض الكل
          </nuxt-link>
        </div>
        <div class="page-content flex items-stretch w-full gap-5 overflow-x-auto scroll-none">
          <VisaCard class="flex-none" v-for="item in HomePage.visa" :item="item" />
        </div>
      </div>
    </section>
    <section id="categories" class="relative py-10">
      <div class="container max-w-screen-md">
        <div class="section-head mb-3 flex items-center justify-between">
          <h2 class="text-2xl">
            المجموعات المقترحة
          </h2>
          <nuxt-link to="" class="text-primary text-lg">
            عرض الكل
          </nuxt-link>
        </div>
        <div class="page-content grid grid-cols-2 gap-5">
          <ResultCard v-for="trip in Trips" :trip="trip"/>
        </div>
      </div>
    </section>
  </div>

</template>
<script setup lang="ts">
  import HomePage from "@/fakeapi/HomePage.json"
  import VisaCard from "~/components/VisaCard.vue";
  import Trips from "@/fakeapi/Trips.json"
</script>