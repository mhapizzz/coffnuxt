<template>
  <v-app>
    <div class="px-4 py-8 min-h-screen w-full bg-[#c5b7a9]">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-6">
          <template v-for="item in espresso" :key="item.id">
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
          </template>
        </div>

        <!-- <div class="col-span-6">
          <template v-for="category in nonCoffeeCategories" :key="category.id">
            <div class="menu-list-header font-light flex justify-between mt-8">
              <h4 class="menu-title mb-2">{{ category.name }}</h4>
            </div>
            <div 
              v-for="item in category.items" 
              :key="item.id"
              class="menu-list pb-2 mt-2 font-semibold flex justify-between"
            >
              <p class="menu-name text-sm">{{ item.name }}</p>
              <p class="menu-price text-sm">{{ item.price }}</p>
            </div>
          </template>
        </div> -->
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

// Computed properties for template
// Current approach (already very efficient)
const espresso = [menuData.coffee[0]];
const filter = [menuData.coffee[1]];
const kopsu = [menuData.coffee[2]];
const signature = [menuData.coffee[3]];

// NON COFFEE
const milk = [menuData.nonCoffee[0]];
const tea = [menuData.nonCoffee[1]];
const mocktail = [menuData.nonCoffee[2]];

// Alternative: Even faster direct references (no computed wrapper needed)
// const espresso = [menuData.coffee[0]];
// const filter = [menuData.coffee[1]];
// etc...

// Alternative: If you want to access items directly (fastest for template)
// const espressoItems = menuData.coffee[0].items;
// const filterItems = menuData.coffee[1].items;
// etc...

// Use whichever approach you prefer

onMounted(() => {
  // console.log('Espresso based category:', espressoBased.value);
  // console.log('Espresso based items only:', espressoBasedItems.value);
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
}
</style>
