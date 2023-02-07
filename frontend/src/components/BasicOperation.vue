<template>
  <div class="basic-operation">
    <!-- 用户 -->
    <n-popover
    placement="bottom-start"
    trigger="click"
    width="270"
    :show-arrow="false"
    >
    <template #trigger>
      <n-button quaternary :focusable="false" class="basic-operation__user">
        <!-- 用户头像 -->
        <img
            :src="user.img"
            referrerpolicy="same-origin"
            class="user__img"
        />
        <!-- 用户名 -->
        <div class="user__name">{{ user.name }}</div>
      </n-button>
    </template>
    <!-- 用户操作卡片 -->
    <div>
      <!-- 个人邮箱 -->
      <div class="user-card__email">
        {{ user.email }}
      </div>
      <n-button quaternary :focusable="false" class="user-card__info">
        <!-- 个人头像 -->
        <img :src="user.img" class="user-card__img" referrerpolicy="same-origin" />
        <div class="user-card__text">
          <!-- 用户名 -->
          <div class="user-card__name">
            <n-ellipsis style="max-width: 200px">
                {{ user.name }}
            </n-ellipsis>
          </div>
          <!-- 个性签名 -->
          <div class="user-card__motto">
              <n-ellipsis style="max-width: 200px">
                {{ user.motto }}11111111
              </n-ellipsis>
          </div>
        </div>
      </n-button>
    </div>
    <!-- 操作菜单 -->
    <div class="aspire_menu aspire_menu_bg">
      <n-button quaternary :focusable="false">
        Create work account
      </n-button>
      <n-button quaternary :focusable="false">
        Create work account
      </n-button>
      <n-button quaternary :focusable="false">
        Log out
      </n-button>
    </div>
    <template #footer>
      <div class="user-card__footer">
        <n-button quaternary :focusable="false" tag="a" href="https://github.com/LightInk2020/Aspire" target="_blank">
        Go Github
        </n-button>
      </div>
    </template>
    </n-popover>
    <!-- 操作 -->
    <div class="aspire_menu">
      <n-button quaternary :focusable="false">
        <n-icon size="20"><Search /></n-icon> 
        <span>Search</span>
      </n-button>
      <n-button quaternary :focusable="false">
        <n-icon size="20"><Clock /></n-icon> 
        <span>Updates</span>
      </n-button>
      <n-button quaternary :focusable="false">
        <n-icon size="20"><Settings /></n-icon> 
        <span>Settings</span>
      </n-button>
    </div>
  </div>
</template>

<script setup>
import { 
  Search, Clock, Settings
} from '@vicons/tabler'

const user = {
  name: "Virtual Moon",
  img: "/src/assets/img/user_img.jpg",
  email: "crescent2020@163.com",
  motto: "枕上诗书闲处好，门前风景雨来佳。",
};
</script>

<style>
.basic-operation button {
  width: 100%;
  justify-content: flex-start;
}

.basic-operation__user {
  user-select: none; /* 子元素无法被选中 */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 45px;
  overflow: hidden;
  border-radius: 0;
}

.user__img {
  display: block;
  object-fit: cover;
  border-radius: 0.25em;
  width: 1.4rem;
  height: 1.4rem;
}

.user__name {
  font-size: 0.95rem;
  font-weight: 500;
  margin: 0 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 用户卡片 */
.user-card__email {
  padding: 8px 12px 2px 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.user-card__info {
  user-select: none;
  line-height: 120%;
  width: 100%;
  padding: 4px 14px;
  height: 55px;
}

.user-card__img {
  object-fit: cover;
  border-radius: 3px;
  width: 35px;
  height: 35px;
}

.user-card__text {
  margin-left: 12px;
}

.user-card__name {
  font-size: 0.9rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align:left;
}

.user-card__motto {
  font-size: 0.75rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}

.user-card__footer {
  width: 100%;
  padding: 5px;
  /* TODO color */
  background-color: #fafafa; 
  border-radius: 0 0 5px 5px;
}

.user-card__footer a {
  width: 100%;
  justify-content: flex-start;
}
</style>