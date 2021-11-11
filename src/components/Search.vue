<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model.trim.lazy="keyWord"/>
        <button @click="getUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import {mapMutations,mapActions} from 'vuex'
export default {
  name: "Search",
  computed:{
    keyWord:{
      get(){
        // 读取数据
        return this.$store.state.keyWord
      },
      set(keyWord){
        // 修改数据
        this.updateKeyWord({keyWord})
      }
    }
  },
  methods: {
      // 提交mutation  传参
      ...mapMutations(["updateKeyWord"]),
      ...mapActions(["getUsers"])
    },
};
</script>
<style scoped>
</style>