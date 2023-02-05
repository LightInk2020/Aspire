<template>
  <div>
    <n-layout has-sider position="absolute">
      <n-layout-sider
        collapse-mode="transform"
        :collapsed-width="0"
        :width="240"
        show-trigger="bar"
        content-style="padding: 24px;"
        bordered
        :native-scrollbar="false"
      >
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
      </n-layout-sider>
      <n-layout>
        <n-layout-header position="absolute">头部</n-layout-header>
        <n-layout-content>
          <div id="vditor" ref="vditor"></div>
        </n-layout-content>
        <n-layout-footer position="absolute">底部</n-layout-footer>
      </n-layout>
    </n-layout>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Vditor from "vditor"
import "vditor/dist/index.css"
import { createDiscreteApi } from 'naive-ui'
import mitt from '../utils/event.js'
import Clipboard from 'clipboard'


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
    height: '100%', // 默认使用窗口的高度
    width: '100%',
    minHeight: 768,
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
      position: 'left'
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
      original.value = md
      translation.value = ""
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
</script>

<style>

</style>
