<template>
  <div id="home">
    <head-image />
    <how-itworksmobile class="block md:hidden" />
    <how-itworks class="hidden md:block" />
    <just-landed />
    <designers />
    <blog-header />
    <blog-desktop :deigners-list="designersArray" class="hidden lg:block" />
    <blog-tablet :deigners-list="designersArray.slice(0,3)" class="hidden md:block lg:hidden" />
    <blog-mobile :deigners-list="designersArray.slice(0,2)" class="md:hidden" />

    <Onboard />
  </div>
</template>

<script>
// Esatta custom components
import HowItworks from 'theme/components/custom/home-components/HowItWorks.vue'
import HowItworksmobile from 'theme/components/custom/home-components/HowItworksmobile.vue'
import JustLanded from 'theme/components/custom/home-components/JustLanded.vue'
import Designers from 'theme/components/custom/home-components/Designers.vue'
import BlogHeader from 'theme/components/custom/home-components/BlogHeader.vue'
import BlogDesktop from 'theme/components/custom/home-components/BlogDesktop.vue'
import BlogTablet from 'theme/components/custom/home-components/BlogTablet.vue'
import BlogMobile from 'theme/components/custom/home-components/BlogMobile.vue'

// query constructor
import { prepareQuery } from '@vue-storefront/core/modules/catalog/queries/common'
import { isServer, onlineHelper } from '@vue-storefront/core/helpers'

// Core pages
import Home from '@vue-storefront/core/pages/Home'

// Theme core components
import ProductListing from 'theme/components/core/ProductListing'
import HeadImage from 'theme/components/core/blocks/MainSlider/HeadImage'

// Theme local components
import Onboard from 'theme/components/theme/blocks/Home/Onboard'
import TileLinks from 'theme/components/theme/blocks/TileLinks/TileLinks'
import { Logger } from '@vue-storefront/core/lib/logger'
import { mapGetters } from 'vuex'
import config from 'config'

export default {
  mixins: [Home],
  components: {
    HeadImage,
    HowItworks,
    BlogHeader,
    BlogDesktop,
    BlogTablet,
    BlogMobile,
    Designers,
    JustLanded,
    Onboard,
    ProductListing,
    HowItworksmobile,
    TileLinks
  },
  data () {
    return {
      designersArray: [
        {
          name: 'Clifford Smith',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem ligula, rhoncus vel sagittis at, tincidunt in quam.',
          imageUrl: 'assets/esatta-images/designers/hp_el1.jpg'
        },
        {
          name: 'Evon Wahab',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem ligula, rhoncus vel sagittis at, tincidunt in quam.',
          imageUrl: 'assets/esatta-images/designers/hp_el2.jpg'
        },
        {
          name: 'John Doe',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem ligula, rhoncus vel sagittis at, tincidunt in quam.',
          imageUrl: 'assets/esatta-images/designers/hp_el3.jpg'
        },
        {
          name: 'Clifford Smith',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem ligula, rhoncus vel sagittis at, tincidunt in quam.',
          imageUrl: 'assets/esatta-images/designers/hp_el1.jpg'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('user', ['isLoggedIn']),
    categories () {
      return this.getCategories
    },
    everythingNewCollection () {
      return this.$store.state.homepage.new_collection
    },
    coolBagsCollection () {
      return this.$store.state.homepage.coolbags_collection
    },
    isOnline () {
      return onlineHelper.isOnline
    }
  },
  created () {
    // Load personal and shipping details for Checkout page from IndexedDB
    this.$store.dispatch('checkout/load')
  },
  async beforeMount () {
    if (this.$store.state.__DEMO_MODE__) {
      const onboardingClaim = await this.$store.dispatch('claims/check', { claimCode: 'onboardingAccepted' })
      if (!onboardingClaim) { // show onboarding info
        this.$bus.$emit('modal-toggle', 'modal-onboard')
        this.$store.dispatch('claims/set', { claimCode: 'onboardingAccepted', value: true })
      }
    }
  },
  mounted () {
    if (!this.isLoggedIn && localStorage.getItem('redirect')) this.$bus.$emit('modal-show', 'modal-signup')
  },
  watch: {
    isLoggedIn () {
      const redirectObj = localStorage.getItem('redirect')
      if (redirectObj) this.$router.push(redirectObj)
      localStorage.removeItem('redirect')
    }
  },
  async asyncData ({ store, route }) { // this is for SSR purposes to prefetch data
    Logger.info('Calling asyncData in Home (theme)')()

    let newProductsQuery = prepareQuery({ queryConfig: 'newProducts' })
    let coolBagsQuery = prepareQuery({ queryConfig: 'coolBags' })

    const newProductsResult = await store.dispatch('product/list', {
      query: newProductsQuery,
      size: 8,
      sort: 'created_at:desc'
    })
    if (newProductsResult) {
      store.state.homepage.new_collection = newProductsResult.items
    }

    const coolBagsResult = await store.dispatch('product/list', {
      query: coolBagsQuery,
      size: 4,
      sort: 'created_at:desc',
      includeFields: config.entities.optimize ? (config.products.setFirstVarianAsDefaultInURL ? config.entities.productListWithChildren.includeFields : config.entities.productList.includeFields) : []
    })
    if (coolBagsResult) {
      store.state.homepage.coolbags_collection = coolBagsResult.items
    }

    await store.dispatch('promoted/updateHeadImage')
    await store.dispatch('promoted/updatePromotedOffers')
  },
  beforeRouteEnter (to, from, next) {
    if (!isServer && !from.name) { // Loading products to cache on SSR render
      next(vm => {
        let newProductsQuery = prepareQuery({ queryConfig: 'newProducts' })
        vm.$store.dispatch('product/list', {
          query: newProductsQuery,
          size: 8,
          sort: 'created_at:desc'
        })
      })
    } else {
      next()
    }
  }
}
</script>

<style lang="scss" scoped>
  .new-collection {
    @media (max-width: 767px) {
      padding-top: 0;
    }
  }
</style>
