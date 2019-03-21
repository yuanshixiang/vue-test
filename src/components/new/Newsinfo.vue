<template>
    <div class="news_content">
        <h1 class="title">{{ newsinfo.title }}</h1>
        <p class="subtitle">
            <span>发表时间：{{ newsinfo.add_time |  dateFrmat}}</span>
            <span>点击：{{ newsinfo.click }}次</span>
        </p>

        <hr>
        <div class="news_container" v-html="newsinfo.content"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
            newsinfo:{}
        }
    },
    created(){
        this.getNews()
    },
    methods:{
        getNews(){
            this.$http.get('api/getnew/' + this.id).then((result)=>{
                if(result.body.status === 0){
                    this.newsinfo = result.body.message[0]
                    console.log(result.body)
                }else{
                    console.log('失败')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .news_content{
        .title{
            color: red;
            margin: 15px 0;
            font-size: 16px;
            text-align: center;
        }
        .subtitle{
            font-size: 12px;
            color: skyblue;
            display:flex;
            justify-content: space-between;
            padding: 0 5px;
        }
        .news_container{
            padding: 0 5px;
        }
    }
</style>