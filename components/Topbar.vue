<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="topbar rounded-xl w-full relative z-10 px-4 py-4 flex items-center justify-between bg-[var(--surface-color)] shadow-md inset-shadow-xs"
  >
    <button 
      class="cursor-pointer p-2 hover:bg-[var(--primary-color)] rounded transition-colors" 
      @click="handleToggle"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M15 15H3v2h12zm0-8H3v2h12zM3 13h18v-2H3zm0 8h18v-2H3zM3 3v2h18V3z"
        />
      </svg>
    </button>

    <div class="info">
      <p>Halo, Hapiz</p>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const toggleSidebar = inject('toggleSidebar')

const handleToggle = () => {
  // console.log('Toggle button clicked!');
  if (toggleSidebar) {
    toggleSidebar();
  } else {
    console.error('toggleSidebar function not found!');
  }
};
</script>
