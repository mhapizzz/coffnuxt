<template>
  <v-app>
    <Preloader @preloader-complete="onPreloaderComplete" />
    <div
      ref="bgDiv"
      class="h-[60vh] w-full flex items-end justify-start relative"
      style="background: #fe0000"
    >
      <img
        ref="logoStrHead"
        src="/images/str-black.svg"
        alt="Logo"
        class="h-80 opacity-30 absolute bottom-0 right-0 me-8 mb-8"
      />

      <div class="mb-8">
        <h2
          ref="title"
          class="text-black text-8xl font-bold"
          style="letter-spacing: -7px"
        >
          {{ titleText }}
        </h2>
        <p ref="subtitle" class="text-black ms-2">{{ subtitleText }}</p>
      </div>
    </div>
    <section class="min-h-screen w-full bg-blue-300 overflow-hidden relative">
      <v-parallax
        src="https://images.unsplash.com/photo-1629561585871-41a27c86e825?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        class="w-full h-full object-cover"
      >
        <div class="w-full h-full flex flex-col justify-center items-center">
          <h1
            class="text-4xl heading-font px-4 py-1 rounded-lg text-[#1c1c1c] bg-[#fafafa] mt-24"
            style="margin-bottom: -0.5rem; box-shadow: -5px 5px 9px #e1e1e1"
          >
            AMERICANO
          </h1>
          <h4
            class="subheading px-4 py-1 rounded-lg text-[#1c1c1c] bg-[#fafafa]"
            style="box-shadow: -5px 5px 9px #e1e1e1"
          >
            Kopi hitam klasik, strong dan bold.
          </h4>
        </div>
      </v-parallax>
    </section>
    <section class="min-h-screen w-full bg-blue-300 overflow-hidden relative">
      <v-parallax
        src="https://images.unsplash.com/photo-1717398804885-a6c22b3e5c2f?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        class="w-full h-full object-cover"
      >
        <div class="w-full h-full flex flex-col justify-center items-center">
          <h1
            class="text-4xl heading-font px-4 py-1 rounded-lg text-[#1c1c1c] bg-[#fafafa] mt-24"
            style="margin-bottom: -0.5rem; box-shadow: -5px 5px 9px #e1e1e1"
          >
            MATCHA
          </h1>
          <h4
            class="subheading px-4 py-1 rounded-lg text-[#1c1c1c] bg-[#fafafa]"
            style="box-shadow: -5px 5px 9px #e1e1e1"
          >
            Teh hijau Jepang dengan susu lembut.
          </h4>
        </div>
      </v-parallax>
    </section>
    <section class="min-h-screen w-full bg-blue-300 overflow-hidden relative">
      <v-parallax
        src="https://images.unsplash.com/photo-1661942477265-c6e3fbebb714?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        class="w-full h-full object-cover"
      >
        <div
          class="w-full h-full flex flex-col justify-center items-center px-2"
        >
          <h1
            class="text-4xl heading-font px-4 py-1 rounded-lg text-[#1c1c1c] bg-[#fafafa] mt-24"
            style="margin-bottom: -0.5rem; box-shadow: -5px 5px 9px #e1e1e1"
          >
            MOCKTAIL
          </h1>
          <h4
            class="subheading px-4 py-1 rounded-lg text-[#1c1c1c] bg-[#fafafa] text-center"
            style="box-shadow: -5px 5px 9px #e1e1e1"
          >
            Kreasi kopi segar dengan rasa unik: Splash, Enigma, Fairy, Oriental.
          </h4>
        </div>
      </v-parallax>
    </section>
    <section
      class="grid grid-cols-12 grid-rows-12 h-[40vh] w-full gap-4 mt-4 px-2"
    >
      <div
        class="card col-span-6 row-span-5 rounded-xl overflow-hidden object-cover relative cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-95 before:absolute before:inset-0 before:bg-white/30"
        style="
          background: url('https://images.unsplash.com/photo-1557361954-84b24e6af7fb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
          background-size: cover;
          background-position: center;
        "
        @click="handleCardClick('beverages')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="icon size-12 absolute top-4 right-4 transition-transform duration-300 group-hover:rotate-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
        <h1 class="title text-2xl absolute bottom-4 left-4">COFFEE</h1>
      </div>
      <div
        class="card col-span-6 row-span-5 rounded-xl overflow-hidden object-cover relative cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-95 before:absolute before:inset-0 before:bg-white/30"
        style="
          background: url('https://images.unsplash.com/photo-1722478347120-9cf07a219d9f?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
          background-size: cover;
          background-position: center;
        "
        @click="handleCardClick('beverages')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="icon size-12 absolute top-4 right-4 transition-transform duration-300 group-hover:rotate-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
        <h1 class="title text-2xl absolute bottom-4 left-4">NON COFFEE</h1>
      </div>
      <div
        class="card col-span-12 row-span-5 rounded-xl overflow-hidden object-cover relative cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-95 before:absolute before:inset-0 before:bg-white/30"
        style="
          background: url('https://images.unsplash.com/photo-1518013431117-eb1465fa5752?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
          background-size: cover;
          background-position: center;
        "
        @click="handleCardClick"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="icon size-12 absolute top-4 right-4 transition-transform duration-300 group-hover:rotate-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
        <h1 class="title text-2xl absolute bottom-4 left-4">EATERY</h1>
      </div>
    </section>

    <!-- <footer>
    </footer> -->
  </v-app>
</template>

<script setup>
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useRouter } from "vue-router";

const router = useRouter();

gsap.registerPlugin(ScrollTrigger);

// References to DOM elements
const bgDiv = ref(null);
const logoStrHead = ref(null);
const title = ref(null);
const subtitle = ref(null);

// Text content for typewriter effect
const titleText = "STATERA";
const subtitleText = "Kedai kopi modern dengan berbagai pilihan minuman.";

const handleCardClick = (menu) => {
  // You can add your click handling logic here
  console.log("Card clicked!");
  if (menu === "beverages") {
    router.push("/menu/beverages");
  }
};

const onPreloaderComplete = () => {
  // Start the main animations after preloader completes
  startMainAnimations();
};

const startMainAnimations = () => {
  // Set up text content and initial states
  title.value.textContent = titleText;
  subtitle.value.textContent = subtitleText;

  gsap.set([title.value, subtitle.value], { opacity: 0, y: 50 });
  gsap.set(logoStrHead.value, { opacity: 0, x: 400 });

  // Main timeline for hero animations
  const tl = gsap.timeline();
  tl.from(bgDiv.value, {
    y: "-100%",
    duration: 1,
    ease: "power2.out",
  })
    .to(
      logoStrHead.value,
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    )
    .to(
      title.value,
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.3"
    )
    .to(
      subtitle.value,
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    );
};

onMounted(() => {
  // Main animations will be triggered by preloader completion event
});
</script>

<style scoped>
.h-\[60vh\] {
  will-change: transform;
}
</style>
