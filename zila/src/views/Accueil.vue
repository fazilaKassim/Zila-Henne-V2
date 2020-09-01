<template>
  <section id="accueil">
    <div id="slide">
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">{{ slide }} Slide</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
    </div>
    <div id="accueil-baground">
    <div id="content-accueil">


      <section id="propos">
        <article id="henne">
          <ul class="propos">
            <li>Déplacement possible en Ile-de-France</li>
            <li>Nous utilisons des produit de haute qualité 100% naturel</li>
            <li><button class="reserver">Reservez</button></li>
          </ul>
        </article>
        <article class="video">
          <video controls muted>
            <source src="assets/video/zila Henné.mp4" type="video/mp4" />
          </video>
        </article>
      </section>

  <section id="boutique">
            <h2>Menu Boutique</h2>
            <ul class="menu">
                <li class="menu"> <a href="">
                        <figure>
                            <img src="../assets/img/cone.jpeg" alt="" class="menu">
                            <figcaption>Cone</figcaption>
                        </figure>
                    </a>
                </li>
                <li class="menu"><a href="">
                        <figure>
                            <img src="../assets/img/cadre.jpg" alt="" class="menu">
                            <figcaption>Cadre</figcaption>
                        </figure>
                    </a>
                </li>
               <li class="menu"><a href="">
                        <figure>
                            <img src="../assets/img/cadre.jpg" alt="" class="menu">
                            <figcaption>Bougie</figcaption>
                        </figure>
                    </a>
                </li>
                <li class="menu"><a href="">
                        <figure>
                            <img src="../assets/img/bouquet.jpg" alt="" class="menu">
                            <figcaption>Bouquet</figcaption>
                        </figure>
                    </a>
                </li>
            </ul>
        </section>
        <div id="fb-root"></div>
<div class="fb-comments" data-href="http://localhost:8080/" data-numposts="3" data-width=""></div>

      </div>
    </div>
  </section>
</template>

<script>
new Vue({


  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
})
</script>

<style scoped>
h2{
text-align: center;
font-size: 20px;
padding: 20px;
}

#accueil-baground {
    background: url("../assets/img/flower.jpg");
      background-attachment: fixed;
  background-position: center;
  /* background-repeat: no-repeat; */
}

#content-accueil{
  background: black;
  color: white;
  width:100%;
  margin: auto;

}
/* #slide {
  width: 100%;
  height: 600px;
  background: url("../assets/img/slide1.png");
  background-size: cover;
} */

/* a propos */

#propos {
  width: 100%;
    background: url("../assets/img/flower.jpg");
      background-attachment: fixed;
  background-position: center;
  height: auto;
  display: flex;
  flex-direction: row;
}

#propos article {
  width: 50%;
}

#henne {
  display: flex;
  justify-content: center;
  align-items: center;
}

ul.propos {
  list-style: none;
}

ul.propos li {
  text-align: center;
  font-size: 22px;
}

video {
  width: 500px;
  height: auto;
  margin: 50px;
  border: none;
}

/* boutique */
#boutique{
   background: linear-gradient(190deg, #e6d3f9 0%, #e6d3f9 50%, #f1a0d9 50%, #cea0f1 100%);
}
ul.menu {
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
     

}

li.menu {
	list-style: none;
	flex-direction: row;
	flex-wrap: wrap;
	width: 20%;
	/* margin-top: 0px; */
	height: auto;
	border-radius: 50%;
	flex-basis: auto;

}

.menu a {
	text-decoration: none;
	color: white;
	font-size: 22px;

}

.menu a figure {
	width: 200px;


}

figcaption {
	text-align: center;
}

img.menu {
	width: 200px;
	height: 200px;
	border-radius: 50%;
}


</style>
