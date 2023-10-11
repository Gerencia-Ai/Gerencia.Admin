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
        <div class="post-box">
            <div class="header">  
                <select class="proj-select">
                    <option value="selec">Selecione um Projeto</option>
                </select>
                <div class="new-post">Novo Post +</div>
            </div>
            <div class="body">
                <div class="past-post-box">
                    <img class="post-img" src="../components/icons/logo-green.svg" />
                    <p class="post-title">Titulo</p>
                    <p class="post-description">Lorem Ipsum Dolor Argo et Sum</p>
                </div>
                <div class="past-post-box">
                    <img class="post-img" src="../components/icons/logo-green.svg" />
                    <p class="post-title">Titulo</p>
                    <p class="post-description">Lorem Ipsum Dolor Argo et Sum</p>
                </div>
                <div class="past-post-box">
                    <img class="post-img" src="../components/icons/logo-green.svg" />
                    <p class="post-title">Titulo</p>
                    <p class="post-description">Lorem Ipsum Dolor Argo et Sum</p>
                </div>
                
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.post-title{
    font-size: 1.2rem;
}
.post-description{
    opacity: 0.8;
}
.post-img{
    width: 100%;
    height: 50%;
    background-color: #f6f6f6;
}
.past-post-box{
    outline: #353b3c 1px solid;
    padding: 2%;
    width: 30%;
    height: 50%;
    display: flex;
    flex-direction: column;
    border-radius: 2%;
}
.body{
    width: 100%;
    height: 90%;
    display: flex;
    padding: 2%;
    justify-content: space-between;
    background-color: #f6f6f6;
}
.new-post{
    width: 20%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 3%;
    margin-right: 3%;
    border-radius: 5px;
    border: none;
    background-color: #f6f6f6;
    font-size: 1rem;
    color: #353b3c;
}
.proj-select{
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
}
.header{
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f6f6f6;
    font-size: 1rem;
    color: #353b3c;

}
.post-box{
    width: 100%;
    height: 100%;
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
