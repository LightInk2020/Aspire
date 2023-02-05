<script>
import { h } from "vue";
// router-link 路由跳转
import { RouterLink } from "vue-router";
import { NIcon } from "naive-ui";
// xicon使用
import { 
  Home24Regular as HomeIcon,
  CheckboxChecked24Regular as TodoIcon,
  Airplane24Regular as PlatformIcon,
  Settings24Regular as SettingIcon
} from '@vicons/fluent'


// 解析icon为NIcon
const renderIcon = (icon) => {
  return () => h(NIcon, null, { default: () => h(icon) });
}

export default {
  data() {
    return {
      topMenuOptions: [
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
          icon: renderIcon(HomeIcon)
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
          icon: renderIcon(TodoIcon)
        },
        {
          label: () => h(
            RouterLink,
            {
              to: {
                name: 'platform',
                path: "/platform",
              }
            },
            { default: () => "云上" }
          ),
          key: "platform",
          icon: renderIcon(PlatformIcon)
        }
      ],
      bottomMenuOptions: [
        {
          label: () => h(
            RouterLink,
            {
              to: {
                name: 'setting',
                path: "/setting",
              }
            },
            { default: () => "软件设置" }
          ),
          key: "setting",
          icon: renderIcon(SettingIcon)
        },
      ],
    }
  },
  mounted() {
    // 设置默认主题色
    document.getElementById("app").setAttribute("class", "theme--light");
  },
  methods: {
    
  }
}

</script>

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
          :collapsed="collapsed"
          :collapsed-width="45"
          :collapsed-icon-size="20"
          :options="topMenuOptions"
          default-value="note" 
        />
        <n-menu
          :root-indent="0"
          :collapsed="collapsed"
          :collapsed-width="45"
          :collapsed-icon-size="20"
          :options="bottomMenuOptions"
        />
      </n-layout-sider>
      <n-layout-content>
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-space>
</template>

<style>
.left-sider .n-layout-sider-scroll-container{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: var(--color-option-bar-bg); */
}

.n-menu .n-menu-item {
    max-height: 35px;
}

.n-menu .n-menu-item-content::before {
  left: 5px;
  right: 5px;
}
</style>

