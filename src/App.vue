<script setup lang="ts">
import Menu from "./menu";
const clickList = [
  {
    name: "左键",
    fn: () => {
      console.log("左键 :>> ");
    },
  },
];

const contextmenuList = [
  {
    name: "右键",
    fn: () => {
      console.log("右键 :>> ");
    },
  },
];
</script>

<template>
  <div style="width: 100%; height: 100vh; display: flex; padding: 0; margin: 0">
    <Menu style="width: 50%; height: 100%" :list="clickList">
      <div
        class="flex"
        style="background: #e3e3e3; height: 100%; background: pink"
      >
        左键触发区域
      </div>
    </Menu>
    <Menu
      model="contextmenu"
      :list="contextmenuList"
      style="width: 50%; height: 100%"
    >
      <div class="flex" style="background: #e3e3e3; height: 100%">
        右键触发区域
      </div>
    </Menu>
  </div>
  <Menu
    model="press"
    style="
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20%;
      height: 20%;
      background: red;
      z-index: 22;
    "
  >
    <div class="flex" style="height: 100%">长按触发区域</div>
  </Menu>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
.flex {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
