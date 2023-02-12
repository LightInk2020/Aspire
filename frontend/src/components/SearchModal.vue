<!-- 
快捷键：
  - 当用户鼠标集中在note上时， command + f 展示文件内部搜索框
  - 当用户鼠标集中在非note上时， command + f 展示全局搜索框
-->
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
      class="search-modal__tabs"
    >
      <n-tab-pane name="综合">
        <n-layout style="height: calc(100vh - 359px);" has-sider sider-placement="right">
          <n-layout content-style="padding: 20px;" :native-scrollbar="false">
            <!-- 卡片列表展示搜索结果 -->
            <n-list :show-divider="false" class="aspire__normal-list" v-for="(type, i) in [1, 2, 3]">
              <template #header>
                <div class="aspire__normal-list-title">笔记</div>
                <n-button quaternary :focusable="false">
                  转到 笔记<n-icon size="18"><ChevronRight /></n-icon>
                </n-button>
              </template>
              <template #footer>
                <n-divider>
                  展开更多<n-icon><ChevronDown /></n-icon>
                </n-divider>
              </template>
              <n-card :bordered="false" hoverable class="aspire__normal-list-item" v-for="(item, j) in [1, 2, 3, 4, 5]">
                <n-list-item>
                  <template #prefix>
                    <!-- TODO 文件图标 -->
                    <n-icon><File /></n-icon>
                  </template>
                  <template #suffix>
                    <n-button quaternary :focusable="false">
                      <n-icon><ChevronLeft /></n-icon>
                    </n-button>
                  </template>
                  <div class="aspire__normal-list-item-title">
                    测试笔记
                  </div>
                  <div class="aspire__normal-list-item-info">
                    <div><n-icon><Folder /></n-icon>
                      <n-tooltip placement="bottom">
                        <template #trigger>
                          文件路径
                        </template>
                        <span> 这里是文件的具体路径 </span>
                      </n-tooltip>
                    </div><span>·</span>
                    <div><n-icon><Eye /></n-icon>
                      <n-ellipsis style="max-width: 90px" :tooltip="{placement:'bottom'}">
                        Light ink
                      </n-ellipsis>
                      在3月1日打开过
                    </div><span>·</span>
                    <div><n-icon><Pencil /></n-icon>
                      <n-ellipsis style="max-width: 90px" :tooltip="{placement:'bottom'}">
                        Light ink
                      </n-ellipsis>
                      在3月1日编辑过
                    </div>
                  </div>
                </n-list-item>
              </n-card>
            </n-list>
          </n-layout>
          <n-layout-sider
            content-style="padding: 24px;"
            :native-scrollbar="false"
            collapse-mode="transform"
            :collapsed-width="0"
            :width="240"
            show-trigger="bar"
            bordered
          >
            <n-h2>百科</n-h2>
            <n-h2>排序</n-h2>
            <n-h2>时间</n-h2>
            <!-- 本地还是网络、网络什么网站 -->
            <n-h2>跳转到百度搜索</n-h2>
          </n-layout-sider>
        </n-layout>
      </n-tab-pane>
      <n-tab-pane name="笔记">
        <n-layout style="height: calc(100vh - 359px);" has-sider sider-placement="right">
          <n-layout content-style="padding: 20px;" :native-scrollbar="false">
            <!-- 卡片列表展示搜索结果 -->
            <n-list :show-divider="false" class="aspire__normal-list" v-for="(type, i) in [1, 2, 3]">
              <template #header>
                <div class="aspire__normal-list-title">文件夹路径</div>
              </template>
              <template #footer>
                <!-- 默认只展示5个结果，点击可以展开更多 -->
                <n-divider>
                  展开更多<n-icon><ChevronDown /></n-icon>
                </n-divider>
              </template>
              <n-card :bordered="false" hoverable class="aspire__normal-list-item" v-for="(item, j) in [1, 2, 3, 4, 5]">
                <n-list-item>
                  <template #prefix>
                    <!-- TODO 文件图标 -->
                    <n-icon><File /></n-icon>
                  </template>
                  <template #suffix>
                    <n-button quaternary :focusable="false">
                      <n-icon><ChevronLeft /></n-icon>
                    </n-button>
                  </template>
                  <div class="aspire__normal-list-item-title">
                    测试笔记
                  </div>
                  <div class="aspire__normal-list-item-info">
                    <div><n-icon><Folder /></n-icon>
                      <n-tooltip placement="bottom">
                        <template #trigger>
                          文件路径
                        </template>
                        <span> 这里是文件的具体路径 </span>
                      </n-tooltip>
                    </div><span>·</span>
                    <div><n-icon><Eye /></n-icon>
                      <n-ellipsis style="max-width: 90px" :tooltip="{placement:'bottom'}">
                        Light ink
                      </n-ellipsis>
                      在3月1日打开过
                    </div><span>·</span>
                    <div><n-icon><Pencil /></n-icon>
                      <n-ellipsis style="max-width: 90px" :tooltip="{placement:'bottom'}">
                        Light ink
                      </n-ellipsis>
                      在3月1日编辑过
                    </div>
                  </div>
                </n-list-item>
              </n-card>
            </n-list>
          </n-layout>
          <n-layout-sider
            content-style="padding: 24px;"
            :native-scrollbar="false"
            collapse-mode="transform"
            :collapsed-width="0"
            :width="240"
            show-trigger="bar"
            bordered
          >
            <n-h2>排序</n-h2>
            <n-h2>来自用户</n-h2>
            <!-- 笔记也可以是从星空保存下来的，所以 来自用户 可能不同 -->
            <n-h2>所在文件夹</n-h2>
            <n-h2>最近浏览时间</n-h2>
            <n-h2>匹配范围</n-h2>
          </n-layout-sider>
        </n-layout>
      </n-tab-pane>
      <n-tab-pane name="图片">
        <n-layout style="height: calc(100vh - 359px);" has-sider sider-placement="right">
          <n-layout content-style="padding: 20px;" :native-scrollbar="false">
            <div class="aspire__image-group" v-for="(imgGroup, i) in [1, 2, 3]">
              <n-image-group :theme-overrides="imageGroupThemeOverrides">
                <div class="aspire__image-group-header">
                  <div class="aspire__image-group-title">本地</div>
                </div>
                <div class="aspire__image-group-content" :id="'aspire__image-group-content' + i">
                  <n-image
                    v-for="(img, j) in imgList"
                    :key="j"
                    lazy
                    :src="img"
                    :intersection-observer-options="{
                      root: '#aspire__image-group-content' + i
                    }"
                    object-fit="cover"
                    width="224"
                    height="126" 
                    fallback-src="/src/assets/img/image_error.png"
                  >
                    <template #placeholder>
                      <div class="aspire__image-group-loading">
                        Loading
                      </div>
                    </template>
                  </n-image>
                </div>  
                <div class="aspire__image-group-footer">
                  <!-- 默认只展示3行结果，点击可以展开更多 -->
                  <n-divider>
                    展开更多<n-icon><ChevronDown /></n-icon>
                  </n-divider>
                </div>
              </n-image-group>
            </div>
          </n-layout>
          <n-layout-sider
            content-style="padding: 24px;"
            :native-scrollbar="false"
            collapse-mode="transform"
            :collapsed-width="0"
            :width="240"
            show-trigger="bar"
            bordered
          >
            <n-h2>排序</n-h2>
            <n-h2>图片来源</n-h2>
            <!-- 本地/百度/...等 -->
            <n-h2>所在文件夹</n-h2>
            <!-- TODO 限制了所在文件夹，即自动设置图片来源仅 本地 -->
            <n-h2>图片参数</n-h2>
            <!-- 分辨率、长宽等 -->
          </n-layout-sider>
        </n-layout>
      </n-tab-pane>
      <n-tab-pane name="代办">
        <n-layout style="height: calc(100vh - 359px);" has-sider sider-placement="right">
          <n-layout content-style="padding: 20px;" :native-scrollbar="false">
            <div>代办</div>
          </n-layout>
          <n-layout-sider
            content-style="padding: 24px;"
            :native-scrollbar="false"
            collapse-mode="transform"
            :collapsed-width="0"
            :width="240"
            show-trigger="bar"
            bordered
          >
            <n-h2>排序</n-h2>
            <n-h2>任务组</n-h2>
            <n-h2>时间</n-h2>
            <n-h2>创建人</n-h2>
          </n-layout-sider>
        </n-layout>
      </n-tab-pane>
      <n-tab-pane name="论文">
        <n-layout style="height: calc(100vh - 359px);" has-sider sider-placement="right">
          <n-layout content-style="padding: 20px;" :native-scrollbar="false">
            <div>论文</div>
            <!-- 包含相应代码 -->
          </n-layout>
          <n-layout-sider
            content-style="padding: 24px;"
            :native-scrollbar="false"
            collapse-mode="transform"
            :collapsed-width="0"
            :width="240"
            show-trigger="bar"
            bordered
          >
            <n-h2>排序</n-h2>
            <n-h2>论文来源</n-h2>
            <!-- 本地还是网络、网络什么网站 -->
            <n-h2>发表时间</n-h2>
            <n-h2>发表自</n-h2>
            <!-- 发表下划分 会议/期刊  然后再划分XXX会议/期刊 -->
            <n-h2>最近浏览时间</n-h2>
            <n-h2>匹配范围</n-h2>
          </n-layout-sider>
        </n-layout>
      </n-tab-pane>
      <n-tab-pane name="文件">
        <n-layout style="height: calc(100vh - 359px);" has-sider sider-placement="right">
          <n-layout content-style="padding: 20px;" :native-scrollbar="false">
            <div>文件</div>
            <!-- 本地文件 -->
          </n-layout>
          <n-layout-sider
            content-style="padding: 24px;"
            :native-scrollbar="false"
            collapse-mode="transform"
            :collapsed-width="0"
            :width="240"
            show-trigger="bar"
            bordered
          >
            <n-h2>排序</n-h2>
            <n-h2>文件夹</n-h2>
            <n-h2>文件类型</n-h2>
            <n-h2>最近浏览时间</n-h2>
            <n-h2>匹配范围</n-h2>
          </n-layout-sider>
        </n-layout>
      </n-tab-pane>
      <n-tab-pane name="消息">
        <n-layout style="height: calc(100vh - 359px);" has-sider sider-placement="right">
          <n-layout content-style="padding: 20px;" :native-scrollbar="false">
            <div>消息</div>
          </n-layout>
          <n-layout-sider
            content-style="padding: 24px;"
            :native-scrollbar="false"
            collapse-mode="transform"
            :collapsed-width="0"
            :width="240"
            show-trigger="bar"
            bordered
          >
            <n-h2>排序</n-h2>
            <n-h2>来自用户</n-h2>
            <!-- 笔记也可以是从星空保存下来的，所以 来自用户 可能不同 -->
            <n-h2>所在会话</n-h2>
            <n-h2>会话类型</n-h2>
            <n-h2>消息类型</n-h2>
            <n-h2>时间</n-h2>
          </n-layout-sider>
        </n-layout>
      </n-tab-pane>
      <n-tab-pane name="好友">
        <n-layout style="height: calc(100vh - 359px);" content-style="padding: 20px;" :native-scrollbar="false">
          <div>好友</div>
        </n-layout>
      </n-tab-pane>
      <n-tab-pane name="群聊">
        <n-layout style="height: calc(100vh - 359px);" has-sider sider-placement="right">
          <n-layout content-style="padding: 20px;" :native-scrollbar="false">
            <div>群聊</div>
          </n-layout>
          <n-layout-sider
            content-style="padding: 24px;"
            :native-scrollbar="false"
            collapse-mode="transform"
            :collapsed-width="0"
            :width="240"
            show-trigger="bar"
            bordered
          >
            <n-h2>排序</n-h2>
            <n-h2>群类型</n-h2>
            <!-- 我创建、管理、成员？ -->
          </n-layout-sider>
        </n-layout>
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
  Search, ArrowNarrowUp, ArrowNarrowDown, CornerDownLeft, Command, ArrowsRightLeft, ChevronRight,
  Folder, Eye, Pencil, File, ChevronLeft, ChevronDown
} from '@vicons/tabler'
import { 
  CloseOutlined, KeyboardOptionKeyRound
} from '@vicons/material'
import { useThemeVars } from "naive-ui";
import { computed } from "vue"


