<template>
	<!-- CLASS -->
	<section class="class section" id="class">
		<div class="container">
			<div class="row">

				<div class="col-lg-12 col-12 text-center mb-4">
					<h2 data-aos="fade-up" data-aos-delay="200">Paketler</h2>
				</div>

				<div v-for="p in paket" class="col-lg-4 col-md-6 col-12 mb-5" data-aos="fade-up" data-aos-delay="400">
					<div class="class-thumb">
						<div class="class-info">
							<h5 class="mb-1">{{p.paket_ad}}</h5>

							<span class="class-price">{{p.paket_fiyat}} ₺</span>

							<p>{{p.paket_icerik}}</p>
						</div>
					</div>
				</div>
				
				<div class="col-lg-12 col-12 text-center mb-4">
					<h2 data-aos="fade-up" data-aos-delay="200">Hizmetler</h2>
				</div>

				<div  v-for="h in hizmet" class="col-lg-3 col-md-6 col-12 mb-5" data-aos="fade-up" data-aos-delay="400">
					<div class="class-thumb">
						<img :src="require(`@/assets/images/${h.hizmet_resim}`)" class="img-fluid" alt="Class">

						<div class="class-info" style="height: 200px;" >
							<h5 class="mb-1">{{h.hizmet_ad}}</h5>

							<p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>
</template>
<script>
  import {ref,computed} from "vue"
  import {useStore} from "vuex"
  export default{
    setup(){

      const store = useStore()

      const hizmet = computed(()=>{
        return store.getters.getStateHizmet.documents
      })

      const paket = computed(()=>{
      	return store.getters.getStatePaket.documents
      })

      return {hizmet,paket}
      
    }
  }
</script>
<style>
	
</style>