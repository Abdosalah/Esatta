<template>
  <button @click="isOnWishlist ? removeFromWishlist(product) : addToWishlist(product)" :class="buttonDimensions" type="button" data-testid="addToWishlist">
    <img v-if="isOnWishlist" :class="imgDimensions" src="../../../../assets/esatta-images/product/liked_prod.svg">
    <img v-if="!isOnWishlist" :class="imgDimensions" src="../../../../assets/esatta-images/product/like.svg">
    <!-- <template v-if="!isOnWishlist">
      {{ $t('Add to favorite') }}
    </template>
    <template v-else>
      {{ $t('Remove') }}
    </template> -->
  </button>
</template>

<script>
import { IsOnWishlist } from '@vue-storefront/core/modules/wishlist/components/IsOnWishlist'
import { AddToWishlist } from '@vue-storefront/core/modules/wishlist/components/AddToWishlist'
import { RemoveFromWishlist } from '@vue-storefront/core/modules/wishlist/components/RemoveFromWishlist'
export default {
  mixins: [ IsOnWishlist, AddToWishlist, RemoveFromWishlist ],
  computed: {
    favoriteIcon () {
      return this.isOnWishlist ? 'favorite' : 'favorite_border'
    }
  },
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
  padding: 2vw;
  position: absolute;
  z-index: 10;
}

.height_4 {
  height: 1rem;
  width: 1rem;
}

.height_8 {
  height: 2rem;
  width: 2rem;
}
</style>
