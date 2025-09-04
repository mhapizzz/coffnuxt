<template>
  <v-app>
    <div class="min-h-screen w-full px-4" style="background: #C5B7A9">
      <div
        class="menu-list-container flex flex-col gap-2"
        style="margin-top: 5rem"
      >
        <!-- Espresso -->
        <div
          class="menu-list-header font-bold flex justify-between text-lg mt-8"
        >
          <h4>Espresso Based</h4>
        </div>
        <div class="menu-list font-semibold flex justify-between">
          <h4 class="menu-name">Americano</h4>
          <h4 class="menu-price">20.000</h4>
        </div>
        <div class="menu-list font-semibold flex justify-between">
          <h4 class="menu-name">Caffe Latte</h4>
          <h4 class="menu-price">25.000</h4>
        </div>
        <div class="menu-list font-semibold flex justify-between">
          <h4 class="menu-name">Piccolo</h4>
          <h4 class="menu-price">23.000</h4>
        </div>
        <div class="menu-list font-semibold flex justify-between">
          <h4 class="menu-name">Split Shot</h4>
          <h4 class="menu-price">25.000</h4>
        </div>
        <div class="menu-list font-semibold flex justify-between">
          <h4 class="menu-name">Cappuccino</h4>
          <h4 class="menu-price">28.000</h4>
        </div>
        <!-- Special Beans Filter -->
        <div
          class="menu-list-header font-bold flex justify-between text-lg mt-8"
        >
          <h4>Special Beans Filter</h4>
        </div>
        <div class="menu-list font-semibold flex justify-between">
          <h4 class="menu-name">Lokal</h4>
          <h4 class="menu-price">27.000</h4>
        </div>
        <div class="menu-list font-semibold flex justify-between">
          <h4 class="menu-name">Internasional</h4>
          <h4 class="menu-price">30.000</h4>
        </div>
        <!-- Kopi Susu -->
        <div
          class="menu-list-header font-bold flex justify-between text-lg mt-8"
        >
          <h4>Kopi Susu</h4>
        </div>
        <div class="menu-list font-semibold flex justify-between">
          <h4 class="menu-name">Nera</h4>
          <h4 class="menu-price">20.000</h4>
        </div>
        <div class="menu-list font-semibold flex justify-between">
          <h4 class="menu-name">Cheeza</h4>
          <h4 class="menu-price">25.000</h4>
        </div>
        <div class="menu-list font-semibold flex justify-between">
          <h4 class="menu-name">Zulle</h4>
          <h4 class="menu-price">25.000</h4>
        </div>
        <div class="menu-list font-semibold flex justify-between">
          <h4 class="menu-name">Seline</h4>
          <h4 class="menu-price">25.000</h4>
        </div>
        <div class="menu-list font-semibold flex justify-between">
          <h4 class="menu-name">Nasty</h4>
          <h4 class="menu-price">25.000</h4>
        </div>
        <div class="menu-list font-semibold flex justify-between">
          <h4 class="menu-name">Scooties</h4>
          <h4 class="menu-price">25.000</h4>
        </div>
        <div
          class="menu-list-header font-bold flex justify-between text-lg mt-8"
        >
          <h4>Signature</h4>
        </div>
        <div class="menu-list font-semibold flex justify-between">
          <h4 class="menu-name">Kopi Susu Kilat</h4>
          <h4 class="menu-price">15.000</h4>
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

gsap.registerPlugin(ScrollTrigger);

// References to DOM elements

onMounted(() => {});
</script>

<style scoped>
.menu-list-container {
  font-size: 14px;
  color: #333;
}
.menu-list {
  border-bottom: 2px dotted #333;
  margin-bottom: 0.5rem;
}
</style>
