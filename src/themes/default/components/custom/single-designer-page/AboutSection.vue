<template>
  <div class="">
    <p class="w-40% text-center ml-25% cl-secondary ">
      BROOKLYN, USA
    </p>
    <div class="flex mt-20">
      <div class="w-1/5 text-right font-bold text-2xl">
        ABOUT
      </div>
      <div class="w-1/4 ml-16 text-sm cl-secondary">
        <p class="mb-8">
          Donec scelerisque magna lorem, id cursus nibh viverra sed.
          Proin orci velit, fermentum eu dictum vel, imperdiet ut tortor.
          Donec consectetur dolor at mauris rhoncus mollis. Interdum et
          malesuada fames ac ante ipsum primis in faucibus.
        </p>
        <p>
          Quam in elementum dictum, tellus ipsum scelerisque nibh, eu
          interdum enim magna eu mi. Nunc fermentum risus egestas interdum
          elementum. Curabitur ornare ante tortor, nec lacinia arcu tempor
          egestas. Cras eget placerat lectus. Nullam in massa tortor.
          Vivamus tristique lacus egestas.
        </p>
      </div>
      <div class="w-1/4 ml-10 text-sm cl-secondary">
        <p class="mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
          sodales sem, a ultricies massa laoreet eget. Mauris nibh mi, efficitur
          et sem rutrum, accumsan varius ex. Vestibulum a molestie erat.
        </p>
        <p>
          Nam sit amet lectus arcu. Quisque placerat mi a massa consectetur,
          vulputate ultricies nibh aliquam. Vivamus et turpis nec turpis placerat
          maximus. Proin a sapien eu mauris vehicula fringilla.
        </p>
      </div>
    </div>
    <div class="my-16 w-1/2 ml-20% text-center">
      <p class="social-links">
        FACEBOOK
      </p>
      <p class="social-links">
        INSTAGRAM
      </p>
      <p class="social-links">
        SNAPCHAT
      </p>
      <p class="social-links">
        TUMBLER
      </p>
      <p class="inline-block text-red w-19% hover:cursor-pointer">
        TWITTER
      </p>
    </div>
    <div class="my-video h-6/10 pl-10% pr-nav">
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
  border-color: #EC145B;
  border-style: none solid none none;
  color: #EC145B;
  cursor: pointer;
}
.my-video {
  background: linear-gradient(to bottom, #fff 80%, #f2f2f2 20%);
}
</style>
