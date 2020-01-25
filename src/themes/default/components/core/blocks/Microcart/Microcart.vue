<template>
  <div class="microcart">
    <!-- <div class="row bg-cl-pink px40 actions">
      <div class="col-xs end-xs">
        <button
          type="button"
          class="p0 brdr-none bg-cl-transparent close"
          @click="closeMicrocartExtend"
          data-testid="closeMicrocart"
        >
          <i class="material-icons py20 cl-accent">
            close
          </i>
        </button>
      </div>
    </div> -->

    <div v-if="productsInCart.length" class="summary d-inline-flex align-center pt30 pb20 px40 cl-accent serif">
      <h7 class="pr-20 text-3xl font-bold">
        BAG
      </h7>
      <div class="pl-20 pt-3 weight-700 b align-center middle-xs" v-for="(segment, index) in totals" :key="index" v-if="segment.code === 'grand_total'">
        <!-- <div class="col-xs h4 total-price-label">
          {{ segment.title }}
        </div> -->
        <div class=" align-center total-price-value">
          {{ segment.value | price }}
        </div>
      </div>
    </div>

    <!-- <div class="row middle-xs bg-cl-pink top-sm px40 actions">
      <div class="col-xs-12 col-sm">
        <h2
          v-if="productsInCart.length"
          class="cl-accent mt35 mb35"
        >
          {{ $t('Shopping cart') }}
        </h2>
      </div>
      <div class="col-xs-12 col-sm mt35 mb35 mt0 end-sm clearcart-col">
        <clear-cart-button
          v-if="productsInCart.length"
          @click.native="clearCart"
        />
      </div>
    </div> -->

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
    <ul v-if="productsInCart.length" class="bg-cl-mistyrose m0 px40 products">
      <product v-for="product in productsInCart" :key="product.sku" :product="product" />
    </ul>

    <div
      class="row py20 px40 middle-xs actions"
      v-if="productsInCart.length && !isCheckoutMode"
    >
      <!-- <div class="col-xs-12 col-sm first-sm">
        <router-link :to="localizedRoute('/')" class="no-underline cl-secondary link">
          <span @click="closeMicrocartExtend">
            {{ $t('Return to shopping') }}
          </span>
        </router-link>
      </div> -->
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
    ClearCartButton,
    ButtonFull,
    ButtonOutline,
    BaseInput,
    InstantCheckout
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
  }
</style>
