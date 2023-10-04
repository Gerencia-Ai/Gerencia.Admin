<script setup>
</script>

<template>
  <div class="wrapper">
    <div class="loginBox">
      <div class="loginForm">
        <h1 class="loginTitle">Bem vind@ de volta!</h1>
        <input class="loginInput" type="text" placeholder="Usuário">
        <input class="loginInput" type="password" placeholder="Senha">
        <button class="button">
          <p class="btnText">Login</p>
          <img class="btnImage" src="../components/icons/arrow-right.svg">
        </button>
      </div>
      <div class="logo">
        <img class="logoImg"  src="../assets/logo.svg">
      </div>
    </div>
  </div>
</template>

<style scoped>

.logoImg{
  width: 50%;
}
.btnImage{
 width: 7%;
  margin-right: 4%;
}
.btnText{
  margin-left: 4%;
  font-size: large ;
  color: #FFFFFF;
}
.button {
  background-color: #2CDA9D;
  border: none;
  width: 70%;
  height: 10%;
  margin-top: 10%;
  border-radius: 1vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.button:hover{
  cursor: pointer;
  background-color: #1F9D7D;
  transition: background 0.15s;
}
.wrapper{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loginTitle{
  width: 70%;
  font-size: 4vh;
}
.loginBox{
  width: 40%;
  height: 60%;
  background-color: #F6F6F6;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.50);
  display: flex;
  justify-content: space-between;
  border-radius: 1vh;
  overflow: hidden;

}
.logo{
  background-color: #2CDA9D;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loginForm{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.loginInput{
  padding: 4%;
  border-radius: 1vh;
  border: none;
  box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.50);
  margin-top: 10% ;
  width: 70%;
  padding: 4%;
}
</style>