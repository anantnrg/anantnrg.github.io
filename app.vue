<template>
  <div class="w-full h-full flex flex-col bg-base">
    <NavBar />
    <NuxtPage />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body,
#__nuxt,
#__layout {
  height: 100% !important;
  width: 100% !important;
}
</style>