<template>
    <div id="app">
        <div>
         <nav>
       <i class="icon iconfont icon-menu" @click="toIndex()"></i>
       
    </nav>   
        </div>
       
    </div>
</template>
<script>
    import store from '@/vuex/store'

    export default{
        name:'app',
        store,
       
    }

</script>
<style scoped>

   nav{
       width: 100%;
       height: .6rem;
       background: #00a2ea;
       display: flex;
       flex-direction: row;
       line-height: .6rem;
       position: fixed;
       left: 0;
       top: 0;
        
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
   }
   /*.myhover{
       width: 100%;
       height: 100%;
       background: rgba(133,133,133,.5);
   }*/
</style>
