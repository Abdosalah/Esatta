<template>
  <div class="relative">
    <img class="h-screen w-screen object-cover" src="assets/esatta-images/page-banner/hp_banner.jpg">
    <div class="absolute brush-div w-3/5">
      <img class="hidden md:block" src="assets/esatta-images/page-banner/brush.png">
      <div class="text-white banner-text inset-0">
        <p class="text-5xl text-center font-bold">
          You've never looked more you.
        </p>
        <p class="text-sm text-center hidden lg:block">
          EXCLUSIVE DESIGN CUSTOMISED FOR YOUR BODY TYPE
        </p>
      </div>
    </div>
    <div class="buttons-div text-center w-full">
      <div class="block md:inline-block">
        <button class="header-buttons">
          <img class="w-8 h-8 float-left" src="assets/esatta-images/page-banner/measure.svg">
          <p class="button-text">
            MEASURE ME
          </p>
        </button>
      </div>
      <div class="block md:inline-block md:ml-10">
        <button class="header-buttons">
          <img class="w-8 h-8 float-left" src="assets/esatta-images/page-banner/browse.svg">
          <p class="button-text">
            BROWSE
          </p>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.brush-div {
  top: 20%;
  left: 20%;
}
.banner-text {
  position: absolute;
  top: 33%;
}

.buttons-div {
  position: absolute;
  top: 55%;
}

.header-buttons {
  background-color: #EC145B;
  width: 17rem;
  margin-top: 2rem;
  padding: 1rem 3.5rem;
}

.button-text {
  color: white;
  display: inline-block;
  margin-top: 0.3rem;
  margin-left: 1rem;
}
</style>
