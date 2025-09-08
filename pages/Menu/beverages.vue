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
                v-for="menuItem in item.items"
                :key="menuItem.id"
                class="menu-item menu-list pb-2 mt-2 font-semibold flex justify-between"
              >
                <p class="menu-name text-sm">{{ menuItem.name }}</p>
                <p class="menu-price text-sm">{{ menuItem.price }}</p>
              </div>
            </div>
          </template>
          <template v-for="item in filter" :key="item.id">
            <div class="menu-section" data-category="filter">
              <div class="menu-list-header font-light flex justify-between mt-8">
                <h4 class="menu-title mb-2">{{ item.name }}</h4>
              </div>
              <div
                v-for="menuItem in item.items"
                :key="menuItem.id"
                class="menu-item menu-list pb-2 mt-2 font-semibold flex justify-between"
              >
                <p class="menu-name text-sm">{{ menuItem.name }}</p>
                <p class="menu-price text-sm">{{ menuItem.price }}</p>
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
                v-for="menuItem in item.items"
                :key="menuItem.id"
                class="menu-item menu-list pb-2 mt-2 font-semibold flex justify-between"
              >
                <p class="menu-name text-sm">{{ menuItem.name }}</p>
                <p class="menu-price text-sm">{{ menuItem.price }}</p>
              </div>
            </div>
          </template>
          <template v-for="item in signature" :key="item.id">
            <div class="menu-section" data-category="signature">
              <div class="menu-list-header font-light flex justify-between mt-8">
                <h4 class="menu-title mb-2">{{ item.name }}</h4>
              </div>
              <div
                v-for="menuItem in item.items"
                :key="menuItem.id"
                class="menu-item menu-list pb-2 mt-2 font-semibold flex justify-between"
              >
                <p class="menu-name text-sm">{{ menuItem.name }}</p>
                <p class="menu-price text-sm">{{ menuItem.price }}</p>
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
                v-for="menuItem in item.items"
                :key="menuItem.id"
                class="menu-item menu-list pb-2 mt-2 font-semibold flex justify-between"
              >
                <p class="menu-name text-sm">{{ menuItem.name }}</p>
                <p class="menu-price text-sm">{{ menuItem.price }}</p>
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
                v-for="menuItem in item.items"
                :key="menuItem.id"
                class="menu-item menu-list pb-2 mt-2 font-semibold flex justify-between"
              >
                <p class="menu-name text-sm">{{ menuItem.name }}</p>
                <p class="menu-price text-sm">{{ menuItem.price }}</p>
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
                v-for="menuItem in item.items"
                :key="menuItem.id"
                class="menu-item menu-list pb-2 mt-2 font-semibold flex justify-between"
              >
                <p class="menu-name text-sm">{{ menuItem.name }}</p>
                <p class="menu-price text-sm">{{ menuItem.price }}</p>
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
  // Set initial state for all menu sections and items
  const menuSections = document.querySelectorAll('.menu-section');
  const menuItems = document.querySelectorAll('.menu-item');
  const menuTitles = document.querySelectorAll('.menu-title');
  
  gsap.set(menuSections, { 
    opacity: 0, 
    y: 20
  });
  
  gsap.set(menuTitles, {
    opacity: 0,
    x: -30
  });
  
  gsap.set(menuItems, {
    opacity: 0,
    x: 20,
    scale: 0.95
  });

  // Create main timeline for initial visible content
  const tl = gsap.timeline({
    delay: 0.3
  });

  // Animate sections that are initially visible
  const initialSections = document.querySelectorAll('.menu-section');
  
  initialSections.forEach((section, _index) => {
    const sectionTitle = section.querySelector('.menu-title');
    const sectionItems = section.querySelectorAll('.menu-item');
    
    // Check if section is in viewport initially
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isVisible) {
      // Animate sections that are initially visible
      tl.to(section, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      }, _index * 0.1)
      .to(sectionTitle, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.2")
      .to(sectionItems, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.4,
        stagger: 0.08,
        ease: "power2.out"
      }, "-=0.3");
    }
  });
  
  // Set up scroll-triggered animations for sections not initially visible
  setupScrollAnimations();
};

const setupScrollAnimations = () => {
  // Create scroll-triggered animations for each menu section
  const menuSections = document.querySelectorAll('.menu-section');
  
  menuSections.forEach((section, _index) => {
    const sectionTitle = section.querySelector('.menu-title');
    const sectionItems = section.querySelectorAll('.menu-item');
    
    // Check if section is initially visible
    const rect = section.getBoundingClientRect();
    const isInitiallyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    // Only create ScrollTrigger for sections not initially visible
    if (!isInitiallyVisible) {
      // Create ScrollTrigger for the section container
      ScrollTrigger.create({
        trigger: section,
        start: "top 85%",
        end: "bottom 15%",
        onEnter: () => {
          // Animate section container
          gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out"
          });
          
          // Animate title
          gsap.to(sectionTitle, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            delay: 0.1
          });
          
          // Animate items with stagger
          gsap.to(sectionItems, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.08,
            ease: "power2.out",
            delay: 0.2
          });
        },
        onLeave: () => {
          // Optional: fade out when scrolling past (uncomment if desired)
          // gsap.to(section, {
          //   opacity: 0.3,
          //   duration: 0.3
          // });
        },
        onEnterBack: () => {
          // Ensure section is visible when scrolling back up
          gsap.to(section, {
            opacity: 1,
            duration: 0.3
          });
        }
      });
      
      // Create individual ScrollTriggers for menu items for more granular control
      sectionItems.forEach((item, itemIndex) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 90%",
          onEnter: () => {
            gsap.to(item, {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.4,
              ease: "power2.out",
              delay: itemIndex * 0.05 // Slight stagger for individual items
            });
          }
        });
      });
    }
  });
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
