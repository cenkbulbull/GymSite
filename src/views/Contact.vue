<template>
	<!-- CONTACT -->
	<section class="contact section" id="contact">
		<div class="container">
			<div class="row">

				<div class="ml-auto col-lg-5 col-md-6 col-12">
					<h2 class="mb-4 pb-2" data-aos="fade-up" data-aos-delay="200">Herhangi bir şey sormaktan çekinmeyin</h2>

					<form @submit.prevent="sendMessage" method="post" class="contact-form webform" data-aos="fade-up" data-aos-delay="400" role="form">
						<input v-model="contact.name" type="text" class="form-control" name="cf-name" placeholder="Name" required>

						<input v-model="contact.email" type="email" class="form-control" name="cf-email" placeholder="Email" required>

						<textarea v-model="contact.message" class="form-control" rows="5" name="cf-message" placeholder="Message" required></textarea>

						<button type="submit" class="form-control" id="submit-button" name="submit">Send Message</button>
					</form>
				</div>

				<div class="mx-auto mt-4 mt-lg-0 mt-md-0 col-lg-5 col-md-6 col-12">
					<h2 class="mb-4" data-aos="fade-up" data-aos-delay="600">Bizi nerede bulabilirsiniz</h2>

					<p data-aos="fade-up" data-aos-delay="800"><i class="fa fa-map-marker mr-1"></i> {{ayar?.[0].ayar_konum}}</p>
					<div class="google-map" data-aos="fade-up" data-aos-delay="900">
						<iframe src="https://maps.google.com/maps?q=Av.+Lúcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="1920" height="250" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
					</div>
				</div>

			</div>
		</div>
	</section>
</template>
<script>
	import {ref,computed} from "vue"
	import {useStore} from "vuex"
	import {firestoreRef} from "../firebase/config"
	export default{
		setup(){
			const contact = ref({
				name:"",
				email:"",
				message:""
			})

			const store = useStore()

			const ayar = computed(()=>{
				return store.getters.getStateAyar.documents
			})

			const sendMessage = async () =>{
      	//console.log(contact.value)
      	try {

      		const res=await firestoreRef.collection("mailler").add({
      			name:contact.value.name,
      			email:contact.value.email,
      			message:contact.value.message,
      			zaman:new Date()
      		})
            //console.log(res);

            return res
        } catch (error) {
        	console.log(error.message)
        }
    }

    return {ayar,contact,sendMessage}

}
}
</script>
<style>
	
</style>