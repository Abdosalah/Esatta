<template>
  <button
    type="button"
    class="link relative bg-cl-transparent brdr-none"
    @click="openMicrocart"
    data-testid="openMicrocart"
    :aria-label="$t('Open microcart')"
  >
    <img src="../../../../assets/svg/bag.svg" class="images hidden lg:block md:mt-2 lg:mt-0 lg:relative">
    <img src="../../../../assets/svg/bag.svg" class="mediumImages lg:hidden md:mt-2 lg:mt-0 lg:relative">
    <p class="text-sm font-light pl-3 lg:text-sm lg:pt-0">
      BAG
    </p>
    <!-- <i class="material-icons">shopping_cart</i> -->
    <span
      class="hidden lg:block minicart-count absolute flex center-xs middle-xs border-box py0 px2 h6 lh16 weight-700 cl-white"
      v-cloak
      v-show="totalQuantity"
      data-testid="minicartCount"
    >
      {{ totalQuantity }}
    </span>
    <span
      class="lg:hidden minicart-count-medium absolute flex center-xs middle-xs border-box py0 px2 h6 lh16 weight-700 cl-white"
      v-cloak
      v-show="totalQuantity"
      data-testid="minicartCount"
    >
      {{ totalQuantity }}
    </span>
  </button>
</template>

<script>
import MicrocartIcon from '@vue-storefront/core/compatibility/components/blocks/Header/MicrocartIcon'

export default {
  mixins: [MicrocartIcon]
}
</script>

<style scoped>
  .minicart-count {
    /* top: 7px; */
    top: -9%;
    left: 21%;
    /* right: 7px; */
    min-width: 16px;
    min-height: 16px;
    border-radius: 10px;
    background-color: #536C4E;
  }
  .minicart-count-medium {
    /* top: 7px; */
    top: 10%;
    left: 45%;
    /* right: 7px; */
    min-width: 16px;
    min-height: 16px;
    border-radius: 10px;
    background-color: #536C4E;
  }
  .link{
  width: 100%;
  display: flex;
  text-align: center;
  font-size: x-small;
  letter-spacing: 2px;
  padding: 4%;
  padding-left: 10%;
  transition: all 0.3s ease 0s;
  font-weight: bold;
}
.images{
  width:1.75rem;
  height:1.75rem;
  padding: 2%;
  margin-right: 10%;
  position: relative;
  bottom: 8px;
}
.mediumImages{
  width: 2rem;
  height: 2rem;
  padding: 2%;
  bottom: 8px;
}
</style>
