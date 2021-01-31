<template>
     <div class="app">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"> 
        <h1><a class="title" href="https://manuelpcastro.github.io">manuelpcastro</a><span class="blink">_</span></h1>
        <div class="views">
          <router-link class="tabs" :to="{ path: '/'}">HOME</router-link>
          <router-link class="tabs" :to="{ path: 'projects'}">PROJECTS</router-link>
          <a class="tabs" target="_blank" href="https://www.linkedin.com/in/manuel-pancorbo-castro-b6763a162/">LINKEDIN</a>
          <router-link class="tabs" :to="{ path: '/'}">ABOUT ME</router-link>
          <router-link class="tabs" :to="{ path: '/'}">CONTACT</router-link>
        </div>
        <router-view/>
   </div>
</template>

<script>



export default {
  name: 'App',

}
</script>

<style>
a {
  color:  #DA2348;
  text-decoration:none;
  font-weight: bolder;
}

.views{
  width:100%;
  flex-wrap: wrap;
  display:flex;
  text-align: center;
  justify-content: center;
}
.tabs{
  white-space: nowrap;
  margin: 1rem;
  text-align:center;
}

.app {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title{
  color: #DA2348;
  border-style: solid;
  border-width: 0;
  border-left-width: 0.2em;
  border-image: linear-gradient(#f7335a, #DA2348, #88142b) 1;
  padding-left:0.5rem;
  margin-top:3rem;
}

.blink {
  color:#DA2348;
  animation: blink-animation 1.5s steps(5, start) infinite;
  -webkit-animation: blink-animation 1.5s steps(5, start) infinite;
}
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
@-webkit-keyframes blink-animation {
  to {
    visibility: hidden;
  }
}


</style>
