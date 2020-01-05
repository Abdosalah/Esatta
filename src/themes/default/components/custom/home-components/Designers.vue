<template>
  <div class="main-designer pt-4% lg:mr-nav">
    <top-tile class="md:hidden inline-block" />
    <div class="flex">
      <tiles
        class="block"
        tile-name="1"
        designer-name="Designer Name"
        tile-image="assets/esatta-images/designers/hp_el1.jpg"
      />
      <tiles
        class="block"
        tile-name="2"
        designer-name="Designer Name"
        tile-image="assets/esatta-images/designers/hp_el2.jpg"
      />
      <tiles
        class="lg:block hidden"
        tile-name="3"
        designer-name="Designer Name"
        tile-image="assets/esatta-images/designers/hp_el3.jpg"
      />
    </div>
    <div class="flex my-4  flex md:hidden">
      <div class="w-1/2 text-center">
        <p class="mb-4">
          Designer Name
        </p>
        <p class="text-red">
          Designer Location
        </p>
      </div>
      <div class="w-1/2 text-center">
        <p class="mb-4">
          Designer Name
        </p>
        <p class="text-red">
          Designer Location
        </p>
      </div>
    </div>
    <div class="flex">
      <tiles
        class="lg:block hidden"
        tile-name="4"
        designer-name="Designer Name"
        tile-image="assets/esatta-images/designers/hp_el4.jpg"
      />
      <middle-tile class="md:block hidden" />
      <tiles
        class="lg:block hidden"
        tile-name="6"
        designer-name="Designer Name"
        tile-image="assets/esatta-images/designers/hp_el5.jpg"
      />
    </div>
    <div class="flex mb-4">
      <tiles
        class="block"
        tile-name="7"
        designer-name="Designer Name"
        tile-image="assets/esatta-images/designers/hp_el6.jpg"
      />
      <tiles
        class="block"
        tile-name="8"
        designer-name="Designer Name"
        tile-image="assets/esatta-images/designers/hp_el7.jpg"
      />
      <tiles
        class="lg:block hidden"
        tile-name="9"
        designer-name="Designer Name"
        tile-image="assets/esatta-images/designers/hp_el8.jpg"
      />
    </div>
    <div class="flex mb-8 flex md:hidden">
      <div class="w-1/2 text-center">
        <p class="mb-4">
          Designer Name
        </p>
        <p class="text-red">
          Designer Location
        </p>
      </div>
      <div class="w-1/2 text-center">
        <p class="mb-4">
          Designer Name
        </p>
        <p class="text-red">
          Designer Location
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Tiles from 'theme/components/custom/home-components/Tiles.vue'
import MiddleTile from 'theme/components/custom/home-components/MiddleTile.vue'
import TopTile from 'theme/components/custom/home-components/TopTile.vue'

export default {
  components: {
    Tiles,
    TopTile,
    MiddleTile
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 768px) {
  .main-designer {
    background: linear-gradient(0deg, rgb(255, 255, 255) 50%, #E2E2E2 50%);
  }
}
</style>
