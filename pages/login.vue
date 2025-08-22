<template>
  <div
    class="min-h-screen flex items-center justify-center bg-[var(--background-color)] p-4"
  >
    <div class="w-full max-w-md">
      <!-- Logo/Brand Section -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-[var(--text-primary-color)] mb-2">
          Hartha
        </h1>
        <p class="text-[var(--text-secondary-color)]">
          Kelola keuangan Anda dengan mudah
        </p>
      </div>

      <!-- Login Card -->
      <div
        class="bg-[var(--surface-color)] rounded-lg shadow-xl p-8 border border-[var(--border-color)]"
      >
        <div class="text-center mb-6">
          <h2
            class="text-2xl font-semibold text-[var(--text-primary-color)] mb-2"
          >
            Masuk ke Akun
          </h2>
          <p class="text-[var(--text-secondary-color)] text-sm">
            Masukkan email dan password Anda
          </p>
        </div>

        <form class="space-y-6" @submit.prevent="handleLogin">
          <!-- Email Field -->
          <div>
            <label
              class="block text-sm font-medium text-[var(--text-secondary-color)] mb-2"
            >
              Email
            </label>
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <svg
                  class="h-5 w-5 text-[var(--text-secondary-color)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="Masukkan email Anda"
                class="w-full pl-10 pr-3 py-3 bg-[var(--background-color)] border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] text-[var(--text-primary-color)] placeholder-[var(--text-secondary-color)] transition-colors duration-200"
              />
            </div>
          </div>

          <!-- Password Field -->
          <div>
            <label
              class="block text-sm font-medium text-[var(--text-secondary-color)] mb-2"
            >
              Password
            </label>
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <svg
                  class="h-5 w-5 text-[var(--text-secondary-color)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                required
                placeholder="Masukkan password Anda"
                class="w-full pl-10 pr-12 py-3 bg-[var(--background-color)] border border-[var(--border-color)] rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-[var(--primary-color)] text-[var(--text-primary-color)] placeholder-[var(--text-secondary-color)] transition-colors duration-200"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <svg
                  v-if="showPassword"
                  class="h-5 w-5 text-[var(--text-secondary-color)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                  />
                </svg>
                <svg
                  v-else
                  class="h-5 w-5 text-[var(--text-secondary-color)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- Remember Me & Forgot Password -->
          <div class="flex items-center justify-between">
            <label class="flex items-center">
              <input
                v-model="form.rememberMe"
                type="checkbox"
                class="h-4 w-4 text-[var(--primary-color)] focus:ring-[var(--primary-color)] border-[var(--border-color)] rounded bg-[var(--background-color)]"
              />
              <span class="ml-2 text-sm text-[var(--text-secondary-color)]">
                Ingat saya
              </span>
            </label>
            <NuxtLink
              to="/forgot-password"
              class="text-sm text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors duration-200"
            >
              Lupa password?
            </NuxtLink>
          </div>

          <!-- Login Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full py-3 px-4 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--secondary-color)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
          >
            <svg
              v-if="isSubmitting"
              class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              />
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            {{ isSubmitting ? "Memproses..." : "Masuk" }}
          </button>
        </form>

        <!-- Divider -->
        <div class="my-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-[var(--border-color)]"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span
                class="px-2 bg-[var(--surface-color)] text-[var(--text-secondary-color)]"
              >
                Atau
              </span>
            </div>
          </div>
        </div>

        <!-- Social Login Buttons -->
        <div class="space-y-3">
          <button
            type="button"
            class="w-full py-3 px-4 bg-[var(--background-color)] border border-[var(--border-color)] text-[var(--text-primary-color)] rounded-lg hover:bg-[var(--primary-color)] hover:border-[var(--primary-color)] transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
          >
            <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Masuk dengan Google
          </button>
        </div>

        <!-- Register Link -->
        <div class="text-center mt-6">
          <p class="text-[var(--text-secondary-color)] text-sm">
            Belum punya akun?
            <NuxtLink
              to="/register"
              class="text-[var(--primary-color)] hover:text-[var(--secondary-color)] font-medium transition-colors duration-200"
            >
              Daftar sekarang
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { apiFetch } from "@/utils/api";
const router = useRouter();
const tokenCookie = useCookie("token");

definePageMeta({
  layout: false,
});

const form = ref({
  email: "",
  password: "",
  rememberMe: false,
});

const showPassword = ref(false);
const isSubmitting = ref(false);

const handleLogin = async () => {
  isSubmitting.value = true;

  try {
    const response = await apiFetch("/auth/login", {
      method: "POST",
      body: {
        email: form.value.email,
        password: form.value.password,
      },
    });

    // Simpan token ke cookie
    tokenCookie.value = response.data.token;

    // Redirect ke halaman utama
    await router.push("/");
  } catch (error) {
    const message =
      error?.data?.message || "Login gagal. Cek email & password.";
    alert(message);
    console.error("Login error:", error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>
