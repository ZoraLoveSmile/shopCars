import Vue from "vue";
import App from "./App.vue";
import bus from "./utils/bus"
Vue.prototype.$bus=bus

// Vue.config.productionTip = false;打包提示在vue3已经移出
// import {add,minus} from './text.js'
// import{cheng} from './text'
// import ht from './text'
//同一个文件引入可以合并
// import ht,{add,minus,cheng}from './text'
// console.log(ht);
// console.log(cheng);
// console.log(add,minus);
import * as method from './text'
console.log(method);
new Vue({
  render: (h) => h(App),//将app组件展示在页面上
}).$mount("#app");//#app是public中index.html中的app
