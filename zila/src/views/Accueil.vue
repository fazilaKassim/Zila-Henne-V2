<template>
  <section id="accueil">
    <div id="slide">
      <article class="slide"></article>
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
            <h2>Zila Boutique</h2>
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
                <!-- <li class="menu"><a href="">
                        <figure>
                            <img src="../assets/img/bougie.png" alt="" class="menu">
                            <figcaption>Bougie</figcaption>
                        </figure>
                    </a>
                </li> -->
                <li class="menu"><a href="">
                        <figure>
                            <img src="../assets/img/bouquet.jpg" alt="" class="menu">
                            <figcaption>Bouquet</figcaption>
                        </figure>
                    </a>
                </li>
            </ul>
        </section>


      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {};
  },

  components: {},
};
</script>

<style scoped>
#accueil-baground {
    background: url("../assets/img/flowerrose.jpg");
}

#content-accueil{
  background: black;
  color: white;
  width:90%;
  margin: auto;

}
#slide {
  width: 100%;
  height: 600px;
  background: url("../assets/img/slide1.png");
  background-size: cover;
}

/* a propos */

#propos {
  width: 100%;

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
	margin-top: 50px;
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
