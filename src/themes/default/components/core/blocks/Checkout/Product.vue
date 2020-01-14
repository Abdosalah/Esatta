<template>
  <div class="mb-8%">
    <div class="flex">
      <product-image :image="image" class="blend w-1/2" />
      <div class="w-1/2 pl-10%">
        <div>
          <div class="text-sm cl-secondary mb-10%">
            Designer's name
          </div>
          <div class="h4 weight-400 cl-accent serif  mb-10%">
            {{ product.name | htmlDecode }}
          </div>
          <div class="mb-15%">
            <div v-if="isOnline && product.totals">
              <span v-if="product.totals.discount_amount">{{ product.totals.row_total - product.totals.discount_amount + product.totals.tax_amount | price }} </span>
              <span v-if="product.totals.discount_amount">{{ product.totals.row_total_incl_tax | price }}</span>
              <span v-if="!product.totals.discount_amount">{{ product.totals.row_total_incl_tax | price }}</span>
            </div>
            <div v-else>
              <span v-if="product.special_price">{{ product.priceInclTax * product.qty | price }} </span>
              <span v-if="product.special_price">{{ product.originalPriceInclTax * product.qty | price }}</span>
              <span v-if="!product.special_price">{{ product.priceInclTax * product.qty | price }}</span>
            </div>
          </div>
          <div class="error" v-if="product.errors && Object.keys(product.errors).length > 0">
            {{ product.errors | formatProductMessages }}
          </div>
        </div>
        <div>
          <div>
            <span>
              {{ $t('Qty') }}
              <span>
                {{ product.qty }}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <hr class="border-white">
    </div>
  </div>
</template>

<script>
import { Product } from '@vue-storefront/core/modules/checkout/components/Product'
import { onlineHelper } from '@vue-storefront/core/helpers'
import ProductImage from 'theme/components/core/ProductImage'

export default {
  computed: {
    isOnline () {
      return onlineHelper.isOnline
    },
    image () {
      return {
        loading: this.thumbnail,
        src: this.thumbnail
      }
    }
  },
  mixins: [Product],
  components: {
    ProductImage
  }
}
</script>

<style scoped>
.price-original {
  text-decoration: line-through;
}
.blend {
  flex: 0 0 121px;
}
.divider {
  border-bottom: 1px solid white;
}
</style>
