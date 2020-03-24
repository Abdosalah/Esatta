<template>
  <div class="">
    <div class="text-center mb-16">
      <p class="mx-4">
        Donec scelerisque magna lorem, id cursus nibh viverra sed.
        Proin orci velit, fermentum eu dictum vel, imperdiet ut tortor.
        Donec consectetur dolor at mauris rhoncus mollis. Interdum et
        malesuada fames ac ante ipsum primis in faucibus.
      </p>
    </div>
    <div class="">
      <div class="my-grid mx-2.5%">
        <div
          v-for="(designer, key) in designersList"
          :key="key"
          class="w-95% mx-2.5% mb-8"
        >
          <img :src="designer.imageUrl" class="">
          <div class="text-center">
            <p class="mt-4 mb-2 text-2xl">
              {{ designer.name }}
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
  grid-template-columns: repeat(2, minmax(0, 1fr));
  display: grid;
}
</style>
