<template>
  <div class="product-listing row m0 center-xs start-md">
    <div
      v-for="(product, key) in products"
      :key="product.id"
      class="flex px-2"
      :class="{ mySpecdiv: key === 12, normalDiv: key !== 12 }"
    >
      <div v-if="key === 12" class="w-full hidden lg:flex">
        <middle-section class="" />
      </div>
      <div v-if="key === 12" class="w-full hidden md:block lg:hidden">
        <middle-sectiontablet />
      </div>
      <div v-if="key === 12" class="w-full md:hidden">
        <middle-sectionphone />
      </div>
      <product-tile v-if="key !== 12" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductTile from 'theme/components/core/ProductTile'
import MiddleSection from 'theme/components/custom/browse-components/MiddleSection.vue'
import MiddleSectiontablet from 'theme/components/custom/browse-components/MiddleSectiontablet.vue'
import MiddleSectionphone from 'theme/components/custom/browse-components/MiddleSectionphone.vue'
let lastHero = 0
export default {
  name: 'ProductListing',
  components: {
    MiddleSection,
    MiddleSectiontablet,
    MiddleSectionphone,
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

.normalDiv {
  padding-bottom: 8rem
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
