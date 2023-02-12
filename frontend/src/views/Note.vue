<template>
  <!-- 文件目录 https://www.naiveui.com/zh-CN/os-theme/components/menu 菜单内容很长 -->
  <n-layout-header position="absolute">
    <!-- 标签栏 -->
    <!-- <n-tabs
      v-model="tabsRef"
      type="card"
      closable
      tab-style="min-width: 80px;"
      @close="handleClose"
    >
      <n-tab-pane
        v-for="panel in panelsRef"
        :key="panel"
        :tab="panel.toString()"
        :name="panel"
      >
        {{ panel }}
      </n-tab-pane>
    </n-tabs> -->
    <!-- 笔记工具栏 -->
    <div class="note__note-bar">
      <div class="note-bar__container--left">
        <div class="note-bar__content">
          <!-- 文件名 -->
          <n-input placeholder="未命名文件" autosize style="min-width: 60%" />
          <!-- 加密文件标志 -->
          <n-button quaternary :focusable="false" size="tiny">
            <template #icon>
              <n-icon><Lock /></n-icon>
            </template>
          </n-button>
        </div>
        <div class="note-bar__content">
          <!-- 面包屑 -->
          <n-breadcrumb>
            <n-breadcrumb-item>
              <n-icon :component="File" /> 根目录</n-breadcrumb-item>
            <n-breadcrumb-item>
              <n-icon :component="File" /> 子目录</n-breadcrumb-item>
            <n-breadcrumb-item>
              <n-icon :component="File" /> 笔记</n-breadcrumb-item>
          </n-breadcrumb>
          <!-- TODO 保存状态 -->

        </div>
      </div>
      <div class="note-bar__container--right">
        <n-tooltip>
          <template #trigger>
            <n-button :focusable="false" text tag="div">
              Edited Jul 23
            </n-button>
          </template>
          Edited by {{ user.name }} Jul 23<br/>
          Created by {{ user.name }} Jul 23
        </n-tooltip>
        <n-button ghost type="info" class="note-bar__share">
          分享
        </n-button>
        <n-tooltip>
          <template #trigger>
            <n-button :focusable="false" size="large" quaternary>
              <template #icon>
                <n-icon size="18"><Star /></n-icon>
              </template>
            </n-button>
          </template>
          收藏
        </n-tooltip>
        <n-tooltip>
          <template #trigger>
            <n-button :focusable="false" size="large" quaternary>
              <template #icon>
                <n-icon size="18"><Clock /></n-icon>
              </template>
            </n-button>
          </template>
          历史记录
        </n-tooltip>
        <n-tooltip>
          <template #trigger>
            <n-button :focusable="false" size="large" quaternary>
              <template #icon>
                <n-icon size="18"><MessageCircle /></n-icon>
              </template>
            </n-button>
          </template>
          评论
        </n-tooltip>
        <!-- 更多操作 -->
        <n-popover ref="moreOperationsRef" width="220" placement="bottom-end" :show-arrow="false" trigger="click">
          <template #trigger>
            <n-button :focusable="false" size="large" quaternary class="note-bar__more">
              <template #icon>
                <n-icon size="18"><MoreHorizFilled /></n-icon>
              </template>
            </n-button>
          </template>
          <div class="aspire_menu">
            <div>页面尺寸</div>
            <n-slider :min="50" :max="100" :default-value="50" :step="10" :marks="noteWidthMarks" :format-tooltip="noteWidthFormat" />
          </div>
          <n-divider/>
          <div class="aspire_menu">
            <n-button quaternary :focusable="false" @click="handleSRDialogOpen('查找')">
              <n-icon size="18"><FileSearch /></n-icon> 
              <span>查找</span>
            </n-button>
            <n-button quaternary :focusable="false" @click="handleSRDialogOpen('替换')">
              <n-icon size="18"><Replace /></n-icon> 
              <span>替换</span>
            </n-button>
          </div>
          <n-divider/>
          <div class="aspire_menu">
            <n-button quaternary :focusable="false">
              <n-icon size="18"><Box /></n-icon> 
              <span>转换为模版</span>
            </n-button>
            <n-button quaternary :focusable="false">
              <n-icon size="18"><FileSymlink /></n-icon> 
              <span>添加快捷方式到</span>
            </n-button>
            <n-button quaternary :focusable="false">
              <n-icon size="18"><FileExport /></n-icon> 
              <span>移动到</span>
            </n-button>
            <n-button quaternary :focusable="false">
              <n-icon size="18"><FileCopyOutlined /></n-icon> 
              <span>创建副本</span>
            </n-button>
            <n-button quaternary :focusable="false">
              <n-icon size="18"><Lock /></n-icon> 
              <span>加密</span>
            </n-button>
          </div>
          <n-divider/>
          <div class="aspire_menu">
            <n-button quaternary :focusable="false">
              <n-icon size="18"><PersonOutlineFilled /></n-icon> 
              <span>文件权限</span>
            </n-button>
            <n-button quaternary :focusable="false">
              <n-icon size="18"><TranslateRound /></n-icon> 
              <span>翻译</span>
            </n-button>
            <n-button quaternary :focusable="false">
              <n-icon size="18"><FileDownloadOutlined /></n-icon> 
              <span>导出</span>
            </n-button>
          </div>
          <n-divider/>
          <div class="aspire_menu">
            <n-button quaternary :focusable="false">
              <n-icon size="18"><DeleteOutlineOutlined /></n-icon> 
              <span>删除</span>
            </n-button>
          </div>
          <template #footer>
            <div class="note-bar__footer aspire_menu">
              <div class="note-bar__status-info">
                <div>字数统计：1024</div>
                <div>创建于 2023-02-01 </div>
                <div>更新于 2023-02-01 12:59 </div>
                <div>编辑者：浅墨 </div>
              </div>
            </div>
          </template>
        </n-popover>
        <n-divider vertical />
        <!-- 关闭按钮 -->
        <n-tooltip>
          <template #trigger>
            <n-button :focusable="false" size="large" quaternary>
              <template #icon>
                <n-icon><CloseOutlined /></n-icon>
              </template>
            </n-button>
          </template>
          关闭当前页面
        </n-tooltip>
      </div>
    </div>
  </n-layout-header>
  <n-layout-content class="note__content" :native-scrollbar="false">
    <!-- 分割线 -->
    <n-divider />
    <!-- vditor md编辑器 -->
    <div id="vditor" ref="vditor"></div>
  </n-layout-content>
  <!-- 底部工具栏 -->
  <n-layout-footer position="absolute" class="note__footer">
    <div class="note__toolbar">
      <div class="toolbar__buttons">
        <!-- 源代码模式 -->
        <div class="toolbar__source-code toolbar__button">
          <n-tooltip placement="top-start" trigger="hover">
            <template #trigger>
              <n-button quaternary :focusable="false" size="small"> 
                <n-icon size="18">
                  <Code />
                </n-icon> 
              </n-button>
            </template>
            源代码模式
          </n-tooltip>
        </div>
      </div>
      <div class="toolbar__buttons">
        <!-- 选择编码格式 -->
        <div class="toolbar__code-format toolbar__button">
          <n-tooltip placement="top" trigger="hover">
            <template #trigger>
              <n-button quaternary :focusable="false" size="small"> UTF-8 </n-button>
            </template>
            编码格式
          </n-tooltip>
        </div>
        <!-- 语言拼写检查 -->
        <div class="toolbar__check-spell toolbar__button">
          <n-tooltip placement="top" trigger="hover">
            <template #trigger>
              <n-button quaternary :focusable="false" size="small"> 中文 </n-button>
            </template>
            拼写检查
          </n-tooltip>
        </div>
        <!-- 统计数据 -->
        <div class="toolbar__statistic-data toolbar__button">
          <n-tooltip placement="top-end" trigger="hover">
            <template #trigger>
              <n-button quaternary :focusable="false" size="small"> 1024字 </n-button>
            </template>
            字数统计
          </n-tooltip>
        </div>
      </div>
    </div>
  </n-layout-footer>
  <!-- 查找 & 替换 小窗口 -->
  <!-- TODO 封装成单独组建，便于在笔记、星空、分享等中使用（有的只有查找、没有替换功能，比如星空） -->
  <n-card 
    content-style="padding: 5px 25px 20px 25px;" 
    class="note__srdialog"
    v-if="showSRDialog"
  >
    <!-- 关闭按钮 -->
    <n-button class="srdialog__close" :focusable="false" size="large" quaternary @click="handleSRDialogClose">
      <template #icon>
        <n-icon><CloseOutlined /></n-icon>
      </template>
    </n-button>
    <n-tabs
      v-model:value="srDialogRef"
      type="line"
      @update:value="handleSRDialogTabUpdate"
    >
      <n-tab name="查找">
      </n-tab>
      <n-tab name="替换">
      </n-tab>
    </n-tabs>
    <div class="srdialog__body">
      <n-input
        placeholder="在文档内查找"
        type="textarea"
        autofocus
        :autosize="{
          minRows: 1,
          maxRows: 3
        }"
        clearable
      >
        <template #suffix>
          <!-- 查找结果 -->
          0 / 0
        </template>
      </n-input>
      <span v-show="showSRReplaceParts">替换为</span>
      <n-input v-show="showSRReplaceParts"
        placeholder="替换内容"
        type="textarea"
        :autosize="{
          minRows: 1,
          maxRows: 3
        }"
        clearable
      />
      <div class="srdialog__buttons">
        <n-button>上一处</n-button>
        <n-button>下一处</n-button>
        <n-button v-show="showSRReplaceParts">替换</n-button>
        <n-button type="success" v-show="showSRReplaceParts" style="margin-right: 0;">全部替换</n-button>
      </div>
    </div>
  </n-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Vditor from "vditor"
