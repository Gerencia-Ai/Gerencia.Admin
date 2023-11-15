<script setup>
import PostForm from './PostForm.vue'
import { ref, onMounted } from 'vue'
import PostService from '../services/posts'

const posts = ref([])
const currentPost = ref({
  name: ''
})

onMounted(async () => {
  const data = await PostService.getAllPosts()
  posts.value = data
})

async function deletePost(post) {
  await PostService.deletePost(post)
  const data = await PostService.getAllPosts()
  posts.value = data
}

function editPost(post) {
  currentPost.value = { ...post }
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
    <div class="main">
      <div class="post-box">
        <div class="header">
          <select class="proj-select">
            <option class="selec" value="selec">Selecione um Projeto</option>
          </select>
          <div class="new-post">
            <button
              class="newPost-btn"
              data-bs-toggle="collapse"
              data-bs-target="#postForm"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
            >
              +
            </button>
          </div>
        </div>
        <div class="body">
          <div class="past-posts">
            <div v-for="post in posts" :key="post.id" class="past-post-box">
              <div class="img-pad">
                <img class="post-img" src="../components/icons/logo-green.svg" />
              </div>
              <div class="text-pad">
                <p class="post-title">{{ post.titulo }}</p>
                <p class="post-description">
                  {{ post.descricao }}
                </p>
              </div>
              <button @click="deletePost(post)">Deletar</button>
              <button @click="editPost(post)">Editar</button>
            </div>
          </div>

          <div class="post-form-wrapper">
            <div class="collapse collapse-horizontal" id="postForm">
              <div class="post-form">
                <PostForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-form {
  box-shadow: 0px 2px 3px 2px rgba(0, 0, 0, 0.103);
  width: 100%;
  background-color: #f6f6f6;
  border-radius: 1%;
  padding: 2%;
  box-sizing: border-box;
}
.newPost-btn {
  background-color: #f6f6f6;
  outline: #353b3c 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 20%;
  overflow: hidden;
  color: #353b3c;
  width: 15%;
  aspect-ratio: 4/4;
}
.newPost-btn:hover {
  cursor: pointer;
  background-color: #e6e6e6;
  transition: background 0.15s;
}
.post-title {
  font-size: 1.2rem;
}
.post-description {
  opacity: 0.8;
  width: 100%;
}
.post-img {
  width: 100%;
  aspect-ratio: 4/4;
  height: 80%;
  background-color: #f6f6f6;
}
.img-pad {
  height: 50%;
}
.past-post-box {
  box-shadow: 0px 2px 3px 2px rgba(0, 0, 0, 0.103);
  padding: 2%;
  height: 40%;
  display: flex;
  flex-direction: column;
  border-radius: 2%;
  max-width: 30%;
  overflow-y: scroll;
  overflow-x: hidden;
}
.past-posts {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  padding: 0 3%;
  justify-content: space-between;
  background-color: #f6f6f6;
  padding-top: 2%;
}

.body {
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-between;
}
.new-post {
  width: 20%;
  height: 50%;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-left: 3%;
  margin-right: 3%;
  border-radius: 5px;
  border: none;
  background-color: #f6f6f6;
  font-size: 1rem;
  color: #353b3c;
}
.selec {
  color: #353b3c;
  font-size: 1rem;
  padding: 1%;
  background-color: #f6f6f6;
  border-radius: 1%;
}
.proj-select {
  width: 20%;
  height: 50%;
  display: flex;
  justify-content: baseline;
  margin-left: 3%;
  margin-right: 3%;
  border-radius: 5px;
  border: none;
  background-color: #f6f6f6;
  font-size: 1rem;
  color: #353b3c;
  border-radius: 1%;
  overflow: hidden;
  cursor: pointer;
  padding-left: 0.5%;
}

.header {
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f6f6f6;
  color: #353b3c;
  box-shadow: 0px 1px 10px -3px rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.post-box {
  width: 100%;
  height: 100%;
  border-radius: 1%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
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
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
}
.main {
  width: 90%;
  height: 100vh;
  display: flex;
  padding: 2% 15% 2% 15%;
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
</style>
