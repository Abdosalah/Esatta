<template>
  <div class="">
    <p class="text-center text-5xl font-bold header_font mt-8 md:mt-0">
      Social Responsibility
    </p>
    <div class="text-center mb-20">
      <div class="mt-16">
        <p class="font-bold">
          1. MADE TO ORDER
        </p>
        <p class="cl-secondary text-sm mt-4">
          All our designs are made for you rather
          <br>than made in advance. This removes
          <br>waste in the manufacturing chain
        </p>
      </div>
      <div class="mt-16">
        <p class="font-bold">
          2. DIRECT DELIVERY
        </p>
        <p class="cl-secondary text-sm mt-4">
          All our designs are delivered direct to
          <br>you saving on air conditioned storgage
          <br>and other logistics
        </p>
      </div>
      <div class="mt-16">
        <p class="font-bold">
          3. REDUCED WASTE
        </p>
        <p class="cl-secondary text-sm mt-4">
          We do not carry stock, which means
          <br>we do not need to discount or
          <br>throw away surplus items.
        </p>
      </div>
    </div>
    <div class="md:relative bg-cl-secondary">
      <img class="w-full md:pb-20" src="assets/esatta-images/how-it-works/responsibility1.jpg">
      <div class="w-full text-center md:text-left md:absolute bottom-0 md:w-90% md:mx-5% bg-light_green md:pl-12 py-12">
        <order-divtablet class="hidden md:flex" />
        <order-divmobile class="md:hidden" />
        <p class="font-bold text-2xl text-center">
          =
        </p>
        <p class="font-bold text-2xl text-center">
          NO WASTAGE
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import OrderDivtablet from 'theme/components/custom/how-it-works-page/OrderDivtablet.vue'
import OrderDivmobile from 'theme/components/custom/how-it-works-page/OrderDivmobile.vue'

export default {
  components: {
    OrderDivtablet,
    OrderDivmobile
  }
}
</script>

<style scoped>
.header_font {
  font-family: 'EB Garamond', serif;
}
</style>
