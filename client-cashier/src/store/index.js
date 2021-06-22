import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
  },
  mutations: {
    login(state, payload) {
      console.log(payload, "mutation: payload login")
      state.isLogin = true
    }
  },
  actions: {
    login({ commit }, data) {
      return new Promise((resolve, reject)=> {
        console.log(data, "<<<< data in actions store >>>")
        axios.post('/login', data)
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token)
          
          commit('login', data)
          resolve(data)
        })
        .catch(err => {
          reject(err)
          console.log(err)
        })
      })
    }
  },
  modules: {
  }
})
