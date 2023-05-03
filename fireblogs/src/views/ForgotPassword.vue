<template>
  <Modal v-if="modalActive"  :modal-message="modalMessage" v-on:close-modal="closeModal"  />

  <Loading v-if="loading"/>
  <div  class="reset-password" >
    <div class="form-wrap">

      <form class="reset">
        <p class="login-container">
         Back to
          <router-link class="router-link" :to="{name: 'Home'}">Home</router-link>
        </p>
        <h2>Reset password</h2>
        <p>Forgot your password? Enter your Email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text"  placeholder="Email" v-model="email"/>
            <img :src="require('@/assets/Icons/envelope-regular.svg')" alt=" " class="img" />
          </div>
        </div>
          <button @click.prevent="resetPassword">Reset</button>
          <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import Loading from "@/components/Loading";
import firebase  from 'firebase/compat/app'
import "firebase/compat/auth"

export default {
  data(){
    return {
      email: null,
      modalActive: false,
      modalMessage: "",
      loading: null
    }
  },
  name: "ForgotPassword-vue",
  components: {Loading, Modal},
  methods: {
    resetPassword (){
      this.loading = true
      firebase.auth().sendPasswordResetEmail(this.email).then(()=>{
        this.modalMessage = 'If account exists, you will receive a mail'
        this.loading = false
        this.modalActive = true
      }).catch(err=>{
        this.modalMessage = err.message
        this.loading = false
        this.modalActive  = true
      })
    },
    closeModal(){
      this.modalActive = !this.modalActive
      this.email = ""
    }
  }

}
</script>


<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>