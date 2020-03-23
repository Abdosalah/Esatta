<template>
  <popper
    trigger="hover"
    :options="{
      placement: 'left',
      modifiers: { offset: { offset: '0,10px' } }
    }"
  >
    <div class="popper">
      NEEDS BETTER MEASUREMENT
    </div>

    <button slot="reference" pointer class="height_4 button">
      <img :class="imgDimensions" src="../../../../assets/esatta-images/signup/measure_me.svg">
    </button>
  </popper>
</template>

<script>
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';

export default {
  components: {
    'popper': Popper
  }
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
  margin-right: 9px;
}
.popover{
  z-index: 10000;
}
.popper{
  color: #7b4240;
  font-size: xx-small;
  white-space: nowrap;
  overflow: hidden;
  padding: 10px;
}
</style>
