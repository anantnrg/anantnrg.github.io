<template>
  <div
    class="antialiased w-full h-full flex flex-col bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-200 relative">
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