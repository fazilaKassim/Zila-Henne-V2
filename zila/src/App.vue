

<template>
    <div id="app">
    <Header />
     <main id="main-content">
  
      <router-view />
    </main>
    <Footer />
    
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"



export default {
 components: {
 Header,
 Footer,

 }
  
}
</script>

<style lang="scss">

</style>
