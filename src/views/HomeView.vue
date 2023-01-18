<template>
  <!-- HERO -->
  <section class="hero d-flex flex-column justify-content-center align-items-center" id="home">

    <div class="bg-overlay"></div>

    <div class="container">
      <div class="row">

        <div class="col-lg-8 col-md-10 mx-auto col-12">
          <div class="hero-text mt-5 text-center">

            <h6 data-aos="fade-up" data-aos-delay="300">Sağlıklı bir yaşam tarzı oluşturmanın yeni yolu!</h6>

            <h1 class="text-white" data-aos="fade-up" data-aos-delay="1500">{{ayar?.[0].ayar_ad}}'da vücüdunuzu geliştirin</h1>

            <router-link :to="{name:'contact'}" class="btn custom-btn mt-3" data-aos="fade-up" data-aos-delay="600">Hemen Başla</router-link>

            <router-link :to="{name:'services'}" class="btn custom-btn bordered mt-3" data-aos="fade-up" data-aos-delay="700">Daha Fazla</router-link>
          </div>
        </div>

      </div>
    </div>
  </section>
  <section class="feature" id="feature">
    <div class="container">
      <div class="row">

        <div class="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
          <h2 class="mb-3 text-white" data-aos="fade-up">Neden Biz?</h2>

          <p data-aos="fade-up" data-aos-delay="200">{{ayar?.[0].ayar_tanitim}}</p>

          <a href="#about" class="btn custom-btn bg-color mt-5" data-aos="fade-up" data-aos-delay="300" data-toggle="modal" data-target="#membershipForm" v-smooth-scroll>Çalışma ve Dinlenme Alanlarımız</a>
        </div>

        <div class="mr-lg-auto mt-3 col-lg-4 col-md-6 col-12">
          <div class="about-working-hours">
            <div>

              <h2 class="mb-4 text-white" data-aos="fade-up" data-aos-delay="500">Çalışma saatleri</h2>

              <strong class="mt-3 d-block" data-aos="fade-up" data-aos-delay="700">Pazartesi - Cuma</strong>

              <p data-aos="fade-up" data-aos-delay="800">{{ayar?.[0].ayar_haftaici}}</p>

              <strong class="mt-3 d-block" data-aos="fade-up" data-aos-delay="700">Cumartesi</strong>

              <p data-aos="fade-up" data-aos-delay="800">{{ayar?.[0].ayar_haftasonu}}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>


  <section class="about section" id="about">
   <div class="container">
    <div class="row">

      <div class="col-lg-12 col-12 text-center mb-4">
        <h2 data-aos="fade-up" data-aos-delay="200">Çalışma ve Dinlenme Alanlarımız</h2>
      </div>

      <div v-for="a in alan" class="ml-lg-auto col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="700">
        <div class="team-thumb">
          <img style="height: 180px !important; width: 100%;" :src="require(`@/assets/images/${a.alan_resim}`)" class="img-fluid" alt="Trainer">

          <div  class="team-info d-flex flex-column">

            <span>{{a.alan_ad}}</span>

          </div>
        </div>
      </div>

    </div>
  </div>
</section>


<!-- SCHEDULE
<section class="schedule section" id="schedule">
 <div class="container">
  <div class="row">

    <div class="col-lg-12 col-12 text-center">
      <h6 data-aos="fade-up">haftalık gym programlarımız</h6>

      <h2 class="text-white" data-aos="fade-up" data-aos-delay="200">Egzersiz Takvimi</h2>
    </div>

    <div class="col-lg-12 py-5 col-md-12 col-12">
     <table class="table table-bordered table-responsive schedule-table" data-aos="fade-up" data-aos-delay="300">

       <thead class="thead-light">
         <th><i class="fa fa-calendar"></i></th>
         <th>Mon</th>
         <th>Tue</th>
         <th>Wed</th>
         <th>Thu</th>
         <th>Fri</th>
         <th>Sat</th>
       </thead>

       <tbody>
         <tr>
          <td><small>7:00 am</small></td>
          <td>
            <strong>Cardio</strong>
            <span>7:00 am - 9:00 am</span>
          </td>
          <td>
            <strong>Power Fitness</strong>
            <span>7:00 am - 9:00 am</span>
          </td>
          <td></td>
          <td></td>
          <td>
            <strong>Yoga Section</strong>
            <span>7:00 am - 9:00 am</span>
          </td>
        </tr>

        <tr>
          <td><small>9:00 am</small></td>
          <td></td>
          <td></td>
          <td>
            <strong>Boxing</strong>
            <span>8:00 am - 9:00 am</span>
          </td>
          <td>
            <strong>Areobic</strong>
            <span>8:00 am - 9:00 am</span>
          </td>
          <td></td>
          <td>
            <strong>Cardio</strong>
            <span>8:00 am - 9:00 am</span>
          </td>
        </tr>

        <tr>
          <td><small>11:00 am</small></td>
          <td></td>
          <td>
            <strong>Boxing</strong>
            <span>11:00 am - 2:00 pm</span>
          </td>
          <td>
            <strong>Areobic</strong>
            <span>11:30 am - 3:30 pm</span>
          </td>
          <td></td>
          <td>
            <strong>Body work</strong>
            <span>11:50 am - 5:20 pm</span>
          </td>
        </tr>

        <tr>
          <td><small>2:00 pm</small></td>
          <td>
            <strong>Boxing</strong>
            <span>2:00 pm - 4:00 pm</span>
          </td>
          <td>
            <strong>Power lifting</strong>
            <span>3:00 pm - 6:00 pm</span>
          </td>
          <td></td>
          <td>
            <strong>Cardio</strong>
            <span>6:00 pm - 9:00 pm</span>
          </td>
          <td></td>
          <td>
            <strong>Crossfit</strong>
            <span>5:00 pm - 7:00 pm</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</div>
</div>
</section>
-->





<!-- Modal -->
<!--<div class="modal fade" id="membershipForm" tabindex="-1" role="dialog" aria-labelledby="membershipFormLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">

    <div class="modal-content">
      <div class="modal-header">

        <h2 class="modal-title" id="membershipFormLabel">Membership Form</h2>

        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body">
        <form class="membership-form webform" role="form">
          <input type="text" class="form-control" name="cf-name" placeholder="John Doe">

          <input type="email" class="form-control" name="cf-email" placeholder="Johndoe@gmail.com">

          <input type="tel" class="form-control" name="cf-phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>

          <textarea class="form-control" rows="3" name="cf-message" placeholder="Additional Message"></textarea>

          <button type="submit" class="form-control" id="submit-button" name="submit">Submit Button</button>

          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="signup-agree">
            <label class="custom-control-label text-small text-muted" for="signup-agree">I agree to the <a href="#">Terms &amp;Conditions</a>
            </label>
          </div>
        </form>
      </div>

      <div class="modal-footer"></div>

    </div>
  </div>
</div>-->

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

      const alan = computed(()=>{
        return store.getters.getStateAlan.documents
      })

      return {ayar,alan}
      
    }
  }

</script>
