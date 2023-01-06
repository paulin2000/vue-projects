<template >
  <div id="todo-app">
    <h1>TodoApp</h1>
    <input type="text" v-model="input" />
    <button v-on:click="addTodo(input)">Add</button>
    <div class="">{{ input }}</div>
    <div class="">{{ computedInput }}</div>
    <div class="todo-items">
      <div class="" v-if="data.length > 0">

        <ul>
          <TodoItem v-bind:item="item" v-bind:index="index" v-bind:removeTodo="removeTodo"
            v-bind:updateTodo="updateTodo" v-for="(item, index) in data" :key="index" />
        </ul>

      </div>
      <div class="" v-else>Todo vides</div>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem/index.vue'

export default {

  name: "TodoApp",
  components: {
    TodoItem
  },
  data() {
    return {
      data: [],
      edit: false
    }
  },
  computed: {
  },
  methods: {
    addTodo(dat) {
      const temp = {
        id: Math.floor(Math.random() * 100000),
        title: dat,
        completed: false,
        edit: false
      }
      this.data = [...this.data, temp]
    },
    removeTodo(id) {
      this.data = this.data.filter(el => el.id !== id)
    },
    updateTodo(id, text) {
      const data = this.data.map(el => {
        if (el.id === id) {
          return {
            ...el,
            title: text
          }
        }
        return el
      })
      console.log("🚀 ~ file: index.vue:64 ~ data", data)
      this.data = data
    }
  },
}
</script>
<style >

</style>