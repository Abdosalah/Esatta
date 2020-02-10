<template>
  <div class="dimensions-div">
    <carousel
      :per-page="1"
      :navigate-to="someLocalProperty"
      :mouse-drag="true"
      :navigation-enabled="true"
      navigation-next-label="▶"
      navigation-prev-label="◀"
      :loop="true"
    >
      <slide class="pt-8 text-center">
        <div class="flex flex-wrap">
          <dimensions
            class="w-1/2"
            attr-name="Neck"
            attr-value="123.1 cm"
          />
          <dimensions
            class="w-1/2"
            attr-name="Chest"
            attr-value="123.1 cm"
          />
          <dimensions
            class="w-1/2"
            attr-name="Waist"
            attr-value="123.1 cm"
          />
          <dimensions
            class="w-1/2"
            attr-name="Across Back"
            attr-value="123.1 cm"
          />
          <dimensions
            class="w-1/2"
            attr-name="High Hip"
            attr-value="123.1 cm"
          />
          <dimensions
            class="w-1/2"
            attr-name="Hip"
            attr-value="123.1 cm"
          />
        </div>
      </slide>
      <slide class="pt-8 text-center">
        <div class="flex flex-wrap">
          <dimensions
            class="w-1/2"
            attr-name="Arm length"
            attr-value="123.1 cm"
          />
          <dimensions
            class="w-1/2"
            attr-name="Upper arm girth"
            attr-value="123.1 cm"
          />
          <dimensions
            class="w-1/2"
            attr-name="Inside Leg"
            attr-value="123.1 cm"
          />
          <dimensions
            class="w-1/2"
            attr-name="Waist to Floor"
            attr-value="123.1 cm"
          />
          <dimensions
            class="w-1/2"
            attr-name="Thigh Girth"
            attr-value="123.1 cm"
          />
          <dimensions
            class="w-1/2"
            attr-name="Calf Girth"
            attr-value="123.1 cm"
          />
        </div>
      </slide>
      <slide>
        <div class="flex flex-wrap">
          <p class="text-center text-2xl font-bold w-full">
            Bottom Hourglass
          </p>
          <p class="mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam cursus ac
            Proin maximus mi ex, dignissim fermentum risus pellentesque vel.
          </p>
          <p class="my-2">
            lobortis ullamcorper ornare. Aliquam et arcu tellus. Nunc ac accumsan nisl.
            lacinia metus sed, euismod diam. Phasellus finibus nisl id lacinia fringilla.
          </p>
          <p>
            et neque. Mauris lobortis diam eu odio iaculis porttitor.
          </p>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import Dimensions from 'theme/components/custom/profile-components/Dimensions.vue'
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Dimensions,
    Carousel,
    Slide
  }
};
</script>

<style scoped>
.dimensions-div {
  height: 50vh;
  width: 50%;
  padding: 3rem 3rem 0 3rem;
  /* display: flex; */
  flex-wrap: wrap;
}
</style>
