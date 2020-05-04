<template>
  <div class="">
    <!-- YOUR BODY SHAPE DIV -->
    <div class="mt-8">
      <p class="text-center text-dark_green">
        Your Body Shape is
      </p>
      <p v-if="measurements" class="text-center mt-4 text-2xl font-semibold md:text-4xl tracking-widest">
        Bottom Hourglass
      </p>
      <p v-else class="text-center mt-4 text-4xl tracking-widest">
        Unknown
      </p>
    </div>
    <!-- IMAGE AND ATTRIBUTES -->
    <div class="flex mt-12">
      <div class="w-full md:w-45% relative">
        <img v-if="measurements" class="body-img" src="../../../../assets/esatta-images/my-profile/front_facing.svg">
        <div v-if="measurements" class="m-auto text-center my-16">
          <img class="body-scan-img" src="../../../../assets/esatta-images/my-profile/body_scan.svg">
          <p class="inline text-sm text-dark_green">
            View all Body Shapes
          </p>
        </div>
        <div v-else class="m-auto text-center mb-16 md:mt-13vh lg:mt-15vh">
          <p class="text-sm cl-secondary">
            OPPS WE ARE NOT SURE WHAT
            <br>YOUR BODY TYPE IS
          </p>
          <button class="header-buttons">
            <img class="w-8 h-8 inline" src="assets/esatta-images/page-banner/measure_black.svg">
            <p class="button-text">
              MEASURE ME
            </p>
          </button>
        </div>
      </div>
      <!-- DIMENSIONS CAROUSEL -->
      <dimensions-carousel v-if="measurements" :dimensions-list="dimensionsArray" class="hidden md:flex" />
      <dimensions-carousel v-else :dimensions-list="noMeasurementsArray" class="hidden md:flex" />
    </div>
    <!-- CLOSER FIT SECTION -->
    <div v-if="measurements" class="relative text-gray hidden md:block">
      <hr>
      <button class="absolute -top-0.7rem bg-white ml-41%" @click="isHidden = !isHidden">
        GET A CLOSER FIT
        <p class="text-6xl absolute left-40% -top-50%" v-if="isHidden">
          &#8964;
        </p>
      </button>
    </div>
    <div v-if="measurements && !isHidden" class="hidden md:flex">
      <div class="w-1/6 text-sm">
        <button v-if="componentName === 'ShoulderAngle'" class="block bg-white text-dark_green mb-2 py-12 w-full" @click="toggle('ShoulderAngle')">
          Shoulder Angle
        </button>
        <button v-if="componentName !== 'ShoulderAngle'" class="block bg-gray mb-2 py-12 w-full" @click="toggle('ShoulderAngle')">
          Shoulder Angle
        </button>
        <button v-if="componentName === 'SeatAngle'" class="block bg-white text-dark_green mb-2 py-12 w-full" @click="toggle('SeatAngle')">
          Seat Angle
        </button>
        <button v-if="componentName !== 'SeatAngle'" class="block bg-gray mb-2 py-12 w-full" @click="toggle('SeatAngle')">
          Seat Angle
        </button>
        <button v-if="componentName === 'Posture'" class="block bg-white text-dark_green mb-2 py-12 w-full" @click="toggle('Posture')">
          Posture
        </button>
        <button v-if="componentName !== 'Posture'" class="block bg-gray mb-2 py-12 w-full" @click="toggle('Posture')">
          Posture
        </button>
        <button v-if="componentName === 'BustPoint'" class="block bg-white text-dark_green mb-2 py-12 w-full" @click="toggle('BustPoint')">
          Bust Point
        </button>
        <button v-if="componentName !== 'BustPoint'" class="block bg-gray mb-2 py-12 w-full" @click="toggle('BustPoint')">
          Bust Point
        </button>
        <button v-if="componentName === 'BraSize'" class="block bg-white text-dark_green mb-2 py-12 w-full" @click="toggle('BraSize')">
          Bra Size
        </button>
        <button v-if="componentName !== 'BraSize'" class="block bg-gray mb-2 py-12 w-full" @click="toggle('BraSize')">
          Bra Size
        </button>
      </div>
      <div class="w-5/6 relative">
        <component :is="component" />
        <button v-if="componentName !== 'ShoulderAngle'" class="absolute bottom-0 mb-4 block w-1/2 text-dark_green" @click="toggle(prevComponent)">
          &#8592; Previous
        </button>
        <button class="absolute bottom-0 mb-4 block w-1/2 text-dark_green ml-50%" @click="toggle(nextComponent)">
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
      <new-measurements />
      <howto-measure />
    </div>
    <div v-if="measurements" class="md:flex text-center text-white">
      <re-measurements />
      <incorrect-measurements />
    </div>
    <div v-if="measurements" class="md:flex text-center">
      <body-scanned />
      <incorrect-measurements />
    </div>
    <div v-if="measurements" class="bg-red py-10 text-center text-white">
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
import ReMeasurements from 'theme/components/custom/profile-components/ReMeasurements.vue'
import IncorrectMeasurements from 'theme/components/custom/profile-components/IncorrectMeasurements.vue'
import BodyScanned from 'theme/components/custom/profile-components/BodyScanned.vue'
import NewscanRequired from 'theme/components/custom/profile-components/NewscanRequired.vue'
import NewMeasurements from 'theme/components/custom/profile-components/NewMeasurements.vue'
import HowtoMeasure from 'theme/components/custom/profile-components/HowtoMeasure.vue'
import DimensionsCarousel from 'theme/components/custom/profile-components/DimensionsCarousel.vue'

