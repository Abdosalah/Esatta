<template>
  <div class="lg:flex">
    <div class="lg:hidden main-div lg:relative">
      <img class="h-screen w-screen object-cover lg:block opacity-50" src="../../../../assets/contact_bcg.jpg">
      <div class="imgText2 lg:absolute lg:block m-auto table">
        <h1 class="text-5xl font-extrabold ml-20">
          Frequently Asked Questions
        </h1>
      </div>
    </div>
    <div class="text-center lg:text-left lg:w-full linkContainer">
      <v-btn class="links lg:w-2/5 pointer" v-model="inp" @click="SHIPPING = !SHIPPING">
        SHIPPING
      </v-btn>
      <div class="textSpace" v-show="SHIPPING">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ea adipisci quisquam maiores magni veniam error repellat exercitationem odio modi pariatur amet accusamus, non consectetur praesentium fuga, cumque voluptatum animi!
      </div>
      <v-btn class="links lg:w-2/5 pointer" v-model="inp" @click="PAYPAL = !PAYPAL">
        PAYPAL
      </v-btn>
      <div class="textSpace" v-show="PAYPAL">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ea adipisci quisquam maiores magni veniam error repellat exercitationem odio modi pariatur amet accusamus, non consectetur praesentium fuga, cumque voluptatum animi!
      </div>
      <v-btn class="links lg:w-2/5 pointer" v-model="inp" @click="MY_PURCHASES = !MY_PURCHASES">
        MY PURCHASES
      </v-btn>
      <div class="textSpace" v-show="MY_PURCHASES">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ea adipisci quisquam maiores magni veniam error repellat exercitationem odio modi pariatur amet accusamus, non consectetur praesentium fuga, cumque voluptatum animi!
      </div>
      <v-btn class="links lg:w-2/5 pointer" v-model="inp" @click="MY_ACCOUNT = !MY_ACCOUNT">
        MY ACCOUNT
      </v-btn>
      <div class="textSpace" v-show="MY_ACCOUNT">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ea adipisci quisquam maiores magni veniam error repellat exercitationem odio modi pariatur amet accusamus, non consectetur praesentium fuga, cumque voluptatum animi!
      </div>
      <v-btn class="links lg:w-2/5 pointer" v-model="inp" @click="ALTERATIONS_AND_MISTAKES = !ALTERATIONS_AND_MISTAKES">
        ALTERATIONS AND MISTAKES
      </v-btn>
      <div class="textSpace" v-show="ALTERATIONS_AND_MISTAKES">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ea adipisci quisquam maiores magni veniam error repellat exercitationem odio modi pariatur amet accusamus, non consectetur praesentium fuga, cumque voluptatum animi!
      </div>
      <v-btn class="links lg:w-2/5 pointer" v-model="inp" @click="CARE = !CARE">
        CARE
      </v-btn>
      <div class="textSpace" v-show="CARE">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ea adipisci quisquam maiores magni veniam error repellat exercitationem odio modi pariatur amet accusamus, non consectetur praesentium fuga, cumque voluptatum animi!
      </div>
      <v-btn class="links lg:w-2/5 pointer" v-model="inp" @click="STORE_CREDIT = !STORE_CREDIT">
        STORE CREDIT
      </v-btn>
      <div class="textSpace" v-show="STORE_CREDIT">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ea adipisci quisquam maiores magni veniam error repellat exercitationem odio modi pariatur amet accusamus, non consectetur praesentium fuga, cumque voluptatum animi!
      </div>
      <v-btn class="links lg:w-2/5 pointer" v-model="inp" @click="RETURNS = !RETURNS">
        RETURNS
      </v-btn>
      <div class="textSpace" v-show="RETURNS">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ea adipisci quisquam maiores magni veniam error repellat exercitationem odio modi pariatur amet accusamus, non consectetur praesentium fuga, cumque voluptatum animi!
      </div>
    </div>
    <div class="hidden lg:block main-div lg:relative">
      <img class="h-screen w-screen object-cover lg:block opacity-50" src="../../../../assets/contact_bcg.jpg">
      <div class="imgText lg:absolute lg:block m-auto table">
        <h1 class="text-5xl font-extrabold ml-20 mr-20">
          Frequently Asked Questions
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      SHIPPING: false,
      PAYPAL: false,
      MY_PURCHASES: false,
      MY_ACCOUNT: false,
      ALTERATIONS_AND_MISTAKES: false,
      CARE: false,
      STORE_CREDIT: false,
      RETURNS: false
    }
  }
}
</script>
<style scoped>
.main-div{
  color: white;
  background-color: black;
}
.imgText{
  width: 60%;
  text-align: center;
  top: 35%;
}
.imgText2{
  text-align: center;
  position: absolute;
  top: 22%;
  left: 3%;
  font-size: xxx-large
}
.links{
    margin: 15px;
    font-size: medium;
    margin-left: 10%;
    margin-right: 10%;
    border-bottom: 1px solid white;
    height: fit-content;
    font-weight: 600;
}
.linkContainer{
    display: grid;
    padding-top: 2rem;
    background-color: #C57974;
    color: white;
}
.icon{
    position: sticky;
    left: 41%;
}
.textSpace{
  margin-left: 10%;
  margin-right: 10%;
}
</style>
