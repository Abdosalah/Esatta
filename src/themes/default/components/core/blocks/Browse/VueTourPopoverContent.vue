<template>
  <popper
    trigger="hover"
    :options="{
      placement: 'left',
      modifiers: { offset: { offset: '0,10px' } }
    }"
  >
    <div class="popper">
      Popper Content
    </div>

    <button slot="reference" pointer class="button">
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
<style scoped>
.button{
    height: 100%;
    width: 100%;
}
</style>>
