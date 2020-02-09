<template>
  <li class="list row flex-nowrap">
    <div class="block">
      <div class="flex">
        <div class="ml10 bg-cl-secondary">
          <product-image :image="image" />
        </div>
        <div class="col-xs flex pl35 start-xs between-sm details">
          <div>
            <div class="designer h6 cl-bg-tertiary pt5 sku" data-testid="productSku">
              {{ product.sku }}
            </div>
            <div class="names">
              <router-link
                class="h4 text-xs name"
                :to="localizedRoute({
                  name: product.type_id + '-product',
                  params: {
                    parentSku: product.parentSku ? product.parentSku : product.sku,
                    slug: product.slug,
                    childSku: product.sku
                  }
                })"
                data-testid="productLink"
                @click.native="$store.commit('ui/setMicrocart', false)"
              >
                {{ product.name | htmlDecode }}
              </router-link>
            </div>
            <div class="text-xs flex mr10 start-xs between-sm actions">
              <div class="prices" v-if="!displayItemDiscounts || !isOnline">
                <span class="h4 cl-error price-special" v-if="product.special_price">
                  {{ product.priceInclTax * product.qty | price }}&nbsp;
                </span>
                <span class="text-xs h6 price-original" v-if="product.special_price">
                  {{ product.originalPriceInclTax * product.qty | price }}
                </span>
                <span class="text-xs h4 price-regular" v-else data-testid="productPrice">
                  {{ (product.originalPriceInclTax ? product.originalPriceInclTax : product.priceInclTax) * product.qty | price }}
                </span>
              </div>
              <div class="prices" v-else-if="isOnline && product.totals">
                <span class="text-xs h4 cl-error price-special" v-if="product.totals.discount_amount">
                  {{ product.totals.row_total - product.totals.discount_amount + product.totals.tax_amount | price }}&nbsp;
                </span>
                <span class="text-xs h6 price-original" v-if="product.totals.discount_amount">
                  {{ product.totals.row_total_incl_tax | price }}
                </span>
                <span class="text-xs h4 price-regular" v-if="!product.totals.discount_amount">
                  {{ product.totals.row_total_incl_tax | price }}
                </span>
              </div>
              <div class="prices" v-else>
                <span class="text-xs h4 price-regular">
                  {{ product.regular_price * product.qty | price }}
                </span>
              </div>
            </div>
          </div>
          <div class="text-xs h5 pt5 cl-accent lh25 qty">
            <base-input-number
              class="qty"
              :name="$t('QTY')"
              :value="product.qty"
              @input="updateQuantity"
              :min="1"
            />
          </div>
          <div class="remove md:hidden" @click="removeItem">
            <remove-button />
          </div>
        </div>
        <div class="remove hidden md:block" @click="removeItem">
          <remove-button />
        </div>
      </div>
      <hr>
    </div>
  </li>
</template>

<script>
import config from 'config'
import Product from '@vue-storefront/core/compatibility/components/blocks/Microcart/Product'

import ProductImage from 'theme/components/core/ProductImage'
import RemoveButton from './MediumRemoveButton'
import BaseInputNumber from 'theme/components/core/blocks/Form/BaseInputNumber'
import { onlineHelper } from '@vue-storefront/core/helpers'

export default {
  components: {
    RemoveButton,
    BaseInputNumber,
    ProductImage
  },
  mixins: [Product],
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
  data () {
    return {
      displayItemDiscounts: config.cart.displayItemDiscounts
    }
  }
}
</script>

<style lang="scss" scoped>
  .image {
    // mix-blend-mode: multiply;
    vertical-align: top;
    width: 120px;
    height: 150px;
    @media (max-width: 767px) {
      width: 100px;
      height: 100%;
    }
  }

  .details {
    flex-direction: column;
    @media (max-width: 767px) {
      padding: 0 10px 0 20px;
    }
  }

  .name {
    padding-top: 5px;
    padding-bottom: 5px;
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }

  .options, .sku {
    @media (max-width: 767px) {
      font-size: 10px;
    }
  }

  .qty {
    @media (max-width: 767px) {
      font-size: 12px;
    }
  }

  .actions {
    flex-direction: column;
    @media (max-width: 767px) {
      padding: 0;
      font-size: 12px;
    }
    .links {
      @media (max-width: 767px) {
        margin-top: 20px;
      }
    }
  }

  .price-special {
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }

  .price-original {
    text-decoration: line-through;
  }

  .price-regular {
    @media (max-width: 767px) {
      font-size: 14px;
    }
  }

  input {
    width: 30px;
  }

  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .list{
    font-family: LATO, "EB GARAMOND";
    letter-spacing: 1px;
    font-weight: bold;
    background-color: white;
    padding-top: 15px;
    margin-top: 15px;
  }
  .designer{
    color: #C57974;
    font-size: xx-small;
  }
  .qty{
    font-size: xx-small;
  }
  hr {
    color: white;
    overflow: visible;
    margin-bottom: 2%;
    width: 86%;
    margin-left: 2%;
}
.img{
  position: absolute; /* Reposition logo from the natural layout */
  left: 90px;
  top: 95px;
  z-index: 2;
}
.remove{
    width: fit-content;
    margin-right: 5%;
}
.block{
    width: 100%;
}
.names{
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>
