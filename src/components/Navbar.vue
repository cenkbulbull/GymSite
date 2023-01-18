<template>
	<!-- MENU BAR -->
	<nav class="navbar navbar-expand-lg fixed-top">
		<div class="container">

			<router-link class="navbar-brand" :to="{name:'home'}">{{ayar?.[0].ayar_ad}}</router-link>

			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav ml-lg-auto">
				<li class="nav-item">
					<router-link :to="{name:'home'}" class="nav-link" active-class="active">Anasayfa</router-link>
				</li>

				<li class="nav-item">
					<router-link :to="{name:'services'}" class="nav-link" active-class="active">Hizmetler</router-link>
				</li>

				<li class="nav-item">
					<router-link class="nav-link" :to="{name:'contact'}" active-class="active">Iletisim</router-link>
				</li>
			</ul>

			<ul class="social-icon ml-lg-3">
				<li><a href="#" class="fa fa-facebook"></a></li>
				<li><a href="#" class="fa fa-twitter"></a></li>
				<li><a href="#" class="fa fa-instagram"></a></li>
			</ul>
		</div>

	</div>
</nav>

</template>
<script>
  import {ref,computed} from "vue"
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
	.active{
		color: #f13a11;
	}
</style>