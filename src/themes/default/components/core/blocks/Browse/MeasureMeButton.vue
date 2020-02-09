<template>
  <popover class="popover" trigger="focus" effect="fade" placement="bottom" title="Title" content="content">
    <button class="button">
      <img :class="imgDimensions" src="../../../../assets/esatta-images/signup/measure_me.svg">
    </button>
  </popover>
</template>

<script>
import { IsOnWishlist } from '@vue-storefront/core/modules/wishlist/components/IsOnWishlist'
import { AddToWishlist } from '@vue-storefront/core/modules/wishlist/components/AddToWishlist'
import { RemoveFromWishlist } from '@vue-storefront/core/modules/wishlist/components/RemoveFromWishlist'
export default {
  props: ['imgDimensions', 'buttonDimensions']
}
</script>
<style lang="scss" scoped>
button {
    outline: none;
}

.big {
  background-color: white;
  border-radius: 9999px;
  padding: 2rem;
}

.height_4 {
  height: 1rem;
  width: 1rem;
}

.height_8 {
  height: 2rem;
  width: 2rem;
}
.imgDimensions{
    height: 10%;
}
.button{
}
.popover{
  z-index: 10000;
}
</style>
