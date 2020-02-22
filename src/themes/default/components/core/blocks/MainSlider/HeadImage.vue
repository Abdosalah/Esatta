<template>
  <div class="relative">
    <img class="h-screen w-screen object-cover" src="assets/esatta-images/page-banner/hp_banner.jpg">
    <div class="absolute brush-div w-3/5">
      <img class="hidden md:block brush-image animated fadeInLeft" src="assets/esatta-images/page-banner/brush.png">
      <div class="text-white banner-text inset-0 text-delay animated slideInLeft">
        <p class="text-5xl text-center font-bold">
          You've never <br class="block md:hidden"> looked <br class="block lg:hidden"> more you.
        </p>
        <p class="text-lg text-center hidden lg:block">
          EXCLUSIVE DESIGN CUSTOMISED FOR YOUR BODY TYPE
        </p>
      </div>
    </div>
    <div class="buttons-div top-45% lg:top-50% animated slideInUp">
      <div class="block md:inline-block">
        <button class="header-buttons">
          <img class="w-8 h-8 inline" src="assets/esatta-images/page-banner/measure.svg">
          <p class="button-text">
            MEASURE ME
          </p>
        </button>
      </div>
      <router-link :to="localizedRoute('/c/women-20')" class="block md:inline-block md:ml-10 router-links" exact>
        <button class="header-buttons">
          <img class="w-8 h-8 inline" src="assets/esatta-images/page-banner/browse.svg">
          <p class="button-text">
            BROWSE
          </p>
        </button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-delay {
  animation-duration: 1s;
  animation-delay: 0.4s;
}
.brush-div {
  width: 80%;
  left: 10%;
  top: 17%;
}
.banner-text {
  position: absolute;
  top: 33%;
}
.buttons-div {
  animation-duration: 1s;
  animation-delay: 0.4s;
  text-align: center;
  position: absolute;
  width: 100%;
}

.header-buttons {
  background-color: #EC145B;
  width: 17rem;
  margin-top: 2rem;
  padding: 1rem 3.5rem;
  outline: none;
  border: none;
  transition: all 0.3s ease 0s;
}
.header-buttons:hover {
  transform: translateY(-7px);
  box-shadow: 0px 15px 20px rgba(0,0,0,0.2);
}
.router-links:hover::after {
  content: none;
}

.button-text {
  color: white;
  display: inline;
  margin-top: 0.3rem;
  padding-left: 1rem;
}
.brush-image {
  height: 27vh;
  width: 100vw;
  animation-duration: 1s;
}
</style>
