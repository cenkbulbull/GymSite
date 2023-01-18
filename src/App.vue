<template>
  <Navbar/>
  <Transition name="fade">
    <router-view/>
  </Transition>
  
  <Footer/>
</template>
<script>
  import Navbar from "./components/Navbar"
  import Footer from "./components/Footer"
  import BelgeGetir from "./composables/BelgeGetir"
  export default{
    components:{
      Navbar,
      Footer
    },
    data(){
      return{
        ayar : BelgeGetir("ayar"),
        hizmet : BelgeGetir("hizmet"),
        paket : BelgeGetir("paket"),
        alan : BelgeGetir("alan"),
      }
    },
    created(){
      this.$store.dispatch("setMutationAyar",this.ayar)
      this.$store.dispatch("setMutationHizmet",this.hizmet)
      this.$store.dispatch("setMutationPaket",this.paket)
      this.$store.dispatch("setMutationAlan",this.alan)
    }
  }
</script>
<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
