<template>
  <div class="main-div my-5 h-48 w-full bg-gray">
    <div class="mb-4">
      <img class="h-5 w-5 float-left mr-2" src="assets/esatta-images/plus.svg">
      <p class="text-dark_green">
        LATEST INDEPENDANT
      </p>
    </div>
    <p class="text-heading font-black">
      DESIGNERS
    </p>
    <p class="text-sm pt-4">
      Esatta promotes and empowers independant
      designers to bring you the latest in cutting
      edge style design from around the world.
    </p>
  </div>
</template>

<script>
export default {
  props: ['tileName', 'tileImage']
}
</script>

<style lang="scss" scoped>
.main-div {
  margin-left: 4%;
  padding-left: 1.25rem;
  padding-right: 20%;
}
</style>
