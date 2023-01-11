<template >
  <li v-on:dblclick="toogleEdit()">
    <button v-on:click="changeTodoStatus()">check</button>
    <input type="checkbox" v-bind:checked="item.completed===true"/>
    <span v-if="edit === false">{{ index }} - {{ item.title }}</span>
    <button v-if="edit === false" v-on:click="removeTodo(item.id)">Delete</button>
    <button v-if="edit === true" v-on:click="editTodo()">Save</button>
    <input v-if="edit === true" v-model="inputData" />
  </li>
</template>
<script>
export default {
  name: 'TodoItem',
  props: {
    index: Number,
    item: Object,
    removeTodo: Function,
    updateTodo: Function
  },
  data() {
    return {
      edit: false,
      inputData: "",
    }
  },
  methods: {
    toogleEdit() {
      this.edit = !this.edit
    },
    changeTodoStatus(){
      this.updateTodo(this.item.id, !this.item.completed, "completed")
    },
    editTodo() {
      this.toogleEdit()
      this.updateTodo(this.item.id, this.inputData, "title")
    }
  }
}
</script>
<style >

</style>