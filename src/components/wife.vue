<template>
<fieldset>
    <legend>wife</legend>
    <h2>wife老婆</h2>
    <h4>傻逼来消息了</h4>
    <ul>
        <li v-for="(item,index) in wife" :key="index">{{item}}</li>
    </ul>
    <button @click='send'>给老公发消息</button><input type="text" v-model="husband">
</fieldset>
</template>
<script >
export default {
    data(){
        return {
            husband:"",
            wife:[]
        }
    },
      methods: {
        send(){
            // console.log(this.husband);
            this.$bus.$emit('receive',this.husband)
            this.wife.push("我："+this.husband)
            this.husband=''
        }
    },
    mounted(){
        this.$bus.$on("getting",input=>{
            // console.log(input);
            this.wife.push("老公： " +input)
        })
    }
}
</script>
<style scoped>
ul{
    color:skyblue;
    list-style:none;
    overflow: auto;
}
</style>