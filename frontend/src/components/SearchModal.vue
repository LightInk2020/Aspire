<template>
  <n-card
    class="search-modal__card"
    :bordered="false"
    size="huge"
    role="dialog"
    aria-modal="true"
  >
    <div class="search-modal__search-input">
        <n-input type="text" size="large" placeholder="搜索" clearable>
          <template #prefix>
            <n-icon :component="Search" />
          </template>
        </n-input>
        <n-divider vertical />
        <n-button class="search-modal__close" :focusable="false" size="large" quaternary @click="handleSearchModalClose">
          <template #icon>
            <n-icon><CloseOutlined /></n-icon>
          </template>
        </n-button>
    </div>
    <n-divider />
    <n-tabs
      type="line"
      :tabs-padding="20"
      pane-style="padding: 0px;"
    >
      <n-tab-pane name="综合">
        <n-scrollbar trigger="none">
          <div>综合</div><div>综合</div>
          <div>综合</div><div>综合</div><div>综合</div>
          <div>综合</div>
          <div>综合</div>
          <div>综合</div>
          <div>综合</div>
          <div>综合</div>
          <div>综合</div><div>综合</div>
          <div>综合</div>
          <div>综合</div>
          <div>综合</div>
          <div>综合</div>
          <div>综合</div>
          <div>综合</div>
          <div>综合</div>
          <div>综合</div>
          <div>综合</div><div>综合</div>
          <div>综合</div>
          <div>综合</div>
          <div>综合</div>
          <div>综合</div>
          <div>综合</div>
          <div>综合</div>
          <div>综合</div>
          <div>综合</div>
          <div>综合</div>
          <div>综合</div>
          <div>综合</div>
          <div>综合</div>
        </n-scrollbar>
      </n-tab-pane>
      <n-tab-pane name="笔记">
        <n-scrollbar trigger="none">

        笔记
        </n-scrollbar>
      </n-tab-pane>
      <n-tab-pane name="图片">
        <n-scrollbar trigger="none">
        图片
        </n-scrollbar>
      </n-tab-pane>
      <n-tab-pane name="论文">
        <n-scrollbar trigger="none">
        论文
        </n-scrollbar>
      </n-tab-pane>
      <n-tab-pane name="代码">
        <n-scrollbar trigger="none">
        代码
        </n-scrollbar>
      </n-tab-pane>
      <n-tab-pane name="文件">
        <n-scrollbar trigger="none">
        文件
        </n-scrollbar>
      </n-tab-pane>
      <n-tab-pane name="好友">
        <n-scrollbar trigger="none">
        好友
        </n-scrollbar>
      </n-tab-pane>
      <n-tab-pane name="群聊">
        <n-scrollbar trigger="none">
        群聊
        </n-scrollbar>
      </n-tab-pane>
    </n-tabs>
    <template #footer>
      <n-icon><CornerDownLeft /></n-icon> 选择条目
      <n-divider vertical />
      <n-icon><ArrowNarrowUp /></n-icon>
      <n-icon><ArrowNarrowDown /></n-icon> 移动光标
      <n-divider vertical />
      <n-icon>esc</n-icon> 关闭窗口
      <n-divider vertical />
      <n-icon><Command /></n-icon><span class="search-modal__plus-icon">+</span>
      <n-icon><KeyboardOptionKeyRound /></n-icon><span class="search-modal__plus-icon">+</span>
      <n-icon><ArrowsRightLeft /></n-icon> 切换类别
    </template>
  </n-card>
</template>

<script setup>
import { 
  Search, ArrowNarrowUp, ArrowNarrowDown, CornerDownLeft, Command, ArrowsRightLeft
} from '@vicons/tabler'
import { 
  CloseOutlined, KeyboardOptionKeyRound
} from '@vicons/material'


// TODO 学习开源项目之类的，如何处理dialog的父子传值
function handleSearchModalClose(){
  console.log('handleSearchModalClose: 学习开源项目之类的，如何处理dialog的父子传值')
}

</script>

<style>
.search-modal__card {
  width: 60%; 
  height: calc(100vh - 220px);
}

.search-modal__card .n-card__content:first-child {
  padding-top: 0;
}

.search-modal__search-input {
  display: flex;
  margin: 5px 0;
}


.search-modal__search-input .n-input {
  --n-title-font-weight: 100;
  --n-border: 0 !important;
  --n-font-size: 1rem !important;
  --n-border-hover: 0 !important;
  --n-border-focus: 0 !important;
  --n-border-radius: 10px !important;
  --n-box-shadow-focus: 0 !important;
}

.search-modal__search-input .n-input__prefix {
  margin: auto 20px;
}

.search-modal__search-input .n-input__prefix .n-icon {
  font-size: 1.2rem;
}

.search-modal__search-input .n-input-wrapper {
  padding: 0 5px;
}

.search-modal__search-input .n-divider {
  margin: 8px 0 !important;
}

.search-modal__close {
  padding: 0;
  width: 30px;
  height: 30px;
  margin: 5px 15px;
}

.search-modal__card .n-card__content {
  padding: 0;
  overflow: hidden;
}
.search-modal__card .n-card__content .n-scrollbar {
  max-height: calc(100vh - 359px);
  overflow: auto;
}

.search-modal__card .n-tabs-tab__label {
  font-size: 1rem;
}

.search-modal__card .n-card__footer {
 padding: 10px 20px;
 /* TODO */
 background-color: #f4f6f7;
 border-radius: 0 0 10px 10px;
 display: flex;
 align-items: center;
}

.search-modal__card .n-card__footer .n-icon {
  margin-right: 5px;
  width: auto;
}

.search-modal__plus-icon {
  margin-right: 5px;
}

.search-modal__card .n-card__footer .n-divider {
  margin: auto 10px !important;
  height: 100%;
}
</style>