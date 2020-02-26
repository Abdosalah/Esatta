<template>
  <div class="my-carousel">
    <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="true">
      <slide>
        <div class="text-center relative">
          <p class="numbers absolute right-0 opacity-50">
            2
          </p>
          <div class="absolute right-0 my-carousel w-3 h-20" />
          <p class="numbers">
            1
          </p>
          <p class="font-bold text-lg">
            SHOP YOUR BODY
          </p>
          <p class="text-grey_text m-4">
            Use our Body Measurement
            <br> to find the perfect fit for
          </p>
        </div>
      </slide>
      <slide>
        <div class="text-center relative">
          <p class="numbers absolute left-0 opacity-50">
            1
          </p>
          <p class="numbers absolute right-0 opacity-50">
            3
          </p>
          <div class="absolute left-0 my-carousel w-3 h-20" />
          <div class="absolute right-0 my-carousel w-3 h-20" />
          <p class="numbers">
            2
          </p>
          <p class="font-bold text-lg">
            HANDCRAFTED & INDEPENDENT
          </p>
          <p class="text-grey_text m-4">
            Identify the latest styles from our
            <br>independent designers - only on Esatta.
          </p>
        </div>
      </slide>
      <slide>
        <div class="text-center relative">
          <p class="numbers absolute left-0 opacity-50">
            2
          </p>
          <div class="absolute left-0 my-carousel w-3 h-20" />
          <p class="numbers">
            3
          </p>
          <p class="font-bold text-lg">
            OUR FIT GUARANTEE
          </p>
          <p class="text-grey_text m-4">
            Feel great in our perfectly fitted garments, or we will
            <br>alter, remake or refund the garment - on us
          </p>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  }
};
</script>

<style scoped>
.my-carousel {
  background-color: #FADBD9;
}
.numbers{
  font-weight: 900;
  font-size: 4rem;
}
</style>
