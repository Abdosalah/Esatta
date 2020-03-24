<template>
  <div class="">
    <p class="w-1/2 text-center ml-25% cl-secondary ">
      BROOKLYN, USA
    </p>
    <div class="mt-20 mx-15% text-left text-sm cl-secondary">
      <div class="flex">
        <p class="w-1/5 font-bold text-2xl text-black">
          ABOUT
        </p>
        <p class="w-4/5 mb-8">
          Donec scelerisque magna lorem, id cursus nibh viverra sed.
          Proin orci velit, fermentum eu dictum vel, imperdiet ut tortor.
          Donec consectetur dolor at mauris rhoncus mollis. Interdum et
          malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </div>
      <div>
        <p class="mb-8">
          Quam in elementum dictum, tellus ipsum scelerisque nibh, eu
          interdum enim magna eu mi. Nunc fermentum risus egestas interdum
          elementum. Curabitur ornare ante tortor, nec lacinia arcu tempor
          egestas. Cras eget placerat lectus. Nullam in massa tortor.
          Vivamus tristique lacus egestas.
        </p>
        <p class="mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
          sodales sem, a ultricies massa laoreet eget. Mauris nibh mi, efficitur
          et sem rutrum, accumsan varius ex. Vestibulum a molestie erat.
        </p>
        <p class="mb-8">
          Nam sit amet lectus arcu. Quisque placerat mi a massa consectetur,
          vulputate ultricies nibh aliquam. Vivamus et turpis nec turpis placerat
          maximus. Proin a sapien eu mauris vehicula fringilla.
        </p>
      </div>
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
    <div class="my-video h-45vh px-5%">
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
