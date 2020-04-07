<template>
  <div class="container">
    <h6 class="font-extrabold p-4 md:p-16">
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
      <v-btn class="links pointer" v-model="inp" @click="$emit('update:inp', dropdownOptions.OTHERS); ">
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
        MY_MEASUREMENTS: [
          {name: 'MY_MEASUREMENTS'},
          {name: 'MY_MEASUREMENTS'},
          {name: 'MY_MEASUREMENTS'},
          {attachment: false}
        ],
        MY_ORDER: [
          {name: 'MY_ORDER'},
          {name: 'MY_ORDER'},
          {name: 'MY_ORDER'},
          {attachment: false}
        ],
        ALTERATIONS: [
          {name: 'ALTERATIONS'},
          {name: 'ALTERATIONS'},
          {name: 'ALTERATIONS'},
          {attachment: false}
        ],
        RETURNS: [
          {name: 'RETURNS'},
          {name: 'RETURNS'},
          {name: 'RETURNS'},
          {attachment: false}
        ],
        SELL_ON_ESATTA: [
          {name: 'SELL_ON_ESATTA'},
          {name: 'SELL_ON_ESATTA'},
          {name: 'SELL_ON_ESATTA'},
          {attachment: false}
        ],
        CAREERS: [
          {name: 'CAREERS'},
          {name: 'CAREERS'},
          {name: 'CAREERS'},
          {attachment: true}
        ],
        PRESS: [
          {name: 'PRESS'},
          {name: 'PRESS'},
          {name: 'PRESS'},
          {attachment: false}
        ],
        OTHERS: [
          {name: 'OTHERS'},
          {name: 'OTHERS'},
          {name: 'OTHERS'},
          {attachment: false}
        ]
      }
    }
  }
}
</script>

<style scoped>
.container{
    background-color: #C57974;
    color: white;
    max-width: 100%;
    padding-bottom: 5%;
    padding-top: 5%;
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
