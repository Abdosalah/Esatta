<template>
  <div
    class="product align-center w-100"
    v-observe-visibility="visibilityChanged"
  >
    <div
      class="product-image relative bg-cl-secondary"
      :class="[{ sale: labelsActive && isOnSale }, { new: labelsActive && isNew }]"
    >
      <router-link
        class="block no-underline product-link"
        :to="productLink"
        data-testid="productLink"
      >
        <product-image
          class="product-image__content"
          :image="thumbnailObj"
          :alt="product.name | htmlDecode"
          data-testid="productImage"
        />
      </router-link>
      <div class="product-corner">
        <wishlist-button class="p-3px" :product="product" img-dimensions="height_4" button-dimensions="" />
        <MeasureMeButton class="p-3px" :product="product" img-dimensions="height_4" button-dimensions="" />
        <ExpiryButton class="p-3px" :product="product" img-dimensions="height_4" button-dimensions="" />
        <p v-if="isNew === 'new'" class="pb-1 text-xs p-3px">
          NEW
        </p>
      </div>
    </div>

    <p class="designer" v-if="!onlyImage">
      {{ product.sku | htmlDecode }}
    </p>

    <p class="product-name" v-if="!onlyImage">
      {{ product.name | htmlDecode }}
    </p>
    <span
      class="price-original mr5 lh30 cl-secondary"
      v-if="product.special_price && parseFloat(product.originalPriceInclTax) > 0 && !onlyImage"
    >
      {{ product.originalPriceInclTax | price }}
    </span>

    <span
      class="price-special lh30 cl-accent weight-700"
      v-if="product.special_price && parseFloat(product.special_price) > 0 && !onlyImage"
    >
      {{ product.priceInclTax | price }}
    </span>

    <span
      class="price lh30 cl-secondary"
      v-if="!product.special_price && parseFloat(product.priceInclTax) > 0 && !onlyImage"
    >
      {{ product.priceInclTax | price }}
    </span>
    <span
      class="left lh30 cl-secondary"
    >
      {{ product.priceInclTax | price }} left
    </span>
  </div>
</template>

<script>
import rootStore from '@vue-storefront/core/store'
import { ProductTile } from '@vue-storefront/core/modules/catalog/components/ProductTile.ts'
import config from 'config'
import ProductImage from './ProductImage'
import MeasureMeButton from 'theme/components/core/blocks/Browse/MeasureMeButton'
import ExpiryButton from 'theme/components/core/blocks/Browse/ExpiryButton'

export default {
  mixins: [ProductTile],
  components: {
    'WishlistButton': () => import(/* webpackChunkName: "wishlist" */'theme/components/core/blocks/Wishlist/AddToWishlist'),
    ProductImage,
    MeasureMeButton,
    ExpiryButton
  },
  props: {
    labelsActive: {
      type: Boolean,
      default: true
    },
    onlyImage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    thumbnailObj () {
      return {
        src: this.thumbnail,
        loading: this.thumbnail
      }
    }
  },
  methods: {
    onProductPriceUpdate (product) {
      if (product.sku === this.product.sku) {
        Object.assign(this.product, product)
      }
    },
    visibilityChanged (isVisible, entry) {
      if (isVisible) {
        if (config.products.configurableChildrenStockPrefetchDynamic && rootStore.products.filterUnavailableVariants) {
          const skus = [this.product.sku]
          if (this.product.type_id === 'configurable' && this.product.configurable_children && this.product.configurable_children.length > 0) {
            for (const confChild of this.product.configurable_children) {
              const cachedItem = rootStore.state.stock.cache[confChild.id]
              if (typeof cachedItem === 'undefined' || cachedItem === null) {
                skus.push(confChild.sku)
              }
            }
            if (skus.length > 0) {
              rootStore.dispatch('stock/list', { skus: skus }) // store it in the cache
            }
          }
        }
      }
    }
  },
  beforeMount () {
    this.$bus.$on('product-after-priceupdate', this.onProductPriceUpdate)
  },
  beforeDestroy () {
    this.$bus.$off('product-after-priceupdate', this.onProductPriceUpdate)
  }
}
</script>

<style lang="scss" scoped>
@import '~theme/css/animations/transitions';
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';

$bg-secondary: color(secondary, $colors-background);
$border-secondary: color(secondary, $colors-border);
$color-white: color(white);

.product {
  @media (max-width: 767px) {
    padding-bottom: 10px;
  }
}

.price-original {
  text-decoration: line-through;
  font-size: x-small;
  color: #bcbec0;
}

%label {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: $border-secondary;
  text-transform: uppercase;
  color: $color-white;
  font-size: 12px;
}

.product-image{
  overflow: hidden;
  width:100%;
  height: 100%;
  max-height: 300px;

  &:hover{
    .product-image__content{
      opacity: 1;
      transform: scale(1.1);
    }
    &.sale::after,
    &.new::after{
      opacity: .8;
    }
  }
  &__content{

    padding-bottom: calc(400% / (257 / 100));
    mix-blend-mode: darken;
    opacity: .8;
    transform: scale(1);
    will-change: transform;
    transition: .3s opacity $motion-main, .3s transform $motion-main;
    @media (min-width: 768px) {
      padding-bottom: calc(208% / (168 / 100));
    }
    @media (min-width: 1200px) {
      padding-bottom: calc(400% / (276 / 100));
    }
  }

  &.sale{
    &::after {
      @extend %label;
      content: 'Sale';
    }
  }
  &.new{
    &::after {
      @extend %label;
      content: 'New';
    }
  }
}

.product-corner {
  border-bottom-left-radius: 10%;
  padding-left: 0.5rem;
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
  display: grid;
}

.my-fav-icon:hover {
  color: red;
}
.designer{
  font-size: xx-small;
  color: #bcbec0;
  padding: 3%;
  padding-top: 10%;
}
.product-name{
  font-size: x-small;
  font-weight: bold;
  }
.price{
  font-size: x-small;
  color: #bcbec0;
}
.left{
  font-size: x-small;
  color: #EC145B;
  padding-left: 3px;
}

</style>
