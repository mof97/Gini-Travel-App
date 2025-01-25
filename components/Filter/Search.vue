<template>
  <NDrawer
      v-model:show="active"
      placement="bottom"
      :trap-focus="false"
      :height="650"
  >
    <NDrawerContent>
      <div class="filter-header flex items-center justify-between mb-5">
        <Button @click="active = false" icon="si:close-line" class="shadow" />
        <h2 class="text-[20px]  font-bold text-center pt-3">
          تصفية الرحلات
        </h2>
        <span></span>
      </div>
      <div class="price mb-5">
        <h2 class="text-[18px] font-medium mb-3">
          مدى الاسعار
        </h2>
        <div class="flex items-center justify-between">
            <span>
              $ {{value[0]}}
            </span>
          <span>
              $ {{value[1]}}
            </span>
        </div>
        <NSlider :reverse="true" v-model:value="value" range/>
      </div>
      <div class="price mb-5">
        <h2 class="text-[18px] font-medium mb-3">
          الفئة
        </h2>
        <ul class="flex items-centre flex-wrap gap-5 mb-10 overflow-x-auto text-[14px] scroll-none">
          <li v-for="(category,index) in categories" @click="selectedCategory = index" :class="selectedCategory === index ? 'text-white bg-primary':''" class="px-8 py-3 cursor-pointer rounded-full duration-300 border">
            {{ category }}
          </li>
        </ul>
      </div>
      <div class="rate mb-5">
        <h2 class="text-[18px] font-medium mb-3">
          تقييم الرحلة
        </h2>
        <ul class="flex items-centre bg-[#F7F7F7] py-3 px-3 rounded-[13px] flex-wrap gap-4 mb-10 overflow-x-auto text-[14px] scroll-none">
          <li @click="selectedRate = item " :class="item === selectedRate ? 'bg-primary text-white':'bg-white'" class=" px-3 py-1 shadow-sm rounded-[10px] duration-300 cursor-pointer flex items-center gap-1" v-for="item in 5">
            <Icon class="text-xl flex items-center text-[#FFCC33]" name="mingcute:star-fill" />
            <span class="text-lg pt-1">
              {{item}}
              </span>
          </li>
        </ul>
      </div>
      <div class="controller grid grid-cols-2 gap-5">
        <NButton @click="reset()"  round size="large" block type="default" class="py-2">
          اعادة تعيين
        </NButton>
        <NButton @click="active = false" round size="large" block type="primary" class="py-2 font-bold">
          تصفية
        </NButton>
      </div>
    </NDrawerContent>
  </NDrawer>
  <div id="search-input" class="rounded-full mb-5">
    <div class="icon relative">
      <NInput round placeholder="ابحث عن رحلتك القادمة ...">
        <template #prefix>
          <div class="flex-center pl-2">
            <Icon name="mynaui:search" class="text-primary text-3xl" />
          </div>
        </template>
        <template #suffix>
        </template>
      </NInput>
      <div @click="active = true" class="pr-5 absolute top-1/2 -translate-y-1/2 left-[15px] border-r cursor-pointer flex items-center justify-center">
        <Icon name="hugeicons:filter-horizontal" class="text-primary text-3xl" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {NButton, NDrawer, NDrawerContent, NInput, NSlider} from "naive-ui";
const active = ref(false)
const value = ref([10 , 50])
const categories = ref(["الدينية","السياحية","العلاجية","الرياضية"])
const selectedCategory = ref(0)
const selectedRate = ref(1)
const reset = ()=>{
  selectedCategory.value = 0
  selectedRate.value = 1
  value.value = [10 , 50]
}
</script>
<style>
#search-input .n-input {
  background: rgba( 255, 255, 255, 0.45 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  box-shadow: 0px 16px 50px -20px rgba(49, 79, 124, 0.5)
}
#search-input .n-input .n-input-wrapper {
  padding: 10px;

}
#search-input .n-input .n-input__border {
  border: none;

}
#search-input .n-input.n-input--round:not(.n-input--textarea){
  @apply rounded-full
}

</style>