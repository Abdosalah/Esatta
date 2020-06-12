<template>
  <div id="product" class="" itemscope itemtype="http://schema.org/Product">
    <section class="product-top-section bg-white lg:bg-secondary_grey lg:pr-nav">
      <div class="relative">
        <section class="block lg:flex">
          <!-- PRODUCT IMAGE -->
          <div class="w-full h-88vh lg:h-screen image lg:w-60%">
            <!-- <product-gallery
              :offline="image"
              :gallery="gallery"
              :configuration="configuration"
              :product="product"
            /> -->
            <div class="h-full bg-cl-secondary">
              <product-carousel class="hidden lg:block" :gallery="gallery" />
              <product-carouseltablet class="lg:hidden" :gallery="gallery" />
            </div>
          </div>
          <!-- PRODUCT DATA -->
          <div class="w-full data text-center px-10% pb-8 pt-8 lg:pb-0 lg:w-40% lg:pr-0 lg:pl-4vw lg:pt-56 lg:text-left">
            <p class="text-2xl tracking-widest font-medium" data-testid="productName" itemprop="name">
              {{ product.name | htmlDecode }}
              <web-share :title="product.name | htmlDecode" text="Check this product!" class="web-share" />
            </p>
            <div class="cl-secondary text-sm mt-2" itemprop="sku" :content="product.sku">
              Pel Guthrie - Auckland, NZ
              <!-- {{ $t('SKU') }}: {{ product.sku }} -->
            </div>
            <div class="cl-secondary text-sm mb-8" itemprop="sku" :content="product.sku">
              SPRING SUMMER 2017
              <!-- {{ $t('SKU') }}: {{ product.sku }} -->
            </div>
            <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
              <meta itemprop="priceCurrency" :content="currentStore.i18n.currencyCode">
              <meta itemprop="price" :content="parseFloat(product.priceInclTax).toFixed(2)">
              <meta itemprop="availability" :content="structuredData.availability">
              <meta itemprop="url" :content="product.url_path">
              <hr class="cl-secondary">
              <!-- PRICE, TIMER & QTY LEFT SECTION -->
              <div
                class="pt-2 inline-block w-full flex"
                v-if="product.type_id !== 'grouped'"
              >
                <div
                  class="h3 cl-secondary inline w-1/4"
                  v-if="product.special_price && product.priceInclTax && product.originalPriceInclTax"
                >
                  <span class="text-xl font-semibold">
                    {{ product.priceInclTax * product.qty | price }}
                  </span>&nbsp;
                  <span class="price-original text-xl font-semibold">
                    {{ product.originalPriceInclTax * product.qty | price }}
                  </span>
                </div>
                <div
                  class="font-semibold inline w-1/4 text-left"
                  v-if="!product.special_price && product.priceInclTax"
                >
                  {{ product.qty > 0 ? product.priceInclTax * product.qty : product.priceInclTax | price }}
                </div>
                <div class="inline text-xs w-3/4 flex">
                  <div class="w-1/2 pt-0.2">
                    <img class="h-4 w-4 inline mr-2" src="../assets/esatta-images/product/clock.svg">
                    ENDS IN 16:18:25
                  </div>
                  <p class="inline w-1/2 text-right pt-0.2">
                    5 LEFT / 300
                  </p>
                </div>
              </div>
              <hr class="cl-secondary mt-2 mb-12">

              <!-- COLOURS AND QUANTITY SECTION -->
              <div
                class="cl-primary variants"
                v-if="product.type_id =='configurable' && !loading"
              >
                <div class="error" v-if="product.errors && Object.keys(product.errors).length > 0">
                  {{ product.errors | formatProductMessages }}
                </div>
                <div
                  class="h5 flex"
                  v-for="(option, index) in product.configurable_options"
                  v-if="(!product.errors || Object.keys(product.errors).length === 0) && Object.keys(configuration).length > 0"
                  :key="index"
                >
                  <div class="w-1/2 text-left" v-if="product.type_id !== 'grouped' && product.type_id !== 'bundle' && option.label == 'Color'">
                    <!-- This p tag is here only to align it with the color selector -->
                    <p class="opacity-0 pb-1">
                      COLOURS
                    </p>
                    <base-input-number
                      :name="$t('QTY')"
                      v-model="product.qty"
                      :min="1"
                      @blur="$v.$touch()"
                      class="mr-50%"
                      :validations="[
                        {
                          condition: $v.product.qty.$error && !$v.product.qty.minValue,
                          text: $t('Quantity must be above 0')
                        }
                      ]"
                    />
                  </div>
                  <div class="variants-wrapper w-full text-right" v-if="option.label == 'Color'">
                    <div class="variants-label pb-3 pr-17%" data-testid="variantsLabel" v-if="option.label == 'Color'">
                      COLOURS
                    </div>
                    <div>
                      <color-selector
                        v-for="(c, i) in options[option.attribute_code]"
                        v-if="isOptionAvailable(c)"
                        :key="i"
                        :id="c.id"
                        :label="c.label"
                        context="product"
                        :code="option.attribute_code"
                        :class="{ active: c.id == configuration[option.attribute_code].id }"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-10 tracking-widest">
              <p class="text-xs inline">
                I WOULD LIKE A
              </p>
              <select class="text-xs inline bg-white lg:bg-secondary_grey">
                <option value="1">
                  STANDARD
                </option>
                <option value="2">
                  SLIM
                </option>
                <option value="3">
                  SOMETHING
                </option>
              </select>
              <p class="text-xs inline">
                FIT
              </p>
            </div>
            <!-- BAG IT SECTION -->
            <div class="mt-12">
              <add-to-cart
                :product="product"
                :disabled="$v.product.qty.$error && !$v.product.qty.minValue"
                class="hidden lg:block m-0 w-3/4 py-8 rounded-full cursor-pointer bg-white disable-hover"
              />
              <add-to-cart
                :product="product"
                :disabled="$v.product.qty.$error && !$v.product.qty.minValue"
                class="lg:hidden w-1/2 m-auto py-8 rounded-full cursor-pointer bg-cl-secondary disable-hover-tablet"
              />
              <div class="text-center mt-12">
                <p class="social-links">
                  <img src="/assets/svg/social/instagram.svg" class="h-6 w-6 m-auto">
                </p>
                <p class="social-links">
                  <img src="/assets/svg/social/facebook.svg" class="h-6 w-6 m-auto">
                </p>
                <p class="social-links">
                  <img src="/assets/svg/social/pinterest.svg" class="h-6 w-6 m-auto">
                </p>
                <p class="social-links">
                  <img src="/assets/svg/social/twitter.svg" class="h-6 w-6 m-auto">
                </p>
                <p class="inline-block text-dark_green w-19% hover:cursor-pointer">
                  <img src="/assets/svg/social/snapchat.svg" class="h-6 w-6 m-auto">
                </p>
              </div>
            </div>
            <!-- <div class="">
              <div class="product__add-to-compare">
                <button
                  @click="isOnCompare ? removeFromList('compare') : addToList('compare')"
                  class="
                    p0 inline-flex middle-xs bg-cl-transparent brdr-none
                    action h5 pointer cl-secondary
                  "
                  type="button"
                  data-testid="addToCompare"
                >
                  <i class="pr5 material-icons">compare</i>
                  <template v-if="!isOnCompare">
                    {{ $t('Add to compare') }}
                  </template>
                  <template v-else>
                    {{ $t('Remove from compare') }}
                  </template>
                </button>
              </div>
            </div> -->
          </div>
          <wishlist-button
            class="absolute bg-secondary_grey lg:bg-white top-77vh left-44% md:left-46% lg:left-55.75% lg:top-30%"
            :product="product"
            img-dimensions="height_8"
            button-dimensions="big"
          />
        </section>
      </div>
    </section>
    <section class="lg:hidden">
      <div class="h-screen">
        <div class="pt-12 w-full h-full cl-secondary">
          <p class="px-20% font-bold">
            Material and Fabrics
          </p>
          <hr class="mx-20% mt-4 mb-10">
          <!-- <p class="px-20% mb-4">
            - 100% Wool <br>
            - Already Warn Look
          </p> -->
          <p class="px-20% font-bold">
            Model Wears
          </p>
          <hr class="mx-20% mt-4 mb-10">
          <p class="px-20% font-bold">
            Care instrusction
          </p>
          <hr class="mx-20% mt-4 mb-10">
          <p class="px-20% font-bold">
            Shipping
          </p>
          <hr class="mx-20% mt-4 mb-10">
          <p class="px-20% font-bold">
            Returns
          </p>
          <p class="px-20% my-4">
            - 100% Wool <br>
            - Already Warn Look
          </p>
          <hr class="mx-20% mt-4 mb-10">
        </div>
      </div>
      <section class="bg-cl-secondary flex w-full">
        <div class="pt-24 top-0 w-full h-full cl-secondary">
          <img class="profile-img-tablet" src="../assets/esatta-images/my-profile/avatar.jpg">
          <div class="inline-block pl-8">
            <p class="text-xl">
              WHY THIS FITS YOU ALEX
            </p>
            <hr class="mt-4">
          </div>
          <div class="flex pt-20 px-10%">
            <div class="w-1/2">
              <div class="relative">
                <img class="w-60% h-25rem" src="../assets/esatta-images/product/body_shape.svg">
                <img class="w-60% h-25rem py-8" src="../assets/esatta-images/product/shape_shape.png">
              </div>
            </div>
            <div class="w-1/2 text-left text-sm pt-8">
              <div>
                <p class="text-lg font-bold tracking-widest">
                  HOURGLASS
                </p>
                <p class="pt-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
                  Donec mauris ex, fermentum id egestas eget, fermentum eu mi.<br>
                  Vivamus molestie orci sit amet venenatis congue.
                </p>
                <p class="pt-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
                  Donec mauris ex, fermentum id egestas eget, fermentum eu mi.<br>
                  Vivamus molestie orci sit amet venenatis congue.
                </p>
                <p class="pt-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
                  Donec mauris ex, fermentum id egestas eget, fermentum eu mi.<br>
                  Vivamus molestie orci sit amet venenatis congue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <section class="lg:pr-nav">
      <p class="text-center text-lg font-medium py-12 cl-secondary">
        You Might Also Like
      </p>
      <related-products
        type="upsell"
        class="pl-8 md:pl-0 lg:pl-8 pr-8 lg:pr-0"
      />
    </section>
  </div>
