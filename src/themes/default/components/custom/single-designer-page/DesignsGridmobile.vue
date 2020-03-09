<template>
  <div class="mx-9%">
    <div class="my-grid">
      <div
        v-for="(design, key) in pastdesignsList"
        :key="key"
        class="w-95% mx-2.5% mb-4 relative product-div"
      >
        <img :src="design.imageUrl" class="h-20vh">
        <div class="absolute opacity-0 top-35% w-full text-center tracking-widest">
          PRODUCT NAME
        </div>
        <div class="absolute opacity-0 top-50% w-full">
          <img class="h-5 w-5 m-auto" src="assets/esatta-images/plus.svg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pastdesignsList']
}
</script>

<style scoped>
.my-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  display: grid;
}
.product-div:hover > div {
  opacity: 1;
}
.product-div:hover > img {
  opacity: 0.5;
}
</style>
