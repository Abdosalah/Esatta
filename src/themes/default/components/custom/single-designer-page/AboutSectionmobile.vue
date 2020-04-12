<template>
  <div class="">
    <div class="mx-5% text-center">
      <p class="w-full font-bold text-4xl mt-4">
        Designer's Name
      </p>
      <p class="w-full cl-secondary mt-2">
        BROOKLYN, USA
      </p>
      <p class="w-full font-bold text-2xl text-black mt-8">
        ABOUT
      </p>
      <p class="w-full cl-secondary text-sm mt-2">
        Donec scelerisque magna lorem, id cursus nibh viverra sed.
        Proin orci velit, fermentum eu dictum vel, imperdiet ut tortor.
        Donec consectetur dolor at mauris rhoncus mollis. Interdum et
        malesuada fames ac ante ipsum primis in faucibus.
      </p>
    </div>
    <!-- Social links secion -->
    <div class="my-16 text-center">
      <p class="social-links">
        <img src="/assets/svg/social/facebook.svg" class="h-8 w-8 m-auto">
      </p>
      <p class="social-links">
        <img src="/assets/svg/social/instagram.svg" class="h-8 w-8 m-auto">
      </p>
      <p class="social-links">
        <img src="/assets/svg/social/pinterest.svg" class="h-8 w-8 m-auto">
      </p>
      <p class="social-links">
        <img src="/assets/svg/social/google.svg" class="h-8 w-8 m-auto">
      </p>
      <p class="inline-block text-red w-19% hover:cursor-pointer">
        <img src="/assets/svg/social/twitter.svg" class="h-8 w-8 m-auto">
      </p>
    </div>
    <!-- VIDEO SECTION -->
    <div class="my-video h-2/5 px-5%">
      <div class="h-full w-full bg-blue-300">
        HERE GOES THE VIDEO
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.social-links {
  display: inline-block;
  width: 19%;
  border-width: 1px;
  border-color: #C57974;
  border-style: none solid none none;
  cursor: pointer;
}
.my-video {
  background: linear-gradient(to bottom, #fff 80%, #f2f2f2 20%);
}
</style>
