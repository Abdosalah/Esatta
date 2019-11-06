 <template> 
 <!-- sm:m-auto lg:pl-16 w-full lg:m-0 py-10 -->
  <div class="main-div">
    <img class="h-screen w-screen object-cover hidden lg:block" src="assets/esatta-images/hp_hiw.jpg">
    <h1 class="text-5xl font-black">How it Works</h1>
    <div class="steps">
      <!-- NUMBER ONE -->
      <p class="numbers">1</p>
      <div class="pt-8 ml-20">
        <p class="font-bold">SHOP YOUR BODY</p>
        <p class="text-gray-600 mt-2">
          Use our Body Measurement tools to find the perfect fit 
          <br/>for you then browse gaments that look best on you
        </p>
        <p class="more"><a href="/how-it-works">Learn More</a></p>
      </div>
      <div class="clearfix" />
      <!-- NUMBER TWO -->
      <p class="numbers">2</p>
      <div class="pt-8 ml-20">
        <p class="font-bold">HANDCRAFTED & INDEPENDENT</p>
        <p class="text-gray-600 mt-2">
          Identify the latest styles from our independent
          <br/>designers - only on Esatta, and only for a limited time
        </p>
        <p class="more"><a href="/how-it-works">Learn More</a></p>
      </div>
      <div class="clearfix" />
      <!-- NUMBER THREE -->
      <p class="numbers">3</p>
      <div class="pt-8 ml-20">
        <p class="font-bold">OUR FIT GUARANTEE</p>
        <p class="text-gray-600 mt-2">
          Feel great in our perfectly fitted garments, or we will
          <br/>alter, remake or refund the garment - on us
        </p>
        <p class="more"><a href="/how-it-works">Learn More</a></p>
      </div>
      <!-- END -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-div {
  background-color: #FADBD9;
  position: relative;
}

.numbers {
  float: left;
  font-weight: 900;
  font-size: 7rem;
}

.more {
  color: #EC145B;
  margin-top: 0.5rem;
}
</style>