import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// common css
import './styles/common.css'
// 各种主题样式
import './styles/themes.less'

const app = createApp(App)
app.use(naive)
app.use(router)
app.use(ElementPlus, {
    locale: zhCn,
  })
app.mount('#app')
