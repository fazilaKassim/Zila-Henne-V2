<template>
  <header>
    <div id="head">
      <div class="grid-container">
        <div class="search">
          <input type="search" name="search" id="search" placeholder="search" />
          <!--input search -->

          <router-link to="#">
            <!--link vers la page des resultats de recherche-->
            <img src="../assets/img/loupe.png" alt="" class="icon-loupe" />
            <!--icon loupe search -->
          </router-link>
        </div>

        <div class="logo">
          <router-link to="index.html" id="logo">
            <!--link to accueil-->
            ZILA HENNE
            <!-- <img src="../assets/img/logo.png"> -->
            <!-- logo -->
          </router-link>
        </div>

        <div class="icon-log">
          <!-- icon connexion et panier -->
          <ul class="icon two">
            <li>
              <router-link to="#">
                <img
                  src="../assets/img/profillogo.png"
                  alt=""
                  class="icon flex-vertical"
              /></router-link>
              <!-- icon connexion-->
            </li>
            <li>
              <router-link to="panier.html"
                ><img
                  src="../assets/img/panier.png"
                  alt=""
                  class="icon flex-vertical"
              /></router-link>
              <!-- icon panier -->
            </li>
          </ul>
        </div>
        <hr />
        <!--trait de separation entre la navbar et le logo  -->
        <div class="navbar">
          <!--navigation bar  -->
          <nav role="navigation" :class="isActive && 'is-active'">
            <ul class="nav-links">
              <li><router-link to="/">Accueil</router-link></li>
              <li><router-link to="/boutique">Boutique</router-link></li>
              <li><router-link to="/galerie">Galerie</router-link></li>
              <li><router-link to="/tarifs">Tarifs</router-link></li>
              <li><router-link to="/rendezVous">Rendez-vous</router-link></li>
        
            </ul>

            <div class="burger">
              <!--burger  -->
              <span></span>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import vue from "vue";

export default {
  data() {
    return {};
  },

  components: {},

  methods: {},
};
</script>

<style lang="scss" >
body {
  background: black;
}

header {
  width: 100%;
  margin-top: 10px;
}
.flex-vertical {
  display: flex;
  flex-direction: row;
}

#head {
  display: flex;
  // flex-direction: row;

  height: auto;
  padding: 50px 100px 0px;
}

.grid-container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 0.1fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

// search
.search {
  padding-top: 20px;
  grid-area: 1 / 1 / 3 / 6;
}
#search {
  background-color: black;
  height: 30px;
  border-bottom: 1px solid rgb(200, 156, 98);
  border-top: inherit;
  border-left: inherit;
  border-right: inherit;
  outline: 0;
  color: white;
}

#search::placeholder {
  font-family: "Bellota", cursive;
  color: rgb(200, 156, 98);
  margin: 20px;
}
.icon-loupe {
  width: 30px;
  list-style: none;
}
// logo
.logo {
  grid-area: 1 / 2 / 2 / 3;
  width: 100%;
  text-align: center;
}
#logo {
  text-decoration: none;
  height: auto;
  font-size: 36px;
  font-weight: 700;
  color: white;
}

// icon connexion

.icon-log {
  grid-area: 1 / 3 / 2 / 4;
}
.icon {
  display: flex;
  flex-direction: row;
  list-style: none;
  float: right;
  justify-content: center;
  align-items: center;
}

.icon li a img {
  width: 40px;
  padding-left: 25px;
}

// trait de separation

hr {
  grid-area: 2 / 1 / 3 / 4;
  border: 0.5px solid rgba(200, 156, 98, 40%);
  opacity: 40%;
  overflow: visible;
  margin: auto;
  width: 58%;
}

// navbar
.navbar {
  grid-area: 3 / 1 / 4 / 4;
  width: 100%;
}
nav {
  width: 50%;
  margin: auto;
  height: auto;
}

ul.nav-links {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: white;
}

a {
  text-decoration: none;
  color: white;

}



ul.nav-links li {
  width: 120px;
  padding: 20px 0px;
  text-align: center;
  cursor: pointer;
  color: white;
}

ul.nav-links a {
  font-size: 18px;
  color: white;
  text-decoration: none;
}
ul.nav-links a:hover {
  font-size: 18px;
  color: rgb(194, 140, 69);
  text-decoration: none;
}
</style>
