<template>
  <div class="middle-section mr-2% lg:mr-20%">
    <div class="w-1/3 py-5% pl-4% hidden lg:block">
      <p class="text-3xl font-bold">
        How It Works
      </p>
      <p class="text-red py-8">
        Exclusive styles by independent <br>
        designers. Made for you
      </p>
      <button class="bg-black text-white py-4 px-16">
        LEARN MORE
      </button>
    </div>
    <div class="numbers-div">
      <p class="text-6xl font-black">
        1
      </p>
      <p class="py-4 text-xs font-bold">
        SHOP YOUR BODY
      </p>
      <p class="numbers-paragraph">
        All our garment are made for you <br>
        from scratch and designed by <br>
        independent designers
      </p>
    </div>
    <div class="numbers-div">
      <p class="text-6xl font-black">
        2
      </p>
      <p class="py-4 text-xs font-bold">
        HANDCRAFTED & INDEPENDENT
      </p>
      <p class="numbers-paragraph">
        All our garment are made for you <br>
        from scratch and designed by <br>
        independent designers
      </p>
    </div>
    <div class="numbers-div">
      <p class="text-6xl font-black">
        3
      </p>
      <p class="py-4 text-xs font-bold">
        OUR FIT GUARANTEE
      </p>
      <p class="numbers-paragraph">
        All our garment are made for you <br>
        from scratch and designed by <br>
        independent designers
      </p>
    </div>
  </div>
</template>

<style scoped>
.middle-section {
  margin-bottom: 5rem;
  margin-left: 2%;
  position: relative;
  height: 23rem;
  border: 0.5px solid gray;
}
.numbers-div {
  text-align: center;
  width: 25%;
  padding-top: 8%
}

.numbers-div:hover {
  padding-top: 4%;
}
.numbers-div:hover .numbers-paragraph  {
  display: block;
}

.numbers-paragraph {
  font-size: 0.875rem;
  display: none;
  color: #828282;
}
</style>
