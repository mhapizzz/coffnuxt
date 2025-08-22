import { ref } from 'vue'

export const useSidebar = () => {
  const sidebarVisible = ref(false)

  const toggleSidebar = () => {
    // console.log('Composable toggleSidebar called, current state:', sidebarVisible.value)
    sidebarVisible.value = !sidebarVisible.value
    // console.log('New state:', sidebarVisible.value)
  }

  return {
    sidebarVisible,
    toggleSidebar
  }
} 
