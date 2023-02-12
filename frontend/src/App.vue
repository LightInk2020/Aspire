<template>
  <n-space vertical>
    <n-layout has-sider position="absolute">
      <!-- 最左侧app侧边栏 -->
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="45"
        :collapsed="true"
        class="app__left-sider"
      >
      <!-- TODO style="background-color: #F7F9FE;" -->
        <!-- TODO 关联default-value和地址栏 -->
        <n-menu
          :root-indent="0"
          :collapsed="true"
          :collapsed-width="45"
          :collapsed-icon-size="18"
          :options="topMenuOptions"
          default-value="note" 
        />
        <div class="left-sider__container">
          <n-menu
            :root-indent="0"
            :collapsed="true"
            :collapsed-width="45"
            :collapsed-icon-size="18"
            :options="bottomMenuOptions"
          />
          <!-- 设置按钮 -->
          <n-button @click="showSettingsModal = true" :focusable="false" quaternary class="app__settings-button">
            <template #icon>
              <n-icon><Settings /></n-icon>
            </template>
          </n-button>
        </div>
      </n-layout-sider>
      <n-layout-content>
        <!-- 主体 -->
        <n-layout has-sider position="absolute">
          <!-- 左侧选项栏 -->
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
            <router-view />
          </n-layout>
        </n-layout>
      </n-layout-content>
    </n-layout>
  </n-space>
  <!-- modal -->
  <!-- settings modal -->
  <n-modal v-model:show="showSettingsModal">
    <SettingsModal />
  </n-modal>
</template>

<script setup>
import BasicOperation from "./components/BasicOperation.vue"
import SettingsModal from "./components/SettingsModal.vue"
import { h, onMounted, ref } from "vue";
// router-link 路由跳转
import { RouterLink } from "vue-router";
import { NIcon } from "naive-ui";
// xicon使用
import {
  SmartHome, Checkbox, Planet, Settings, Star, Cloud, Tag, Plant
} from '@vicons/tabler'

// 解析icon为NIcon
const renderIcon = (icon) => {
  return () => h(NIcon, null, { default: () => h(icon) });
}

// 最左侧侧边栏
const topMenuOptions = [
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: 'note',
          path: "/note",
        }
      },
      { default: () => "笔记" }
    ),
    key: "note",
    icon: renderIcon(Plant)
  },
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: 'todo',
          path: "/todo",
        }
      },
      { default: () => "待办" }
    ),
    key: "todo",
    icon: renderIcon(Checkbox)
  },
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: 'starry_sky',
          path: "/starry_sky",
        }
      },
      { default: () => "星空" }
    ),
    key: "starry_sky",
    icon: renderIcon(Planet)
  },
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: 'share',
          path: "/share",
        }
      },
      { default: () => "分享" }
    ),
    key: "share",
    icon: renderIcon(Cloud)
  },
  
]
const bottomMenuOptions = [
  // TODO 收藏、标签等只在note页面显示的选项
  {
    label: "收藏",
    key: "stars",
    show: true, // 显示
    icon: renderIcon(Star)
  },
  {
    label: "标签",
    key: "tags",
    show: true,
    icon: renderIcon(Tag)
  },
]

// 设置页面模态框
const showSettingsModal = ref(false)

onMounted(async () => {
  // 设置默认主题色
  document.getElementById("app").setAttribute("class", "theme--light");
})

</script>

<style>
.app__left-sider .n-layout-sider-scroll-container{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.left-sider__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.n-menu .n-menu-item {
  max-height: 35px;
  width: 45px;
}

.n-menu .n-menu-item-content::before {
  left: 5px;
  right: 5px;
}

.app__settings-button {
  width: 35px;
  height: 35px;
  margin-bottom: 6px;
}


/* 通用修改 */
/* 布局框架 */
.n-layout-header,
.n-layout-footer {
  background-color: white;
}

/* 下划线 */
.n-divider {
  margin: 0 !important;
}

.n-divider.n-divider--vertical {
  height: auto;
}

/* 弹出信息 */
.aspire__popover {
  /* TODO border: 1px solid var(--el-card-border-color); */  
  border: 1px solid #e5e7ec;
  border-radius: 5px !important;
}

.aspire__popover.n-popover--show-header-or-footer .n-popover__content,
.aspire__popover .n-popover__footer {
  padding: 0;
}

/* 按钮菜单 */
.aspire_menu {
  display: flex;
  flex-direction: column;
  padding: 5px;
}

.aspire_menu button {
  justify-content: flex-start;
  padding: 0;
  padding-left: 5px;
}

.aspire_menu > div {
  padding: var(--n-padding);
}

.aspire_menu span {
  margin-left: 5px;
}

/* 滑动选项 */
.aspire_menu .n-slider {
  width: calc(100% - 20px);
  margin: 8px 10px 32px 10px;
}

.aspire_menu_bg {
  /* TODO color */
  background-color: #fafafa; 
}

/* 卡片 */
.n-card {
  --aspire-card-shadow: 0 8px 16px -4px rgba(31,35,41, 0.1); 
  border-radius: 10px;
  box-shadow: var(--aspire-card-shadow);
  transition: all .5s;
}


/* 隐藏 */
.hidden {
  display: none !important;
}

</style>

