<template>
  <button @click="isOnWishlist ? removeFromWishlist(product) : addToWishlist(product)" class="p-8 bg-white rounded-full" type="button" data-testid="addToWishlist">
    <img v-if="isOnWishlist" class="h-8 w-8" src="../../../../assets/esatta-images/product/liked_prod.svg">
    <img v-if="!isOnWishlist" class="h-8 w-8" src="../../../../assets/esatta-images/product/like.svg">
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
  }
}
</script>
<style lang="scss" scoped>
button {
    outline: none;
}
</style>
