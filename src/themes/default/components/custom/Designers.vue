<template>
  <div class="pt-4% lg:mr-nav">
    <div class="flex">
      <tiles
        class="inline-block"
        tile-name="1"
        tile-image="assets/esatta-images/designers/hp_el1.jpg"
      />
      <tiles
        class="inline-block"
        tile-name="2"
        tile-image="assets/esatta-images/designers/hp_el2.jpg"
      />
      <tiles
        class="lg:inline-block hidden"
        tile-name="3"
        tile-image="assets/esatta-images/designers/hp_el3.jpg"
      />
    </div>
    <div class="flex">
      <tiles
        class="lg:inline-block hidden"
        tile-name="4"
        tile-image="assets/esatta-images/designers/hp_el4.jpg"
      />
      <middle-tile class="md:inline-block hidden" />
      <tiles
        class="lg:inline-block hidden"
        tile-name="6"
        tile-image="assets/esatta-images/designers/hp_el5.jpg"
      />
    </div>
    <div class="flex mb-4%">
      <tiles
        class="inline-block"
        tile-name="7"
        tile-image="assets/esatta-images/designers/hp_el6.jpg"
      />
      <tiles
        class="inline-block"
        tile-name="8"
        tile-image="assets/esatta-images/designers/hp_el7.jpg"
      />
      <tiles
        class="lg:inline-block hidden"
        tile-name="9"
        tile-image="assets/esatta-images/designers/hp_el8.jpg"
      />
    </div>
  </div>
</template>

<script>
import Tiles from 'theme/components/custom/Tiles.vue'
import MiddleTile from 'theme/components/custom/MiddleTile.vue'

export default {
  components: {
    Tiles,
    MiddleTile
  }
}
</script>

<style lang="scss" scoped>

</style>
