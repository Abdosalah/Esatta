<template>
  <div class="mx-8% my-16">
    <div class="mb-16 text-3xl">
      Settings
    </div>

    <div class="w-full text-sm ">
      <hr />

      <button class="settings_buttons" @click="toggle('MyMeasurements')">
        <p class="">
          MY MEASUREMENTS
        </p>
        <p v-if="componentName !== 'MyMeasurements'" class="absolute right-0 top-1.5rem">
          &#9655;
        </p>
        <p v-else class="absolute right-0 top-1.5rem">
          &#9661;
        </p>
      </button>
      <div v-if="componentName === 'MyMeasurements'">
        Setting description
      </div>
      <hr />

      <button class="settings_buttons" @click="toggle('MyOrder')">
        <p class="">
          MY ORDER
        </p>
        <p v-if="componentName !== 'MyOrder'" class="absolute right-0 top-1.5rem">
          &#9655;
        </p>
        <p v-else class="absolute right-0 top-1.5rem">
          &#9661;
        </p>
      </button>
      <div v-if="componentName === 'MyOrder'">
        Setting description
      </div>
      <hr />

      <button class="settings_buttons" @click="toggle('Alterations')">
        <p class="">
          ALTERATIONS
        </p>
        <p v-if="componentName !== 'Alterations'" class="absolute right-0 top-1.5rem">
          &#9655;
        </p>
        <p v-else class="absolute right-0 top-1.5rem">
          &#9661;
        </p>
      </button>
      <div v-if="componentName === 'Alterations'">
        Setting description
      </div>
      <hr />

      <button class="settings_buttons" @click="toggle('Returns')">
        <p class="">
          RETURNS
        </p>
        <p v-if="componentName !== 'Returns'" class="absolute right-0 top-1.5rem">
          &#9655;
        </p>
        <p v-else class="absolute right-0 top-1.5rem">
          &#9661;
        </p>
      </button>
      <div v-if="componentName === 'Returns'">
        Setting description
      </div>
      <hr />

      <button class="settings_buttons" @click="toggle('SellOnEsatta')">
        <p class="">
          SELL ON ESATTA
        </p>
        <p v-if="componentName !== 'SellOnEsatta'" class="absolute right-0 top-1.5rem">
          &#9655;
        </p>
        <p v-else class="absolute right-0 top-1.5rem">
          &#9661;
        </p>
      </button>
      <div v-if="componentName === 'SellOnEsatta'">
        Setting description
      </div>
      <hr />

      <button class="settings_buttons" @click="toggle('Careers')">
        <p class="">
          CAREERS
        </p>
        <p v-if="componentName !== 'Careers'" class="absolute right-0 top-1.5rem">
          &#9655;
        </p>
        <p v-else class="absolute right-0 top-1.5rem">
          &#9661;
        </p>
      </button>
      <div v-if="componentName === 'Careers'">
        Setting description
      </div>
      <hr />

      <button class="settings_buttons" @click="toggle('Press')">
        <p class="">
          PRESS
        </p>
        <p v-if="componentName !== 'Press'" class="absolute right-0 top-1.5rem">
          &#9655;
        </p>
        <p v-else class="absolute right-0 top-1.5rem">
          &#9661;
        </p>
      </button>
      <div v-if="componentName === 'Press'">
        Setting description
      </div>
      <hr />

      <button class="settings_buttons" @click="toggle('Other')">
        <p class="">
          OTHER
        </p>
        <p v-if="componentName !== 'Other'" class="absolute right-0 top-1.5rem">
          &#9655;
        </p>
        <p v-else class="absolute right-0 top-1.5rem">
          &#9661;
        </p>
      </button>
      <div v-if="componentName === 'Other'">
        Setting description
      </div>
      <hr />
    </div>

  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      componentName: ''
    }
  },
  methods: {
    toggle (componentName) {
      this.componentName = (this.componentName === componentName) ? '' : componentName
    }
  }
}
</script>



<style scoped>
.settings_buttons {
  position: relative;
  padding: 1.5rem 0;
  font-weight: 700;
  display: block;
  width: 100%;
}

button:focus {
  outline: none;
}
</style>
