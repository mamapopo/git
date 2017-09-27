<template>
<div class="app" @click.self="toinner()">
    <!--阻止冒泡-->
   <div class="left" @click="tolist()">
        <div class="top">
            <div class="users">
                <img src="http://v1.qzone.cc/avatar/201409/24/19/58/5422b1ff86ed0232.jpg%21200x200.jpg" alt="">
                useranem
            </div>
            <div class="icons">
                <i class="ticon iconfont icon-shoucang1"></i>
                <span>我的收藏</span>
                <i class="ticon iconfont icon-xiazai"></i>
                <span>离线下载</span>
            </div>
        </div>
        <div class='shouYe' @click="toIndex()">
            <i class="ficon iconfont icon-shouye" ></i>
            首页
        </div>
        <div class="item" v-for="(item,index) in items" @click="tomodel(item,index)">
            <span>{{item}} <i class="lefticon iconfont icon-tianjia"></i></span>

           
        </div>
        
   </div>
</div>  
</template>
<script>
    import store from '@/vuex/store'
     import { mapState,mapMutations } from 'vuex'
    export default{
        data(){
            return{
                items:[
                    '开始游戏','电影日报','设计日报','大公司日报','财经日报',
                    '音乐日报','体育日报','动漫日报','互联网安全','不许无聊','用户推荐日报'

                ],
                list:false,
                inner:false
            }
        },
        store,
        methods:{
            ...mapMutations([
                'toshow','tohide','newTheme'
            ]),
           toIndex:function(){
            this.$router.push({path:'/'});
            this.tohide();
           },
            tomodel:function(item,index){ 
                this.tohide();
                this.newTheme(index+2);
                this.$router.push({path:'/goto',query:{themeName:item,index:index}})
                
            },
            tolist:function(){//点击左边
               this.list=true;
               console.log('list');
            //    console.log(this.list+':'+this.inner);
            },
            toinner:function(){//点击遮盖层，要求重新显示主页
                this.inner=true;

                // event.cancelBubble=true;//阻止事件冒泡
                // alert('退出遮盖层');
                this.tohide();
                  console.log(this.list+':'+this.inner);
            }
        }
       
    }
</script>
<style scoped>
    span{
        font-size:.2rem; 
    }
    .app{
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(122,122,122, .5);
        z-index: 5;
    }
    .left{
        height: 100%;
        width: 40%;
        background:#fff;
        display: flex;
        flex-direction: column;
        vertical-align: middle;
        

    }
    .top{
        flex:2;
        background: #00a2ea;
    }
    .item{
        flex:1;

    }
    .item span{
        float: left;
        width: 100%;
        display: flex;
        justify-content: space-between;
     
    }
    .shouYe{
        flex:1;
        color:#00a2ea;
        font-size: .2rem;
        text-align: left;
       
    }
    .lefticon{
        color:black;
        font-size: .2rem;
        margin-right: .3rem;
    }
    /*.icon{
       display: inline-block !important;
       font-size: .2rem !important;
       margin-right: .5rem !important;
     
    }*/
    
    .ficon{
        font-size: .3rem;
        
    }
    .ticon{
        font-size: .4rem;
        color:#fff;
    }
    .user img{
        width: 1rem;
        height: 1rem;
        background: #000;
    }
    .icons{
        color:#fff;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .users img{
        width: .8rem;
        height: .8rem;
        border-radius: .4rem;
        margin: .1rem;
    }
    .users{
        font-size: .2rem;
        text-align: left;
    }
</style>