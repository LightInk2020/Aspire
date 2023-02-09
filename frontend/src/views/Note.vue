<template>
  <n-layout has-sider position="absolute">
    <n-layout-sider
      collapse-mode="transform"
      :collapsed-width="0"
      :width="240"
      show-trigger="bar"
      bordered
      :native-scrollbar="false"
    >
      <!-- 基础操作 -->
      <BasicOperation />
    </n-layout-sider>
    <n-layout>
      <!-- <MDEditor /> -->
      <StarrySky/>
    </n-layout>
  </n-layout>
</template>

<script setup>
import BasicOperation from "../components/BasicOperation.vue"
import MDEditor from "../components/MDEditor.vue"
import StarrySky from "./StarrySky.vue"

</script>
