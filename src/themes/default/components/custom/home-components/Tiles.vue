<template>
  <div class="main-div m-2 w-1/2 relative md:m-5 md:h-64 lg:w-1/3">
    <img class="h-full w-full" :src="tileImage">
    <div class="designer-text hidden md:block">
      <p class="text-dark_green">
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
