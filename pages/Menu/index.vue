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
    <section
      ref="americanoSection"
      class="min-h-screen w-full overflow-hidden relative"
    >
      <v-parallax
        src="https://images.unsplash.com/photo-1629561585871-41a27c86e825?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        class="w-full h-full object-cover"
      >
        <div class="w-full h-full flex flex-col justify-center items-center">
          <h1
            ref="americanoTitle"
            class="text-4xl heading-font px-4 py-1 rounded-lg text-[#1c1c1c] bg-[#fafafa] mt-24"
            style="margin-bottom: -0.5rem; box-shadow: -5px 5px 9px #e1e1e1"
          >
            AMERICANO
          </h1>
          <h4
            ref="americanoSubtitle"
            class="subheading px-4 py-1 rounded-lg text-[#1c1c1c] bg-[#fafafa]"
            style="box-shadow: -5px 5px 9px #e1e1e1"
          >
            Kopi hitam klasik, strong dan bold.
          </h4>
        </div>
      </v-parallax>
    </section>
    <section
      ref="matchaSection"
      class="min-h-screen w-full overflow-hidden relative"
    >
      <v-parallax
        src="https://images.unsplash.com/photo-1717398804885-a6c22b3e5c2f?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        class="w-full h-full object-cover"
      >
        <div class="w-full h-full flex flex-col justify-center items-center">
          <h1
            ref="matchaTitle"
            class="text-4xl heading-font px-4 py-1 rounded-lg text-[#1c1c1c] bg-[#fafafa] mt-24"
            style="margin-bottom: -0.5rem; box-shadow: -5px 5px 9px #e1e1e1"
          >
            MATCHA
          </h1>
          <h4
            ref="matchaSubtitle"
            class="subheading px-4 py-1 rounded-lg text-[#1c1c1c] bg-[#fafafa]"
            style="box-shadow: -5px 5px 9px #e1e1e1"
          >
            Teh hijau Jepang dengan susu lembut.
          </h4>
        </div>
      </v-parallax>
    </section>
    <section
      ref="mocktailSection"
      class="min-h-screen w-full overflow-hidden relative"
    >
      <v-parallax
        src="https://images.unsplash.com/photo-1661942477265-c6e3fbebb714?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        class="w-full h-full object-cover"
      >
        <div
          class="w-full h-full flex flex-col justify-center items-center px-2"
        >
          <h1
            ref="mocktailTitle"
            class="text-4xl heading-font px-4 py-1 rounded-lg text-[#1c1c1c] bg-[#fafafa] mt-24"
            style="margin-bottom: -0.5rem; box-shadow: -5px 5px 9px #e1e1e1"
          >
            MOCKTAIL
          </h1>
          <h4
            ref="mocktailSubtitle"
            class="subheading px-4 py-1 rounded-lg text-[#1c1c1c] bg-[#fafafa] text-center"
            style="box-shadow: -5px 5px 9px #e1e1e1"
          >
            Kreasi kopi segar dengan rasa unik: Splash, Enigma, Fairy, Oriental.
          </h4>
        </div>
      </v-parallax>
    </section>
    <section
      ref="menuCardsSection"
      class="w-full py-8 px-4 space-y-6"
    >
      <div
        ref="beverageCard"
        class="card mb-8 h-48 md:h-56 w-full rounded-xl overflow-hidden object-cover relative cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-95 before:absolute before:inset-0 before:bg-white/30"
        style="
          background: url('https://images.unsplash.com/photo-1557361954-84b24e6af7fb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
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
          class="icon size-12 absolute top-4 right-4 transition-transform duration-300 group-hover:rotate-12 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
        <h1 class="title text-2xl md:text-3xl font-bold absolute bottom-4 left-4 text-white">BEVERAGES</h1>
      </div>
      <div
        ref="eateryCard"
        class="card h-48 md:h-56 w-full rounded-xl overflow-hidden object-cover relative cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-95 before:absolute before:inset-0 before:bg-white/30"
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
          class="icon size-12 absolute top-4 right-4 transition-transform duration-300 group-hover:rotate-12 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
        <h1 class="title text-2xl md:text-3xl font-bold absolute bottom-4 left-4 text-white">EATERY</h1>
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

// Section references
const americanoSection = ref(null);
const americanoTitle = ref(null);
const americanoSubtitle = ref(null);
const matchaSection = ref(null);
const matchaTitle = ref(null);
const matchaSubtitle = ref(null);
const mocktailSection = ref(null);
const mocktailTitle = ref(null);
const mocktailSubtitle = ref(null);

// Menu cards references
const menuCardsSection = ref(null);
const beverageCard = ref(null);
const eateryCard = ref(null);

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
  setupScrollAnimations();
};

