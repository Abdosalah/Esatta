<template>
  <div class="main-div h-48 md:h-64 lg:w-1/3 w-full">
    <div class="flex items-center justify-center">
      <img class="h-5 w-5 float-left mr-2" src="assets/esatta-images/plus.svg">
      <p class="text-red">
        LATEST INDEPENDANT
      </p>
    </div>
    <p class="text-center text-5xl font-black">
      DESIGNERS
    </p>
    <p class="text-center text-sm pt-4 my-text">
      Esatta promotes and empowers independant
      designers to bring you the latest in cutting
      edge style design from around the world.
    </p>
    <p class="text-center text-red text-sm pt-3">
      See our designers
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
  margin: 1.25rem;
  padding: 2% 0%;
}
.my-text {
  padding-left: 10%;
  padding-right: 10%;
}
</style>
