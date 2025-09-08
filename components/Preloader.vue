<template>
  <div
    v-if="showPreloader"
    class="fixed inset-0 z-50 bg-white flex items-center justify-center"
  >
    <img
      ref="preloaderLogo"
      src="/images/str.svg"
      alt="Preloader Logo"
      class="h-32"
    />
  </div>
</template>

<script setup>
import { gsap } from "gsap";

// Props
const props = defineProps({
  duration: {
    type: Number,
    default: 1.5
  },
  blinkDuration: {
    type: Number,
    default: 0.5
  }
});

// Emits
const emit = defineEmits(['preloader-complete']);

// Reactive data
const showPreloader = ref(true);
const preloaderLogo = ref(null);

onMounted(() => {
  // Preloader animation timeline
  const preTl = gsap.timeline({
    onComplete: () => {
      showPreloader.value = false;
      emit('preloader-complete');
    },
  });

  // Blink effect (opacity up & down)
  preTl
    .to(preloaderLogo.value, {
      opacity: 0,
      duration: props.blinkDuration,
      repeat: 1, // blink once
      yoyo: true,
      ease: "power1.inOut",
    })
    // Zoom in + fade out
    .to(preloaderLogo.value, {
      scale: 10,
      opacity: 0,
      duration: props.duration,
      ease: "power2.inOut",
    });
});
</script>

<style scoped>
.preloader-container {
  will-change: transform, opacity;
}
</style>
