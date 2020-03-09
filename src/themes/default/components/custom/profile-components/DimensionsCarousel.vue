<template>
  <div class="dimensions-div">
    <carousel
      :per-page="1"
      :navigate-to="someLocalProperty"
      :mouse-drag="true"
      :navigation-enabled="true"
      navigation-next-label="&gt;"
      navigation-prev-label="&lt;"
      :loop="true"
    >
      <slide class="text-center">
        <div class="flex flex-wrap">
          <dimensions
            class="w-1/2 pb-2.7rem lg:pb-3.3rem"
            attr-name="Neck"
            :attr-value="dimensionsList[0].value"
          />
          <dimensions
            class="w-1/2 pb-2.7rem lg:pb-3.3rem"
            attr-name="Bust"
            :attr-value="dimensionsList[1].value"
          />
          <dimensions
            class="w-1/2 pb-2.7rem lg:pb-3.3rem"
            attr-name="Waist"
            :attr-value="dimensionsList[2].value"
          />
          <dimensions
            class="w-1/2 pb-2.7rem lg:pb-3.3rem"
            attr-name="Across Back"
            :attr-value="dimensionsList[3].value"
          />
          <dimensions
            class="w-1/2 pb-2.7rem lg:pb-3.3rem"
            attr-name="High Hip"
            :attr-value="dimensionsList[4].value"
          />
          <dimensions
            class="w-1/2 pb-2.7rem lg:pb-3.3rem"
            :attr-name="dimensionsList[5].attrName"
            :attr-value="dimensionsList[5].value"
          />
        </div>
      </slide>
      <slide v-if="dimensionsList[0].value > 0" class="text-center">
        <div class="flex flex-wrap">
          <dimensions
            class="w-1/2 pb-2.7rem lg:pb-3.3rem"
            attr-name="Hip"
            :attr-value="dimensionsList[6].value"
          />
          <dimensions
            class="w-1/2 pb-2.7rem lg:pb-3.3rem"
            attr-name="Upper arm girth"
            :attr-value="dimensionsList[7].value"
          />
          <dimensions
            class="w-1/2 pb-2.7rem lg:pb-3.3rem"
            attr-name="Inside Leg"
            :attr-value="dimensionsList[8].value"
          />
          <dimensions
            class="w-1/2 pb-2.7rem lg:pb-3.3rem"
            attr-name="Waist to Floor"
            :attr-value="dimensionsList[9].value"
          />
          <dimensions
            class="w-1/2 pb-2.7rem lg:pb-3.3rem"
            attr-name="Thigh Girth"
            :attr-value="dimensionsList[10].value"
          />
          <dimensions
            class="w-1/2 pb-2.7rem lg:pb-3.3rem"
            attr-name="Calf Girth"
            :attr-value="dimensionsList[11].value"
          />
        </div>
      </slide>
      <slide v-if="dimensionsList[0].value > 0">
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
  props: ['dimensionsList'],
  components: {
    Dimensions,
    Carousel,
    Slide
  }
};
</script>

<style>
.dimensions-div {
  height: 50vh;
  width: 50%;
  padding: 0 3rem 0 3rem;
  flex-wrap: wrap;
}
.VueCarousel-navigation {
  font-size: 3rem
}
</style>
