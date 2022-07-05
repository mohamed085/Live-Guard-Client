<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'animate.css';
@import "assets/css/mixins";
@import "assets/css/variables";

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  transition: .4s all;
}

::selection {
  background-color: $color-primary-dark-2;
  color: $color-white;
}

a,
router-link {
  text-decoration: none !important;
}

i {
  transition: .01s all !important;
}

#app {
  font-family: "Muli", blinkmacsystemfont, "Segoe UI", roboto, arial, "Noto Sans", sans-serif;
  color: $color-grey-dark-4;
  font-size: $default-font-size;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;

  @include respond(tab-land) {
    font-size: 56.25%;
  }

  @include respond(tab-port) {
    font-size: 50%;
  }

  @include respond(big-desktop) {
    font-size: 75%;
  }
}

.row {
  margin: 0;
  padding: 0;
}

</style>
