<template>
    <div class="app">
        <!--{{newtheme}}-->
        <leftnav v-show="$store.state.left"></leftnav>
       <div>
         <nav>
       <i class="icon iconfont icon-menu" @click="$store.commit('toshow')"></i>
       <p>{{theme}}</p>
    </nav>   
    <div class="main">
        <div class="center">
        <div class="news" v-for="mynew in news" @click="gonews(mynew.id)">
            <p>{{mynew.title}}</p>
            <div class="r-img">
                <img :src="mynew.images"/>
            </div>
        </div> 
    </div>
    </div>
    </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import leftnav from '@/components/common/Left-Nav'
    import store from '@/vuex/store'
    import { mapState,mapMutations } from 'vuex'

    export default{
        name:'app',
        data(){
            return{
                theme:this.$route.query.themeName,
                // index:this.$route.query.index+2,
                index:3,
                news:[],
                // totheme:$store.state.newtheme
            }
        },
        computed:{
            newtheme(){
                return this.$store.state.newtheme
            }
        },
        store,
        created(){
            this.getdata();
            
           
    },  
   
   
    methods:{
         ...mapMutations([
                'toshow','tohide',
            ]),
        getdata(){
            
             axios.get('api/theme/'+this.newtheme)
        .then((res)=>{
            console.log(res.data.stories);
            this.news=res.data.stories;
            // this.news=res.data.stories;
        })
        .catch((err)=>{
            console.log
            ('start',err,'end');
        })
        },
        gonews:function(id){
           this.$router.push({path:'/new', query: { id: id }})
        },
        goleft:function(){
            alert('left');
        }
    },
   components:{
            leftnav
             }
    }
</script>
<style>
    nav{
       width: 100%;
       height: .6rem;
       background: #00a2ea;
       display: flex;
       flex-direction: row;
       line-height: .6rem;
        
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
     font-size: .2rem;
   }

       
   img{
            color:#fff;
            width: 100%;
            height: 100%;
        }
        .main{
            background: #E3E3E3;
        }
        .center{
            width: 90%;
            margin: 0 auto;
        }
        .one{
            color: #555;
            font-size: .2rem;
            height: .4rem;
            text-align: left;
            line-height: .2rem;
            line-height: .4rem;
        }
        
        .news{
            width: 100%;
            height: .8rem;
            background: #fff;
            color: #777;
            border-radius: .1rem;
         font-size: .3rem;
          margin-top: .3rem;
        }
        .news:nth-child(1){
            margin-top: 0 !important;
        }
        .news p{
          float: left;
          width: 80%;
          text-align: left;
        }
        .r-img{
            height: .6rem;
            width: .6rem;
            float: right;
            margin-top: .1rem;
            margin-right: .2rem;
          
        }
</style>
