import { ref } from 'vue'

const sidebarVisible = ref(false)

export function useSidebarStore() {
  function toggleSidebar() {
    sidebarVisible.value = !sidebarVisible.value
  }
  return {
    sidebarVisible,
    toggleSidebar,
  }
} 
