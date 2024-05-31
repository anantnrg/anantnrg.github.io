<template>
  <div class="w-full h-full flex flex-col bg-slate-900 text-slate-300">
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