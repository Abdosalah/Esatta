<template>
  <div class="">
    <!-- YOUR BODY SHAPE DIV -->
    <div class="mt-20">
      <p class="text-center text-red">
        Your Body Shape is
      </p>
      <p class="text-center mt-4 text-4xl tracking-widest">
        Bottom Hourglass
      </p>
    </div>
    <!-- IMAGE AND ATTRIBUTES -->
    <div class="flex mt-12">
      <div class="w-full md:w-45% relative">
        <img class="body-img" src="../../../../assets/esatta-images/my-profile/front_facing.svg">
        <div class="m-auto text-center my-16">
          <img class="body-scan-img" src="../../../../assets/esatta-images/my-profile/body_scan.svg">
          <p class="inline text-sm text-red">
            View all Body Shapes
          </p>
        </div>
      </div>
      <!-- DIMENSIONS CAROUSEL -->
      <dimensions-carousel class="hidden md:flex" />
      <!-- CLOSER FIT SECTION -->
    </div>
    <div class="relative text-gray hidden md:block">
      <hr>
      <button class="absolute -top-0.7rem bg-white ml-41%" @click="isHidden = !isHidden">
        GET A CLOSER FIT
        <p class="text-6xl absolute left-40% -top-50%" v-if="isHidden">
          &#8964;
        </p>
      </button>
    </div>
    <div class="hidden md:flex" v-if="!isHidden">
      <div class="w-1/6 text-sm">
        <button v-if="componentName === 'ShoulderAngle'" class="block bg-white text-red mb-2 py-12 w-full" @click="toggle('ShoulderAngle')">
          Shoulder Angle
        </button>
        <button v-if="componentName !== 'ShoulderAngle'" class="block bg-gray mb-2 py-12 w-full" @click="toggle('ShoulderAngle')">
          Shoulder Angle
        </button>
        <button v-if="componentName === 'SeatAngle'" class="block bg-white text-red mb-2 py-12 w-full" @click="toggle('SeatAngle')">
          Seat Angle
        </button>
        <button v-if="componentName !== 'SeatAngle'" class="block bg-gray mb-2 py-12 w-full" @click="toggle('SeatAngle')">
          Seat Angle
        </button>
        <button v-if="componentName === 'Posture'" class="block bg-white text-red mb-2 py-12 w-full" @click="toggle('Posture')">
          Posture
        </button>
        <button v-if="componentName !== 'Posture'" class="block bg-gray mb-2 py-12 w-full" @click="toggle('Posture')">
          Posture
        </button>
        <button v-if="componentName === 'BustPoint'" class="block bg-white text-red mb-2 py-12 w-full" @click="toggle('BustPoint')">
          Bust Point
        </button>
        <button v-if="componentName !== 'BustPoint'" class="block bg-gray mb-2 py-12 w-full" @click="toggle('BustPoint')">
          Bust Point
        </button>
        <button v-if="componentName === 'BraSize'" class="block bg-white text-red mb-2 py-12 w-full" @click="toggle('BraSize')">
          Bra Size
        </button>
        <button v-if="componentName !== 'BraSize'" class="block bg-gray mb-2 py-12 w-full" @click="toggle('BraSize')">
          Bra Size
        </button>
      </div>
      <div class="w-5/6 relative">
        <component :is="component" />
        <button v-if="componentName !== 'ShoulderAngle'" class="absolute bottom-0 mb-4 block w-1/2 text-red" @click="toggle(prevComponent)">
          &#8592; Previous
        </button>
        <button class="absolute bottom-0 mb-4 block w-1/2 text-red ml-50%" @click="toggle(nextComponent)">
          <p v-if="componentName !== 'BraSize'">
            Next &#8594;
          </p>
          <p v-else>
            Finish
          </p>
        </button>
      </div>
    </div>
    <div class="mb-24" v-if="isHidden" />
    <!-- BROWSE BODY TYPE SECTION -->
    <div class="md:flex text-center text-white">
      <div class="w-full md:w-1/2 relative bg-black h-20rem">
        <img class="opacity-50 object-cover w-full h-20rem" src="../../../../assets/esatta-images/my-profile/new_scan.jpg">
        <div class="pt-12 absolute top-0 w-full h-full">
          <p class="tracking-widest text-lg">
            &#9888;  Re-Measurements Required
          </p>
          <p class="mt-6 text-xs h-8">
            Your body may have changed. Please re-scan for the best fit.
            <br>
          </p>
          <button class="mt-20 border border-white py-2 px-6">
            <img class="h-8 w-6 inline" src="../../../../assets/esatta-images/my-profile/measure_tape_white.svg">
            <p class="text-sm ml-2 inline">
              Measure Me Now
            </p>
          </button>
          <p class="text-xs mt-3">
            Last scanned: 22/12/2019
          </p>
        </div>
      </div>
      <div class="w-full md:w-1/2 bg-black relative h-20rem opacity-50 ml-px">
        <img class="opacity-50 object-cover w-full h-20rem" src="../../../../assets/esatta-images/my-profile/new_scan.jpg">
        <div class="pt-12 absolute top-0 w-full h-full">
          <p class="tracking-widest text-lg">
            Incorrect Measurements ?
          </p>
          <p class="mt-6 text-xs h-8">
            If you believe your measurements are incorrect, please try to re-measure yourself with the app first.
            <br>If that doesn't work, please contact us using the link below.
          </p>
          <button class="mt-20 border border-white py-2 px-6">
            <img class="h-8 w-1.2rem inline" src="../../../../assets/esatta-images/my-profile/phone_call.svg">
            <p class="text-sm ml-2 inline">
              Contact Us
            </p>
          </button>
        </div>
      </div>
    </div>
    <div class="md:flex text-center">
      <div class="w-full md:w-1/2 relative h-20rem opacity-50 ml-px">
        <img class="opacity-50 object-cover w-full h-20rem" src="../../../../assets/esatta-images/my-profile/new_scan.jpg">
        <div class="pt-12 absolute top-0 w-full h-full">
          <p class="tracking-widest text-lg">
            &#10003;  Body Scanned
          </p>
          <p class="mt-6 text-xs h-8">
            If you feel your body measurements have changed, please re-scan using the link below.
          </p>
          <button class="mt-20 border py-2 px-6">
            <img class="h-8 w-6 inline" src="../../../../assets/esatta-images/my-profile/measure_tape_black.svg">
            <p class="text-sm ml-2 inline">
              Re-Measure Now
            </p>
          </button>
          <p class="text-xs mt-3">
            Last scanned: 22/12/2019
          </p>
        </div>
      </div>
      <div class="w-full md:w-1/2 relative bg-black text-white h-20rem">
        <img class="opacity-50 object-cover w-full h-20rem" src="../../../../assets/esatta-images/my-profile/new_scan.jpg">
        <div class="pt-12 absolute top-0 w-full h-full">
          <p class="tracking-widest text-lg">
            &#9888;  New Scan Required
          </p>
          <p class="mt-6 text-xs h-8">
            Use our app to easily scan your body so that we can accurately capture your measurements.
          </p>
          <button class="mt-20 border border-white py-2 px-6">
            <img class="h-8 w-6 inline" src="../../../../assets/esatta-images/my-profile/measure_tape_white.svg">
            <p class="text-sm ml-2 inline">
              Re-Measure Now
            </p>
          </button>
        </div>
      </div>
    </div>
    <div class="bg-red py-10 text-center text-white">
      <p class="text-lg inline-block">
        BROWSE MY BODY TYPE
      </p>
      <p class="inline-block pl-4">
        &rarr;
      </p>
    </div>
  </div>
