<template>
  <div class="verify">
    <Navigation></Navigation>
    
    <div class="verify__logo">
      <img src="../../assets/img/logo.png">
      <span>Live Guard</span>
    </div>

    <b-spinner v-if="is_loading" variant="primary" label="Spinning"></b-spinner>

    <div v-else>
      <div v-if="error" class="verify__title">{{ error }}</div>
      <div v-else class="verify__title">Your account verified successfully</div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
export default {
  name: "VerifyAccount",
  components: {
    Navigation
  },
  data() {
    return {
      is_loading : false,
      error: '',
    }
  },
  created() {
    this.verifyAccount(this.$route.params.code)
  },
  methods: {
    async verifyAccount(code) {
      this.is_loading = true;
      let myHeaders = new Headers();

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      let url = `https://live-guard.herokuapp.com/api/auth/verify/` + code;

      const response = await fetch(url, requestOptions);
      const responseData = await response.json();

      if (!response.ok) {
        this.error = responseData.message || 'Failed to verify!';
      }

      this.is_loading = false;

    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/variables";

.verify {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
      height: 3.5rem;
    }

    & span {
      font-size: 2.5rem;
      margin: 0 1rem;
      letter-spacing: 0.5rem;
      text-transform: uppercase;
      font-weight: 700;
      display: inline-block;
      background-image: linear-gradient(to right, $color-primary-light-3, $color-primary-dark-1);
      -webkit-background-clip: text;
      color: transparent;
    }
  }

  &__title {
    margin-top: 2rem;
    font-size: 2rem;
    font-weight: 600;
  }

}
</style>