<template>
  <div class="product-listing row m0 center-xs start-md">
    <div
      v-for="(product, key) in products"
      :key="product.id"
      class="flex pl-5 pb-32"
      :class="{ mySpecdiv: key === 12, normalDiv: key !== 12 }"
    >
      <div v-if="key === 12" class="middle-section">
        <div class="DivHow absolute block lg:hidden">
          <p class="text-3xl font-bold">
            How It Works
          </p>
        </div>
        <div class="w-1/3 py-5% pl-4% hidden lg:block">
          <p class="text-3xl font-bold">
            How It Works
          </p>
          <p class="textparaleft text-dark_green py-8">
            Exclusive styles by independent <br>
            designers. Made for you
          </p>
          <button class="bg-black text-white py-4 px-16">
            LEARN MORE
          </button>
        </div>
        <div class="w-1/3 text-center pt-15% lg:py-10% lg:w-1/4">
          <p class="pb-4 text-6xl font-black">
            1
          </p>
          <p class="py-4 text-xs font-bold">
            SHOP YOUR BODY
          </p>
          <p class="textpara text-xs block">
            All our garment are made for you <br>
            from scratch and designed by <br>
            independent designers
          </p>
        </div>
        <div class="w-1/3 text-center pt-15% lg:w-1/4 lg:py-5%">
          <p class="text-6xl font-black">
            2
          </p>
          <p class="py-4 text-xs font-bold">
            HANDCRAFTED & INDEPENDENT
          </p>
          <p class="textpara text-xs">
            All our garment are made for you <br>
            from scratch and designed by <br>
            independent designers
          </p>
        </div>
        <div class="w-1/3 text-center pt-15% lg:py-10% lg:w-1/4">
          <p class="pb-4 text-6xl font-black">
            3
          </p>
          <p class="py-4 text-xs font-bold">
            OUR FIT GUARANTEE
          </p>
          <p class="textpara text-xs block">
            All our garment are made for you <br>
            from scratch and designed by <br>
            independent designers
          </p>
        </div>
      </div>
      <product-tile v-if="key !== 12" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductTile from 'theme/components/core/ProductTile'
let lastHero = 0
export default {
  name: 'ProductListing',
  components: {
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
.mySpecdiv {
  width: 100%;
}

@media only screen and (max-width: 640px) {
  .normalDiv {
  width: 50%;
  }
}

@media only screen and (min-width: 640px) {
  .normalDiv {
  width: 33%;
  }
}

@media only screen and (min-width: 1024px) {
  .normalDiv {
  width: 25%;
  }
}
.textpara{
  color: #bcbec0;
}
.DivHow{
  text-align: center;
  width: 100%;
  padding-top: 6%;
}
.textparaleft{
  color: #EC145B;
}

</style>
