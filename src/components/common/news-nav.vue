<template>
    <div id="app">
        <div>
         <nav>
       <i class="icon iconfont icon-fanhui" @click="toIndex()"></i>
       <i class="icon iconfont icon-fenxiang"></i>
       <i id="sc" class="icon iconfont icon-shoucang" @click="shouC()"></i>
       <i class="icon iconfont icon-pinglun"></i>
       <i class="icon iconfont icon-dianzan"></i>
    </nav>   
        </div>
       
    </div>
</template>
<script>
    import store from '@/vuex/store'

    export default{
        name:'app',
        data(){
            return{
                shoucang:false
            }
        },
        store,
        methods:{
         toIndex:function(){
            history.go(-1);
         },
         shouC:function(){
             if(this.shoucang){
                  document.getElementById('sc').style.color='white';
                  this.shoucang=false;
             }else{
                  document.getElementById('sc').style.color='yellow';
                  this.shoucang=true;
             }
          
         }  
        }
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
   .myhover{
       width: 100%;
       height: 100%;
       background: rgba(133,133,133,.5);
   }
</style>
