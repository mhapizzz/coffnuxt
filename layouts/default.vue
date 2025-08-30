<template>
  <v-app>
    <Topbar />
    <v-main class="bg-gray-100 min-h-screen flex flex-col">
      <slot />
    </v-main>
  </v-app>
</template>

<script setup></script>

<style lang="scss" scoped></style>
