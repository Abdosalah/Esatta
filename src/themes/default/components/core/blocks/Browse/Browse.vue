<template>
  <div id="category">
    <div>
      <img class="banner hidden lg:block" src="../../../../assets/images/designers/banner_desktop.png">
      <img class="banner hidden md:block lg:hidden" src="../../../../assets/images/designers/banner_tablet.png">
      <img class="banner md:hidden" src="../../../../assets/images/designers/banner_mobile.png">
      <RefineBar class="hidden md:block" />
      <smallRefineBar class="md:hidden" />
    </div>
    <browseProducts />
  </div>
</template>

<script>
import Category from '@vue-storefront/core/pages/Category'
import RefineBar from 'theme/components/core/blocks/Browse/RefineBar'
import smallRefineBar from 'theme/components/core/blocks/Browse/smallRefinebar'
import browseProducts from 'theme/components/core/blocks/Browse/browseProducts'

export default {
  components: {
    RefineBar,
    browseProducts,
    smallRefineBar
  },
  methods: {
    columnChange (column) {
      this.defaultColumn = column
    }
  },
  mixins: [Category]
}
</script>

<style lang="scss" scoped>

.banner {
  height: 30%;
  width: 100%;
}
</style>
