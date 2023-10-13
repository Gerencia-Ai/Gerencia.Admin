<template>
  <div class="wrapper">
    <div class="sidebar">
      <img class="logo" src="../components/icons/logo-green.svg" />
      <div class="nav-list">
        <RouterLink class="nav-links" to="/post">Novo Post</RouterLink>
        <RouterLink class="nav-links" to="/home">Home</RouterLink>
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
                  Novo Post
                  <button class="add-btn">+</button>
                </div>
            </div>
            <div class="body">
                <div class="past-post-box">
                    <img class="post-img" src="../components/icons/logo-green.svg" />
                    <p class="post-title">Titulo</p>
                    <p class="post-description">Lorem Ipsum Dolor Argo et Sum Lorem Ipsum Dolor Argo et Sum Lorem Ipsum Dolor Argo et Sum</p>
                </div>
                <div class="past-post-box">
                    <img class="post-img" src="../components/icons/logo-green.svg" />
                    <p class="post-title">Titulo</p>
                    <p class="post-description">Lorem Ipsum Dolor Argo et Sum Lorem Ipsum Dolor Argo et Sum Lorem Ipsum Dolor Argo et Sum</p>
                </div>
                <div class="past-post-box">
                    <img class="post-img" src="../components/icons/logo-green.svg" />
                    <p class="post-title">Titulo</p>
                    <p class="post-description">Lorem Ipsum Dolor Argo et Sum Lorem Ipsum Dolor Argo et Sum Lorem Ipsum Dolor Argo et Sum</p>
                </div>
                
                
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.add-btn{
  background-color: #f6f6f6;
  border: none;
  font-size: large;
  color: #353b3c;
}
.add-btn:hover{
  cursor: pointer;
  background-color: #e6e6e6;
  transition: background 0.15s;
}
.post-title{
    font-size: 1.2rem;
}
.post-description{
    opacity: 0.8;
    width: 100%;
    
}
.post-img{
    width: 100%;
    height: 50%;
    background-color: #f6f6f6;
}
.past-post-box {
    outline: #353b3c 1px solid;
    padding: 2%;
    height: 50%;
    display: flex;
    flex-direction: column;
    border-radius: 2%;
    max-width: 30%;
    overflow: hidden;
}
.body{
    width: 100%;
    height: 90%;
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
    padding: 2%;
    justify-content: space-between;
    background-color: #f6f6f6;
}
.new-post{
    width: 20%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 3%;
    margin-right: 3%;
    border-radius: 5px;
    border: none;
    background-color: #f6f6f6;
    font-size: 1rem;
    color: #353b3c;
}
.selec{
    color: #353b3c;
    font-size: 1rem;
    padding: 1%;
    background-color: #f6f6f6;
    border-radius: 1%;
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
    border-radius: 1% ;
    overflow: hidden;

    
}

.header{
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f6f6f6;
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
