import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    user: {
      uname: 'pink'
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    }
  },
  mutations: {
    increment(state, count) {
      state.counter += count || 1
    },
    decrement(state, payload) {
      state.counter -= payload.count || 1
    },
    changeUser(state) {
      // Vue.set()可响应式更新对象和数组内的数据
      Vue.set(state.user, 'age', 18)
      // Vue.delete()
      // Vue.delete(state.user, 'uname')
    }
  },
  actions: {
    // 异步操作
    updateUser(context, payload) {
      setTimeout(() => {
        context.commit('changeUser')
      }, 1000)
      console.log(payload)
    }
  },
  modules: {
  }
})
