<template>
  <button
    type="button"
    class="inline-flex bg-cl-transparent brdr-none"
    @click="toggleWishlistPanel"
    :aria-label="$t('Open wishlist')"
  >
    <i class="material-icons">favorite_border</i>
    <span
      class="wishlist-count absolute flex center-xs middle-xs border-box py0 px2 h6 lh16 weight-700 cl-white"
      v-cloak
      v-show="totalQuantity"
      data-testid="wishlistcount"
    >
      <!-- {{ productsInWishlist.length }} -->
    </span>
  </button>
</template>

<script>
import WishlistIcon from '@vue-storefront/core/compatibility/components/blocks/Header/WishlistIcon'

export default {
  mixins: [WishlistIcon]
}
</script>
