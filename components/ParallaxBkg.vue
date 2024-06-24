<template>
  <canvas ref="canvas" class="w-full h-full absolute z-10 bg-slate-950"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const canvas = ref<HTMLCanvasElement | null>(null);
let animationFrameId: number | null = null;
let lastFrameTime = 0;
const gap = 40;
const fps = 30;
const visiblePercentage = 0.4;
const stars: Array<{ x: number; y: number; opacity: number; fade: number; targetOpacity: number }> = [];

const createStars = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  stars.length = 0;
  for (let x = 0; x < width; x += gap) {
    for (let y = 0; y < height; y += gap) {
      const isVisible = Math.random() < visiblePercentage;
      stars.push({
        x,
        y,
        opacity: isVisible ? 1 : 0,
        fade: Math.random() * 0.02 + 0.01,
        targetOpacity: isVisible ? 1 : 0,
      });
    }
  }
};

const drawStars = (ctx: CanvasRenderingContext2D) => {
  ctx.clearRect(0, 0, canvas.value!.width, canvas.value!.height);
  stars.forEach(star => {
    if (star.opacity > 0) {
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, 1, 0, 2 * Math.PI, false);
      ctx.fill();
    }
  });
};

const updateStars = () => {
  let visibleStarsCount = stars.filter(star => star.opacity > 0.1).length;
  const desiredVisibleStars = Math.floor(stars.length * visiblePercentage);

  stars.forEach(star => {
    if (star.opacity !== star.targetOpacity) {
      if (star.opacity < star.targetOpacity) {
        star.opacity += star.fade;
        if (star.opacity > star.targetOpacity) {
          star.opacity = star.targetOpacity;
        }
      } else {
        star.opacity -= star.fade;
        if (star.opacity < star.targetOpacity) {
          star.opacity = star.targetOpacity;
        }
      }
    }
  });

  stars.forEach(star => {
    if (visibleStarsCount > desiredVisibleStars && star.opacity > 0.1 && Math.random() < 0.01) {
      star.targetOpacity = 0;
      visibleStarsCount--;
    } else if (visibleStarsCount < desiredVisibleStars && star.opacity < 0.1 && Math.random() < 0.01) {
      star.targetOpacity = 1;
      visibleStarsCount++;
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
