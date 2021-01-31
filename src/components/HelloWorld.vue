<template>
      <div class="header">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"> 
      <h1><a class="title" href="https://manuelpcastro.github.io">manuelpcastro</a><span class="blink">_</span></h1>
        <div class="card-list">
          <div class="card">
            <img class="card__image" src="../assets/projects.png"/>
            <a class="card__title" href="./projects.html">PROJECTS</a>
            <p class="card__description">University and personal projects</p>
          </div>
          <div class="card">
            <img class="card__image" src="../assets/github.svg"/>
            <a class="header-links" href="https://github.com/manuelpcastro"> GITHUB </a>
            <p class="card__description">Github Account @manuelpcastro</p>
          </div>
          <div class="card">
            <img class="card__image" src="../assets/linkedin.png"/>
            <a class="header-links" href="https://www.linkedin.com/in/manuel-pancorbo-castro-b6763a162/">LINKEDIN</a>
            <p class="card__description">Direct link to LinkedIn</p>
          </div>
          <div class="card">
            <img class="card__image" src="../assets/aboutme.png"/>
            <a class="header-links" href="./about.html">ABOUT ME</a>
            <p class="card__description">Little things about me</p>
          </div>
          <div class="card">
            <img class="card__image" src="../assets/contact.png"/>
            <a class="header-links" href="./contact.html">CONTACT</a>
            <p class="card__description">You can leave me a message here</p>
          </div>
          <!--Add social media if we are on mobile. Clean home page-->
        </div>
      </div>  
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color:  #DA2348;
  text-decoration:none;
}

.title{
  color: #DA2348;
  border-style: solid;
  border-width: 0;
  border-left-width: 0.2em;
  border-image: linear-gradient(#88142b, #DA2348, #ff0080) 1;
  padding-left:0.2rem;
  margin-top:3rem;
}

.header{
  text-align: center;
  background:white;

}
  


.card__image{
  width:6rem;
  display:block;
  margin: 0 auto;
  margin-bottom:1rem;
}

.card-list {
  display: flex; /* equal height of the children */
  flex-wrap: wrap;
}



.card{
  flex: 1; /* additionally, equal width */

  border-radius: 10px;
  display: inline-block;
  border: 5px;
  border-style:groove;
  padding:1rem;
  margin:1rem;
  min-width: 15rem;
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
