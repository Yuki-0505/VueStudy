<template>
  <div>
    <h2>这是首页</h2>
    <router-link to='/home/news'>新闻</router-link>
    <router-link to='/home/message'>消息</router-link>
    <router-view></router-view>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      message: 'hello'
    }
  },
  // 创建vue实例后回调
  created() {
    console.log('created')
  },
  // 挂在模板后回调
  mounted() {
    console.log('mounted')
  },
  // 数据更新后回调
  updated() {
    console.log('updated')
  },
  // activated/deactivated只有在使用了keep-alive标签时才有效
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  }

}
</script>

<style>

</style>
