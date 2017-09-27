<template>
  <div class="app">
      <leftnav v-show="$store.state.left"></leftnav>
      <div>
    <mynav></mynav>
     <header>
        <div class="top-st" v-for="(top,index) in top_stories" :key="index">
            <img :src="top.image" />
            <div class="top-title" v-text="top.title"></div>
        </div>
    </header>
    <div class="main">
        <div class="center">
           <div class="one">
            <span>今日新闻</span>
            <!--<span>{{$store.state.left}}</span>-->
            <!--<button @click="$store.commit('toshow')">show</button>
            <button @click="$store.commit('tohide')">hide</button>-->
        </div>
        <div class="news" v-for="(mynew,index) in news" :key="index" @click="showId(mynew.id)">
            <p>{{mynew.title}}</p>
            <div class="r-img">
                <img :src="mynew.images[0]"/>
            </div>
        </div> 
       
        
         
        </div>
        </div>
    </div>
  </div>
</template>
<script>
    import axios from 'axios'
    import mynav from '@/components/common/main-nav'
    import leftnav from '@/components/common/Left-Nav'
    import store from '@/vuex/store'
   
   export default{
       name:'app',
       data(){
           return{
            news:[],
            top_stories:[],
            mark:0
           }
       },
      store,

       created(){
        axios.get('api/news/latest')
        .then((res)=>{
            console.log(res.data.top_stories);
            this.news=res.data.stories;
            this.top_stories=res.data.top_stories;
        })
        .catch((err)=>{
            console.log
            ('start',err,'end');
        })
       },
        components:{
            mynav,leftnav
             },
        methods:{
            showId:function(id){
                // alert(id);
                this.$router.push({path:'/new', query: { id: id }})
                // this.$routers.push({path:'/mynew'})
            }
        }   
   }
</script>
<style scoped>
header{
            position: relative;
            left:-200%;
            width: 500%;
            height: 1.8rem;
        }  

       .top-st{
           width:20%;
           float: left;
           position: relative;
       }
        img{
            width: 100%;
           height: 1.8rem;
        }
        .top-title{
            position: absolute; 
            font-size: .2rem; 
            bottom: .2rem;
            text-align: left;
            width: 100%;
            height: .7rem;
            background: rgba(122, 122, 122, .5);
            /*font-size: .3rem;*/
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
          padding: .1rem;
        }
        .news:nth-child(1){
            margin-top: 0 !important;
        }
        .news p{
          float: left;
          width: 70%;
          text-align: left;
        }
        .r-img{
            height: .6rem;
            width: .6rem;
            float: right;
            margin-top: .1rem;
            margin-right: .2rem;
          
        }
        .r-img img{
            height: 100%;
            width:100%;
        }
</style>
