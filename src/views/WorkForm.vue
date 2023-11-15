<script setup>
import { RouterLink } from 'vue-router'
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
      <div class="work-box">
        <input class="input" type="text" placeholder="Nome do Workspace" />
        <textarea class="input area" type="text" placeholder="Descrição do Workspace" />
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
        <button class="button">Enviar</button>
      </div>
      <div class="work-box">babab</div>
    </div>
  </div>
</template>

<style scoped>
.area{
  resize: none;
  height: 30%;
  max-height: 30vh;
}
.button{
  width: 80%;
  height: 5%;
}
.input-image-box{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 3px 2px rgba(0, 0, 0, 0.103);
  border-radius: 1vh;
  margin-right: 5%;
}
.input-image-box:hover{
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
.file-input-area {
  width: 35%;
  padding: 3% 2%;
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
