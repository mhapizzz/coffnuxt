<template>
  <main class="bg-[var(--background-color)]">
    <slot />
  </main>
</template>

<script setup>
import { useSidebar } from "~/composables/useSidebar";

const { sidebarVisible, toggleSidebar } = useSidebar();

// Provide sidebar state to child components
provide("sidebarVisible", sidebarVisible);
provide("toggleSidebar", toggleSidebar);
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  min-height: 100vh;
  display: flex;
  position: relative;
  font-size: 14px;
  // background: linear-gradient(to bottom, var(--danger-color) 40%, #f1f5f9 100%);

  .sidebar-container {
    width: 100%;
    height: 100vh;
    padding-top: 7rem;
    padding-bottom: 0.8rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    position: absolute;
    left: -100%;
    top: 0;
    z-index: 5;
    transition: all 0.3s ease-in-out;
  }

  .content-container {
    width: 100%;
    height: 100vh;
    padding: 1.5rem 0.8rem;
    transition: all 0.3s ease-in-out;
    position: relative;
    // z-index: 10;
  }

  .sidebar-container.sidebar-visible {
    width: 100%;
    height: 100vh;
    padding-top: 7rem;
    padding-bottom: 0.8rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    left: 0;
  }

  .content-container.sidebar-visible {
    width: 100%;
    height: 100vh;
    padding: 1.5rem 0.8rem;
  }

  // Tablet styles (768px and up)
  @media (min-width: 768px) {
    .sidebar-container {
      position: relative;
      left: -100%;
      width: 280px;
      min-width: 280px;
      // padding: 1.5rem 1rem;
      padding: 0;
    }

    .content-container {
      width: 100%;
      padding: 1.5rem 1rem;
    }

    .sidebar-container.sidebar-visible {
      width: 280px;
      min-width: 280px;
      padding: 1.5rem 1rem;
      position: relative;
      left: 0;
    }

    .content-container.sidebar-visible {
      width: 100%;
      padding: 1.5rem 1rem;
    }

    .sidebar-container.sidebar-hidden {
      width: 0;
      left: -100%;
      min-width: 0;
      // padding: 1.5rem 1rem;
      padding: 0;
      overflow: hidden;
    }

    .content-container.sidebar-hidden {
      width: 100%;
      padding: 1.5rem 1rem;
    }
  }

  // Desktop styles (1024px and up)
  @media (min-width: 1024px) {
    .sidebar-container {
      left: -100%;
      width: 0;
      min-width: 0;
      // padding: 2rem 1.5rem;
      padding: 0;
    }

    .content-container {
      width: 100%;
      padding: 2rem 1.5rem;
    }

    .sidebar-container.sidebar-visible {
      min-width: 320px;
      padding: 2rem 1.5rem;
    }

    .content-container.sidebar-visible {
      width: 100%;
      padding: 2rem 1.5rem;
    }

    .sidebar-container.sidebar-hidden {
      width: 0;
      left: -100%;
      min-width: 0;
      // padding: 2rem 1.5rem;
      padding: 0;
      overflow: hidden;
    }

    .content-container.sidebar-hidden {
      width: 100%;
      padding: 2rem 1.5rem;
    }
  }

  // Large desktop styles (1280px and up)
  @media (min-width: 1280px) {
    .sidebar-container {
      width: 0;
      left: -100%;
      // padding: 2.5rem 2rem;
      padding: 0;
    }

    .content-container {
      width: 100%;
      padding: 2.5rem 2rem;
    }

    .sidebar-container.sidebar-visible {
      width: 360px;
      min-width: 360px;
      padding: 2.5rem 2rem;
    }

    .content-container.sidebar-visible {
      width: 100%;
      padding: 2.5rem 2rem;
    }

    .sidebar-container.sidebar-hidden {
      width: 0;
      left: -100%;
      min-width: 0;
      // padding: 2.5rem 2rem;
      padding: 0;
      overflow: hidden;
    }

    .content-container.sidebar-hidden {
      width: 100%;
      padding: 2.5rem 2rem;
    }
  }
}
</style>
