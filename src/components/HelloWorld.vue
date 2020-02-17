<template>
  <div class="hello">
    <ul>
      <li v-for="(todo, index) in todoList" :key="index">{{todo.text}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    console.log("mounted");

    this.$nextTick(() => {
      setTimeout(() => {
        console.log(global.vuexFunc);
        global.vuexFunc.addTodo = text => this.$store.commit("addTodo", text);
      }, 0);
    });
  },
  beforeDestroy() {
    console.log("beforeDestroy");
    global.vuexFunc.addTodo = null;
  },
  computed: {
    todoList() {
      return this.$store.getters.todoList;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