// TODO 学习开源项目之类的，如何处理dialog的父子传值
function handleSearchModalClose(){
  console.log('handleSearchModalClose: 学习开源项目之类的，如何处理dialog的父子传值')
}

// 图片组主题变量赋值
const imageGroupThemeOverrides = computed(() => {
  const { popoverColor, boxShadow2, textColor2, borderRadius } = useThemeVars().value;
  const themeOverrides = {
    toolbarColor: popoverColor,
    toolbarBoxShadow: boxShadow2,
    toolbarIconColor: textColor2
  };
  return themeOverrides;
})
// 图片搜索结果
const imgList = [
  "/src/assets/img/image_error.png",
  "/src/assets/img/image_error.png",
  "/src/assets/img/image_error.png",
  "/src/assets/img/image_error.png",
  "/src/assets/img/image_error.png",
  "/src/assets/img/image_error.png",
  "/src/assets/img/image_error.png",
  "/src/assets/img/image_error.png",
  "/src/assets/img/image_error.png",
]
const imgList2 = [
  "/src/assets/img/user_img.jpg",
  "/src/assets/img/user_img.jpg",
  "/src/assets/img/user_img.jpg",
  "/src/assets/img/user_img.jpg",
  "/src/assets/img/user_im22g.jpg",
  "/src/assets/img/user_img.jpg",
  "/src/assets/img/user_img.jpg",
  "/src/assets/img/user_img.jpg",
  "/src/assets/img/user_img.jpg",
]


