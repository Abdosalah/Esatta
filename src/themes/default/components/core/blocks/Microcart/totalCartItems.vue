<template>
  <button
    type="button"
    class=""
    @click="openMicrocart"
    data-testid="openMicrocart"
    :aria-label="$t('Open microcart')"
  >
    <!-- <img src="assets/svg/bag.svg" class="images md:mt-2 lg:mt-0"> -->
    <!-- <div>BAG</div> -->
    <!-- <i class="material-icons">shopping_cart</i> -->
    <span
      class=""
      v-cloak
      v-show="totalQuantity"
      data-testid="minicartCount"
    >
      ({{ totalQuantity }} ITEMS)
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
    background-color: #EC145B;
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
.link:hover {
  transform: translateY(-7px);
  box-shadow: 0px 15px 20px rgba(0,0,0,0.2);
}
.images{
  width:1.75rem;
  height:1.75rem;
  padding: 2%;
  margin-right: 10%;
  position: relative;
  bottom: 8px;
}
</style>
