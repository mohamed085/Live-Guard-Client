<template>
  <div class="footer">
    <div class="footer__container">
      <div class="row">
        <div class="col-12 col-md-3">
          <router-link to="/" class="footer__logo d-flex align-items-center">
            <img src="../assets/img/logo.png">
            <span>LiveGuard</span>
          </router-link>
        </div>
        <div class="col-12 col-md-3">
        </div>
        <div class="col-12 col-md-3"></div>
        <div class="col-12 col-md-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer"
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixins";
@import "../assets/css/variables";

.footer {
  padding: 5rem 0;
  background-color: $color-grey-dark-4;
  color: $color-white;

  &__container {
    padding: 0 5%;
  }

  &__logo {
    display: flex;
    align-items: center;

    & img {
      height: 3.5rem;
    }

    & span {
      font-size: 2rem;
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

  &__desc {
    padding-left: 2rem;
  }

  &__title {
    font-weight: 700;
    font-size: 2.5rem;
    margin-bottom: .8rem;
  }

  &__break {
    width: 5rem;
    height: .5rem;
    background-color: $color-primary;
    margin-bottom: 2rem;
  }

  &__items {
    display: flex;
    flex-direction: column;
    padding-left: 2rem;

    &__item {
      margin: .5rem 0;
      display: flex;
      align-items: center;

      & span {
        background-color: $color-primary;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        margin-right: .8rem;
      }

      & a {
        color: $color-white;

        &:hover {
          color: $color-primary;
        }
      }
    }
  }

}
</style>