</template>

<script>
import ShoulderAngle from 'theme/components/custom/profile-components/ShoulderAngle.vue'
import SeatAngle from 'theme/components/custom/profile-components/SeatAngle.vue'
import Posture from 'theme/components/custom/profile-components/Posture.vue'
import BustPoint from 'theme/components/custom/profile-components/BustPoint.vue'
import BraSize from 'theme/components/custom/profile-components/BraSize.vue'
import DimensionsCarousel from 'theme/components/custom/profile-components/DimensionsCarousel.vue'

export default {
  components: {
    DimensionsCarousel,
    ShoulderAngle,
    SeatAngle,
    Posture,
    BustPoint,
    BraSize
  },
  data () {
    return {
      component: SeatAngle,
      componentName: 'SeatAngle',
      prevComponent: 'ShoulderAngle',
      nextComponent: 'Posture',
      isHidden: false
    }
  },
  methods: {
    toggle (param) {
      switch (param) {
        case 'ShoulderAngle' :
          if (this.nextComponent === 'ShoulderAngle') { this.isHidden = true }
          this.component = ShoulderAngle
          this.componentName = 'ShoulderAngle'
          this.nextComponent = 'SeatAngle'
          break;
        case 'SeatAngle' :
          this.component = SeatAngle
          this.componentName = 'SeatAngle'
          this.prevComponent = 'ShoulderAngle'
          this.nextComponent = 'Posture'
          break;
        case 'Posture' :
          this.component = Posture
          this.componentName = 'Posture'
          this.prevComponent = 'SeatAngle'
          this.nextComponent = 'BustPoint'
          break;
        case 'BustPoint' :
          this.component = BustPoint
          this.componentName = 'BustPoint'
          this.prevComponent = 'Posture'
          this.nextComponent = 'BraSize'
          break;
        case 'BraSize' :
          this.component = BraSize
          this.componentName = 'BraSize'
          this.prevComponent = 'BustPoint'
          this.nextComponent = 'ShoulderAngle'
          break;
      }
    }
  }
}
</script>

<style scoped>
.body-img {
  height: 50vh;
  display: block;
  margin: auto;
}

button:focus {
  outline: none;
}

.body-scan-img {
  height: 2rem;
  width: 2rem;
  display: inline-block;
  border-radius: 50%;
  border: 1px solid #EC145B;
  padding: 0.2rem;
  margin-right: 0.5rem;
}

.new-scan-img {
  background-color: black;
  opacity: 50%;
}

.scanned-div {
  background-color: #DCDCDC;
}
</style>
