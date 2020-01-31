<template>
  <div class="microcart">
    <div v-if="productsInCart.length" class="summary d-inline-flex align-center pt-16 pb20 px40">
      <h7 class="pr-32 text-3xl font-bold">
        BAG
      </h7>
      <div class="pt-3 weight-700 b align-center middle-xs">
        <div class="text-xs1 align-center total-price-value">
          <h4 v-if="productsInCart.length" class="toptext">
            ({{ productsInCart.length }} ITEMS)
          </h4>
        </div>
      </div>
      <div class="pt-3 weight-700 b align-center middle-xs" v-for="(segment, index) in totals" :key="index" v-if="segment.code === 'grand_total'">
        <div class="totalprice align-center total-price-value">
          {{ segment.value | price }}
        </div>
      </div>
    </div>
    <h4 v-if="!productsInCart.length" class="cl-accent ml30">
      {{ $t('Your shopping cart is empty.') }}
    </h4>
    <div v-if="!productsInCart.length" class="ml30" @click="closeMicrocartExtend">
      {{ $t("Don't hesitate and") }}
      <router-link :to="localizedRoute('/')">
        {{ $t('browse our catalog') }}
      </router-link>
      {{ $t('to find something beautiful for You!') }}
    </div>
    <div>
      <ul v-if="productsInCart.length" class="list v-chat-scroll bg-cl-mistyrose m0 px40 products">
        <product v-for="product in productsInCart" :key="product.sku" :product="product" />
      </ul>
    </div>
    <div
      class="row py20 px40 middle-xs actions"
      v-if="productsInCart.length && !isCheckoutMode"
    >
      <div class="checkout">
        <button-full class="button"
                     :link="{ name: 'checkout' }"
                     @click.native="closeMicrocartExtend"
        >
          {{ $t('CHECKOUT') }}
        </button-full>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from '@vue-storefront/i18n'
import { isModuleRegistered } from '@vue-storefront/core/lib/module'

import Microcart from '@vue-storefront/core/compatibility/components/blocks/Microcart/Microcart'
import VueOfflineMixin from 'vue-offline/mixin'
import onEscapePress from '@vue-storefront/core/mixins/onEscapePress'
import InstantCheckout from 'src/modules/instant-checkout/components/InstantCheckout.vue'

import BaseInput from 'theme/components/core/blocks/Form/BaseInput'
import ClearCartButton from 'theme/components/core/blocks/Microcart/ClearCartButton'
import ButtonFull from 'theme/components/theme/ButtonFull'
import ButtonOutline from 'theme/components/theme/ButtonOutline'
import Product from 'theme/components/core/blocks/Microcart/Product'

export default {
  components: {
    Product,
    ButtonFull
  },
  mixins: [
    Microcart,
    VueOfflineMixin,
    onEscapePress
  ],
  data () {
    return {
      addCouponPressed: false,
      couponCode: '',
      componentLoaded: false,
      isInstantCheckoutRegistered: isModuleRegistered('instant-checkout')
    }
  },
  props: {
    isCheckoutMode: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.componentLoaded = true
    })
  },
  methods: {
    addDiscountCoupon () {
      this.addCouponPressed = true
    },
    clearCoupon () {
      this.removeCoupon()
      this.addCouponPressed = false
    },
    async setCoupon () {
      const couponApplied = await this.applyCoupon(this.couponCode)
      this.addCouponPressed = false
      this.couponCode = ''
      if (!couponApplied) {
        this.$store.dispatch('notification/spawnNotification', {
          type: 'warning',
          message: i18n.t("You've entered an incorrect coupon code. Please try again."),
          action1: { label: i18n.t('OK') }
        })
      }
    },
    closeMicrocartExtend () {
      this.closeMicrocart()
      this.$store.commit('ui/setSidebar', false)
      this.addCouponPressed = false
    },
    onEscapePress () {
      this.closeMicrocart()
    },
    clearCart () {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'warning',
        message: i18n.t('Are you sure you would like to remove all the items from the shopping cart?'),
        action1: { label: i18n.t('Cancel'), action: 'close' },
        action2: { label: i18n.t('OK'),
          action: async () => {
            await this.$store.dispatch('cart/clear', { recreateAndSyncCart: false }) // just clear the items without sync
            await this.$store.dispatch('cart/sync', { forceClientState: true })
          }
        },
        hasNoTimeout: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~theme/css/animations/transitions";

  .close {
    i {
      opacity: 0.6;
    }
    &:hover,
    &:focus {
      i {
        opacity: 1;
      }
    }
  }

  .mt0 {
    @media (max-width: 767px) {
      margin-top: 0;
    }
  }

  .clearcart {
    &-col {
      display: flex;
      align-self: center;
    }
  }

  .products {
    height:23rem;
    position: relative;
    overflow: hidden;
    overflow-y: scroll;
    @media (max-width: 767px) {
      padding: 30px 15px;
    }
  }

  .actions {
    @media (max-width: 767px) {
      padding: 0 15px;
    }
    .link {
      @media (max-width: 767px) {
        display: flex;
        justify-content: center;
        padding: 20px 70px;
        &.checkout {
          margin-top: 55px;
          padding: 0;
        }
      }
    }
  }

  .summary {
    @media (max-width: 767px) {
      padding:  0 15px;
      font-size: 12px;
    }
    display: inline-flex;
    letter-spacing: 1px;
    font-family: LATO, "EB GARAMOND";
  }

  .summary-heading {
    @media (max-width: 767px) {
      font-size: 18px;
    }
  }

  .total-price-label {
    @media (max-width: 767px) {
      font-size: small;

    }
  }

  .total-price-value {
    @media (max-width: 767px) {
      font-size: 10px;
    }
  }

  .delete-button {
    vertical-align: middle;
  }

  .coupon-wrapper {
    display: flex;

    .button-outline {
      text-transform: inherit;
      width: 50%;
    }

    .coupon-input {
      margin-right: 20px;
      width: 100%;
    }
    .button{
      border-radius: 20%;
      background-color: white;
    }
    .bag{
      font-weight: bold;
      font-size: large;
      padding-right: 30%;
    }
    .checkout{
      width: 300px;
    }
    .list{
      // width: 100%;
      // position: -webkit-sticky;
      // position: sticky;
      height: 8rem;
      position: relative;
      overflow: hidden;
    }
  }
  .toptext{
    letter-spacing: 1px;
    font-size: x-small;
    padding-top: 4px;
    font-family: LATO, "EB GARAMOND";

  }
  .microcart{
    font-family: LATO, "EB GARAMOND";
  }
  .totalprice{
    font-family: LATO, "EB GARAMOND";
    letter-spacing: 1px;
    font-size: medium;
    padding-left: 3px;
  }
</style>
