<template>
  <header>
        <div id="head">

            <ul class="icon">
                <input type="search" name="search" id="search" placeholder="search">
                <li><a href="#"><img src="assets/img/logologo.png" alt="" class="icon"></a></li>
            </ul>

            <a href="index.html" id="logo">ZILA HENNE
                <img src="" alt="">
            </a>





            <ul class="icon two">

                <li><a href="#"><img src="assets/img/profillogo.png" alt="" class="icon"></a></li>
                <li><a href="panier.html"><img src="assets/img/panier.png" alt="" class="icon"></a></li>

            </ul>
        </div>
        <hr>
        <nav role="navigation">
            <ul class="nav-links">
                <li><a href="index.html">Accueil</a></li>
                <li><a href="galerie.html">Galerie</a></li>
                <li><a href="boutique.html">Boutique</a></li>
                <li><a href="tarifs.html">Tarifs</a></li>
                <li><a href="rendez-vous.html">Rendez-vous</a></li>
            </ul>

            <div class="burger">
                <span></span>
            </div>
        </nav>

    </header>

</template>

<script>
export default {

data() {
    return {
      userId: null,
      user: null
    };
  },
  components: {
    
  },
  methods: {

  },

}
</script>

<style>

</style>