<template>
      <div class="header">
        <div class="card-list">
          <div class="card">
            <img class="card__image" src="../assets/projects.png"/>
            <router-link class="card__title" to="projects">PROJECTS</router-link>
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
  name: 'Home',
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
  font-weight: bolder;
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

</style>
