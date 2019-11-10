<template>
  <div class="main-div m-5 h-48 md:h-64 lg:w-1/3 w-1/2 relative">
    <img class="h-full w-full" :src="tileImage">
    <div class="designer-text">
      <p class="text-red">
        DESIGN
      </p>
      <p class="font-black text-2xl">
        Designer Name
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tileName', 'tileImage']
}
</script>

<style lang="scss" scoped>
.main-div:hover {
  img {
    opacity: 30%;
  }
  .designer-text {
    opacity: 100%;
  }
}
.designer-text {
  opacity: 0%;
  width: 100%;
  position: absolute;
  top: 40%;
  text-align: center;
}
</style>
