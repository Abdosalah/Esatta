<template>
  <div class="">
    <div v-if="productsInCart && productsInCart.length" class="">
      <hr class="border-white">
      <!-- SUBTOTAL -->
      <div class="flex my-3 text-sm" v-for="(segment, index) in totals" :key="index" v-if="segment.code === 'subtotal'">
        <div class="w-2/3 text-grey_text">
          {{ productsInCart.length }} ITEMS
        </div>
        <div class="w-1/3 text-right">
          {{ segment.value | price }}
        </div>
      </div>
      <hr class="border-white">
      <!-- TAX -->
      <div class="flex my-3 text-sm" v-for="(segment, index) in totals" :key="index" v-if="segment.code === 'tax'">
        <div class="w-2/3 text-grey_text">
          TAX
        </div>
        <div v-if="segment.value != null" class="w-1/3 text-right">
          {{ segment.value | price }}
        </div>
      </div>
      <hr class="border-white">
      <!-- SHIPPING -->
      <div class="flex my-3 text-sm" v-for="(segment, index) in totals" :key="index" v-if="segment.code === 'shipping'">
        <div class="w-2/3 text-grey_text">
          SHIPPING
        </div>
        <div v-if="segment.value != null" class="w-1/3 text-right">
          {{ segment.value | price }}
        </div>
      </div>
      <hr class="border-white">
      <!-- ALTERATIONS & RETURNS -->
      <div class="flex my-3 text-sm">
        <div class="w-2/3 text-grey_text">
          ALTERATIONS & RETURNS
        </div>
        <div class="w-1/3 text-right">
          30 DAYS
        </div>
      </div>
      <!-- THE TOTAL -->
      <div class="flex my-8" v-for="(segment, index) in totals" :key="index" v-if="segment.code === 'grand_total'">
        <div class="w-2/3">
          <p class="inline text-lg font-semibold">
            TOTAL
          </p>
          <p class="inline text-sm text-grey_text pl-1">
            inc GST
          </p>
        </div>
        <div class="w-1/3 text-xl font-semibold text-right">
          {{ segment.value | price }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CartSummary } from '@vue-storefront/core/modules/checkout/components/CartSummary'

export default {
  components: {},
  mixins: [CartSummary]
}
</script>

<style lang="scss" scoped>
</style>
