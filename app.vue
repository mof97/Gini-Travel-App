<template>
  <div>
    <div id="app">
      <NConfigProvider :theme-overrides="themeOverrides">
      <NuxtLayout>
        <div class="container max-w-screen-sm px-0" id="app-container">
          <NuxtPage />
        </div>

      </NuxtLayout>
      </NConfigProvider>
    </div>
  </div>
</template>
<script setup>
import {NConfigProvider} from "naive-ui";

const themeOverrides = {
  common: {
    primaryColor: "#DB2529",
    primaryColorHover: "#DB2529",
    primaryColorPressed: "#DB2529",
    primaryColorSuppl: "#DB2529",
  },
}
</script>