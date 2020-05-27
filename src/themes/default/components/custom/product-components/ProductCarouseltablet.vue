<template>
  <div class="bg-white">
    <swiper :options="swiperOption" class="h-88vh">
      <swiper-slide v-for="(images, index) in gallery" :key="index" class="">
        <div class="swiper-zoom-container h-screen relative">
          <img id="carousel-img" class="h-screen object-fill w-full mb-15vh" :src="images.src" alt="">
        </div>
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
        direction: 'horizontal',
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
.profile-img-tablet {
  height: 1rem;
  width: 1rem;
  margin-left: 20%;
  border-radius: 50%;
  display: inline-block;
}
.swiper-container-vertical > .swiper-pagination-bullets {
  left: 2%;
  width: fit-content;
  bottom: 0px;
}
#carousel-img {
  object-fit: fill;
}
</style>
