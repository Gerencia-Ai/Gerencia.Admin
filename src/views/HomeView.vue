<script setup>
import { RouterLink } from 'vue-router'
import { ref, reactive, onMounted } from 'vue'

import Loading from 'vue-loading-overlay'
import WorkspaceService from '../services/workspaces'
import UserService from '../services/users'

const users = ref([])
const workspaces = ref([])
const isLoading = ref(false)

const currentWorkspace = reactive({
  nome: '',
  descricao: '',
  alunos: [],
  professor: ''
})

onMounted(async () => {
  const data = await UserService.getAllUsers()
  users.value = data
})

onMounted(async () => {
  isLoading.value = true
  const data = await WorkspaceService.getAllWorkspaces()
  workspaces.value = data
  isLoading.value = false
})
</script>

<template>
  <Loading v-model:active="isLoading" is-full-page class="loading" />
  <div class="wrapper">
    <div class="sidebar">
      <img class="logo" src="../components/icons/logo-green.svg" />
      <div class="nav-list">
        <RouterLink class="nav-links" to="/post">Novo Post</RouterLink>
        <RouterLink class="nav-links" to="/new-workspace">Novo Workspace</RouterLink>
        <RouterLink class="nav-links" to="/home">Home</RouterLink>
      </div>
    </div>

    <div class="main">
      <h3 style="text-align: left; width: 100%; margin-bottom: 2%;">Você atualmente possui {{ workspaces.length }} workspaces:</h3>
      <div class="body">
        <div class="work-box" v-for="workspace in workspaces" :key="workspace.id">
          <h4>{{ workspace.nome }}</h4>
          <img class="post-img" v-bind:src="workspace.capa.file" />
          <p>{{ workspace.descricao }}</p>
          <p v-if="workspace.alunos.length < 2" style="font-weight: 600;">Aluno:</p>
          <p v-else style="font-weight: 600;">Alunos:</p>
          <ul v-for="aluno in workspace.alunos" :key="aluno.id">
            <li>{{ aluno.first_name + ' ' + aluno.last_name }}</li>
            <ul>
              <li>{{ aluno.email }}</li>
              <li>Criou a conta: {{ aluno.date_joined.slice(0, 10) }}</li>
              <li>
                <p v-if="aluno.last_login == null">Último login: Nunca</p>
                <p v-else>Último login: {{ aluno.last_login.slice(0, 10) }}</p>  
              </li>
            </ul>
          </ul>
          <p style="font-weight: 600;">Professor:</p>
          <ul>
            <li>{{ workspace.professor.first_name + ' ' + workspace.professor.last_name }}</li>
            <ul>
              <li>{{ workspace.professor.email }}</li>
              <li>Criou a conta: {{ workspace.professor.date_joined.slice(0, 10) }}</li>
              <li>
                <p v-if="workspace.professor.last_login == null">Último login: Nunca</p>
                <p v-else>Último login: {{ workspace.professor.last_login.slice(0, 10) }}</p>  
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-img{
  width: 100%;
  aspect-ratio: 16/6;
  outline: #758285 1px solid;
  margin-bottom: 2%;
  border-radius: 1vh;
}
.work-box{
  border-top-width: 1px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-style: solid;
  border-color: #758285;
  padding: 2%;
}
.logo {
  width: 40%;
  margin-top: 10%;
}

.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-list {
  height: 100%;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.nav-links {
  margin: 5%;
  text-decoration: none;
  color: #353b3c;
  font-weight: 400;
  font-size: 1.1rem;
}
.sidebar {
  width: 10%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f6f6f6;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.5);
}
.main {
  width: 90%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10% 10% 0 10%;
  margin-bottom: 10%;
  flex-direction: column;
}
.body {
  width: 100%;
  height: 90%;
  border-radius: 1vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.5);
  padding: 2%;
  overflow-y: scroll;
}
</style>
