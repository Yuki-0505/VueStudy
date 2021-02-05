<template>
  <div id="app">
    <!-- router-link默认为<a/>标签，可通过tag属性修改 -->
    <!-- replace属性没有历史记录，不能返回 -->
    <!-- active-class='active'修改类名 -->
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <!-- 动态路由 -->
    <router-link :to="'/user/' + userId" tag="button">用户</router-link>

    <router-link
      :to="{
        path: '/profile',
        query: { name: 'miss', age: 18 },
      }"
      tag="button">档案</router-link>

    <!-- 自定义按钮通过代码跳转 -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button> -->

    <!-- <router-view></router-view> -->
    <!-- include包含，exclude排除 -->
    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "3123131",
    };
  },
  methods: {
    homeClick() {
      // 通过路由来跳转，而不是直接使用history.pushState()
      this.$router.push("/home");
      console.log("homeClick");
    },
    aboutClick() {
      this.$router.push("/about");
      // this.$router.replace('/about')
      console.log("aboutClick");
    },
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'miss',
          age: 18
        }
      })
    }
  },
};
</script>

<style>
.router-link-active {
  color: #f00;
}
</style>
