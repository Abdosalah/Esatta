<template>
  <div class="bg-white md:bg-gray pt-8% md:pt-0 body_font">
    <!-- SHOP WOMEN -->
    <div class="md:p-4% lg:pb-0 lg:mr-nav">
      <div class="relative">
        <img class="h-19rem w-full p-0 md:pl-5% md:pr-10% lg:p-0 lg lg:w-3/4 object-cover lg:ml-10%" src="assets/esatta-images/just-landed/just_landed.jpg">
        <div class="clearfix" />
        <router-link :to="localizedRoute('/c/women-20')" class="my-links ml-4% md:ml-0 w-85% md:w-auto bg-white md:-left-1.5% lg:left-5%" exact>
          <img class="h-5 w-5 float-left mr-2" src="assets/esatta-images/plus.svg">
          <p class="text-dark_green font-bold">
            BROWSE
          </p>
          <p class=" font-black text-heading pr-5">
            Shop Women
          </p>
        </router-link>
      </div>
    </div>
    <!-- JUST LANDED -->
    <div class="mt-8% md:mt-0 md:p-4% lg:mr-nav lg:pb-0">
      <div class="relative">
        <img class="h-19rem w-full p-0 md:pr-5% md:pl-10% lg:p-0 lg lg:w-3/4 object-cover lg:ml-15%" src="assets/esatta-images/just-landed/just_landed.jpg">
        <div class="my-links ml-11% w-85% md:w-auto bg-white md:-right-1.5% lg:right-5%">
          <img class="h-5 w-5 float-left mr-2" src="assets/esatta-images/plus.svg">
          <p class="text-dark_green font-bold">
            SHOP NEWEST PRODUCTS
          </p>
          <p class=" font-black text-heading pr-5">
            Just Landed
          </p>
        </div>
      </div>
    </div>
    <!-- BUY FOR A FRIEND -->
    <div class="mt-8% md:mt-0 md:p-4% lg:mr-nav ">
      <div class="relative">
        <img class="h-19rem w-full p-0 md:pl-5% md:pr-10% lg:p-0 lg lg:w-3/4 object-cover lg:ml-10%" src="assets/esatta-images/just-landed/buy_for_friend.jpg">
        <div class="clearfix" />
        <div class="my-links ml-4% md:ml-0 w-85% md:w-auto bg-white md:-left-1.5% lg:left-5%">
          <img class="h-5 w-5 float-left mr-2" src="assets/esatta-images/plus.svg">
          <p class="text-dark_green font-bold">
            LINK WITH FACEBOOK
          </p>
          <p class=" font-black text-heading">
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
  padding: 2.5rem 5%;
  top: 12%;
  transition: all 0.3s ease 0s;
}
.my-links:hover {
  transform: translateY(-7px);
  box-shadow: 0px 15px 20px rgba(0,0,0,0.2);
}
.my-links:hover::after {
  content: none;
}

.body_font {
  font-family: 'Lato', sans-serif;
}
</style>