import "vditor/dist/index.css"
import mitt from '../utils/event.js'
import { 
  Star, Clock, File, MessageCircle, Replace, 
  FileExport, FileSearch, FileSymlink, Lock, Box, Code
} from '@vicons/tabler'
import { 
  MoreHorizFilled, CloseOutlined, FileCopyOutlined,
  FileDownloadOutlined, TranslateRound,
  DeleteOutlineOutlined, PersonOutlineFilled
} from '@vicons/material'

const user = {
  name: "Virtual Moon",
  img: "/src/assets/img/user_img.jpg",
  email: "crescent2020@163.com",
  motto: "枕上诗书闲处好，门前风景雨来佳。",
};

// 更多按钮
const moreOperationsRef = ref(null)

// 页面尺寸
const noteWidthFormat = value => `${value}%`
const noteWidthMarks = {
  50: "50%",
  75: "75%",
  100: "100%"
}

// 查找替换页面
const showSRDialog = ref(false)
const showSRReplaceParts = ref(false)
const srDialogRef = ref("查找")
function handleSRDialogOpen(val) {
  // 隐藏更多按钮菜单栏
  moreOperationsRef.value?.setShow(false)
  // 显示查找/替换的dialog
  showSRDialog.value = true
  // 不同按钮显示不同组件
  if (val === "替换") {
    showSRReplaceParts.value = true
    srDialogRef.value="替换"
  } else {
    showSRReplaceParts.value = false
    srDialogRef.value="查找"
  }
}
// 关闭查找替换dialog
function handleSRDialogClose() {
  showSRDialog.value = false
}
// tabs切换
function handleSRDialogTabUpdate(val) {
  if (val === "替换") {
    showSRReplaceParts.value = true
  } else {
    showSRReplaceParts.value = false
  }
}

