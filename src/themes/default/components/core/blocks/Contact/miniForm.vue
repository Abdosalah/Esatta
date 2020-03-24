<template>
  <div class="container">
    <div class="m-10">
      <input class="w-full" v-model="message" placeholder="Name *">
    </div>
    <div class="m-10">
      <input class="w-full" v-model="message" placeholder="Surname *">
    </div>
    <div class="m-10">
      <input class="w-full" v-model="message" placeholder="Your Email *">
    </div>
    <div class="m-10">
      <input class="w-20 mr-6" v-model="message" placeholder="+61 *">
      <input class="w-3/5 md:w-4/5 phoneNo" v-model="message" placeholder="phone *">
    </div>
    <div class="m-10 w-11/12">
      <select>
        <option v-for="(opti, name) in options" :value="opti" :key="opti">
          {{ opti }} {{ name }}
        </option>
      </select>
    </div>
    <div class="input m-10">
      <textarea class="area" v-model="message" placeholder="Message *" />
    </div>
    <div class="grid md:block m-10">
      <button class="w-full md:w-64 btn-1 pointer">
        <span>EXAMPLE OF COLLECTION</span>
      </button>
      <button class="w-full md:w-64 btn-2 pointer">
        <span>SUBMIT</span>
      </button>
    </div>
    <!-- <div id="app">
      <div v-if="!image">
        <h2>Select file to upload</h2>
        <input type="file" @change="onFileChange">
      </div>
      <div v-else>
        <img :src="image">
        <button @click="removeImage">
          Remove image
        </button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      required: true
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
      /* width: 81%; */
  }
  .dropdown{
      background-color: white;
      width: 90%;
  }
  .area{
      outline: 0;
      border-width: 1px;
      border-color: black;
      width: 100%;
  }
  .btn-1{
      background-color: black;
      color: white;
      font-size: xx-small;
      text-align: center;
      height: 4rem;
      margin: 1%;
  }
  .btn-2{
      background-color: #EC145B;;
      color: white;
      font-size: xx-small;
      text-align: center;
      height: 4rem;
      float: right;
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
button {

}
</style>
