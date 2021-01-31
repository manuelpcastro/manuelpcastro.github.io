<template>

      <div class="header">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <div class="card-list">
          <div class="card">
            <div class="project__title">
                <a class="card__title" href="./projects.html">Learning Management System App</a>
            </div>
            <div class="project__techonologies">
                <div class="technology">
                    <img class="card__image" src="../assets/angular.png"/> 
                    <p class="tecnology__name">Angular</p>
                </div>
                <div class="technology">
                    <img class="card__image" src="../assets/ionic.png"/> 
                    <p class="tecnology__name">Ionic</p>
                </div>
            </div>
            <p class="card__description">Accesibility focused University project</p>
            <ul> 
              <a class ="link" href="https://github.com/manuelpcastro"><i class="fa fa-github"></i> Github repository </a>
              <a class ="link" href="https://github.com/DomingoLopez"><i class="fa fa-github"></i> Domingo Lopez </a>
              <a class ="link" href="https://github.com/josalmer"><i class="fa fa-github"></i> Jose Saldaña </a>
            </ul>
            <div class="project__images_container">
              <img class="project__image" src="../assets/dgp.png"/>
            </div>
          </div>

          <div class="card">
            <div class="project__title">
                <a class="card__title" href="./projects.html">Turn Based Combat Game</a>
            </div>

            <div class="project__techonologies">
                <div class="technology">
                    <img class="card__image" src="../assets/react.png"/> 
                    <p class="tecnology__name">React</p>
                </div>
            </div>
            <p class="card__description">Personal project</p>
            <a class ="link" href="https://github.com/manuelpcastro"><i class="fa fa-github"></i> Github repository </a>
            <a class ="link" href="https://github.com/manuelpcastro"><i class="fa fa-github"></i> Give it a try here (Github Page) </a>
            <div class="project__images_container">
              <img class="project__image" src="../assets/turnbased.png"/> 
            </div>
          </div>

          <div class="card">
            <div class="project__title">
                <a class="card__title" href="./projects.html">City Builder game</a>
            </div>
            
            <div class="project__techonologies">
                <div class="technology">
                    <img class="card__image" src="../assets/threejs.png"/> 
                    <p class="tecnology__name">ThreeJS</p>
                </div>
                <div class="technology">
                    <img class="card__image" src="../assets/javascript.png"/> 
                    <p class="tecnology__name">Javascript</p>
                </div>
            </div>

            <p class="card__description">University project</p>

            <ul> 
              <a class ="link" href="https://github.com/DomingoLopez/Cities-GO"><i class="fa fa-github"></i> Github repository </a>
              <a class ="link" href="https://github.com/DomingoLopez"><i class="fa fa-github"></i> Domingo Lopez </a>
            </ul>
            <div class="project__images_container">
              <img class="project__image" src="../assets/citybuilder.png"/>
              <img class="project__image" src="../assets/citybuilder2.png"/>
            </div>
          </div>

          <div class="card">
            <div class="project__title">
                <a class="card__title" href="./projects.html">This website and more</a>
            </div>
            <div class="project__techonologies">
                <div class="technology">
                    <img class="card__image" src="../assets/vue.png"/> 
                    <p class="tecnology__name">Vue</p>
                </div>
            </div>
            <p class="card__description">Proffesional and Personal projects</p>
          </div>
        </div>
      </div>  
</template>

<script>
export default {
  name: 'Projects',
}
</script>

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
  margin-top:3rem;
}

.link{
  margin-bottom:0.5rem;
  display:block;
}

.header{
  text-align: center;
  background:white;
}

.project__title{
    min-height: 0.9vw;
}

.project__image{
  width: 100%;
  margin-top:1rem;
}

.project__images_container{
  margin-top:3rem;
  position:relative;
  bottom:0;
}

.project__techonologies{
  display:flex;
}

.technology{
  display:block;
  margin: 0 auto;
}

.tecnology__name{
}


.card__image{
  width:5rem;
  display:inline;
  margin: 0.5rem;
  margin-top:1rem;
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