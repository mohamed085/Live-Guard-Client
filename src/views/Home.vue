<template>
  <div class="home">
    <Navigation></Navigation>

    <div class="header">
      <div class="header__content">
        <div class="header__logo">
          <img src="../assets/img/logo.png">
          <span>LiveGuard</span>
        </div>

        <div class="row">
          <div class="col-12 col-md-6 d-flex align-items-center">
            <div class="header__desc">
              <div class="header__desc__title animate__animated animate__fadeInDown">The Most Reliable Parental Control App</div>
              <div class="header__desc__desc animate__animated animate__fadeInLeft">
                See the real-time location of your kids on the map
                <br>
                & stay in touch with instant messages
              </div>
              <div class="header__desc__discover animate__animated animate__fadeInLeft">
                <router-link to="">Discover now</router-link>
              </div>
              <div class="header__desc__available animate__animated animate__fadeInUp">
                <span>Available on：</span>
                <a href="" target="_blank"><i class="fab fa-android"></i></a>
                <a href="" target="_blank"><i class="fab fa-apple"></i></a>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <img class="animate__animated animate__zoomIn" src="../assets/img/track.png">
          </div>
        </div>
      </div>

      <figure class="header__bg">
        <img src="../assets/img/decor1.png">
      </figure>
    </div>

    <div class="section designed-for">
      <div class="section__container">
        <div class="row">
          <div class="col-12 col-md-6 designed-for__img">
            <img src="../assets/img/chip-internals.png">
          </div>
          <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
            <div class="section__title mb-5">Designed for humans.
              <br>
              Made for families.
              <br>
              Built by parents.
            </div>
            <div class="section__desc mb-5">
              You shouldn't have to fuss over complicated technology. That's why Chip has no power button, no switches, no extra hardware, and no complicated setup.
            </div>
            <div class="section__desc">
              Designed and engineered in the US by world-class mobile device experts, Chip's patented Progressive Beaconing technology sets it apart from other trackers.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section use mt-0">
      <div class="section__container">
        <div class="section__title text-center mb-0">You protect them</div>
        <div class="section__title text-center">We protect your data</div>
        <div class="section__desc">
          Record and see location, heart pulse, and temperature of your kids by means of a bracelet on the wrist
          and mange all data via our apps.
        </div>
        <div class="use__images">
          <div class="row">
            <div class="col-12 col-md-5 d-flex align-items-center justify-content-center">
              <img src="../assets/img/use.png">
            </div>
            <div class="col-12 col-md-2 d-flex align-items-center justify-content-center">
              <router-link to="/" class="use__images__btn">Sign now</router-link>
            </div>
            <div class="col-12 col-md-5 d-flex align-items-center justify-content-center">
              <img src="../assets/img/user_2.png">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section for mt-0">
      <div class="section__container">
        <div class="row">
          <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
            <div class="section__title mb-4">For furry friends of all sizes. Yup, even cats can deal.</div>
            <div class="section__desc mb-5">Chip attaches to your pet's collar and pairs with a smartphone app to track at any distance. And, it's so light, basically any pet can wear it. We might have to draw the line at goldfish.</div>
            <div class="section__desc">*Some attachment accessories sold separately.</div>
          </div>
          <div class="col-12 col-md-6 designed-for__img">
            <img src="../assets/img/chip.png">
          </div>
        </div>
      </div>

    </div>

    <div class="section about">
      <div class="section__container">
        <div class="row mb-5">
          <div data-aos="fade-right" data-aos-duration="2000"
               class="col-12 col-md-6 d-flex flex-column justify-content-center">
            <div class="about__title">View Kids' Real-Time Location</div>
            <div class="about__desc">Track the current location of your kids. Stop calling kids "where are you?" all the time.</div>
            <ul class="about__items">
              <li class="about__items__item"><span></span>Grasp your kids' real-time location at any time.</li>
              <li class="about__items__item"><span></span>Check if your kids are in school or at home as required.</li>
              <li class="about__items__item"><span></span>Know if your kids go to a strange and unsafe place.</li>
            </ul>
          </div>
          <div data-aos="fade-left" data-aos-duration="2000"
               class="col-12 col-md-6 d-flex justify-content-end">
            <img src="../assets/img/about_1.png">
          </div>
        </div>
        <div class="row mb-5">
          <div data-aos="fade-right" data-aos-duration="2000"
               class="col-12 col-md-6 d-flex justify-content-start">
            <img src="../assets/img/about_2.png">
          </div>
          <div data-aos="fade-left" data-aos-duration="2000"
               class="col-12 col-md-6 d-flex flex-column justify-content-center">
            <div class="about__title">Check Location History</div>
            <div class="about__desc">View location history timeline to know kids' past routine. Never yell at your kids: "Where have you been?" again.</div>
            <ul class="about__items">
              <li class="about__items__item"><span></span>View your kids' recent activity area.</li>
              <li class="about__items__item"><span></span>Know where they were at a certain time.</li>
              <li class="about__items__item"><span></span>Learn where your child often goes.</li>
            </ul>
          </div>
        </div>
        <div class="row mb-5">
          <div data-aos="fade-right" data-aos-duration="2000"
               class="col-12 col-md-6 d-flex flex-column justify-content-center">
            <div class="about__title">Set Safe Zones</div>
            <div class="about__desc">Create zones like "school" or "home" around specific locations. Get notified when kids break planned routines.</div>
            <ul class="about__items">
              <li class="about__items__item"><span></span>Set the scope of kids' activities.</li>
              <li class="about__items__item"><span></span>Set up a geofence and set the time range.</li>
              <li class="about__items__item"><span></span>Receive an alert when the kids leave the set place.</li>
            </ul>
          </div>
          <div data-aos="fade-left" data-aos-duration="2000"
               class="col-12 col-md-6 d-flex justify-content-end">
            <img src="../assets/img/about_3.png">
          </div>
        </div>
      </div>
    </div>

    <div class="section reviews">
      <figure class="reviews__bg">
        <img src="../assets/img/decor3.png">
      </figure>
      <div class="section__container">
        <div class="section__title text-center">Hear from real users</div>
        <div class="row">
          <div data-aos="fade-up" data-aos-duration="2000" class="col-12 col-md-4">
            <div class="reviews__review">
              <div class="reviews__review__user d-flex align-items-center">
                <b-avatar src="https://pbs.twimg.com/profile_images/1501322370090471424/ObjAN9Dn_400x400.jpg" size="8rem"></b-avatar>
                <div class="d-flex flex-column">
                  <span class="reviews__review__user__name">Mohamed Emad</span>
                  <span class="reviews__review__user__address">About 1 month ago</span>
                </div>
              </div>
              <div class="reviews__review__desc">
                I’ve been looking for something exactly like this for years, but I didn’t think it existed. So glad I found it. I’m super impressed with how easy Localize works.
              </div>
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="2000" class="col-12 col-md-4">
            <div class="reviews__review">
              <div class="reviews__review__user d-flex align-items-center">
                <b-avatar src="https://pbs.twimg.com/profile_images/1501322370090471424/ObjAN9Dn_400x400.jpg" size="8rem"></b-avatar>
                <div class="d-flex flex-column">
                  <span class="reviews__review__user__name">Mohamed Emad</span>
                  <span class="reviews__review__user__address">About 1 month ago</span>
                </div>
              </div>
              <div class="reviews__review__desc">
                It’s nice to know that I can locate my husband in just a tap when he’s away on business. Really easy to do.
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" class="col-12 col-md-4">
            <div class="reviews__review">
              <div class="reviews__review__user d-flex align-items-center">
                <b-avatar src="https://pbs.twimg.com/profile_images/1501322370090471424/ObjAN9Dn_400x400.jpg" size="8rem"></b-avatar>
                <div class="d-flex flex-column">
                  <span class="reviews__review__user__name">Mohamed Emad</span>
                  <span class="reviews__review__user__address">About 1 month ago</span>
                </div>
              </div>
              <div class="reviews__review__desc">
                Being able to customize a message is a game-changer. I love how simple Localize is, but also how powerful it is too.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section why">
      <div class="section__container">
        <div class="row">
          <div class="col-12 col-md-6 why__content">
            <div class="section__title mb-5">Why LiveGuard</div>
            <div class="why__content__item">
              <div class="why__content__item__icon"><i class="fas fa-lock"></i></div>
              <div class="why__content__item__desc">
                <span class="why__content__item__desc__title">Completely Private</span>
                <span class="why__content__item__desc__desc">No need to worry about your privacy. The holder of the phone number cannot know who tried to locate them</span>
              </div>
            </div>
            <div class="why__content__item">
              <div class="why__content__item__icon"><i class="fas fa-tools"></i></div>
              <div class="why__content__item__desc">
                <span class="why__content__item__desc__title">Skip the installation</span>
                <span class="why__content__item__desc__desc">No need to install anything on their end. Just enter their number and LiveGuard gets to work. Really. That’s it.</span>
              </div>
            </div>
            <div class="why__content__item">
              <div class="why__content__item__icon"><i class="fas fa-mobile-alt"></i></div>
              <div class="why__content__item__desc">
                <span class="why__content__item__desc__title">Supports old phones and all carriers</span>
                <span class="why__content__item__desc__desc">Do they have an old phone? LiveGuard works with pretty much any mobile phone, on any network.</span>
              </div>
            </div>
            <div class="why__content__item">
              <div class="why__content__item__icon"><i class="fab fa-android"></i></div>
              <div class="why__content__item__desc">
                <span class="why__content__item__desc__title">Works on iOS and Android</span>
                <span class="why__content__item__desc__desc">Whatever phone they use, LiveGuard works like magic. In fact, you don’t even need to know their phone model to find them.</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 why__img">
            <img src="../assets/img/why.webp">
          </div>
        </div>
      </div>
    </div>

    <div class="section questions">
      <div class="section__container">
        <div class="section__title">FAQ: How do I track any phone location by phone number</div>
        <div class="questions__items">
          <div class="questions__items__item">
            <div v-b-toggle.collapse-1 class="questions__items__item__question">
              <span>How to connect my device with LiveGuard application</span>
              <span><i class="fas fa-chevron-down"></i></span>
            </div>
            <b-collapse id="collapse-1" class="mt-2">
              <div class="questions__items__item__answer">By insert chip id in application in add new device</div>
            </b-collapse>
          </div>
          <div class="questions__items__item">
            <div v-b-toggle.collapse-2 class="questions__items__item__question">
              <span>How to connect my device with LiveGuard application</span>
              <span><i class="fas fa-chevron-down"></i></span>
            </div>
            <b-collapse id="collapse-2" class="mt-2">
              <div class="questions__items__item__answer">By insert chip id in application in add new device</div>
            </b-collapse>
          </div>
        </div>
      </div>
    </div>

    <div class="section ready">
      <div class="section__container">
        <div class="row">
          <div class="col-12 col-md-6 ready__content">
            <div class="section__title">Ready to get started?</div>
            <div class="section__desc w-75">LiveGuard is the best way to track anyone.</div>
            <router-link to="" class="ready__content__btn">Order now</router-link>
          </div>
          <div class="col-12 col-md-6 ready__img">
            <img src="../assets/img/ready.png">
          </div>
        </div>
      </div>
    </div>

    <div class="section product"></div>

    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    Navigation,
    Footer
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixins";
@import "../assets/css/mixins";
@import "../assets/css/home";

.designed-for {
  background-image: linear-gradient(180deg, hsla(0, 0%, 100%, .45), hsla(0, 0%, 100%, .45)), url(../assets/img/chip-made-in-usa.jpg);
  background-position: 0 0, 50% 85%;
  background-size: auto, cover;
}


.for {
  background-image: linear-gradient(180deg, rgba(0,0,0,.5), rgba(0,0,0,.5)), url("../assets/img/cat.jpeg");
  background-position: 0 0, 50% 50%;
  background-size: auto, cover;
}

</style>