<template>
	
  <!-- FOOTER -->
  <footer class="site-footer">
    <div class="container">
     <div class="row">

      <div class="ml-auto col-lg-4 col-md-5">
        <p class="copyright-text">Copyright &copy; 2023 {{ayar?.[0].ayar_ad}}</p> <!-- hata oluşma durumuna karşı https://codingbeautydev.com/blog/javascript-cannot-read-property-0-of-undefined/ adresinden çözüm bulundu -->
      </div>

      <div class="d-flex justify-content-center mx-auto col-lg-5 col-md-7 col-12">
        <p class="mr-4">
          <i class="fa fa-envelope-o mr-1"></i>
          <a>{{ayar?.[0].ayar_mail}}</a>
        </p>

        <p><i class="fa fa-phone mr-1"></i>{{ayar?.[0].ayar_tel}}</p>
      </div>

    </div>
  </div>

</footer>
</template>
<script>
  import {ref,computed,onMounted} from "vue"
  import {useStore} from "vuex"
  export default{
    setup(){
      const store = useStore()

      const ayar = computed(()=>{
        return store.getters.getStateAyar.documents
      })

      return {ayar}
      
    }
  }
</script>
<style>
	
</style>