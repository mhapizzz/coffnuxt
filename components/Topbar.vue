<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    :class="[
      'topbar fixed top-0 left-0 right-0 w-full z-10 px-2 py-4 flex items-center justify-between ',
      { 'shadow-xs backdrop-blur-xs rounded-b-lg': isScrolled },
    ]"
    style="transition: all 0.3s ease-in-out"
  >
    <div class="logo">
      <img
        ref="logoStr"
        src="/images/str-black.svg"
        alt="Logo"
        class="h-8 logoStr"
      />
    </div>

    <button
      type="button"
      class="cursor-pointer p-2 hover:bg-[var(--primary-color)] rounded transition-colors"
      @click="handleToggle"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
    <!-- <div class="info flex items-center gap-4">
      <p class="text-sm text-gray-600">Scroll Y: {{ Math.round(scrollY) }}px</p>
    </div> -->
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const logoStr = ref(null);

const isScrolled = ref(false);
const scrollY = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY;
  isScrolled.value = scrollY.value > 28;
  // isScrolled.value = scrollY.value > 16;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // Initialize scroll position
  // scrollY.value = window.scrollY
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
