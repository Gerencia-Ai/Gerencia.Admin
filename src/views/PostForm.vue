<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <div class="sidebar">
      <img class="logo" src="../components/icons/logo-green.svg" />
      <div class="nav-list">
        <RouterLink class="nav-links" to="/home">Home</RouterLink>
        <RouterLink class="nav-links" to="/home">Home</RouterLink>
        <RouterLink class="nav-links" to="/home">Home</RouterLink>
      </div>
    </div>

    <div class="main">
      <div class="form-box">
        <form class="form">
          <input class="input" type="text" placeholder="Título" />
          <textarea class="input" placeholder="Descrição" />
          <input class="input" type="text" placeholder="Categoria" />
          <input class="input" type="text" placeholder="Tags" />

          <label class="file-input-area">
            <img class="file-input-image" src="../components/icons/clip.svg" />
            <span class="image-text">
              Arraste arquivos aqui para anexar, ou
              <span class="highlight">procure-os</span>
            </span>
            <input
              type="file"
              accept="image/png, image/jpeg, video/mp4"
              name="file_upload"
              class="file-input"
            />
          </label>

          <input class="input" type="text" placeholder="Conteúdo" />
          <button class="button">Enviar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button{
  background-color: #2CDA9D;
  border: none;
  width: 70%;
  height: 10%;
  margin-top: 10%;
  border-radius: 1vh;
  display: flex;
  align-items: center;
  padding: 2%;
}
.image-text{
  font-size: medium;
  color: #353b3c;
}
.file-input-image{
  width: 80%;
  margin-right: 2%;
}
.file-input-area{
  display: flex;
  align-items: center;
  width: 50%;
}
.file-input{
  display: none;
}
.highlight{
  text-decoration: underline;
  color: #2CDA9D ;
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
  padding: 2% 10% 2% 10%;
}
</style>
