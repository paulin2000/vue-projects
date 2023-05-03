<template>

  <div class="form-wrap">
    <form class="login">
      <p class="login-container">
        Already have an account ?
        <router-link class="router-link" :to="{name: 'Login'}">Login</router-link>
      </p>
      <h2>Create your first fireblog account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First name" v-model="firstName"/>
          <img :src="require('@/assets/Icons/envelope-regular.svg')" alt=" " class="img">
        </div>
        <div class="input">
          <input type="text" placeholder="Last name" v-model="lastName"/>
          <img :src="require('@/assets/Icons/envelope-regular.svg')" alt=" " class="img">
        </div>
        <div class="input">
          <input type="text" placeholder="Email" v-model="email"/>
          <img :src="require('@/assets/Icons/envelope-regular.svg')" alt=" " class="img">
        </div>
        <div class="input">
          <input type="text" placeholder="Username" v-model="username"/>
          <img :src="require('@/assets/Icons/user-alt-light.svg')" alt=" " class="img">
        </div>
        <div class="input">
          <input type="text" placeholder="Password" v-model="password"/>
          <img :src="require('@/assets/Icons/lock-alt-solid.svg')" alt=" " class="img">
        </div>
        <div v-show="error" class="error">{{errorMsg}}</div>
      </div>
      <button @click.prevent="register">Sign up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>

</template>

<script>
import firebase  from 'firebase/compat/app'
import "firebase/compat/auth"
import db from "@/firebase"
export default {
  name: "Register-vue",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      error: null,
      errorMsg: ''
    }
  },
  methods: {
    async register (){
      if (
          this.email !== '' &&
          this.password !== '' &&
          this.firstName !== '' &&
          this.lastName !== '' &&
          this.username !== ''
      ){
        this.error = false
        this.errorMsg = ''
        try {
        const firebaseAuth = await  firebase.auth()

        const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password)
        const result = await  createUser
        const database = db.collection('users').doc(result.user.uid)
        await database.set({
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          email: this.email
        })
          this.$router.push({name: 'Home'})
        }catch (e) {
          console.log(e, "ERROR")
        }
        return
      }
        this.error = true
        this.errorMsg = 'Please fill out the fields'
    }
  }
}
</script>

<style lang="scss" scoped>
  .register {
    h2{
      max-width: 350px;
    }
  }
</style>