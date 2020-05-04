<template>
  <div>
    <div class="order-summary lg:flex lg:mr-11% pt-32 pb-10% lg:pl-10%">
      <div class="lg:w-1/2 text-center lg:text-left">
        <p class="text-5xl font-bold mb-10">
          Order Successful
        </p>
        <p class="mb-10 text-dark_green">
          Check your email
        </p>
        <p class="mb-12 mx-4 md:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br class="hidden lg:block">
          Pellentesque convallis eros <br class="hidden md:block lg:hidden"> ut est efficitur sodales.<br class="hidden lg:block">
          Fermentum dolor sed posuere congue. Pellentesque consequat.
        </p>
        <a href="/c/women-20" class="keep-browsing hidden lg:block">
          <button class="bg-black text-white px-12 py-6 tracking-widest">
            KEEP BROWSING
          </button>
        </a>
      </div>
      <div class="bg-white mb-5% p-5% mx-4 md:w-1/2 md:m-auto lg:mx-40">
        <p class="text-center mb-4 tracking-widest font-semibold">
          YOUR ORDER
        </p>
        <cart-summary />
      </div>
      <div class="text-center">
        <a href="/c/women-20" class="keep-browsing lg:hidden">
          <button class="bg-black text-white px-12 py-6 tracking-widest">
            KEEP BROWSING
          </button>
        </a>
      </div>
    </div>
    <div class="might-like hidden lg:block">
      <p class="text-5xl text-center">
        You might also like
      </p>
    </div>
  </div>
</template>

<script>
import CartSummary from 'theme/components/core/blocks/Checkout/CartSummary'
export default {
  components: {
    CartSummary
  }
}
</script>

<style lang="scss" scoped>
.order-summary {
  background-color: #f2f2f2;
}
.keep-browsing:hover::after {
  content: none;
  display: none;
}
.might-like {
  background: linear-gradient(#f2f2f2 50%, white 50%);
  margin-right: 11%;
  margin-bottom: 4rem;
}
</style>
