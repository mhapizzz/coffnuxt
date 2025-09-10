<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="topbar-wrapper">
    <div
      :class="[
        'topbar fixed top-0 left-0 right-0 w-full z-10 px-2 py-4 flex items-center justify-between',
        { 'shadow-xs backdrop-blur-xs': isScrolled },
        { 'rounded-b-lg': isScrolled && !isMenuOpen },
        { 'bg-white rounded-b-none': isMenuOpen },
      ]"
      style="transition: all 0.3s ease-in-out"
    >
      <div class="logo relative overflow-hidden">
        <!-- SVG Logo -->
        <img
          ref="logoStr"
          src="/images/str-black.svg"
          alt="Logo"
          :class="[
            'h-8 logoStr transition-all duration-500 ease-in-out',
            isMenuOpen
              ? 'opacity-0 transform -translate-x-full'
              : 'opacity-100 transform translate-x-0',
          ]"
        />
        <!-- Text Logo -->
        <div
          :class="[
            'absolute top-0 left-0 h-8 flex items-center font-bold text-lg text-[#FE0000] transition-all duration-500 ease-in-out whitespace-nowrap',
            isMenuOpen
              ? 'opacity-100 transform translate-x-0'
              : 'opacity-0 transform translate-x-full',
          ]"
        >
          STATERA
        </div>
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
          <!-- Top line -->
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            :d="isMenuOpen ? 'M6 18L18 6' : 'M3.75 6.75h16.5'"
            class="hamburger-line transition-all duration-300 ease-in-out"
          />
          <!-- Middle line -->
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 12h16.5"
            :class="[
              'hamburger-line transition-all duration-300 ease-in-out',
              { 'opacity-0': isMenuOpen },
            ]"
          />
          <!-- Bottom line -->
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            :d="isMenuOpen ? 'M6 6l12 12' : 'M3.75 17.25h16.5'"
            class="hamburger-line transition-all duration-300 ease-in-out"
          />
        </svg>
      </button>
    </div>

    <!-- Toggle Menu -->
    <div
      :class="[
        'toggle-menu fixed left-0 right-0 z-11 bg-white shadow-lg overflow-hidden transition-all duration-500 ease-in-out',
        isMenuOpen ? 'menu-open' : 'menu-closed',
      ]"
      :style="{ top: topbarHeight + 'px' }"
    >
      <div class="menu-content p-6">
        <nav class="space-y-4">
          <h4 class="text-xl font-semibold mb-4">Menu Kami</h4>
             <div class="flex items-center gap-4">
               <div
                 class="border-b-2 border-dotted flex justify-between items-center gap-8 py-2 px-1 flex-1 cursor-pointer hover:bg-gray-50 transition-colors"
                 @click="handleNavigation('/menu/beverages')"
               >
                 Minuman
 
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke-width="1.5"
                   stroke="currentColor"
                   class="icon size-6 transition-transform duration-300 group-hover:rotate-12"
                 >
                   <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                   />
                 </svg>
               </div>
               
               <!-- Skewed Divider -->
               <div class="h-12 w-px bg-black transform -skew-x-12 origin-center"></div>
               
               <div
                 class="border-b-2 border-dotted flex justify-between items-center gap-8 py-2 px-1 flex-1 cursor-pointer hover:bg-gray-50 transition-colors"
                 @click="handleNavigation('/menu/foods')"
               >
                 Makanan
 
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke-width="1.5"
                   stroke="currentColor"
                   class="icon size-6 transition-transform duration-300 group-hover:rotate-12"
                 >
                   <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                   />
                 </svg>
               </div>
             </div>
        </nav>
      </div>
    </div>

    <!-- Overlay -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-transparent bg-opacity-50 z-8 transition-opacity duration-300"
      @click="closeMenu"
    ></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from "vue";

const logoStr = ref(null);

const isScrolled = ref(false);
const scrollY = ref(0);
const isMenuOpen = ref(false);

// Calculate topbar height dynamically
const topbarHeight = computed(() => {
  // Base height (py-4 = 32px total) + logo height (h-8 = 32px) = approximately 64px
  return 64;
});

const handleScroll = () => {
  scrollY.value = window.scrollY;
  isScrolled.value = scrollY.value > 28;
};

const handleToggle = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleNavigation = (path) => {
  // Navigate to the specified path
  navigateTo(path);
  
  // Close the menu
  closeMenu();
};

// Close menu on escape key
const handleKeydown = (event) => {
  if (event.key === "Escape" && isMenuOpen.value) {
    closeMenu();
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<style scoped>
.toggle-menu {
  transform-origin: top;
}

.topbar-menu-open {
  border: 0 !important;
}

.menu-closed {
  height: 0;
  opacity: 0;
  transform: scaleY(0);
}

.menu-open {
  height: 40vh;
  opacity: 1;
  transform: scaleY(1);
}

.menu-content {
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.3s ease-in-out 0.2s, transform 0.3s ease-in-out 0.2s;
}

.menu-open .menu-content {
  opacity: 1;
  transform: translateY(0);
}

/* Ensure smooth scrolling for menu content if it overflows */
.toggle-menu {
  overflow-y: auto;
}

/* Custom scrollbar for better appearance */
.toggle-menu::-webkit-scrollbar {
  width: 6px;
}

.toggle-menu::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.toggle-menu::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.toggle-menu::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .menu-open {
    height: 40vh;
  }

  .menu-content {
    padding: 1rem;
  }
}

/* Animation for hamburger icon */
.hamburger-line {
  transform-origin: center;
}

/* Smooth transition for all hamburger elements */
.size-6 {
  transition: transform 0.3s ease-in-out;
}

/* Logo animation styles */
.logo {
  min-width: 120px; /* Ensure enough space for text */
  height: 32px; /* h-8 = 32px */
}

.logo .logoStr,
.logo div {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Ensure text doesn't wrap and maintains proper spacing */
.logo div {
  letter-spacing: 0.5px;
  font-weight: 700;
}
</style>
