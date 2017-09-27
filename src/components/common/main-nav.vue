<template>
    <div id="app">
        <div>
         <nav>
       <i class="icon iconfont icon-menu" @click="$store.commit('toshow')"></i>
       <p>首页</p>
       <i class="icon iconfont icon-yejianmoshi"></i>
       <i class="icon iconfont icon-gengduo2"></i>
    </nav>   
        </div>
       
    </div>
</template>
<script>
    import store from '@/vuex/store'

    export default{
        name:'app',
        store,
        methods:{
           
        }
    }

</script>
<style scoped>
   nav{
       width: 100%;
       height: .5rem;
       background: #00a2ea;
       display: flex;
       flex-direction: row;
       /*line-height: .6rem;*/
        
   }
   .icon{
       display: inline-block;
       font-size: .4rem;
      color: #fff;
       text-align: center;
       flex:1;
   }
   nav p{
     flex:6;
     text-align: left;
     color:#fff;
     font-size: .3rem;
     line-height: 1;
     
   }
   .myhover{
       width: 100%;
       height: 100%;
       background: rgba(133,133,133,.5);
   }
</style>
