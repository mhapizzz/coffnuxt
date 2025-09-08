<template>
  <v-app>
    <Preloader @preloader-complete="onPreloaderComplete" />
    <div class="px-4 py-8 min-h-screen w-full bg-[#c5b7a9]">
      <div ref="coffeeSection" class="grid grid-cols-12 gap-6">
        <div class="col-span-6">
          <template v-for="item in espresso" :key="item.id">
            <div class="menu-section" data-category="espresso">
              <div class="menu-list-header font-light flex justify-between mt-8">
                <h4 class="menu-title mb-2">{{ item.name }}</h4>
              </div>
              <div
                v-for="item in item.items"
                :key="item.id"
                class="menu-list pb-2 mt-2 font-semibold flex justify-between"
              >
                <p class="menu-name text-sm">{{ item.name }}</p>
                <p class="menu-price text-sm">{{ item.price }}</p>
              </div>
            </div>
          </template>
          <template v-for="item in filter" :key="item.id">
            <div class="menu-section" data-category="filter">
              <div class="menu-list-header font-light flex justify-between mt-8">
                <h4 class="menu-title mb-2">{{ item.name }}</h4>
              </div>
              <div
                v-for="item in item.items"
                :key="item.id"
                class="menu-list pb-2 mt-2 font-semibold flex justify-between"
              >
                <p class="menu-name text-sm">{{ item.name }}</p>
                <p class="menu-price text-sm">{{ item.price }}</p>
              </div>
            </div>
          </template>
        </div>

        <div class="col-span-6">
          <template v-for="item in kopsu" :key="item.id">
            <div class="menu-section" data-category="kopsu">
              <div class="menu-list-header font-light flex justify-between mt-8">
                <h4 class="menu-title mb-2">{{ item.name }}</h4>
              </div>
              <div
                v-for="item in item.items"
                :key="item.id"
                class="menu-list pb-2 mt-2 font-semibold flex justify-between"
              >
                <p class="menu-name text-sm">{{ item.name }}</p>
                <p class="menu-price text-sm">{{ item.price }}</p>
              </div>
            </div>
          </template>
          <template v-for="item in signature" :key="item.id">
            <div class="menu-section" data-category="signature">
              <div class="menu-list-header font-light flex justify-between mt-8">
                <h4 class="menu-title mb-2">{{ item.name }}</h4>
              </div>
              <div
                v-for="item in item.items"
                :key="item.id"
                class="menu-list pb-2 mt-2 font-semibold flex justify-between"
              >
                <p class="menu-name text-sm">{{ item.name }}</p>
                <p class="menu-price text-sm">{{ item.price }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div ref="mocktailSection" class="grid grid-cols-12 gap-6">
        <div class="col-span-6">
          <template v-for="item in mocktail" :key="item.id">
            <div class="menu-section" data-category="mocktail">
              <div class="menu-list-header font-light flex justify-between mt-8">
                <h4 class="menu-title mb-2">{{ item.name }}</h4>
              </div>
              <div
                v-for="item in item.items"
                :key="item.id"
                class="menu-list pb-2 mt-2 font-semibold flex justify-between"
              >
                <p class="menu-name text-sm">{{ item.name }}</p>
                <p class="menu-price text-sm">{{ item.price }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>

      <div ref="nonCoffeeSection" class="grid grid-cols-12 gap-6">
        <div class="col-span-6">
          <template v-for="item in milk" :key="item.id">
            <div class="menu-section" data-category="milk">
              <div class="menu-list-header font-light flex justify-between mt-8">
                <h4 class="menu-title mb-2">{{ item.name }}</h4>
              </div>
              <div
                v-for="item in item.items"
                :key="item.id"
                class="menu-list pb-2 mt-2 font-semibold flex justify-between"
              >
                <p class="menu-name text-sm">{{ item.name }}</p>
                <p class="menu-price text-sm">{{ item.price }}</p>
              </div>
            </div>
          </template>
        </div>
        <div class="col-span-6">
          <template v-for="item in tea" :key="item.id">
            <div class="menu-section" data-category="tea">
              <div class="menu-list-header font-light flex justify-between mt-8">
                <h4 class="menu-title mb-2">{{ item.name }}</h4>
              </div>
              <div
                v-for="item in item.items"
                :key="item.id"
                class="menu-list pb-2 mt-2 font-semibold flex justify-between"
              >
                <p class="menu-name text-sm">{{ item.name }}</p>
                <p class="menu-price text-sm">{{ item.price }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- <footer>
    </footer> -->
  </v-app>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { menuData } from "~/data/menuData.js";

gsap.registerPlugin(ScrollTrigger);

// Template refs
const coffeeSection = ref(null);
const mocktailSection = ref(null);
const nonCoffeeSection = ref(null);

// Computed properties for template
// Current approach (already very efficient)
const espresso = [menuData.coffee[0]];
const filter = [menuData.coffee[1]];
const kopsu = [menuData.coffee[2]];
const signature = [menuData.coffee[3]];
const mocktail = [menuData.mocktail[0]];

// NON COFFEE
const milk = [menuData.nonCoffee[0]];
const tea = [menuData.nonCoffee[1]];

const onPreloaderComplete = () => {
  // Start the main menu animations after preloader completes
  startMenuAnimations();
};

const startMenuAnimations = () => {
  // Set initial state for all menu sections
  const menuSections = document.querySelectorAll('.menu-section');
  gsap.set(menuSections, { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  });

  // Create main timeline for page load animations
  const tl = gsap.timeline({
    delay: 0.3 // Small delay to ensure DOM is ready
  });

  // Animate coffee section first
  if (coffeeSection.value) {
    const coffeeSections = coffeeSection.value.querySelectorAll('.menu-section');
    tl.to(coffeeSections, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out"
    });
  }

  // Animate mocktail section
  if (mocktailSection.value) {
    const mocktailSections = mocktailSection.value.querySelectorAll('.menu-section');
    tl.to(mocktailSections, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.3");
  }

  // Animate non-coffee section last
  if (nonCoffeeSection.value) {
    const nonCoffeeSections = nonCoffeeSection.value.querySelectorAll('.menu-section');
    tl.to(nonCoffeeSections, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.4");
  }
};

const setupHoverEffects = () => {
  // Add subtle hover effects to menu items
  const menuItems = document.querySelectorAll('.menu-list');
  menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        x: 5,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        x: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });
};

onMounted(() => {
  // Set up hover effects immediately
  setupHoverEffects();
  // Main animations will be triggered by preloader completion event
});
</script>

<style scoped>
.menu-list-container {
  font-size: 14px;
  color: #333;
}
.menu-list {
  border-bottom: 1px dotted #333;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
}

.menu-section {
  will-change: transform, opacity;
  transform-origin: center;
}

.menu-list-header {
  will-change: transform;
}

.menu-title {
  will-change: transform;
}

/* Add subtle animation for menu items on hover */
.menu-list:hover {
  cursor: pointer;
}

/* Ensure smooth transitions */
* {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
</style>
