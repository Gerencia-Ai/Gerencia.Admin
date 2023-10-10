<script setup>
import { reactive, computed } from 'vue'
import { RouterLink } from 'vue-router'

const fields = reactive({
  titulo: {
    valor: 'Aqui vai seu Título',
    done: false
  },
  descricao: {
    valor: 'Aqui vai sua descrição...',
    done: false
  },
  tags: {
    valor: 'Aqui vão suas tags',
    done: false
  }
})

const classInput = computed(() => (field) => (fields[field].done ? 'input-new' : 'input-original'))
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
          <input
            class="input"
            :class="classInput('titulo')"
            type="text"
            v-model="fields.titulo.valor"
            @blur="fields.titulo.done = true"
          />
          <textarea class="input area"
            :class="classInput('descricao')"
            v-model="fields.descricao.valor"
            @blur="fields.descricao.done = true" />

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

          <input class="input"
            :class="classInput('tags')"
            type="text"
            v-model="fields.tags.valor"
            @blur="fields.tags.done = true" />
          <button class="button">Enviar</button>
        </form>
      </div>
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
  transition: font-weight 0.15s, all 0.3s ;
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
  padding-bottom: 5%;
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
}
.button:hover{
  cursor: pointer;
  background-color: #1F9D7D;
  transition: background 0.15s;
}
.image-text {
  font-size: medium;
  color: #353b3c;
}
.file-input-image {
  width: 80%;
  margin-right: 2%;
}
.file-input-area {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  padding: 2%;
  margin-top: 5% ;
}
.file-input {
  display: none;
}
.highlight {
  text-decoration: underline;
  color: #2cda9d;
}
.form-box {
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
}
.form {
  width: 80%;
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
