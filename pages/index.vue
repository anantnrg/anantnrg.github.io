<template>
  <div class="w-full h-full flex flex-col overflow-auto">
    <div class="w-full min-h-full relative select-none">
      <div class="dark:grid-bkg-dark grid-bkg" />
    </div>
  </div>
</template>

<script lang="ts">

</script>

<style lang="scss">
.grid-bkg {
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(to right, rgba(#475569, 0.4) 2px, transparent 2px),
    linear-gradient(to bottom, rgba(#475569, 0.4) 2px, transparent 2px);
  background-size: 6rem 6rem;
  background-position: center center;
}

.grid-bkg-dark {
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(to right, rgba(#475569, 0.2) 2px, transparent 2px),
    linear-gradient(to bottom, rgba(#475569, 0.2) 2px, transparent 2px);
  background-size: 6rem 6rem;
  background-position: center center;
}
</style>