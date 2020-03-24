<template>
  <div class="">
    <page-header />
    <page-bodylarge :designers-list="designersArray" class="hidden lg:block" />
    <page-bodymedium :designers-list="designersArray" class="hidden md:block lg:hidden" />
    <page-bodysmall :designers-list="designersArray" class="md:hidden" />
    <howit-works class="hidden lg:flex" />
    <howit-workstablet class="hidden md:block lg:hidden" />
    <howit-worksmobile class="md:hidden" />
  </div>
</template>

<script>
import PageHeader from 'theme/components/custom/body-shapes/PageHeader'
import PageBodylarge from 'theme/components/custom/body-shapes/PageBodylarge'
import PageBodymedium from 'theme/components/custom/body-shapes/PageBodymedium'
import PageBodysmall from 'theme/components/custom/body-shapes/PageBodysmall'
import HowitWorks from 'theme/components/custom/body-shapes/HowitWorks'
import HowitWorkstablet from 'theme/components/custom/body-shapes/HowitWorkstablet'
import HowitWorksmobile from 'theme/components/custom/body-shapes/HowitWorksmobile'
export default {
  components: {
    PageHeader,
    HowitWorks,
    HowitWorkstablet,
    HowitWorksmobile,
    PageBodylarge,
    PageBodymedium,
    PageBodysmall
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
