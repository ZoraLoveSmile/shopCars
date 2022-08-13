<template>
<fieldset>
    <legend>father</legend>
    <h1>父组件father</h1>
    <button @click="publish">去给老婆发消息</button>
    <h2>{{text}}</h2>
    <son :vs="msg" @receive='handle'/>
</fieldset>
</template>
<script>
import son from './son.vue'

export default {
    components:{
        son
    },
    data(){
        return {
            msg:"威少666",
            text:'son请把信息传给我',
            kiss:"老婆我来啦"
            }
    },
    methods:{
        handle(input){
            console.log(input);
            this.text=input
        },
        publish(){
            this.$bus.$emit("getting",this.kiss)
        }
    }
}
</script>