<template>
  <div class='app'>这里是跳转页
      {{theme}}
      {{index}}
  </div>
</template>
<script>
   import axios from 'axios'
    export default{
        name:'app',
        data(){
            return{
                theme:this.$route.query.themeName,
                index:this.$route.query.index+2,
            }
        },
        created(){
          this.$router.push({path:'/theme',query:{themeName:this.theme,index:this.index}})
    }, 
    }
</script>
<style>
</style>
