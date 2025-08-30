<template>
  <v-footer app class="bg-primary">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <h3 class="text-h6 mb-4 text-white">About Us</h3>
          <p class="text-white">Your trusted coffee companion, bringing the best coffee experience to your doorstep.</p>
        </v-col>
        <v-col cols="12" md="4">
          <h3 class="text-h6 mb-4 text-white">Quick Links</h3>
          <v-list class="bg-transparent pa-0">
            <v-list-item to="/" class="text-white px-0">Home</v-list-item>
            <v-list-item to="/menu" class="text-white px-0">Menu</v-list-item>
            <v-list-item to="/login" class="text-white px-0">Login</v-list-item>
            <v-list-item to="/register" class="text-white px-0">Register</v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="4">
          <h3 class="text-h6 mb-4 text-white">Contact Us</h3>
          <div class="text-white">
            <p>Email: info@coffnux.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Coffee Street, Brew City</p>
          </div>
        </v-col>
      </v-row>
      <v-divider class="my-4 bg-white" />
      <v-row>
        <v-col cols="12" class="text-center text-white">
          © {{ new Date().getFullYear() }} Coffnux. All rights reserved.
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
// Footer component logic can be added here if needed
</script>

<style scoped>
.v-list-item {
  min-height: 35px;
}
</style>
