<template>
  <div class="bg-white md:bg-gray pt-8% md:pt-0">
    <!-- SHOP WOMEN -->
    <div class="md:p-4% lg:mr-nav">
      <div class="relative">
        <img class="h-25rem w-full p-0 md:pl-5% md:pr-10% lg:p-0 lg lg:w-2/3 object-cover float-right" src="assets/esatta-images/just-landed/just_landed.jpg">
        <div class="clearfix" />
        <router-link :to="localizedRoute('/c/women-20')" class="my-links ml-4% md:ml-0 w-11/12 md:w-auto bg-white md:-left-1.5% lg:left-5%" exact>
          <img class="h-5 w-5 float-left mr-5" src="assets/esatta-images/plus.svg">
          <p class=" text-red">
            BROWSE
          </p>
          <p class=" font-black text-5xl pl-5">
            Shop Women
          </p>
        </router-link>
      </div>
    </div>
    <!-- JUST LANDED -->
    <div class="mt-8% md:mt-0 md:p-4% lg:mr-nav">
      <div class="relative">
        <img class="h-25rem w-full p-0 md:pr-5% md:pl-10% lg:p-0 lg lg:w-2/3 object-cover" src="assets/esatta-images/just-landed/just_landed.jpg">
        <div class="my-links ml-4% w-11/12 md:w-auto bg-white md:-right-1.5% lg:right-5%">
          <img class="h-5 w-5 float-left mr-5" src="assets/esatta-images/plus.svg">
          <p class=" text-red">
            SHOP NEWEST PRODUCTS
          </p>
          <p class=" font-black text-5xl pl-5">
            Just Landed
          </p>
        </div>
      </div>
    </div>
    <!-- BUY FOR A FRIEND -->
    <div class="mt-8% md:mt-0 md:p-4% lg:mr-nav">
      <div class="relative">
        <img class="h-25rem w-full p-0 md:pl-5% md:pr-10% lg:p-0 lg lg:w-2/3 object-cover float-right" src="assets/esatta-images/just-landed/buy_for_friend.jpg">
        <div class="clearfix" />
        <div class="my-links ml-4% md:ml-0 w-11/12 md:w-auto bg-white md:-left-1.5% lg:left-5%">
          <img class="h-5 w-5 float-left mr-5" src="assets/esatta-images/plus.svg">
          <p class=" text-red">
            LINK WITH FACEBOOK
          </p>
          <p class=" font-black text-5xl pl-5">
            Buy for a Friend
          </p>
        </div>
      </div>
    </div>
    <!-- END -->
  </div>
</template>

<style lang="scss" scoped>
.my-links {
  position: absolute;
  padding: 5% 7%;
  top: 21%;
  transition: all 0.3s ease 0s;
}
.my-links:hover {
  transform: translateY(-7px);
  box-shadow: 0px 15px 20px rgba(0,0,0,0.2);
}
.my-links:hover::after {
  content: none;
}
</style>
