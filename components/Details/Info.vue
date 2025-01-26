<template>
  <div id="details-info" class="py-2">
    <p class="text-gray-400">
      {{data.description}}
    </p>
    <ul class="flex items-center justify-between py-5">
      <li class="flex items-center flex-col border-l pl-10">
        <h2 class="text-lg font-bold flex items-center gap-1">
          <Icon name="hugeicons:time-04" class="text-primary"></Icon>
          {{data.duration}}
        </h2>
        <span>
          الفترة
        </span>
      </li>
      <li class="flex items-center flex-col border-l pl-10">
        <h2 class="text-lg font-bold flex items-center gap-1">
          <Icon name="hugeicons:calendar-04" class="text-primary"></Icon>
          {{data.next_trip}}
        </h2>
        <span>
          الرحلة القادمة
        </span>
      </li>
      <li class="flex items-center flex-col">
        <h2 class="text-lg font-bold flex items-center gap-1">
          <Icon name="hugeicons:time-04" class="text-primary"></Icon>
          {{data.type}}
        </h2>
        <span>
          نوع الرحلة
        </span>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
  defineProps({
    data:Object
  })
</script>