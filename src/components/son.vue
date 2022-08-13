<template>
  <fieldset>
    <legend>son</legend>
    <h1>儿子组件son</h1>
    <h1>{{ vs }}</h1>
    <button @click="send">去给爸爸传消息</button>
  </fieldset>
</template>
<script>
export default {
  props: ["vs"],
  data(){
   return {
    msg:"爸爸，我把信息传过来了"
    }
  },
  methods:{
    send(){
        this.$emit('receive', this.msg);
    }
  }
};
</script>