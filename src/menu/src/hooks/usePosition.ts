import { computed } from 'vue'

const usePosition = (
  windowWidth: any,
  menuWidth: any,
  clientX: any,
  windowHeight: any,
  menuHeight: any,
  clientY: any,
  position: any
): any => {
  let res = computed(() => {
    const wW = windowWidth.value
    const mW = menuWidth.value
    const cX = clientX.value
    const wH = windowHeight.value
    const mH = menuHeight.value
    const cY = clientY.value

    let positionStyle: any = {}
    if (!position) {
        
      if (cX > wW - mW) {
        positionStyle.right = `${wW - cX}px`
      } else {
        positionStyle.left = `${cX}px`
      }
      if (cY > wH - mH) {
        positionStyle.bottom = `${wH - cY}px`
      } else {
        positionStyle.top = `${cY}px`
      }
      return positionStyle
    }
    // 菜单相对于窗口左边的位置
    const left = cX > wW - mW ? cX - mW : cX
    // 菜单相对于窗口上边的位置
    const top = cY > wH - mH ? wH - mH : cY
    // 菜单相对于窗口右边的位置
    const right = wW - cX + mW > wW ? wW - cX - mW : wW - cX
    // 菜单相对于窗口下边的位置
    const bottom = wH - cY + mH > wH ? wH - cY - mH : wH - cY
    switch (position) {
      case 'tl':
        positionStyle.left = `${left}px`
        positionStyle.top = `${top}px`
        break
      case 'tr':
        positionStyle.right = `${right}px`
        positionStyle.top = `${top}px`
        break
      case 'bl':
        positionStyle.left = `${left}px`
        positionStyle.bottom = `${bottom}px`
        break
      case 'br':
        positionStyle.right = `${right}px`
        positionStyle.bottom = `${bottom}px`
        break
      default:
        break
    }

    return positionStyle
  })
  return res
}
export default usePosition
