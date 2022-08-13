<template>
  <div id="app">
   <!-- 展示在其父组件（跟组件）的结构中 -->
   <!-- <parent></parent> -->
   <!-- <father />
   <mather /> -->
   <h1>单身狗专业聊天室</h1>
   <wife />
   <husband />
  </div>
</template>

<script>
//引入子组件结构
// import Parent from './Parent.vue'
// import father from './components/father.vue'
// import mather from './components/mather.vue'
import wife from "./components/wife.vue";
import husband from "./components/husband.vue";
export default {
  name: "App",
  components:{//注册子组件
    wife,//引入的father就是一个对象，所以不需要father：{}这样去写了
    husband
  },
  // components:{
    
  // }  
};
</script>

<style scoped>
h1{
  color:pink
}
</style>
