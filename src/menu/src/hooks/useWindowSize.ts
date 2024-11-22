import { ref, onUnmounted } from 'vue'

const useWindowSize = (cb?: Function) => {
  const windowWidth = ref(0)
  const windowHeight = ref(0)

  const resize = () => {
    windowWidth.value = document.documentElement.clientWidth
    windowHeight.value = document.documentElement.clientHeight
    cb &&
      cb({
        windowWidth,
        windowHeight
      })
  }
  resize()
  window.addEventListener('resize', resize)

  onUnmounted(() => {
    window.removeEventListener('resize', resize)
  })
  return {
    windowWidth,
    windowHeight
  }
}

export default useWindowSize
