<template>
  <div class="pt-12 ">
    <!-- PAGE HEADER -->
    <div class="flex px-16">
      <img class="profile-img" src="../../../../assets/esatta-images/my-profile/avatar.jpg">

      <!-- WIP FOR TABLET VIEW -->
      <!-- <div>
        <p>
          Womans Clothing
        </p>
        
      </div> -->

      <div class="header-div hidden lg:flex">
        <p class="hdr-component">
          Alex
        </p>
        <p class="hdr-component">
          Height: 173 cm
        </p>
        <p class="hdr-component">
          Weight: 70 kg
        </p>
        <p class="pt-6 w-1/4 text-center inline-block">
          Womans Clothing
        </p>
      </div>
    </div>
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
      <div class="w-1/2 relative">
        <img class="body-img" src="../../../../assets/esatta-images/my-profile/front_facing.svg">
        <!-- <button class="bg-red absolute top-23% left-32% py-4 px-6">
          <p class="text-white text-sm">
            VIEW ALL BODY SHAPES
          </p>
        </button> -->
        <div class="m-auto text-center my-16">
          <img class="body-scan-img" src="../../../../assets/esatta-images/my-profile/body_scan.svg">
          <p class="inline text-sm text-red">
            View all Body Shapes
          </p>
          <!-- <div class="w-3/4 m-auto bg-gray mt-6 p-4">
            <p class="text-sm">
              A basic estimation of your measurement has<br>
              been performed. We limit the clothing you have.<br>
            </p>
            <p class="pt-4 text-sm">
              UNSURE IF THIS IS YOUR BODY SHAPE? <a class="text-red">Contact Us</a>
            </p>
          </div> -->
        </div>
      </div>
      <!-- DIMENSIONS CAROUSEL -->
      <dimensions-carousel />
      <!-- CLOSER FIT SECTION -->
    </div>
    <div class="text-center relative text-gray">
      <hr>
      <button class="absolute -top-0.7rem bg-white" @click="isHidden = !isHidden">
        GET A CLOSER FIT
        <p class="text-6xl absolute left-40% -top-50%" v-if="isHidden">
          &#8964;
        </p>
      </button>
    </div>
    <div class="flex" v-if="!isHidden">
      <div class="w-1/6">
        <button v-if="componentName === 'ShoulderAngle'"  class="block bg-white mb-2 py-12 w-full" @click="toggle('ShoulderAngle')">
          ShoulderAngle
        </button>
        <button v-if="componentName !== 'ShoulderAngle'" class="block bg-gray mb-2 py-12 w-full" @click="toggle('ShoulderAngle')">
          ShoulderAngle
        </button>
        <button v-if="componentName === 'SeatAngle'" class="block bg-white mb-2 py-12 w-full" @click="toggle('SeatAngle')">
          SeatAngle
        </button>
        <button v-if="componentName !== 'SeatAngle'" class="block bg-gray mb-2 py-12 w-full" @click="toggle('SeatAngle')">
          SeatAngle
        </button>
        <button v-if="componentName === 'Posture'" class="block bg-white mb-2 py-12 w-full" @click="toggle('Posture')">
          Posture
        </button>
        <button v-if="componentName !== 'Posture'" class="block bg-gray mb-2 py-12 w-full" @click="toggle('Posture')">
          Posture
        </button>
        <button v-if="componentName === 'BustPoint'" class="block bg-white mb-2 py-12 w-full" @click="toggle('BustPoint')">
          BustPoint
        </button>
        <button v-if="componentName !== 'BustPoint'" class="block bg-gray mb-2 py-12 w-full" @click="toggle('BustPoint')">
          BustPoint
        </button>
        <button v-if="componentName === 'BraSize'" class="block bg-white mb-2 py-12 w-full" @click="toggle('BraSize')">
          BraSize
        </button>
        <button v-if="componentName !== 'BraSize'" class="block bg-gray mb-2 py-12 w-full" @click="toggle('BraSize')">
          BraSize
        </button>
      </div>
      <div class="w-5/6 relative">
        <component :is="component" />
        <button class="absolute bottom-0 mb-4 block px-8 w-full text-red" @click="toggle(nextComponent)">
          {{nextComponent}} &#8594;
        </button>
      </div>
    </div>
    <div class="mb-24" v-if="isHidden" />
    <!-- BROWSE BODY TYPE SECTION -->
    <div class="flex text-center text-white">
      <div class="w-1/2 relative bg-black h-20rem">
        <img class="opacity-50 absolute w-full h-20rem" src="../../../../assets/esatta-images/my-profile/new_scan.jpg">
        <div class="mt-12">
          <p class="tracking-widest text-lg">
            &#9888;  New Measurements Required
          </p>
          <p class="mt-6 text-xs">
            Use our body scanning app to capture the most accurate measurements
          </p>
          <button class="mt-20 border border-white py-2 px-6">
            <img class="h-8 w-6 inline" src="../../../../assets/esatta-images/my-profile/measure_tape_white.svg">
            <p class="text-sm ml-2 inline">
              Measure Me Now
            </p>
          </button>
        </div>
      </div>
      <div class="w-1/2 bg-black h-20rem opacity-50 ml-px">
        <div class="mt-12">
          <p class="tracking-widest text-lg">
            Unsure if this is your Body Shape
          </p>
          <p class="mt-6 text-xs">
            Please try to re-measure yourself using the measurement app first.
            <br>you still believe your measurement are incorrect.
            <br>Please contact us using the link below.
          </p>
          <button class="mt-20 border border-white py-2 px-6">
            <!-- <img class="h-8 w-6 inline" src="../../../../assets/esatta-images/my-profile/measure_tape_white.svg"> -->
            <p class="text-sm ml-2 inline">
              Contact Us
            </p>
          </button>
        </div>
      </div>
    </div>
    <div class="flex text-center">
      <div class="w-1/2 scanned-div h-20rem opacity-50 ml-px">
        <div class="mt-12">
          <p class="tracking-widest text-lg">
             &#10003;  BODY SCAN
          </p>
          <p class="mt-6 text-xs">
            If your body has changed and you can't get to a scanner
          </p>
          <button class="mt-20 border py-2 px-6">
            <img class="h-8 w-6 inline" src="../../../../assets/esatta-images/my-profile/measure_tape_black.svg">
            <p class="text-sm ml-2 inline">
              Re-Measure Now
            </p>
          </button>
        </div>
      </div>
      <div class="w-1/2 relative bg-black text-white h-20rem">
        <img class="opacity-50 absolute w-full h-20rem" src="../../../../assets/esatta-images/my-profile/new_scan.jpg">
        <div class="mt-12">
          <p class="tracking-widest text-lg">
            &#9888;  New Scan Required
          </p>
          <p class="mt-6 text-xs">
            Your body may have changed. re-scan for the best fit
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
    <div class="bg-red h-32 text-center text-white pt-10">
      <p class="text-sm inline-block">
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
      nextComponent: 'Posture',
      isHidden: false
    }
  },
  methods: {
    toggle (param) {
      switch (param) {
        case 'ShoulderAngle' :
          this.component = ShoulderAngle
          this.componentName = 'ShoulderAngle'
          this.nextComponent = 'SeatAngle'
          break;
        case 'SeatAngle' :
          this.component = SeatAngle
          this.componentName = 'SeatAngle'
          this.nextComponent = 'Posture'
          break;
        case 'Posture' :
          this.component = Posture
          this.componentName = 'Posture'
          this.nextComponent = 'BustPoint'
          break;
        case 'BustPoint' :
          this.component = BustPoint
          this.componentName = 'BustPoint'
          this.nextComponent = 'BraSize'
          break;
        case 'BraSize' :
          this.component = BraSize
          this.componentName = 'BraSize'
          this.nextComponent = 'ShoulderAngle'
          break;
      }
    }
  }
}
</script>

<style scoped>

.header-div {
  border-top: 1px solid #EC145B;
  margin-top: 3rem;
  margin-left: 2rem;
  width: 100%;
}
.hdr-component {
  border-right: 1px solid #EC145B;
  padding-top: 1.5rem;
  width: 25%;
  text-align: center;
  display: inline-block;
}
.profile-img {
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
}
.body-img {
  height: 50vh;
  display: block;
  margin: auto;
}

button:focus {
  background-color: white;
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
