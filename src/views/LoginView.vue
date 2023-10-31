<script setup>
import { reactive } from 'vue'
import { useAuthStore } from '../stores/auth.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()

const user = reactive({
  email: '',
  password: ''
})

// function login() {
//   authStore.login({ ...user })
// }

async function submit() {
  try {
    await authStore.login(user)
    router.push('/home')
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="loginBox">
      <form @submit.prevent="submit" class="loginForm">
        <h1 class="loginTitle">Bem vind@ de volta!</h1>
        <input
          class="loginInput"
          v-model="user.email"
          id="email"
          type="email"
          required
          placeholder="Seu Email"
        />
        <input
          class="loginInput"
          v-model="user.password"
          id="password"
          type="password"
          required
          placeholder="Senha"
        />
        <button type="submit" class="button">
          <p class="btnText">Login</p>
          <img class="btnImage" src="../components/icons/arrow-right.svg" />
        </button>
      </form>
      <div class="logo">
        <img class="logoImg" src="../assets/logo.svg" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.logoImg {
  width: 50%;
}
.btnImage {
  width: 5%;
  margin-right: 4%;
}
.btnText {
  margin-left: 4%;
  color: #ffffff;
}
.button {
  background-color: #2cda9d;
  border: none;
  width: 70%;
  padding: 3% 1% 3% 1%;
  margin-top: 10%;
  border-radius: 1vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
}
.button:hover {
  cursor: pointer;
  background-color: #1f9d7d;
  transition: background 0.15s;
}
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loginTitle {
  width: 70%;
  font-size: 4vh;
}
.loginBox {
  width: 40%;
  height: 60%;
  background-color: #f6f6f6;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  border-radius: 1vh;
  overflow: hidden;
}
.logo {
  background-color: #2cda9d;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 0%;
}

.loginForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.loginInput {
  padding: 4%;
  border-radius: 1vh;
  border: none;
  box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.5);
  margin-top: 10%;
  width: 70%;
}
</style>
