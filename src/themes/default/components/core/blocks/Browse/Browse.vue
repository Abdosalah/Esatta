<template>
  <div id="category">
    <div>
      <img class="banner" src="../../../../assets/images/designers/banner_desktop.png">
      <RefineBar />
    </div>
    <browseProducts />
  </div>
</template>

<script>
import Category from '@vue-storefront/core/pages/Category'
import RefineBar from 'theme/components/core/blocks/Browse/RefineBar'
import browseProducts from 'theme/components/core/blocks/Browse/browseProducts'

export default {
  components: {
    RefineBar,
    browseProducts
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
