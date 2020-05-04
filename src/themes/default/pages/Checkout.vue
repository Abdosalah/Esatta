<template>
  <div class=" bg-cl-secondary" id="checkout">
    <div class="">
      <div class="flex" v-show="!isThankYouPage">
        <div class="w-1/3 bg-pink-200 px-8%">
          <p class="text-3xl font-bold my-12 tracking-widest">
            BAG
          </p>
          <display-products />
        </div>
        <div class="w-2/3 flex">
          <div class="w-1/2 pl-13% pr-8%">
            <p class="text-3xl font-bold my-12 tracking-widest">
              DELIVERY
            </p>
            <form>
              <!-- Personal Delivery Details -->
              <div>
                <input class="appearance-none block w-full py-1.75 px-4 mb-3" id="checkout-name" type="text" placeholder="Jane Doe">
              </div>
              <div>
                <input class="appearance-none block w-full py-1.75 px-4 mb-3" id="checkout-address" type="text" placeholder="Unit, Apartment, Suite, Building, Floor, etc">
              </div>
              <div>
                <input class="appearance-none block w-full py-1.75 px-4 mb-3" id="checkout-street-address" type="text" placeholder="Street Address, PO Box">
              </div>
              <div>
                <input class="appearance-none block w-full py-1.75 px-4 mb-3" id="checkout-suburb" type="text" placeholder="Suburb">
              </div>
              <div class="flex">
                <input class="appearance-none block w-2/5 py-1.75 px-4 mb-3 mr-10%" id="checkout-suburb" type="number" placeholder="Post code">
                <div class="relative w-1/2 h-full">
                  <select class="country-select" id="grid-state">
                    <option>Australia</option>
                    <option>New Zealand</option>
                    <option>USA</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
              <!-- Shipping Radio Buttons -->
              <div class="bg-white py-2 mt-12 mb-3">
                <label class="block cursor-pointer flex">
                  <div class="w-11/12 pt-0.6 flex">
                    <p class="inline w-10/12 pl-4">
                      Standard Shipping AU
                    </p>
                    <p class="inline w-2/12">
                      $0.00
                    </p>
                  </div>
                  <input class="w-1/12" type="radio" name="delivery-option" value="">
                </label>
                <label class="block cursor-pointer flex">
                  <div class="w-11/12 pt-0.6 flex">
                    <p class="inline w-10/12 pl-4">
                      Express Shipping AU
                    </p>
                    <p class="inline w-2/12">
                      $10.00
                    </p>
                  </div>
                  <input class="w-1/12" type="radio" name="delivery-option" value="">
                </label>
              </div>
              <div class="flex">
                <input class="block w-full px-4 mb-3 h-24" type="text" name="delivery-notes" id="" placeholder="Delivery Notes">
              </div>
              <div>
                <input class="block w-full py-1.75 px-4 mb-3" id="checkout-email" type="email" placeholder="Email">
              </div>
              <div>
                <input class="block w-full py-1.75 px-4 mb-3" id="checkout-phone" type="tel" placeholder="Area Code  |  Mobile Number">
              </div>
            </form>
          </div>
          <!-- PAYMENT SECTION -->
          <div class="w-1/2 pr-nav">
            <p class="text-3xl font-bold my-12 tracking-widest">
              PAY
            </p>
            <div class="">
              <div class="flex">
                <button class="block bg-gray w-1/2 py-0.9 my-btn" @click="toggle('Card')">
                  Card
                </button>
                <button class="block bg-gray w-1/2 py-0.9 my-btn" @click="toggle('Paypal')">
                  Pay Pal
                </button>
              </div>
              <div class="">
                <component :is="component" />
              </div>
              <div class="mx-8%">
                <p class="text-center mt-4 mb-6 text-xl tracking-widest font-bold">
                  YOUR ORDER
                </p>
                <cart-summary />
              </div>
              <div class="mb-8 mx-8%">
                <input class="h-auto" type="radio" id="terms_and_conditions" name="drone" value="terms_and_conditions">
                <label for="terms_and_conditions">
                  <span class="inline text-sm text-grey_text">
                    I understand and agree to the
                    <p class="inline text-dark_green">
                      terms & conditions
                    </p>
                  </span>
                </label>
              </div>
              <div>
                <a href="/payment-success" class="payment-link">
                  <button class="bg-black text-white w-full mx-4% rounded-full text-xl h-20">
                    PAY
                    <p class="inline pl-15%">
                      &rarr;
                    </p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <thank-you-page v-show="isThankYouPage" />
  </div>
</template>

<script>
import Checkout from '@vue-storefront/core/pages/Checkout'

import PersonalDetails from 'theme/components/core/blocks/Checkout/PersonalDetails'
import Shipping from 'theme/components/core/blocks/Checkout/Shipping'
import Payment from 'theme/components/core/blocks/Checkout/Payment'
import OrderReview from 'theme/components/core/blocks/Checkout/OrderReview'
import CartSummary from 'theme/components/core/blocks/Checkout/CartSummary'
import ThankYouPage from 'theme/components/core/blocks/Checkout/ThankYouPage'
import Card from 'theme/components/custom/checkout-components/Card'
import Paypal from 'theme/components/custom/checkout-components/Paypal'
import DisplayProducts from 'theme/components/custom/checkout-components/DisplayProducts'

export default {
  components: {
    PersonalDetails,
    Shipping,
    Payment,
    OrderReview,
    CartSummary,
    ThankYouPage,
    Card,
    Paypal,
    DisplayProducts
  },
  mixins: [Checkout],
  data () {
    return {
      component: Card
    }
  },
  methods: {
    toggle (param) {
      switch (param) {
        case 'Card' :
          this.component = Card
          break;
        case 'Paypal' :
          this.component = Paypal
          break;
      }
    },
    notifyEmptyCart () {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'warning',
        message: this.$t('Shopping cart is empty. Please add some products before entering Checkout'),
        action1: { label: this.$t('OK') }
      })
    },
    notifyOutStock (chp) {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'error',
        message: chp.name + this.$t(' is out of the stock!'),
        action1: { label: this.$t('OK') }
      })
    },
    notifyNotAvailable () {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'error',
        message: this.$t('Some of the ordered products are not available!'),
        action1: { label: this.$t('OK') }
      })
    },
    notifyStockCheck () {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'warning',
        message: this.$t('Stock check in progress, please wait while available stock quantities are checked'),
        action1: { label: this.$t('OK') }
      })
    },
    notifyNoConnection () {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'warning',
        message: this.$t('There is no Internet connection. You can still place your order. We will notify you if any of ordered products is not available because we cannot check it right now.'),
        action1: { label: this.$t('OK') }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.country-select {
  display: block;
  width: 100%;
  background-color: white;
  height: inherit;
  line-height: 1.25;
  appearance: none;
  padding: 1.1rem 1rem;
  margin-bottom: 0.75rem;
}
.my-btn:focus {
  background-color: white;
}
button:focus {
  outline: none;
}
.payment-link:hover::after {
  content: none;
  display: none;
}
nav {
  display: none;
}
</style>
