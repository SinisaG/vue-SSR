import Vuex from 'vuex'
import Vue from 'vue'

const store = new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUser (state, user) {
      Vue.set(state, 'user', user)
    }
  }
})

export default store
