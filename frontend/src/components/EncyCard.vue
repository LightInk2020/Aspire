<template>
  <n-card
    :segmented="{
      content: true
    }"
    class="ap-normal-card"
  >
    <template #header>
      <div>百科关键字</div>
      <div class="ap-normal-card__avatar-group"> 
        <n-tooltip trigger="hover" v-for="(item, i) in [1, 2, 3]">
          <template #trigger>
            <n-avatar
              round
              size="tiny"
              src="src/assets/img/user_img.jpg"
            />
          </template>
          Light ink
        </n-tooltip>
        贡献
      </div>
      <n-button secondary type="info" :focusable="false" size="tiny" 
        v-for="(item, i) in ['分类', '通用分类', '短分类', '长长长分类']"
      >
        {{ item }}
        <n-icon><ChevronRight /></n-icon>
      </n-button>
    </template>
    <template #header-extra>
      <n-button quaternary :focusable="false" class="small-button">
        <n-icon><Star /></n-icon>
      </n-button>
      <n-button quaternary :focusable="false" class="small-button">
        <n-icon><MoreHorizFilled /></n-icon>
      </n-button>
    </template>
    Markdown是一种轻量级标记语言，创始人为约翰·格鲁伯（John Gruber）。 它允许人们使用易读易写的纯文本格式编写文档，然后转换成有效的XHTML（或者HTML）文档。这种语言吸收了很多在电子邮件中已有的纯文本标记的特性。
    <n-collapse class="ap-normal-card__collapse" :default-expanded-names="['1', '2', '3']" arrow-placement="right">
      <n-collapse-item title="相关链接" name="1">
        <!-- 对于论文关键字，提供相关的论文和笔记 -->
        <div class="ap-tiny-list">
          <div class="ap-tiny-list__item" v-for="(item, i) in [1, 2, 3, 4]">
            <n-icon><Link /></n-icon>
            <n-button quaternary :focusable="false" size="small">
              <n-ellipsis style="max-width: 235px">
                住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪
              </n-ellipsis>
            </n-button>
          </div>
        </div>
      </n-collapse-item>
      <n-collapse-item title="相关群聊" name="2">
        <div class="ap-tiny-list">
          <div class="ap-tiny-list__item" v-for="(item, i) in [1, 2, 3]">
            <n-avatar
              :size="24"
              src="src/assets/img/user_img.jpg"
            />
            <n-button quaternary :focusable="false" size="small">
              <n-ellipsis style="max-width: 240px">
                群聊名字
              </n-ellipsis>
            </n-button>
          </div>
        </div>
      </n-collapse-item>
      <n-collapse-item title="相关词条" name="3">
        <n-tag type="info" :bordered="false" round v-for="(item, i) in encyEntries">
          {{ item }}
        </n-tag>
      </n-collapse-item>
    </n-collapse>
    <template #action>
      <div class="ap-normal-card__action">
        <n-button quaternary :focusable="false" size="small">
          百科
          <n-icon><ChevronRight /></n-icon>
        </n-button>
        <div>
          <n-button quaternary :focusable="false" size="small">
            <n-icon><LikeOutlined /></n-icon>
            5
          </n-button><n-button quaternary :focusable="false" size="small">
            <n-icon><DislikeOutlined /></n-icon>
            1
          </n-button>
        </div>
      </div>
    </template>
  </n-card>
</template>

<script setup>
import { 
  Star, Link, ChevronRight
} from '@vicons/tabler'
import { 
  MoreHorizFilled
} from '@vicons/material'
import {
  DislikeOutlined, LikeOutlined
} from '@vicons/antd'


const encyEntries = ["词条", "短词条", "中等词条", "较长的词条", "较长的词条", "短词条", "短词条", "中等词条", "词条", "词条"]

</script>

<style>
.ap-normal-card {
  overflow: hidden;
  padding: 0 20px;
}

.ap-normal-card > .n-card-header {
  align-items: flex-start;
  padding: 20px 0;
  font-size: 1.25rem;
}

.ap-normal-card .n-card-header__main > .n-button {
  margin-right: 5px;
}

.ap-normal-card__avatar-group {
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  font-weight: normal;
  color: #666c74;
  margin: 5px 0;
}

.ap-normal-card__avatar-group .n-avatar {
  margin-right: 5px;
}

.ap-normal-card .n-card__content {
  padding: 10px 0 !important;
}

.ap-normal-card .n-card__action {
  background-color: #fff;
  padding: 10px 0;
}

.ap-normal-card__collapse .n-collapse-item {
  padding-top: 10px;
  margin: 0;
}

.ap-normal-card__collapse .n-collapse-item .n-collapse-item__header {
  padding-top: 0;
}

.ap-normal-card__collapse .n-collapse-item .n-collapse-item__header .n-collapse-item__header-main, 
.ap-normal-card__collapse  .n-base-icon {
  color: #666c74;
  font-size: 0.85rem;
}

.ap-normal-card__collapse .n-collapse-item .n-collapse-item__content-wrapper .n-collapse-item__content-inner {
  padding-top: 2px;
}

.ap-normal-card__collapse .n-collapse-item:not(:first-child) {
  border-top: none;
}

.ap-normal-card__collapse .n-collapse-item .n-tag {
  margin-right: 4px;
  margin-bottom: 2px;
}

.ap-tiny-list__item {
  display: flex;
  align-items: center;
  margin: 2px 0;
}

.ap-tiny-list__item button {
  padding: 0 2px;
}

.ap-tiny-list__item button:hover {
  --n-color-hover: #e2eafe !important;
}

.ap-tiny-list__item button:hover .n-ellipsis{
  /* TODO */
  color: #4d6ff7;
}

.ap-tiny-list__item .n-icon {
  color: #4d6ff7;
  background-color: #e2eafe;
  height: auto;
  width: auto;
  padding: 4px 5px;
  margin-right: 5px;
  border-radius: 5px;
}

.ap-tiny-list__item .n-avatar {
  margin-right: 5px;
}

.ap-normal-card__action {
  display: flex;
  justify-content: space-between;
}
</style>