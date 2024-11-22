<template>
  <div class="menu-list">
    <div
      v-for="(item, index) in list"
      class="menu-item"
      :key="index"
      @click="select($event, item)"
      @mousedown="select($event, item)"
    >
      {{ item[nameKey] }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  list: {
    type: Array<any>,
    default: () => [],
  },
  nameKey: {
    type: String,
    default: "name",
  },
});
const emit = defineEmits(["select"]);
const select = (event: any, item: any) => {
  event.stopPropagation();
  event.preventDefault();
  emit("select", item);
};
</script>

<style scoped>
.menu-list {
  width: 200px;
  padding: 4px;
  border-radius: 8px;
  border: 1px solid #e3e3e3;
  background: #6ba1c7;
  display: flex;
  flex-direction: column;
}
.menu-item {
  padding: 4px 8px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #fff;
}
.menu-item:hover {
  background: #96c5e7;
}
</style>
