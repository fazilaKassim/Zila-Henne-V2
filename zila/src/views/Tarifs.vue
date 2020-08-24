<template>
  <div id="tarifs-background">
    <section id="tarifs">
      <h1>NOS TARIFS</h1>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {},
};
</script>

<style scoped>
#tarifs-background {
  background: url("../assets/img/flower-pink-background.jpg");
  background-size: cover;
  height: 100vh;
  padding: 40px 0;
}

section#tarifs {
  width: 60%;
  margin: auto;
  background: white;
}

h1 {
  color: black;
  text-align: center;
  padding: 20px;
}
</style>
