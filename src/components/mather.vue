<template>
<fieldset>
    <legend>mather</legend>
    <h1>母亲组件mather</h1>
    <h1>{{kiss}}</h1>
</fieldset>
</template>
<script>

export default {
    mounted(){
        this.$bus.$on("getting",input=>{
            console.log(input);
            this.kiss=input
        })
    },
    data(){
       return {
        kiss:"来自老公的信息"
        }
    }
}
</script>