</script>

<style>
.search-modal__card {
  width: 55%;
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

.search-modal__card .search-modal__tabs .n-scrollbar-content {
  padding-top: 0 !important;
}

/* aspire__normal-list */
.aspire__normal-list .n-list__header,
.aspire__image-group-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  padding-top: 5px;
  height: 45px;
}

.aspire__normal-list .n-list__header:not(:last-child) {
  border-bottom: none;
}

.aspire__normal-list .n-card {
  border-radius: 5px;
  --aspire-normal-card-shadow: 0 1px 3px 0 #d4d9e1;
  box-shadow: var(--aspire-normal-card-shadow);
  margin-bottom: 5px;
}

.aspire__normal-list .n-card.n-card--hoverable:hover {
  /* TODO */
  background-color: #eff4fe;
}

.aspire__normal-list-title {
  font-weight: 500;
  font-size: .95rem;
}

.aspire__normal-list-item-title,
.aspire__image-group-title {
  display: flex;
  font-size: .95rem;
  font-weight: 500;
}

.aspire__normal-list-item-info {
  display: flex;
  align-items: center;
  font-size: .8rem;
}

.aspire__normal-list-item-info > div {
  display: flex;
  align-items: center;
}

.aspire__normal-list-item-info > div .n-icon {
  margin-right: 5px;
}

