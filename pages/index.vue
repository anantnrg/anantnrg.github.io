<template>
  <div class="w-full h-full flex flex-col overflow-auto">
    <div class="w-full min-h-full relative select-none">
      <div class="dark:dot-bkg-dark dot-bkg" />
    </div>
  </div>
</template>

<script lang="ts">

</script>

<style lang="scss">
.dot-bkg {
  width: 100%;
  height: 100%;
  background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
  background-size: 16px 16px;
  background-position: center center;
}

.dot-bkg-dark {
  width: 100%;
  height: 100%;
  background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
  background-size: 16px 16px;
}
</style>