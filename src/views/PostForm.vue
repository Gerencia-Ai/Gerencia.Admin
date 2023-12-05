<script setup>
import { ref, onMounted } from 'vue'
import PostService from '../services/posts'
import WorkspaceService from '../services/workspaces'


const posts = ref([])
const currentPost = ref({
  titulo: '',
  descricao: '',
  projeto: ''
})
const workspaces = ref([])


onMounted(async () => {
  const data = await WorkspaceService.getAllWorkspaces()
  workspaces.value = data
})

onMounted(async () => {
  const data = await PostService.getAllPosts()
  posts.value = data
})


async function save() {
  await PostService.savePost(currentPost.value)
  currentPost.value = { titulo: '', descricao: '', projeto: '' }
  const data = await PostService.getAllPosts()
  posts.value = data
}
</script>
<template>
  <div class="main-form">
    <div class="form-box">
      <form class="form" @submit.prevent="save">
        <input class="input input-original" type="text" v-model="currentPost.titulo" />
        <textarea class="input area input-original" v-model="currentPost.descricao" />

        <label tabindex="0" class="file-input-area">
          <div class="input-image-box">
            <img class="file-input-image" src="../components/icons/clip.svg" />
          </div>
          <span class="image-text">
            Arraste arquivos aqui para anexar, ou
            <span class="highlight">procure-os</span>
          </span>
          <input type="file" accept="image/png, image/jpeg" name="file_upload" class="file-input" />
        </label>
        <select v-model="currentPost.projeto" class="input input-original" >
          <option v-for="workspace in workspaces" :key="workspace.id" :value="workspace.id">
            {{ workspace.nome }}
          </option>
        </select>
        <button type="submit" class="button">Enviar</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.input-image-box{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 3px 2px rgba(0, 0, 0, 0.103);
  border-radius: 1vh;
  margin-right: 2%;
}
.input-original {
  width: 80%;
  margin-top: 5%;
  font-family: inherit;
  font-size: small;
  padding: 2%;
  color: #353b3c;
  border-radius: 1vh;
  font-weight: 500;
  opacity: 0.8;
}

.input {
  width: 80%;
  margin-top: 5%;
  font-family: inherit;
  font-size: small;
  border: none;
  padding: 2%;
  resize: none;
}
.area {
  resize: none;
  padding-bottom: 20%;
}
.image-text {
  font-size: medium;
  color: #353b3c;
}

.form-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
}
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-form {
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
