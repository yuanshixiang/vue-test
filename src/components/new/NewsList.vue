<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
          <img
            class="mui-media-object mui-pull-left"
            :src="item.img_url"
          >
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class="mui-ellipsis">
              <span>发表时间：{{ item.add_time | dateFrmat('YYYY-MM-DD')}}</span>
              <span>点击：{{ item.click }}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data: function() {
    return {
      newsList:[]
    };
  },
  created(){
      this.getNewsList()
  },
  methods: {
    getNewsList() {
      this.$http.get("api/getnewslist").then(res => {
        if (res.body.status === 0) {
          this.newsList = res.body.message
          console.log(res.body)
        } else {
          Toast("新闻列表加载失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: skyblue;
    }
  }
}
</style>
