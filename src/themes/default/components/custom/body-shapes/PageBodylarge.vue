<template>
  <div class="">
    <div class="w-65% ml-10% text-center mb-16 mt-20">
      <p class="w-4/5 ml-10%">
        Donec scelerisque magna lorem, id cursus nibh viverra sed.
        Proin orci velit, fermentum eu dictum vel, imperdiet ut tortor.
        Donec consectetur dolor at mauris rhoncus mollis. Interdum et
        malesuada fames ac ante ipsum primis in faucibus.
      </p>
    </div>
    <div class="mr-18%">
      <div class="my-grid mx-2.5%">
        <div
          v-for="(designer, key) in designersList"
          :key="key"
          class="w-95% mx-2.5%"
        >
          <img :src="designer.imageUrl" class="">
          <div class="text-center">
            <p class="mt-4 mb-2 text-2xl">
              {{ designer.name }}
            </p>
            <p class="text-red mb-10">
              {{ designer.origin }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['designersList']
}
</script>

<style scoped>
.my-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  display: grid;
}
</style>
