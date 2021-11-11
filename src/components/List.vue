<template>
  <div class="row">
    <p v-if="showTip" style="font-size: 30px;color: cyan">请输入要查询的用户</p>
    <p v-else-if="showLoading"><img src="./img/loading.gif" alt=""></p>
    <div v-else-if="showUsers" class="card" v-for="user in users" :key="user.id">
      <a :href="user.home" target="_blank">
        <img :src="user.avatar" style="width: 100px"/>
      </a>
      <p class="card-text">{{user.name}}</p>
    </div>
      <p v-else style="font-size: 30px;color: tomato">你搜索的用户不存在</p>
  </div>
</template>

<script>
import {mapGetters,mapState} from 'vuex'
export default {
  name: "List",
 computed:{
   ...mapState(["showTip","showLoading","showUsers","showNobody"]),
   ...mapGetters({
     users:"switchUsers"
   })
 }
};
</script>
<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>