onMounted(async () => {
  // let themeType = localStorage.getItem("theme")
  let themeType = 1
  let initTheme = 'classic'
  let contentTheme = 'light'
  if (themeType == 0) {
    initTheme = 'dark'
    contentTheme = 'dark'
  }
  contentEditor.value = new Vditor('vditor', {
    height: 'calc(100vh - 75px)', // 默认使用窗口的高度
    width: '100%',
    // icon: "material",
    cache: {
      enable: true
    },
    toolbar: [
      // 'emoji',
      'headings',
      'bold',
      'italic',
      'strike',
      'link',
      '|',
      'list',
      'ordered-list',
      'check',
      'table',
      'outdent',
      'indent',
      '|',
      'quote',
      'line',
      'code',
      'inline-code',
      'insert-before',
      'insert-after',
      '|',
      'undo',
      'redo',
      '|',
      'edit-mode',
      'fullscreen',
      'outline',
      {
        name: 'more',
        toolbar: [
          'preview',
          // 'content-theme',
          // 'code-theme',
          // 'info',
          // 'help',
        ],
      }],
    toolbarConfig: {
      pin: true,
      hide: false
    },
    mode: 'wysiwyg',
    outline: {
      enable: false,
      position: 'right'
    },
    preview: {
      hljs: {
        enable: true,
        style: 'vim',
        lineNumber: true
      },
      theme: {
        current: contentTheme
      },
      math: {
        engine: 'KaTeX',
      },
    },
    resize: {
      enable: false,
      after(h) {
      }
    },
    fullscreen: {
      index: 150
    },
    theme: initTheme,
    cache: { // 缓存
      enable: true,
    },
    after: () => {

    },
    select(md) {
      // original.value = md
      // translation.value = ""
    },
    input: () => {

    },
    esc: () => {

    },
    // cdn: location.origin,
    blur: (content) => {
      // let path = localStorage.getItem("mdPath")
      // if (path !== null && path.trim() !== '') {
      //   app.value.SaveMdContent(path, content).then((res) => {
      //     if (res.code != 200) {
      //       message.error(res.msg)
      //       localStorage.removeItem("mdPath")
      //     }
      //   })
      // }
    },
    upload: {
      handler() {
        uploadClipboard()
      }
    },
    counter: {
      enable: true,
    }
  })
  mitt.on("theme", (val) => {
    if (val == 0) {
      setDarkTheme()
    } else {
      setLightTheme()
    }
  })
})

