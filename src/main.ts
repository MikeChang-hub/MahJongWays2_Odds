import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import * as comps from './config/vantComps'
// import 'vant/lib/index.css'
// import '@/styles/index.less'
import 'lib-flexible/flexible'
// import '@/assets/css/iconfont.css'
import { createPinia } from 'pinia'
// @ts-ignore
import i18n from './language'

console.log(123123,'develop')
//test123123123
const app = createApp(App)
const lang = localStorage.getItem('language')
app.use(router).use(createPinia())
app.use(i18n)

// app.provide('localeUtil', localeUtil[lang])


// 注册vant组件
Object.values(comps).forEach(comp => app.use(comp))
console.log(345)
app.mount('#app')
