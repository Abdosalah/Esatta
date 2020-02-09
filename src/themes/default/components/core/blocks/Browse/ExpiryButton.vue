<template>
  <!-- <button class="button">
    <img :class="imgDimensions" src="../../../../assets/svg/clock.svg">
  </button> -->
  <b-button class="button" v-b-popover.hover="'I am popover directive content!'" title="Popover Titttle">
    <img :class="imgDimensions" src="../../../../assets/svg/clock.svg">
  </b-button>
</template>

<script>
export default {
  props: ['imgDimensions', 'buttonDimensions']
}
</script>
<style lang="scss" scoped>
button {
    outline: none;
}

.big {
  background-color: white;
  border-radius: 9999px;
  padding: 2rem;
}

.height_4 {
  height: 1rem;
  width: 1rem;
}

.height_8 {
  height: 2rem;
  width: 2rem;
}
.imgDimensions{
    height: 10%;
}
.button{
    padding: 3px;
}
</style>
