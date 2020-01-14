<template>
  <div class="brdr-bottom-1 brdr-cl-primary pb60">
    <product v-for="product in productsInCart" :key="product.sku" :product="product" />
  </div>
</template>

<script>
import { CartSummary } from '@vue-storefront/core/modules/checkout/components/CartSummary'
import Product from 'theme/components/core/blocks/Checkout/Product'

export default {
  components: {
    Product
  },
  mixins: [CartSummary]
}
</script>

<style lang="scss" scoped>
</style>
