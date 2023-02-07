<template>
  <n-space vertical>
    <n-layout has-sider position="absolute">
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="45"
        :collapsed="true"
        class="left-sider"
      >
        <n-menu
          :root-indent="0"
          :collapsed="true"
          :collapsed-width="45"
          :collapsed-icon-size="18"
          :options="topMenuOptions"
          default-value="note" 
        />
        <n-menu
          :root-indent="0"
          :collapsed="true"
          :collapsed-width="45"
          :collapsed-icon-size="18"
          :options="bottomMenuOptions"
        />
      </n-layout-sider>
      <n-layout-content>
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-space>
</template>

<script setup>
import { h, onMounted } from "vue";
// router-link 路由跳转
import { RouterLink } from "vue-router";
import { NIcon } from "naive-ui";
// xicon使用
import {
  SmartHome, Checkbox, Planet, Settings
} from '@vicons/tabler'

// 解析icon为NIcon
const renderIcon = (icon) => {
  return () => h(NIcon, null, { default: () => h(icon) });
}

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
    icon: renderIcon(SmartHome)
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
  }
]
const bottomMenuOptions = [
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: 'setting',
          path: "/setting",
        }
      },
      { default: () => "设置" }
    ),
    key: "setting",
    icon: renderIcon(Settings)
  },
  // TODO 添加 收藏、分享、标签等只在note页面显示的选项
]

onMounted(async () => {
  // 设置默认主题色
  document.getElementById("app").setAttribute("class", "theme--light");
})

</script>

<style>
.left-sider .n-layout-sider-scroll-container{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.n-menu .n-menu-item {
    max-height: 35px;
}

.n-menu .n-menu-item-content::before {
  left: 5px;
  right: 5px;
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
.n-popover {
  /* TODO border: 1px solid var(--el-card-border-color); */  
  border: 1px solid #e5e7ec;
  border-radius: 5px !important;
}

.n-popover.n-popover--show-header-or-footer .n-popover__content,
.n-popover .n-popover__footer {
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

</style>

