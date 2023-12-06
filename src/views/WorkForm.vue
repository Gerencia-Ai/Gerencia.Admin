<script setup>
import { RouterLink } from 'vue-router'
import { ref, reactive, onMounted } from 'vue'

import Loading from 'vue-loading-overlay'
import WorkspaceService from '../services/workspaces'
import UserService from '../services/users'
import imageService from '../services/images.js'

const coverUrl = ref('')
const file = ref(null)
const users = ref([])
const workspaces = ref([])
const isLoading = ref(false)

const currentWorkspace = reactive({
  nome: '',
  descricao: '',
  alunos: [],
  professor: ''
})

function onFileChange(e) {
  file.value = e.target.files[0]
  coverUrl.value = URL.createObjectURL(file.value)
}

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

async function save() {
  isLoading.value = true
  const image = await imageService.uploadImage(file.value)
  currentWorkspace.capa_attachment_key = image.attachment_key
  await WorkspaceService.saveWorkspace(currentWorkspace)
  Object.assign(currentWorkspace, {
    nome: '',
    descricao: '',
    alunos: [],
    professor: '',
    capa_attachment_key: ''
  })
  const data = await WorkspaceService.getAllWorkspaces()
  workspaces.value = data
  isLoading.value = false
}

async function deleteWorkspace(workspace) {
  isLoading.value = true
  await WorkspaceService.deleteWorkspace(workspace)
  const data = await WorkspaceService.getAllWorkspaces()
  workspaces.value = data
  isLoading.value = false
}

function editWorkspace(workspace) {
  currentWorkspace.value = { ...workspace }
}
</script>

<template>
  <div class="wrapper">
    <div class="sidebar">
      <img class="logo" src="../components/icons/logo-green.svg" />
      <div class="nav-list">
        <RouterLink class="nav-links" to="/post">Novo Post</RouterLink>
        <RouterLink class="nav-links" to="/new-workspace">Novo Workspace</RouterLink>
        <RouterLink class="nav-links" to="/home">Home</RouterLink>
      </div>
    </div>

    <loading v-model:active="isLoading" is-full-page class="loading" />

    <div class="main">
      <form class="work-box" @submit.prevent="save">
        <input
          v-model="currentWorkspace.nome"
          class="input"
          type="text"
          placeholder="Nome do Workspace"
        />
        <textarea
          v-model="currentWorkspace.descricao"
          class="input area"
          type="text"
          placeholder="Descrição do Workspace"
        />
        <label tabindex="0" class="file-input-area">
          <div class="input-image-box">
            <img class="file-input-image" src="../components/icons/clip.svg" />
          </div>
          <span class="image-text">
            Arraste arquivos aqui para anexar, ou
            <span class="highlight">procure-os</span>
          </span>
          <input
            type="file"
            accept="image/png, image/jpeg"
            name="file_upload"
            class="file-input"
            @change="onFileChange"
          />
        </label>
        <div id="preview">
          <div class="cover">
            <img v-if="coverUrl" :src="coverUrl" />
          </div>
        </div>

        <select v-model="currentWorkspace.alunos" class="input select" multiple>
          <option v-for="user in users" :key="user.id" v-bind:value="user.id">
            {{ user.first_name + ' ' + user.last_name }}
          </option>
        </select>
        <button type="submit" class="button">Enviar</button>
      </form>

      <div class="work-box">
        <div class="past-posts">
          <h1>Workspaces</h1>
          <div v-for="workspace in workspaces" :key="workspace.id" class="past-post-edit">
            <div class="past-post-box">
              <img class="post-img" v-bind:src="workspace.capa.file" />

              <div class="post-info">
                <h2>{{ workspace.nome }}</h2>
                <p>{{ workspace.descricao }}</p>
                Professor:
                <p>{{ workspace.professor.first_name + ' ' + workspace.professor.last_name }}</p>
                Alunos:
                <ul>
                  <li v-for="aluno in workspace.alunos" :key="aluno.id">
                    {{ aluno.first_name + ' ' + aluno.last_name }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="post-btns">
              <button class="edit-btn" @click="editWorkspace(workspace)">Editar</button>
              <button class="edit-btn del" @click="deleteWorkspace(workspace)">Deletar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.past-post-edit {
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.5);
  width: 90%;
  border-radius: 1vh;
}
.select {
  height: 30%;
  margin-bottom: -5%;
}
.post-img {
  width: 100%;
  aspect-ratio: 16/6;
  box-shadow: 0px 2px 3px 2px rgba(0, 0, 0, 0.103);
  border-radius: 1vh;
  overflow: hidden;
  margin-top: 4%;
}

#preview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 60%;
  aspect-ratio: 16/6;
  margin: 2%;
}

#preview img {
  max-width: 100%;
  aspect-ratio: 16/6;
}

#preview .cover {
  width: 100%;
  aspect-ratio: 16/6;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
}
.edit-btn {
  width: 40%;
  height: 100%;
  border-radius: 1vh;
  background-color: #2cda9d;
  border: none;
  padding: 1%;
  color: white;
}
.edit-btn:hover {
  cursor: pointer;
  background-color: #1f9d7d;
  transition: background 0.15s;
}
.del {
  background-color: #e74c3c;
}
.del:hover {
  background-color: #c0392b;
}
.image-text {
  font-size: small;
}
.past-posts {
  width: 100%;
  height: 100%;
  padding: 4%;
  overflow-y: scroll;
  overflow-x: hidden;
}

.area {
  resize: none;
  height: 30%;
  max-height: 30vh;
}
.button {
  width: 80%;
  height: 5%;
  margin-bottom: 5%;
}
.input-image-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 3px 2px rgba(0, 0, 0, 0.103);
  border-radius: 1vh;
  margin-right: 5%;
}
.input-image-box:hover {
  cursor: pointer;
  background-color: #e6e6e6;
  transition: 0.2s;
}
.work-box {
  width: 45%;
  height: 100%;
  border-radius: 1%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6;
  margin: 1%;
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
.post-btns {
  display: flex;
  justify-content: space-between;
  width: 100%;
  width: 100%;
  margin-bottom: 2%;
  padding: 2%;
  position: relative;
}

.past-post-box {
  padding: 0 4%;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60%;
  overflow-y: scroll;
  overflow-x: hidden;
}
.file-input-area {
  width: 30%;
  padding: 3% 1%;
}
.main {
  width: 90%;
  padding: 2%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
