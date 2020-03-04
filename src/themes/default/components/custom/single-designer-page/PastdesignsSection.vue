<template>
  <div>
    <p class="text-center text-4xl font-bold my-8">
      Past Designs
    </p>
    <designs-grid :pastdesigns-list="pastDesignsArray" class="hidden lg:block" />
    <designs-gridtablet :pastdesigns-list="pastDesignsArray" class="hidden md:block lg:hidden" />
    <designs-gridmobile :pastdesigns-list="pastDesignsArray" class="md:hidden" />
  </div>
</template>

<script>
import DesignsGrid from 'theme/components/custom/single-designer-page/DesignsGrid'
import DesignsGridtablet from 'theme/components/custom/single-designer-page/DesignsGridtablet'
import DesignsGridmobile from 'theme/components/custom/single-designer-page/DesignsGridmobile'

export default {
  components: {
    DesignsGridmobile,
    DesignsGridtablet,
    DesignsGrid
  },
  data () {
    return {
      pastDesignsArray: [
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
        },
        {
          name: 'John Doe',
          origin: 'Cairo, Egypt',
          imageUrl: 'assets/esatta-images/designers/hp_el3.jpg'
        },
        {
          name: 'John Doe',
          origin: 'Cairo, Egypt',
          imageUrl: 'assets/esatta-images/designers/hp_el3.jpg'
        },
        {
          name: 'John Doe',
          origin: 'Cairo, Egypt',
          imageUrl: 'assets/esatta-images/designers/hp_el3.jpg'
        },
        {
          name: 'John Doe',
          origin: 'Cairo, Egypt',
          imageUrl: 'assets/esatta-images/designers/hp_el3.jpg'
        },
        {
          name: 'John Doe',
          origin: 'Cairo, Egypt',
          imageUrl: 'assets/esatta-images/designers/hp_el3.jpg'
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
