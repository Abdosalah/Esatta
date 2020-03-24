<template>
  <div class="">
    <page-header />
    <page-bodylarge :designers-list="designersArray" class="hidden lg:block" />
    <howit-works class="" />
    <!-- <howit-workstablet class="" /> -->
  </div>
</template>

<script>
import PageHeader from 'theme/components/custom/body-shapes/PageHeader'
import PageBodylarge from 'theme/components/custom/body-shapes/PageBodylarge'
import HowitWorks from 'theme/components/custom/body-shapes/HowitWorks'
export default {
  components: {
    PageHeader,
    HowitWorks,
    PageBodylarge
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
