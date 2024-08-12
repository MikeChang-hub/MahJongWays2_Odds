<script lang="ts">
import {defineComponent, onMounted, ref, watch} from 'vue'
import {useRouter} from 'vue-router';
import { useI18n } from 'vue-i18n'
import {Notify} from 'vant';
import { getCommissioner } from '@/api';
import {setSession, setToken } from './utils';
export default defineComponent({
    name: 'App',
  computed: {
    // dragHeight() {
    //   return window.innerHeight - 150;
    // },
    // dragWidth() {
    //   return window.innerWidth - 80;
    // }
  },
  setup: function () {
    // 点击按钮实现语言切换（顺序为：简体、繁体、英文）
    const {locale} = useI18n()
    const change_lang = () => {
      var url = window.location.href; //获取当前页面的URL地址
      var params = url.split('?')[1];
      var paramObj = {};
      let lang = 'en'
      if (params) {
        var paramArr = params.split('&');
        for (var i = 0; i < paramArr.length; i++) {
          var keyValue = paramArr[i].split('=');
          var key = keyValue[0];
          var value = keyValue[1];
          paramObj[key] = value;
        }
      }
      lang = paramObj.lang || 'en'
      console.log(paramObj,'paramObj')
      locale.value = lang
      localStorage.setItem("language", lang)
    }
    const commissionerList = ref([]);
    const centerDialogVisible = ref(false);
    const getCommissionerList = async () => {
      const {data} = await getCommissioner();
      console.log(data);
      commissionerList.value = data || [];
    }
    const isDragging = ref(false);
    // const openCopy = () => {
    //   console.log(isDragging.value);
    //   if (!isDragging.value) {
    //     centerDialogVisible.value = true;
    //     getCommissionerList();
    //   }
    // }
    // const copyOrderId2 = (orderId: any) => {
    //   var input = document.createElement('input'); // 创建input对象
    //   input.value = orderId; // 设置复制内容
    //   document.body.appendChild(input); // 添加临时实例
    //   input.select(); // 选择实例内容
    //   document.execCommand('Copy'); // 执行复制
    //   document.body.removeChild(input); // 删除临时实例
    //   Notify({type: 'success', message: '複製成功！'});
    // }
    // const openLink = (path: any) => {
    //   showVip.value = false;
    //   window.open(path);
    // }
    // mounted 声明周期钩子
    onMounted(() => {
      change_lang()
      // let vh = window.innerHeight * 0.01
      // // 然后，我们将——vh自定义属性中的值设置为文档的根
      // document.documentElement.style.setProperty('--vh', `${vh}px`)
      // // 我们监听resize事件 视图大小发生变化就重新计算1vh的值
      // window.addEventListener('resize', () => {
      //   // 我们执行与前面相同的脚本
      //   let vh = window.innerHeight * 0.01
      //   document.documentElement.style.setProperty('--vh', `${vh}px`)
      // })
    })
    // 监听
    let router = useRouter()//监听当前路由变化
    let showVip = ref(false);
    watch(() => router.currentRoute.value, () => {
      const {name} = router.currentRoute.value
      if (name == 'login') {
        showVip.value = false;
      } else {
        showVip.value = true;
      }
      console.log(router.currentRoute.value)
    })
    return {
      change_lang,
      centerDialogVisible,
      commissionerList,
      getCommissionerList,
      showVip,
      isDragging
    }
  }
})
</script>
<template>
    <router-view></router-view>
</template>

<style lang="less">
/* 对于Webkit浏览器（如Chrome, Safari） */
::-webkit-scrollbar {
  display: none; /* 隐藏滚动条 */
}

/* 对于IE和Edge */
body,div {
  -ms-overflow-style: none; /* 隐藏滚动条 */
}

/* 对于Firefox */
body,div {
  scrollbar-width: none; /* 隐藏滚动条 */
}
body,
p,
h1,
h2,
h3,
h4 {
    //margin: 0;
    //padding: 0;
}
div{
  box-sizing: inherit;
}
#app{
  //position: relative;
  //height: 100%;
  //transform: scale(1.2); /* 放大 1.2 倍 */
  //transform-origin: 0 0; /* 设置缩放的基点为左上角 */
  //width: calc(100% / 1.2); /* 调整宽度以避免偏移 */
  //height: calc(100% / 1.2); /* 调整高度以避免偏移 */
}


//html, body {
//  margin: 0;
//  padding: 0;
//  height: 100%;
//  width: 100%;
//  overflow: hidden;
//}
.login-out-detail {
  margin: 15px 20px;
  .detail-info {
    display: flex;
    justify-content: left;
    font-size: 14px;
    color: #333;
    margin-bottom: 15px;

  .title {
    width: 90px;
    text-align: right;
  }
  .text {
    flex: 1;
    text-align: center;
  }
  }
}
.call-ring{
  position: fixed;
  //right: 5px;
  //bottom: 50px;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background: url("./assets/img/vip.png");
  background-size: 100%;
  background-repeat: no-repeat;
  cursor: pointer;
  z-index: 9;
}
.is-disabled {
  pointer-events: none;
}
 .vdr.active:before{
   outline: none !important;
   display:none;
 }
.vdr-stick{
  display:none;
}
</style>
