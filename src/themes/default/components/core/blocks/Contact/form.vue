<template>
  <div class="container">
    <div class="m-10">
      <input class="w-45%" v-model="message" placeholder="Name *">
      <input class="w-45%" v-model="message" placeholder="Surname *">
    </div>
    <div class="flex m-10">
      <input class="w-45% mr-2" v-model="message" placeholder="Your Email *">
      <div class="w-45% flex">
        <input class="w-20 mx-2 phoneNo" v-model="message" placeholder="+61 *">
        <input class="w-60 phoneNo" v-model="message" placeholder="phone *">
      </div>
    </div>
    <div class="m-10 w-11/12">
      <!-- <input class="w-2/5" v-model="message" placeholder="What can we help you with? *"> -->
      <select class="dropdown">
        <option>
          What can we help you with? *
        </option>
        <option value="USD" selected="selected">
          What can we help you with? *
        </option>
        <option value="NZD">
          What can we help you with? *
        </option>
        <option value="EUR">
          What can we help you with? *
        </option>
      </select>
    </div>
    <div class="input m-10">
      <textarea class="area w-1/2" v-model="message" placeholder="Message *" />
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
<style scoped>
    .container{
        font-size: xx-large;
        padding: 5%;
    }
    .input{

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
</style>
