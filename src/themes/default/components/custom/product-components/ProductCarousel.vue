<template>
  <div class="">
    <swiper :options="swiperOption" class="h-screen cursor-move">
      <swiper-slide v-for="(images, index) in gallery" :key="index" class="">
        <div class="swiper-zoom-container h-screen relative">
          <img id="carousel-img" class="h-screen object-cover w-full" :src="images.src" alt="">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-screen">
          <img class="h-screen opacity-25 object-cover w-full" :src="gallery[0].src" alt="">
          <div class="pt-64 absolute top-0 w-full h-full cl-secondary">
            <p class="px-20%">
              Material and Fabrics
            </p>
            <hr class="mx-20% my-4">
            <p class="px-20% mb-4">
              - 100% Wool <br>
              - Already Warn Look
            </p>
            <p class="px-20%">
              Model Wears
            </p>
            <hr class="mx-20% my-4">
            <p class="px-20%">
              Care instrusction
            </p>
            <hr class="mx-20% my-4">
            <p class="px-20%">
              Shipping
            </p>
            <hr class="mx-20% my-4">
            <p class="px-20%">
              Returns
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <section class="bg-cl-secondary flex w-full">
          <img class="h-screen opacity-25 object-cover w-full" :src="gallery[0].src" alt="">
          <div class="pt-24 absolute top-0 w-full h-full cl-secondary">
            <img class="profile-img" src="../../../assets/esatta-images/my-profile/avatar.jpg">
            <div class="inline-block pl-8">
              <p class="text-xl">
                WHY THIS FITS YOU <strong>ALEX</strong>
              </p>
            </div>
            <div class="flex pt-4 px-10%">
              <div class="w-1/3">
                <div class="relative">
                  <img class="w-80% h-25rem absolute" src="../../../assets/esatta-images/product/body_shape.svg">
                  <img class="w-80% h-25rem py-8" src="../../../assets/esatta-images/product/shape_shape.png">
                </div>
              </div>
              <div class="w-2/3 text-left text-sm">
                <div>
                  <p class="text-lg font-bold tracking-widest">
                    HOURGLASS
                  </p>
                  <p class="pt-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
                    Donec mauris ex, fermentum id egestas eget, fermentum eu mi.<br>
                    Vivamus molestie orci sit amet venenatis congue.
                  </p>
                  <p class="pt-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
                    Donec mauris ex, fermentum id egestas eget, fermentum eu mi.<br>
                    Vivamus molestie orci sit amet venenatis congue.
                  </p>
                  <p class="pt-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
                    Donec mauris ex, fermentum id egestas eget, fermentum eu mi.<br>
                    Vivamus molestie orci sit amet venenatis congue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination" />
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    gallery: {
      type: Array,
      required: true
    }
  },
  name: 'Carrousel',
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        mousewheel: {
          forceToAxis: true,
          releaseOnEdges: true,
          invert: true
        },
        zoom: {
          maxRatio: 3,
          minRatio: 1
        }
      }
    }
  }
}
</script>

<style >
.profile-img {
  height: 4rem;
  width: 4rem;
  margin-left: 20%;
  margin-bottom: 3.4rem;
  border-radius: 50%;
  display: inline-block;
}
.swiper-container-vertical > .swiper-pagination-bullets {
  left: 2%;
  width: fit-content;
}
#carousel-img {
  object-fit: cover;
}
</style>
