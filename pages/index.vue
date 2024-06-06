<template>
  <div class="w-full h-auto flex flex-col flex-grow">
    <div class="w-full min-h-screen relative select-none">
      <div class="grid-bkg" />
    </div>
  </div>
</template>

<script lang="ts">

</script>

<style>
.grid-bkg {
  width: 100%;
  height: 100%;
  /* background-image:
    linear-gradient(to right, rgba(88, 0, 255, 0.4) 2px, transparent 2px),
    linear-gradient(to bottom, rgba(88, 0, 255, 0.4) 2px, transparent 2px); */
  background-size: 2rem 2rem;
  background-position: center center;
  background-color: #11111b;
}
</style>