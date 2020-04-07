<template>
  <div class="container">
    <div class="grid lg:block m-10">
      <input class="w-full lg:w-45%" v-model="message" placeholder="Name*">
      <input class="w-full lg:w-45%" v-model="message" placeholder="Surname*">
    </div>
    <div class="flex m-10">
      <input class="w-45% mr-2" v-model="message" placeholder="Your Email*">
      <div class="w-45% flex">
        <input class="w-20 mx-2 phoneNo" v-model="message" placeholder="+61*">
        <input class="w-4/5 phoneNo" v-model="message" placeholder="Phone*">
      </div>
    </div>
    <div class="m-10 w-11/12">
      <select @click="careerCheck()">
        <option :value="null">
          Select Issue
        </option>
        <option v-for="(opti) in options" :value="opti" :key="opti">
          {{ opti.name }}
        </option>
      </select>
    </div>
    <div class="input m-10">
      <textarea class="area w-1/2" v-model="message" placeholder=" Message*" />
    </div>
    <div v-show="attachment">
      <upload />
    </div>
    <div class="m-10">
      <button class="btn-1 pointer">
        <span>EXAMPLE OF COLLECTION</span>
      </button>
      <button class="btn-2 pointer">
        <span>SUBMIT</span>
      </button>
    </div>
  </div>
</template>

<script>
import upload from 'theme/components/core/blocks/Contact/upload'
export default {
  components: {
    upload
  },
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      attachment: false
    }
  },
  methods: {
    careerCheck () {
      for (let i = 0; i < this.options.length; i++) {
        if (this.options[i].attachment === true) {
          this.attachment = true
        } else if (this.options[i].attachment === false) {
          this.attachment = false
        }
      }
    }
  }
}
</script>

<style scoped>
  .container{
      font-size: xx-large;
      padding: 5%;
  }
  input{
      outline: 0;
      border-width: 0 0 2px;
      border-color: black;
  }
  select{
      color: #9db0bb;
      background-color: white;
      outline: 0;
      border-width: 0 0 2px;
      border-color: black;
  }
  .phoneNo{
      margin-bottom: 0;
  }
  .dropdown{
      background-color: white;
      width: 90%;
  }
  .area{
      outline: 0;
      border-width: 1px;
      border-color: black;
      padding: 1%;
  }
  .btn-1{
      background-color: black;
      color: white;
      font-size: xx-small;
      text-align: center;
      height: 4rem;
      width: 11rem;
      margin: 1%;
  }
  .btn-2{
      background-color: #EC145B;;
      color: white;
      font-size: xx-small;
      text-align: center;
      height: 4rem;
      width: 11rem;
      margin: 1%;
  }
  /* #app {
  text-align: center;
} */
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
</style>