const startMainAnimations = () => {
  // Set up text content and initial states
  title.value.textContent = titleText;
  subtitle.value.textContent = subtitleText;

  gsap.set([title.value, subtitle.value], { opacity: 0, y: 50 });
  gsap.set(logoStrHead.value, { opacity: 0, x: 400, rotation: -10 });

  // Enhanced main timeline for hero animations
  const tl = gsap.timeline();
  tl.from(bgDiv.value, {
    y: "-100%",
    duration: 1.2,
    ease: "power3.out",
  })
    .to(
      logoStrHead.value,
      {
        opacity: 0.3,
        x: 0,
        rotation: 0,
        duration: 1,
        ease: "back.out(1.7)",
      },
      "-=0.6"
    )
    .to(
      title.value,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.4"
    )
    .to(
      subtitle.value,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.6"
    )
    .from(
      bgDiv.value,
      {
        scale: 1.1,
        duration: 2,
        ease: "power1.out",
      },
      0
    );
};

const setupScrollAnimations = () => {
  // Animate parallax sections on scroll
  const sections = [
    {
      section: americanoSection.value,
      title: americanoTitle.value,
      subtitle: americanoSubtitle.value,
    },
    {
      section: matchaSection.value,
      title: matchaTitle.value,
      subtitle: matchaSubtitle.value,
    },
    {
      section: mocktailSection.value,
      title: mocktailTitle.value,
      subtitle: mocktailSubtitle.value,
    },
  ];

  sections.forEach((item, index) => {
    // Set initial states
    gsap.set([item.title, item.subtitle], {
      opacity: 0,
      y: 60,
      scale: 0.8,
    });

    // Create scroll trigger animation
    ScrollTrigger.create({
      trigger: item.section,
      start: "top 70%",
      end: "bottom 30%",
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to(item.title, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        }).to(
          item.subtitle,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        );
      },
      onLeave: () => {
        gsap.to([item.title, item.subtitle], {
          opacity: 0.3,
          scale: 0.95,
          duration: 0.3,
        });
      },
      onEnterBack: () => {
        gsap.to([item.title, item.subtitle], {
          opacity: 1,
          scale: 1,
          duration: 0.5,
        });
      },
    });
  });

  // Animate menu cards with clean fade from bottom
  gsap.set([beverageCard.value, eateryCard.value], {
    opacity: 0,
    y: 60,
  });

  ScrollTrigger.create({
    trigger: menuCardsSection.value,
    start: "top 85%",
    onEnter: () => {
      const tl = gsap.timeline();
      tl.to(beverageCard.value, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      }).to(
        eateryCard.value,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );
    },
  });

  // Add subtle floating animation after cards are visible
  ScrollTrigger.create({
    trigger: menuCardsSection.value,
    start: "top 70%",
    onEnter: () => {
      // Delay the floating animation until after the main animation completes
      gsap.delayedCall(1.2, () => {
        gsap.to([beverageCard.value, eateryCard.value], {
          y: "+=8",
          duration: 3,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          stagger: 0.8,
        });
      });
    },
  });

  // Add parallax effect to logo
  ScrollTrigger.create({
    trigger: bgDiv.value,
    start: "top top",
    end: "bottom top",
    scrub: 1,
    onUpdate: (self) => {
      gsap.to(logoStrHead.value, {
        y: self.progress * 100,
        rotation: self.progress * 10,
        duration: 0.3,
      });
    },
  });
};

onMounted(() => {
  // Main animations will be triggered by preloader completion event
});
</script>

<style scoped>
.h-\[60vh\] {
  will-change: transform;
}

/* Enhanced animation styles */
section {
  will-change: transform;
}

.card {
  will-change: transform, opacity;
  transform-origin: center;
}

.heading-font,
.subheading {
  will-change: transform, opacity;
}

/* Smooth transitions for all animated elements */
.icon {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.title {
  transition: all 0.3s ease;
}

/* Add subtle glow effect for cards */
.card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.card:hover::after {
  opacity: 1;
}

/* Enhance the background overlay */
.card::before {
  transition: all 0.3s ease;
}

.card:hover::before {
  background: rgba(255, 255, 255, 0.15) !important;
}
</style>
