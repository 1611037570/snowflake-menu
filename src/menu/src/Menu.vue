<script setup lang="ts">
import { ref, useTemplateRef, computed, onMounted } from "vue";
import MenuList from "./MenuList.vue";
import useWindowSize from "./hooks/useWindowSize";
import useClick from "./hooks/useClick";
import usePosition from "./hooks/usePosition";
import type { MenuProps, MenuEmits } from "../types";
import { defaultMenuProps } from "./data";

// emit 事件
const emit = defineEmits<MenuEmits>();
// props 数据
const {
  model,
  stopPropagation,
  preventDefault,
  beforeCreateFn,
  fnKey,
  position,
} = withDefaults(defineProps<MenuProps>(), defaultMenuProps);
// 菜单元素
const menuContainer = useTemplateRef("menuContainer");
const { windowWidth, windowHeight } = useWindowSize();
// 菜单大小
const menuWidth = ref(0);
const menuHeight = ref(0);

const open = ref(false);

const handleEvent = (event: any) => {
  // 阻止事件冒泡
  if (stopPropagation) {
    event.stopPropagation();
  }
  // 阻止默认事件
  if (preventDefault) {
    event.preventDefault();
  }
};

const down = (event: any) => {
  handleEvent(event);

  //打开前事件
  if (!beforeCreateFn()) {
    return;
  }
  // 打开前回调
  emit("onBeforeCreate");

  open.value = true;
  // 打开后回调
  emit("onMounted");

  if (model == "press") {
    window.addEventListener(
      "mousedown",
      () => {
        setTimeout(() => {
          end();
        }, 10);
      },
      { capture: true }
    );
  } else {
    window.addEventListener("click", end, { capture: true });
  }
  window.addEventListener("contextmenu", end, { capture: true });
};
const { clientX, clientY } = useClick(menuContainer, model, down);
const select = (item: any) => {
  // 触发点击绑定事件
  item[fnKey] && item[fnKey]();
  // 选中后回调
  emit("onSelected", item);
  end();
};

const end = () => {
  // 关闭前回调
  emit("onBeforeUnmount");

  open.value = false;

  // 关闭后回调
  emit("onUnmounted");
  // 关闭事件
  if (model == "press") {
    window.removeEventListener("mousedown", end, {
      capture: true,
    });
  } else {
    window.removeEventListener("click", end, { capture: true });
  }
  window.removeEventListener("contextmenu", end, { capture: true });
};

const menuPositron = usePosition(
  windowWidth,
  menuWidth,
  clientX,
  windowHeight,
  menuHeight,
  clientY,
  position
);

// 菜单加载前
const onBeforeEnter = (el: any) => {
  el.style.opacity = 0;
  el.style.height = 0;
};
// 菜单加载后
const onEnter = (el: any) => {
  el.style.height = "auto";

  menuWidth.value = el.clientWidth;
  menuHeight.value = el.clientHeight;

  el.style.height = 0;
  el.style.opacity = 1;

  requestAnimationFrame(() => {
    el.style.borderRadius = 0;
    el.style.height = menuHeight.value + "px";
    el.style.transition = ".3s";
  });
};
// 菜单离开时
const onAfterEnter = (el: any) => {
  el.style.transition = "none";
};
</script>

<template>
  <!-- 触发展开区 -->
  <div ref="menuContainer" :style="style">
    <slot></slot>
  </div>
  <!-- 菜单展示区 -->
  <Teleport to="body">
    <Transition
      @beforeEnter="onBeforeEnter"
      @enter="onEnter"
      @afterEnter="onAfterEnter"
    >
      <div
        v-if="open"
        class="menu-container"
        :style="[menuPositron, menuContainerStyle]"
      >
        <slot name="menu">
          <MenuList :list="list" :nameKey="nameKey" @select="select"></MenuList>
        </slot>
      </div>
    </Transition>
  </Teleport>
</template>
<style scoped>
.menu-container {
  position: fixed;
  overflow: hidden;
  z-index: 999999999;
  width: auto;
}
</style>
