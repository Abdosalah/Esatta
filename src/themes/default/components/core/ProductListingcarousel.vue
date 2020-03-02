<template>
  <div class="product-listing row m0 center-xs start-md">
    <carousel
      :per-page="1"
      class="pl-5 pb-10"
      :class="{normalDiv}"
      :navigate-to="someLocalProperty"
      :mouse-drag="true"
      :navigation-enabled="true"
      navigation-next-label="&gt;"
      navigation-prev-label="&lt;"
      :loop="true"
    >
      <slide class="my-grid">
        <div
          v-for="(product, index) in products.slice(0,4)"
          :key="index"
          class="w-95% mx-2%"
        >
          <product-tile class="product-tile" :product="product" />
        </div>
      </slide>
      <slide class="my-grid">
        <div
          v-for="(product, index) in products.slice(4,8)"
          :key="index"
          class="w-95% mx-2%"
        >
          <product-tile class="product-tile" :product="product" />
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import ProductTile from 'theme/components/core/ProductTile'
let lastHero = 0
export default {
  name: 'ProductListing',
  components: {
    Carousel,
    Slide,
    ProductTile
  },
  props: {
    products: {
      type: null,
      required: true
    },
    columns: {
      type: [Number, String],
      required: true
    }
  },
  methods: {
    wide (isOnSale, isNew, index) {
      let deltaCondition = index > 0 && ((index - 1) - lastHero) % 2 === 0
      // last image always shouldn't be big, we also need to count from last promoted to check if it will look ok
      let isHero = ((isOnSale === '1' || isNew === '1') && deltaCondition) || (index === this.products.length - 1 && (index - lastHero) % 2 !== 0)
      if (isHero) {
        lastHero = index
      }
      return isHero ? 'col-xs-12' : 'col-xs-6'
    }
  }
}
</script>

<style scoped>
.middle-section {
  position: relative;
  display: flex;
  width: 100%;
  height: 23rem;
  border: 0.5px solid gray;
}

@media only screen and (max-width: 640px) {
  .normalDiv {
  width: 50%;
  }
  .my-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  display: grid;
  flex: none;
  width: -webkit-fill-available;
  }
}

@media only screen and (min-width: 640px) {
  .normalDiv {
  width: 33%;
  }
  .my-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  display: grid;
  flex: none;
  width: -webkit-fill-available;
  }
}

@media only screen and (min-width: 1024px) {
  .normalDiv {
  width: 25%;
  }
  .my-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  display: grid;
  flex: none;
  width: -webkit-fill-available;
  }
}
</style>