export default {
  components: {
    DimensionsCarousel,
    ReMeasurements,
    IncorrectMeasurements,
    BodyScanned,
    NewscanRequired,
    NewMeasurements,
    HowtoMeasure,
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
      isHidden: false,
      measurements: true,
      dimensionsArray: [
        {
          attrName: 'Neck',
          value: 123.1
        },
        {
          attrName: 'Bust',
          value: 123.1
        },
        {
          attrName: 'Waist',
          value: 123.1
        },
        {
          attrName: 'Across Back',
          value: 123.1
        },
        {
          attrName: 'High Hip',
          value: 123.1
        },
        {
          attrName: 'Hip',
          value: 123.1
        },
        {
          attrName: 'Arm length',
          value: 123.1
        },
        {
          attrName: 'Upper arm girth',
          value: 123.1
        },
        {
          attrName: 'Inside Leg',
          value: 123.1
        },
        {
          attrName: 'Waist to Floor',
          value: 123.1
        },
        {
          attrName: 'Thigh Girth',
          value: 123.1
        },
        {
          attrName: 'Calf Girth',
          value: 123.1
        }
      ],
      noMeasurementsArray: [
        {
          attrName: 'Neck',
          value: 0.0
        },
        {
          attrName: 'Chest',
          value: 0.0
        },
        {
          attrName: 'Waist',
          value: 0.0
        },
        {
          attrName: 'Across Back',
          value: 0.0
        },
        {
          attrName: 'High Hip',
          value: 0.0
        },
        {
          attrName: 'Hip',
          value: 0.0
        },
        {
          attrName: 'Arm length',
          value: 0.0
        },
        {
          attrName: 'Upper arm girth',
          value: 0.0
        },
        {
          attrName: 'Inside Leg',
          value: 0.0
        },
        {
          attrName: 'Waist to Floor',
          value: 0.0
        },
        {
          attrName: 'Thigh Girth',
          value: 0.0
        },
        {
          attrName: 'Calf Girth',
          value: 0.0
        }
      ]
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
  border: 1px solid #536C4E;
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

.header-buttons {
  background-color: #EC145B;
  width: 17rem;
  margin-top: 2rem;
  padding: 1rem 3.5rem;
  outline: none;
  border: none;
  transition: all 0.3s ease 0s;
}

.button-text {
  color: white;
  display: inline;
  margin-top: 0.3rem;
  padding-left: 1rem;
}
</style>
