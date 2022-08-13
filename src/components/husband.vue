<template>
<fieldset>
    <legend>husband</legend>
    <h2>husband老公</h2>
    <h4>来自老婆的信息</h4>
    <ul>
        <li v-for="(item,index) in wife" :key="index">{{item}}</li>
    </ul>
    <button @click='send'>给老婆发消息</button><input type="text" v-model='husband'>
</fieldset>
</template>
<script >
export default {

    data() {
        return {
            wife:[],
            husband:""
        };
    },

    mounted() {
            this.$bus.$on("receive",input=>{
            this.wife.push("老婆： " +input)
            // console.log(this.wife);
        })
    },

    methods: {
        send(){
            this.$bus.$emit("getting",this.husband)
             this.wife.push("我："+this.husband)
            this.husband=''
        }
    },
};
</script>
<style scoped>
ul{
    color:hotpink;
    list-style:none;
    overflow: auto;
}
</style>