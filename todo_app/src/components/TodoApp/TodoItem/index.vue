<template >
  <li v-on:dblclick="toogleEdit()">
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
      inputData: ""
    }
  },
  methods: {
    toogleEdit() {
      this.edit = !this.edit
    },
    editTodo() {
      this.updateTodo(this.item.id, this.inputData)
      this.toogleEdit()
    }
  }
}
</script>
<style >

</style>