<template>
  <div class="container">
    <h6 class="font-extrabold p-16">
      WHAT CAN WE HELP YOU WITH
    </h6>
    <div class="linkContainer">
      <v-btn class="links pointer" v-model="inp" @click="$emit('update:inp', dropdownOptions.MY_MEASUREMENTS);">
        MY MEASUREMENTS
        <i class="material-icons icon">keyboard_arrow_right</i>
      </v-btn>
      <v-btn class="links pointer" v-model="inp" @click="$emit('update:inp', dropdownOptions.MY_ORDER);">
        MY ORDER
        <i class="material-icons icon">keyboard_arrow_right</i>
      </v-btn>
      <v-btn class="links pointer" v-model="inp" @click="$emit('update:inp', dropdownOptions.ALTERATIONS);">
        ALTERATIONS
        <i class="material-icons icon">keyboard_arrow_right</i>
      </v-btn>
      <v-btn class="links pointer" v-model="inp" @click="$emit('update:inp', dropdownOptions.RETURNS);">
        RETURNS
        <i class="material-icons icon">keyboard_arrow_right</i>
      </v-btn>
      <v-btn class="links pointer" v-model="inp" @click="$emit('update:inp', dropdownOptions.SELL_ON_ESATTA);">
        SELL ON ESATTA
        <i class="material-icons icon">keyboard_arrow_right</i>
      </v-btn>
      <v-btn class="links pointer" v-model="inp" @click="$emit('update:inp', dropdownOptions.CAREERS);">
        CAREERS
        <i class="material-icons icon">keyboard_arrow_right</i>
      </v-btn>
      <v-btn class="links pointer" v-model="inp" @click="$emit('update:inp', dropdownOptions.PRESS);">
        PRESS
        <i class="material-icons icon">keyboard_arrow_right</i>
      </v-btn>
      <v-btn class="links pointer" v-model="inp" @click="$emit('update:inp', dropdownOptions.OTHERS);">
        OTHERS
        <i class="material-icons icon">keyboard_arrow_right</i>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SampleComponent',
  props: {
    inp: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      dropdownOptions: {
        MY_MEASUREMENTS: {
          'Measurements1': 'MY_MEASUREMENTS',
          'Measurements2': 'MY_MEASUREMENTS',
          'Measurements3': 'MY_MEASUREMENTS'
        },
        MY_ORDER: {
          'Measurements1': 'MY_ORDER',
          'Measurements2': 'MY_ORDER',
          'Measurements3': 'MY_ORDER'
        },
        ALTERATIONS: {
          'Measurements1': 'ALTERATIONS',
          'Measurements2': 'ALTERATIONS',
          'Measurements3': 'ALTERATIONS'
        },
        RETURNS: {
          'Measurements1': 'RETURNS',
          'Measurements2': 'RETURNS',
          'Measurements3': 'RETURNS'
        },
        SELL_ON_ESATTA: {
          'Measurements1': 'SELL_ON_ESATTA',
          'Measurements2': 'SELL_ON_ESATTA',
          'Measurements3': 'SELL_ON_ESATTA'
        },
        CAREERS: {
          'Measurements1': 'CAREERS',
          'Measurements2': 'CAREERS',
          'Measurements3': 'CAREERS'
        },
        PRESS: {
          'Measurements1': 'PRESS',
          'Measurements2': 'PRESS',
          'Measurements3': 'PRESS'
        },
        OTHERS: {
          'Measurements1': 'OTHERS',
          'Measurements2': 'OTHERS',
          'Measurements3': 'OTHERS'
        }
      }
    }
  }
}
</script>

<style scoped>
.container{
    background-color: #C57974;
    color: white;
<<<<<<< HEAD
    max-width: 100%;
    padding-bottom: 5%;
=======
>>>>>>> master
}
.links{
    padding: 10px;
    font-size: medium;
}
.linkContainer{
    display: grid;
    text-align: center;
    padding-top: 1rem;
}
.icon{
    position: sticky;
    left: 41%;
}
</style>
