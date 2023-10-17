
<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <div class="sidebar">
        <img class="logo" src="../components/icons/logo-green.svg">
        <div class="nav-list">
          <RouterLink class="nav-links" to="/post">Novo Post</RouterLink>
          <RouterLink class="nav-links" to="/new-workspace">Novo Workspace</RouterLink>
          <RouterLink class="nav-links" to="/home">Home</RouterLink>
        </div>  
    </div>
    
    <div class="main">
        <div class="work-box">ababa</div>
        <div class="work-box">babab</div>
    </div>
  </div>
</template>

<style>
.work-box{
    width: 45%;
    height: 100%;
    border-radius: 1%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color: #f6f6f6;
    margin: 1%;

}

.logo{
    width: 40%;
    margin-top: 10% ;
}

.wrapper{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-list{
    height: 100%;
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

.nav-links{
    margin: 5% ;
    text-decoration: none;
    color: #353B3C;
    font-weight: 400;
    font-size: 1.1rem;
    
}
.sidebar{
  width: 10%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #F6F6F6;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.50);

}
.main{
  width: 90%;
  padding: 2%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>