</template>

<script>
import { minValue } from 'vuelidate/lib/validators'
import Product from '@vue-storefront/core/pages/Product'
import VueOfflineMixin from 'vue-offline/mixin'
import RelatedProducts from 'theme/components/core/blocks/Product/Related.vue'
import Reviews from 'theme/components/core/blocks/Reviews/Reviews.vue'
import AddToCart from 'theme/components/core/AddToCart.vue'
import GenericSelector from 'theme/components/core/GenericSelector'
import ColorSelector from 'theme/components/core/ColorSelector.vue'
import SizeSelector from 'theme/components/core/SizeSelector.vue'
import Breadcrumbs from 'theme/components/core/Breadcrumbs.vue'
import ProductAttribute from 'theme/components/core/ProductAttribute.vue'
import ProductLinks from 'theme/components/core/ProductLinks.vue'
import ProductCustomOptions from 'theme/components/core/ProductCustomOptions.vue'
import ProductBundleOptions from 'theme/components/core/ProductBundleOptions.vue'
import ProductGallery from 'theme/components/core/ProductGallery'
import PromotedOffers from 'theme/components/theme/blocks/PromotedOffers/PromotedOffers'
import focusClean from 'theme/components/theme/directives/focusClean'
import WebShare from '@vue-storefront/core/modules/social-share/components/WebShare'
import BaseInputNumber from 'theme/components/core/blocks/Form/BaseInputNumber'
import SizeGuide from 'theme/components/core/blocks/Product/SizeGuide'
import ProductCarousel from 'theme/components/custom/product-components/ProductCarousel'
import ProductCarouseltablet from 'theme/components/custom/product-components/ProductCarouseltablet'

