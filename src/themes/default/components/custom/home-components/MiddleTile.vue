<template>
  <div class="main-div h-48 md:h-64 lg:w-1/3 w-full mx-5">
    <div class="flex items-center justify-center">
      <img class="h-5 w-5 float-left mr-5" src="assets/esatta-images/plus.svg">
      <p class="text-red hover-effects">
        LATEST INDEPENDANT
      </p>
    </div>
    <p class="text-center text-5xl font-black">
      Designers
    </p>
    <p class="text-center pt-4 my-text">
      Esatta promotes and empowers independant
      designers to bring you the latest in cutting
      edge style design from around the world.
    </p>
    <p class="text-center text-red pt-3">
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
  padding: 2% 0%;
}
.my-text {
  padding-left: 10%;
  padding-right: 10%;
}
.hover-effects:hover {
  transform: translateY(-7px);
  box-shadow: 0px 15px 20px rgba(0,0,0,0.2);
  cursor: pointer;
}
.hover-effects {
  transition: all 0.3s ease 0s;
}
</style>
