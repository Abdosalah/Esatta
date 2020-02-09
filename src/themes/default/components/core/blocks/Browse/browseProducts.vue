<template>
  <div id="category">
    <div class="pb60 pt-16 lg:mr-nav">
      <div class="px10">
        <div v-if="isCategoryEmpty" class="hidden-xs">
          <h4 data-testid="noProductsInfo">
            {{ $t('No products found!') }}
          </h4>
          <p>{{ $t('Please change Your search criteria and try again. If still not finding anything relevant, please visit the Home page and try out some of our bestsellers!') }}</p>
        </div>
        <product-listing :columns="defaultColumn" :products="products" />
      </div>
    </div>
  </div>
</template>

<script>
import Category from '@vue-storefront/core/pages/Category'
import ProductListing from 'theme/components/core/ProductListing.vue'

export default {
  components: {
    ProductListing
  },
  data () {
    return {
      mobileFilters: false,
      defaultColumn: 4
    }
  },
  async asyncData ({ store, route }) { // this is for SSR purposes to prefetch data - and it's always executed before parent component methods
    await store.dispatch('category/mergeSearchOptions', { // this is just an example how can you modify the search criteria in child components
      sort: store.state.config.products.defaultSortBy.attribute + (store.state.config.products.defaultSortBy.order ? ':' + store.state.config.products.defaultSortBy.order : '')
      // searchProductQuery: builder().query('range', 'price', { 'gt': 0 }).andFilter('range', 'visibility', { 'gte': 2, 'lte': 4 }) // this is an example on how to modify the ES query, please take a look at the @vue-storefront/core/helpers for refernce on how to build valid query
    })
  },
  methods: {
    openFilters () {
      this.mobileFilters = true
    },
    closeFilters () {
      this.mobileFilters = false
    },
    notify () {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'error',
        message: this.$t('Please select the field which You like to sort by'),
        action1: { label: this.$t('OK') }
      })
    },
    columnChange (column) {
      this.defaultColumn = column
    }
  },
  mixins: [Category]
}
</script>

<style lang="scss" scoped>

  @media (max-width: 64em) {
    .products-list {
      max-width: 530px;
    }
  }

  @media (max-width: 770px) {
    .category-title {
      margin: 0;
      font-size: 36px;
      line-height: 40px;
    }

    .products-list {
      width: 100%;
      max-width: none;
    }
  }
</style>
<style lang="scss">
.product-image {
  max-height: unset !important;
}
.banner {
  height: 30%;
  width: 100%;
}
</style>
