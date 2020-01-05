<template>
  <div id="product" class="" itemscope itemtype="http://schema.org/Product">
    <section class="product-top-section bg-dark_grey lg:pr-nav">
      <div class="">
        <section class="flex">
          <!-- PRODUCT IMAGE -->
          <div class="w-60% h-screen image">
            <product-gallery
              :offline="image"
              :gallery="gallery"
              :configuration="configuration"
              :product="product"
            />
          </div>
          <div class="inline pt-56 mr-12 h-screen middle-div">
            <wishlist-button :product="product" />
          </div>
          <!-- PRODUCT DATA -->
          <div class="w-1/3 pt-56 data">
            <p class="text-2xl tracking-widest font-medium uppercase" data-testid="productName" itemprop="name">
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
                  class="text-lg font-semibold inline w-1/4"
                  v-if="!product.special_price && product.priceInclTax"
                >
                  {{ product.qty > 0 ? product.priceInclTax * product.qty : product.priceInclTax | price }}
                </div>
                <div class="inline text-xs w-3/4 flex">
                  <div class="w-1/2">
                    <img class="h-4 w-4 inline mr-2" src="../assets/esatta-images/product/clock.svg">
                    ENDS IN 16:18:25
                  </div>
                  <p class="inline w-1/2 text-right">
                    5 LEFT/300
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
                  <div class="variants-wrapper w-1/2" v-if="option.label == 'Color'">
                    <div class="variants-label pb-3" data-testid="variantsLabel" v-if="option.label == 'Color'">
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
                  <div class="w-1/2" v-if="product.type_id !== 'grouped' && product.type_id !== 'bundle' && option.label == 'Color'">
                    <base-input-number
                      :name="$t('QTY')"
                      v-model="product.qty"
                      :min="1"
                      @blur="$v.$touch()"
                      :validations="[
                        {
                          condition: $v.product.qty.$error && !$v.product.qty.minValue,
                          text: $t('Quantity must be above 0')
                        }
                      ]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-10 tracking-widest">
              <p class="text-xs inline">
                I WOULD LIKE A
              </p>
              <select class="text-xs inline bg-dark_grey">
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
                class="w-3/4 py-8 rounded-full"
              />
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
        </section>
      </div>
    </section>
    <section class="py-56 bg-cl-secondary flex lg:pr-nav">
      <div class="w-2/3 pl-10%">
        <img class="profile-img" src="../assets/esatta-images/my-profile/avatar.jpg">
        <div class="inline-block pl-8">
          <p class="text-xl">
            WHY THIS FITS YOU "ALEX"
          </p>
          <hr class="mt-4">
        </div>
        <div class="flex pt-20">
          <div class="w-1/2">
            <div class="relative">
              <img class="w-60% h-25rem absolute" src="../assets/esatta-images/product/body_shape.svg">
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
    <section class="bg-cl-secondary lg:pr-nav">
      <p class="text-center text-2xl font-medium pb-8">
        YOU MIGHT ALSO LIKE
      </p>
      <related-products
        type="upsell"
        class="bg-cl-secondary"
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
</style>
