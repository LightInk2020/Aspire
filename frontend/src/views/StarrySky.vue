<template>
  <!-- 卡片列表展示论文和相关笔记信息 -->
  <n-list :show-divider="false">
    <template #header>
      文献
    </template>

    <template #footer>
      <n-button  @click="showIntroDrawer = !showIntroDrawer">
      简介
      </n-button>
    </template>
    <n-list-item>
      <template #prefix>
        <n-button>Prefix</n-button>
      </template>
      <template #suffix>
        <n-button>Suffix</n-button>
      </template>
      <n-thing title="Thing" title-extra="extra" description="description">
        Biu<br>
        Biu<br>
        Biu<br>
      </n-thing>
    </n-list-item>
    <n-list-item>
      <n-thing title="Thing" title-extra="extra" description="description">
        Biu<br>
        Biu<br>
        Biu<br>
      </n-thing>
      <template #suffix>
        <n-button>Suffix</n-button>
      </template>
    </n-list-item>
  </n-list>
  <!-- 论文简介（作者、发表期刊、年限、摘要、被引用次数、笔记数） + 评论 + 前几笔记介绍列表 -->
  <n-drawer
    v-model="showIntroDrawer"
    :default-width="500"
    resizable
  >
    <n-drawer-content title="文献题目" :native-scrollbar="false">
      《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
    </n-drawer-content>
  </n-drawer>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    return {
      showIntroDrawer: ref(true)
    }
  }
})

</script>

<style>

</style>