export default {
  components: {
    'WishlistButton': () => import(/* webpackChunkName: "wishlist" */'theme/components/core/blocks/Wishlist/AddToWishlist'),
    AddToCart,
    Breadcrumbs,
    ColorSelector,
    GenericSelector,
    ProductAttribute,
    ProductBundleOptions,
    ProductCustomOptions,
    ProductGallery,
    ProductLinks,
    PromotedOffers,
    RelatedProducts,
    Reviews,
    SizeSelector,
    WebShare,
    BaseInputNumber,
    ProductCarousel,
    ProductCarouseltablet,
    SizeGuide
  },
  mixins: [Product, VueOfflineMixin],
  data () {
    return {
      detailsOpen: false
    }
  },
  directives: { focusClean },
  computed: {
    structuredData () {
      return {
        availability: (this.product.stock.is_in_stock) ? 'InStock' : 'OutOfStock'
      }
    }
  },
  methods: {
    showDetails (event) {
      this.detailsOpen = true
      event.target.classList.add('hidden')
    },
    notifyOutStock () {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'error',
        message: this.$t('The product is out of stock and cannot be added to the cart!'),
        action1: { label: this.$t('OK') }
      })
    },
    notifyWrongAttributes () {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'warning',
        message: this.$t('No such configuration for the product. Please do choose another combination of attributes.'),
        action1: { label: this.$t('OK') }
      })
    },
    openSizeGuide () {
      this.$bus.$emit('modal-show', 'modal-sizeguide')
    }
  },
  validations: {
    product: {
      qty: {
        minValue: minValue(1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$color-primary: color(primary);
$color-tertiary: color(tertiary);
$color-secondary: color(secondary);
$color-white: color(white);
$bg-secondary: color(secondary, $colors-background);

select:focus {
  outline: none;
}

select {
  border-top: 1px solid #E2E2E2;
  border-bottom: 1px solid #E2E2E2;
}

.product {
  &__add-to-compare {
    display: none;
    @media (min-width: 767px) {
      display: block;
    }
  }
}

.breadcrumbs {
  @media (max-width: 767px) {
    margin: 15px 0;
    padding: 15px 0 0 15px;
  }
}

.error {
  color: red;
  font-weight: bold;
  padding-bottom: 15px;
}
.data {
  @media (max-width: 767px) {
    border-bottom: 1px solid $bg-secondary;
  }
}

.image {
  @media (max-width: 1023px) {
    margin-bottom: 20px;
  }
}

.product-name {
  @media (max-width: 767px) {
    font-size: 36px;
  }
}

.variants-label {
  @media (max-width: 767px) {
    font-size: 14px;
  }
}

.variants-wrapper {
  @media (max-width: 767px) {
    padding-bottom: 30px;
  }

 .sizes {
    @media (max-width: 767px) {
      width: 100%;
    }
  }

  .size-guide {
    height: 40px;
    @media (max-width: 767px) {
      width: 100%;
      margin-left: 0;
    }
  }
}

.product-top-section {
  @media (max-width: 767px) {
    padding: 0;
    background-color: $color-white;
  }
}

// .add-to-buttons {
//   @media (max-width: 767px) {
//     padding-top: 30px;
//     margin-bottom: 40px;
//   }
// }

.details {
  @media (max-width: 767px) {
    padding: 50px 15px 15px;
  }
}

.details-title {
  padding: 0 8px;

  @media (max-width: 767px) {
    font-size: 18px;
    margin: 0;
  }
}

.details-wrapper {
  @media (max-width: 767px) {
    position: relative;
    max-height: 140px;
    overflow: hidden;
    transition: all 0.3s ease;
    font-size: 14px;
  }

  &--open {
    max-height: none;
  }
}

.details-overlay {
  @media (max-width: 767px) {
    position: absolute;
    height: 75%;
    bottom: 0;
    left: 0;
    width: 100%;
    margin: 0;
    cursor: pointer;
    background: linear-gradient(rgba($color-white, 0), rgba($color-white, 1));
    &.hidden {
      display: none;
    }
  }
}

.price-original {
  text-decoration: line-through;
}

.action {
  &:hover {
    color: $color-tertiary;
  }
}

.attributes {
  list-style-type: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.product-image {
  mix-blend-mode: multiply;
  width: 460px;
}

.web-share {
  float: right;
}

.middle-div {
  background: linear-gradient(to right,
     #f2f2f2 50%, #a9a9a9 50% );
}

.profile-img {
  height: 5rem;
  width: 5rem;
  margin-left: 2.5rem;
  border-radius: 50%;
  display: inline-block;
}

.disable-hover:hover {
  cursor: pointer;
  background-color: white;
}

.disable-hover-tablet:hover {
  cursor: pointer;
  background-color: #f2f2f2;
}

.social-links {
  display: inline-block;
  width: 18%;
  border-width: 1px;
  border-color: #536C4E;
  border-style: none solid none none;
  cursor: pointer;
}
</style>
