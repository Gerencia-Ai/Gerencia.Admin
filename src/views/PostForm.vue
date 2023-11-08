<script setup>
import { ref, onMounted } from 'vue'
import PostService from '../services/posts'

const posts = ref([])
const currentPost = ref({
  titulo: '',
  descricao: '',
  projeto: '',
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
          <img class="file-input-image" src="../components/icons/clip.svg" />
          <span class="image-text">
            Arraste arquivos aqui para anexar, ou
            <span class="highlight">procure-os</span>
          </span>
          <input
            type="file"
            accept="image/png, image/jpeg"
            name="file_upload"
            class="file-input"
          />
          <input type="number" class="input input-original" v-model="currentPost.projeto" />
        </label>
        <button type="submit" class="button">Enviar</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.input-original {
  width: 80%;
  margin-top: 5%;
  font-family: inherit;
  font-size: small;
  padding: 2%;
  outline: 1px solid #353b3c;
  color: #353b3c;
  border-radius: 1vh;
  font-weight: 500;
  opacity: 0.8;
}

.input-new {
  color: #353b3c;
  outline: #2cda9d solid 2px;
  padding: 2% 1% 2% 1%;
  transition:
    font-weight 0.15s,
    all 0.3s;
  border-radius: 1vh;
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
.button {
  background-color: #2cda9d;
  border: none;
  width: 80%;
  height: 10%;
  margin-top: 10%;
  border-radius: 1vh;
  display: flex;
  align-items: center;
  padding: 2%;
  color: #f6f6f6;
  font-weight: bold;
}
.button:hover {
  cursor: pointer;
  background-color: #1f9d7d;
  transition: background 0.15s;
}
.image-text {
  font-size: medium;
  color: #353b3c;
}
.file-input-image {
  width: 10%;
  margin-right: 2%;
}
.file-input-area {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-top: 5%;
  cursor: pointer;
  padding: 2%;
}
.file-input {
  display: none;
}
.highlight {
  text-decoration: underline;
  color: #2cda9d;
}
.highlight:hover {
  cursor: pointer;
  color: #1f9d7d;
  transition: background 0.15s;
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
