<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="increment(5)">+5</button>
    <button @click="decrement(5)">-5</button>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <button @click="changeUser">响应式更新</button>
    <h2>{{$store.state.user}}</h2>
  </div>
</template>

<script>
export default {
  name: "Hello",
  methods: {
    increment(count) {
      count = count instanceof MouseEvent ? 1 : count
      this.$store.commit('increment', count)
    },
    decrement(count) {
      count = count instanceof MouseEvent ? 1 : count
      this.$store.commit({
        type: 'decrement',
        count
      })
    },
    changeUser() {
      this.$store.commit('changeUser')
      this.$store.dispatch('updateUser')
    }
  }
}
</script>

<style scoped>

</style>
