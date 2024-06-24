<template>
  <canvas ref="canvas" class="w-full h-full absolute z-10 bg-slate-950" />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const canvas = ref<HTMLCanvasElement | null>(null);
let animationFrameId: number | null = null;
let lastFrameTime = 0;
const gap = 40;
const fps = 30;
const visiblePercentage = 0.7;
const stars: Array<{ x: number; y: number; opacity: number; fade: number; visible: boolean }> = [];

const createStars = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  stars.length = 0;
  for (let x = 0; x < width; x += gap) {
    for (let y = 0; y < height; y += gap) {
      stars.push({
        x,
        y,
        opacity: Math.random(),
        fade: Math.random() * 0.05,
        visible: Math.random() < visiblePercentage,
      });
    }
  }
};

const drawStars = (ctx: CanvasRenderingContext2D) => {
  ctx.clearRect(0, 0, canvas.value!.width, canvas.value!.height);
  stars.forEach(star => {
    if (star.visible) {
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, 1, 0, 2 * Math.PI, false);
      ctx.fill();
    }
  });
};

const updateStars = () => {
  stars.forEach(star => {
    star.opacity += star.fade;
    if (star.opacity <= 0 || star.opacity >= 1) {
      star.fade *= -1;
      star.visible = Math.random() < visiblePercentage;
    }
  });
};

const animate = (timestamp: number, ctx: CanvasRenderingContext2D) => {
  if (timestamp - lastFrameTime >= 1000 / fps) {
    drawStars(ctx);
    updateStars();
    lastFrameTime = timestamp;
  }
  animationFrameId = requestAnimationFrame((newTimestamp) => animate(newTimestamp, ctx));
};

const onResize = (ctx: CanvasRenderingContext2D) => {
  if (canvas.value) {
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;
    createStars(ctx, canvas.value.width, canvas.value.height);
  }
};

const handleResize = () => {
  if (canvas.value) {
    const ctx = canvas.value.getContext('2d');
    if (ctx) {
      onResize(ctx);
    }
  }
};

onMounted(() => {
  if (canvas.value) {
    const ctx = canvas.value.getContext('2d');
    if (ctx) {
      canvas.value.width = window.innerWidth;
      canvas.value.height = window.innerHeight;
      createStars(ctx, canvas.value.width, canvas.value.height);
      animationFrameId = requestAnimationFrame((timestamp) => animate(timestamp, ctx));
      window.addEventListener('resize', handleResize);
    }
  }
});

onBeforeUnmount(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
  }
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
canvas {
  display: block;
}
</style>
