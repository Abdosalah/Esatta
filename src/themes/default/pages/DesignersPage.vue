<template>
  <div class="">
    <designer-header />
    <div class="h-20 bg-cl-secondary mb-32">
      REFINE FILTERS
    </div>
    <designers-large :deigners-list="designersArray" class="hidden lg:block" />
    <designers-small :deigners-list="designersArray" class="lg:hidden" />
  </div>
</template>

<script>
import DesignerHeader from 'theme/components/custom/designer-page-components/DesignerHeader'
import DesignersLarge from 'theme/components/custom/designer-page-components/DesignersLarge'
import DesignersSmall from 'theme/components/custom/designer-page-components/DesignersSmall'
export default {
  components: {
    DesignerHeader,
    DesignersLarge,
    DesignersSmall
  },
  data () {
    return {
      designersArray: [
        {
          name: 'Clifford Smith',
          origin: 'Brooklyn, USA',
          imageUrl: 'assets/esatta-images/designers/hp_el1.jpg'
        },
        {
          name: 'Evon Wahab',
          origin: 'Paris, France',
          imageUrl: 'assets/esatta-images/designers/hp_el2.jpg'
        },
        {
          name: 'John Doe',
          origin: 'Cairo, Egypt',
          imageUrl: 'assets/esatta-images/designers/hp_el3.jpg'
        },
        {
          name: 'Clifford Smith',
          origin: 'Brooklyn, USA',
          imageUrl: 'assets/esatta-images/designers/hp_el1.jpg'
        },
        {
          name: 'Evon Wahab',
          origin: 'Paris, France',
          imageUrl: 'assets/esatta-images/designers/hp_el2.jpg'
        },
        {
          name: 'John Doe',
          origin: 'Cairo, Egypt',
          imageUrl: 'assets/esatta-images/designers/hp_el3.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