.aspire__normal-list-item-info > span {
  margin: auto 5px;
}

.aspire__normal-list .aspire__normal-list-item .n-list-item__prefix {
  font-size: 1.8rem;
  display: flex;
  margin: auto 12px;
}

.aspire__normal-list .aspire__normal-list-item .n-list-item__suffix {
  display: flex;
  margin: auto 12px;
}

.aspire__normal-list .aspire__normal-list-item .n-list-item__suffix button {
  font-size: 1.5rem;
  /* TODO 字体设置不同深度，普通、次要、次次要，设置不同颜色 */
  color: #bfbfbf;
  padding: 0;
  width: 30px;
  height: 30px;
}

.aspire__normal-list .n-list__footer {
  padding: 0;
}

.aspire__normal-list .n-list__footer .n-divider,
.aspire__image-group-footer .n-divider {
  padding: 5px 0;
  border-radius: 5px;
}

.aspire__normal-list .n-list__footer .n-divider:hover,
.aspire__image-group-footer .n-divider:hover {
  background-color: #eff4fe;
  color: #4275f6;
}

.aspire__normal-list .n-list__footer .n-divider .n-divider__title,
.aspire__image-group-footer .n-divider .n-divider__title {
  font-weight: normal;
  font-size: .9rem;
}

/* 图像组 */
.n-image-preview-toolbar {
  border-radius: 5px;
}

.n-image-preview-toolbar .n-base-icon {
  padding: 0;
  margin: 0 10px;
  border-radius: 5px;
}

.n-image-preview-toolbar .n-base-icon:hover {
  background-color: #eceded;
}

.aspire__image-group-content .n-image {
  margin: 5px;
  border-radius: 5px;
  /* TODO */
  --aspire-normal-card-shadow: 0 1px 3px 0 #d4d9e1;
  box-shadow: var(--aspire-normal-card-shadow);
  transition: all .5s;
}

.aspire__image-group-content .n-image:hover {
  /* TODO 这个是naive ui 自带的--n-box-shadow */
  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.08), 0 3px 6px 0 rgba(0, 0, 0, 0.06), 0 5px 12px 4px rgba(0, 0, 0, 0.04);
  transform: scale(1.005) translateY(-.08rem); 
}

.aspire__image-group-loading {
  width: 224px;
  height: 126px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0001;
}

</style>