const contentEditor = ref("")

const getValue = () => {
  return contentEditor.value.getValue();     //获取 Markdown 内容
}
const getHTML = () => {
  return contentEditor.value.getHTML();      //获取 HTML 内容
}
const setValue = (value) => {
  return contentEditor.value.setValue(value);     //设置 Markdown 内容
}
const clearCache = () => {
  return contentEditor.value.clearCache(); // 清理编辑器缓存
}
const disabled = () => {
  return contentEditor.value.disabled();     //设置 只读
}
const setDarkTheme = () => {
  return contentEditor.value.setTheme('dark', 'dark');
}
const setLightTheme = () => {
  return contentEditor.value.setTheme('classic', 'light');
}
const insertValue = (str, render) => {
  return contentEditor.value.insertValue(str, render);
}
const toPreview = () => {
  var evt = document.createEvent('Event');
  evt.initEvent('click', true, true);
  contentEditor.value.vditor.toolbar.elements.preview.firstElementChild.dispatchEvent(evt);
}

// 标签栏
// const tabsRef = ref(1);
// const panelsRef = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
// // 关闭标签页操作
// function handleClose(name) {
//   const { value: panels } = panelsRef;
//   if (panels.length === 1) {
//     console.log("最后一个tab")
//     return;
//   }
//   console.log("关掉 " + name);
//   // 如果关闭的是当前标签页
//   const index = panels.findIndex((v) => name === v);
//   panels.splice(index, 1);
//   if (tabsRef.value === name) {
//     tabsRef.value = panels[index];
//   }
// }


</script>


<style>
.note__note-bar {
  width: 100%;
  user-select: none;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.note-bar__container--left {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 16px;
}

.note-bar__content {
  display: flex;
  align-items: center;
}

/* 文件标题 */
.note-bar__content .n-input {
  --n-border: 0 !important;
  --n-font-size: 1rem !important;
}

.note-bar__content .n-input-wrapper {
  height: 20px;
  padding: 0 5px;
}

.note-bar__content .n-input__placeholder {
  font-weight: bold;
}

.note-bar__content .n-input__input-el {
  /* TODO */
  color: black;
  font-weight: bold;
}

.note-bar__content .n-breadcrumb-item .n-breadcrumb-item__link,
.note-bar__content .n-breadcrumb-item .n-icon {
  padding: 2px;
  font-size: 0.8rem;
}

.note-bar__container--right {
  display: flex;
  justify-content: flex-end;
  margin-right: 16px;
}

.note-bar__container--right button {
  padding: 5px;
  max-height: 30px;
  margin-left: 10px;
}

.note-bar__container--right .note-bar__share {
  width: 60px;
  border-radius: 6px;
  margin-left: 15px;
}

/* 更多 */
.note-bar__more {
  margin-right: 10px;
}

.note-bar__operations {
  display: flex;
  flex-direction: column;
  padding: 5px;
}

.note-bar__operations button {
  justify-content: flex-start;
}

.note-bar__status-info {
  /* 设置文本可选中 */
  user-select: text;
  font-size: 0.8rem;
  /* TODO */
  color: #8e8d8a;
}

.note-bar__status-info > div {
  margin-top: 2px;
}

.note__content {
  margin-top: 50px;
}

.vditor {
  border: none;
  /* TODO */
  --textarea-background-color: white;
}

.vditor-toolbar {
  background-color: white;
  border: none;
}


.note__footer {
  height: 25px;
  padding: 0px 8px;
  user-select: none;
}

.note__toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
}
.toolbar__buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.toolbar__button, .toolbar__button button{
  height: 25px;
}

/* 搜索查找框 */
.note__srdialog {
  z-index: 10;
  position: fixed;
  top: 85px;
  right: 20px;
  width: 402px;
}

.note__srdialog .n-tabs-tab__label {
  font-size: 1rem;
}

.srdialog__close {
  position: absolute;
  right: 20px;
  top: 10px;
  width: 30px;
  max-height: 30px;
  padding: 0;
  z-index: 100;
}

.srdialog__body {
  margin-top: 10px;
}

.srdialog__body .n-input {
  border-radius: 6px;
  margin: 10px 0;
}

.srdialog__body button {
  border-radius: 6px;
  width: 80px;
}

.srdialog__buttons {
  margin-top: 10px;
}
.srdialog__buttons button {
  margin-right: 10px;
}

</style>
