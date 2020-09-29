import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     // 答题记录：
      jilu:[],
    // 错题记录：
      cuoti:[],
      // 判断是否及格
      isJige:true,
      // 总成绩记录
      zongcj:'',
  },
  mutations: {
    
  },
  actions: {

  },
  modules: {
  }
})
