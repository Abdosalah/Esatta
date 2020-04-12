<template>
  <div class="md:relative h-screen">
    <img class="md:absolute h-15vh md:h-screen w-full" src="assets/esatta-images/privacy_policy.jpg">
    <div class="md:absolute top-0 md:mt-24 ml-8% bg-white w-84% lg:w-70%">
      <div class="w-full text-center">
        <p class="text-5xl font-bold mt-8 md:mt-16">
          Privacy Policy
        </p>
      </div>
      <div class="w-full text-center">
        <p class="text-sm md:mx-15% lg:mx-23% cl-secondary my-8 md:my-24">
          Below is an array of commonly asked shipping questions, you can also see
          all shipping costs and delivery countries on this page. Scroll down for
          Returns, Exchange & Refund information too.
        </p>
      </div>
      <statement-desktop class="hidden lg:block" />
      <statement-tablet class="lg:hidden" />
    </div>
  </div>
</template>

<script>
import StatementDesktop from 'theme/components/custom/privacy-components/StatementDesktop'
import StatementTablet from 'theme/components/custom/privacy-components/StatementTablet'

export default {
  components: {
    StatementDesktop,
    StatementTablet
  }
}
</script>
<style>
footer {
  display: none;
}
</style>
