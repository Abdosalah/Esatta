<template>
  <div class="main-div lg:relative">
    <!-- <img class="h-screen w-screen object-cover hidden lg:block" src="assets/esatta-images/hp_hiw.jpg"> -->
    <div class="h-screen w-screen hidden lg:block" />
    <div class="lg:absolute lg:top-10% lg:left-10% lg:block m-auto table body_font">
      <h1 class="text-5xl font-black header_font">
        How it Works
      </h1>
      <!-- NUMBER ONE -->
      <p class="numbers">
        1
      </p>
      <div class="pt-8 ml-20">
        <p class="font-bold">
          SHOP YOUR BODY
        </p>
        <p class="text-gray-600 mt-2">
          Use our Body Measurement tools to find the perfect fit
          <br>for you then browse gaments that look best on you
        </p>
        <p class="text-dark_green mt-2 font-bold">
          <a href="/how-it-works">Learn More</a>
        </p>
      </div>
      <div class="clearfix" />
      <!-- NUMBER TWO -->
      <p class="numbers">
        2
      </p>
      <div class="pt-8 ml-20">
        <p class="font-bold">
          HANDCRAFTED & INDEPENDENT
        </p>
        <p class="text-gray-600 mt-2">
          Identify the latest styles from our independent
          <br>designers - only on Esatta, and only for a limited time
        </p>
        <p class="text-dark_green mt-2 font-bold">
          <a href="/how-it-works">Learn More</a>
        </p>
      </div>
      <div class="clearfix" />
      <!-- NUMBER THREE -->
      <p class="numbers">
        3
      </p>
      <div class="pt-8 ml-20">
        <p class="font-bold">
          OUR FIT GUARANTEE
        </p>
        <p class="text-gray-600 mt-2">
          Feel great in our perfectly fitted garments, or we will
          <br>alter, remake or refund the garment - on us
        </p>
        <p class="text-dark_green mt-2 font-bold">
          <a href="/how-it-works">Learn More</a>
        </p>
      </div>
      <!-- END -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-div {
  background-color: #BDC2B1;
  position: relative;
  padding: 3rem 0rem;
}

.numbers {
  float: left;
  font-weight: 900;
  font-size: 7rem;
}

.header_font {
  font-family: 'EB Garamond', serif;
}

.body_font {
  font-family: 'Lato', sans-serif;
}
</style>
