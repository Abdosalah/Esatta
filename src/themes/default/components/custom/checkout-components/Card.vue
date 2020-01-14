<template>
  <div>
    <!-- CARD IMAGES AND CHECKBOX -->
    <div class="flex my-4">
      <img class="h-8 w-12 inline" src="assets/esatta-images/checkout/MasterCard.png">
      <img class="h-8 w-12 inline" src="assets/esatta-images/checkout/Amex.png">
      <img class="h-8 w-12 inline" src="assets/esatta-images/checkout/Visa.png">
      <img class="h-8 w-12 inline" src="assets/esatta-images/checkout/Maestro.png">
      <div class="text-right w-fill">
        <input class="inline h-auto" type="checkbox" name="vehicle1" value="Bike">
        <p class="inline">
          Save this card
        </p>
      </div>
    </div>
    <!-- REST OF THE FORM -->
    <div>
      <div>
        <input class="appearance-none block w-full py-1.75 px-4 mb-3" id="checkout-name" type="number" placeholder="Credit Card Number">
      </div>
      <div>
        <input class="appearance-none block w-full py-1.75 px-4 mb-3" id="checkout-name" type="text" placeholder="Name on Card">
      </div>
      <div class="flex">
        <input class="appearance-none block w-1/2 py-1.75 px-4 mb-3 mr-10%" id="checkout-name" type="number" step="30" placeholder="MM  /  YY">
        <input class="appearance-none block w-2/5 py-1.75 px-4 mb-3" id="checkout-name" type="text" placeholder="Jane Doe">
      </div>
      <div class="flex">
        <input class="appearance-none block w-3/4 py-1.75 px-4 mb-3" id="checkout-name" type="text" step="30" placeholder="Gift Voucher or Cupon">
        <button class="use-btn">
          USE
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.use-btn {
  display: block;
  width: 25%;
  height: 2rem;
  padding: 1rem 1rem 2.5rem;
  appearance: none;
  background-color: #E2E2E2;
  color: white;
}

button:focus {
  outline: none;
}

</style>
