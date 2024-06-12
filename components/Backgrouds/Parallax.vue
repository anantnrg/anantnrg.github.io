<!-- Thanks Tibix:https://codepen.io/Tibixx/pen/xmOaWe -->
<template>
  <div class="overflow-hidden">
    <div id="bg_glow" class="z-1 absolute top-0 left-0 w-full h-full" />
    <div id="overlay2" class="z-[3] opacity-80 absolute top-0 left-0 w-full h-full" />
    <canvas id="canvas" class="absolute z-[2] top-0 left-0" />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  setup() {
    const canvas = ref(null);
    const bgg = ref(null);
    let ctx, w, h, dots = [], mx = 0, my = 0;
    const md = 100;
    const maxWidth = 15;
    const minWidth = 2;
    let maxHeight, minHeight;
    const maxSpeed = 35;
    const minSpeed = 6;
    let hue = 230;
    const hueDif = 50;
    const glow = 10;

    const pushDots = (num) => {
      for (let i = 1; i < md; i++) {
        dots.push({
          x: Math.random() * w,
          y: Math.random() * h / 2,
          h: Math.random() * (maxHeight - minHeight) + minHeight,
          w: Math.random() * (maxWidth - minWidth) + minWidth,
          c: Math.random() * ((hue + hueDif) - (hue - hueDif)) + (hue - hueDif),
          m: Math.random() * (maxSpeed - minSpeed) + minSpeed
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 1; i < dots.length; i++) {
        ctx.beginPath();
        const grd = ctx.createLinearGradient(dots[i].x, dots[i].y, dots[i].x + dots[i].w, dots[i].y + dots[i].h);
        grd.addColorStop(.0, `hsla(${dots[i].c},50%,50%,.0)`);
        grd.addColorStop(.2, `hsla(${dots[i].c + 20},50%,50%,.5)`);
        grd.addColorStop(.5, `hsla(${dots[i].c + 50},70%,60%,.8)`);
        grd.addColorStop(.8, `hsla(${dots[i].c + 80},50%,50%,.5)`);
        grd.addColorStop(1., `hsla(${dots[i].c + 100},50%,50%,.0)`);
        ctx.shadowBlur = glow;
        ctx.shadowColor = `hsla(${dots[i].c},50%,50%,1)`;
        ctx.fillStyle = grd;
        ctx.fillRect(dots[i].x, dots[i].y, dots[i].w, dots[i].h);
        ctx.closePath();
        dots[i].x += dots[i].m / 100;
        if (dots[i].x > w + maxWidth) {
          dots[i].x = -maxWidth;
        }
      }
      window.requestAnimationFrame(render);
    };

    const initializeCanvas = () => {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      maxHeight = h * .9;
      minHeight = h * .5;
      dots = [];
      pushDots();
      ctx.globalCompositeOperation = "lighter";
      bgg.value.style.background = `radial-gradient(ellipse at center, hsla(${hue},50%,50%,.8) 0%,rgba(0,0,0,0) 100%)`;
      render();
    };

    onMounted(() => {
      ctx = canvas.value.getContext("2d");
      window.addEventListener('resize', initializeCanvas);
      document.getElementById("overlay2").addEventListener('click', () => {
        hue = Math.random() * 360;
        bgg.value.style.background = `radial-gradient(ellipse at center, hsla(${hue},50%,50%,.8) 0%,rgba(0,0,0,0) 100%)`;
        dots = [];
        pushDots();
      });
      initializeCanvas();
    });

    return {
      canvas,
      bgg,
    };
  }
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
