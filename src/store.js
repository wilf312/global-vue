import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    todoCount: 0,
    todoList: [
      { id: 0, text: 'abc' }
    ]
  },
  getters: {
    todoList(state) {
      return state.todoList
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    addTodo(state, text) {
      state.todoCount++
      state.todoList = [...state.todoList, { id: state.todoCount, text }]
    }
  }
})