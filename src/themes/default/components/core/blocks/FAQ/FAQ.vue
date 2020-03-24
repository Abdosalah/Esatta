<template>
  <div class="lg:flex">
    <div class="lg:hidden main-div lg:relative">
      <img class="h-screen w-screen object-cover lg:block opacity-50" src="../../../../assets/contact_bcg.jpg">
      <div class="imgText2 lg:absolute lg:block m-auto table">
        <h1 class="text-5xl ml-20">
          FAQ
        </h1>
      </div>
    </div>
    <div class="text-center lg:text-left lg:w-full linkContainer">
      <v-btn class="links pointer" v-model="inp" @click="$emit('update:inp', dropdownOptions.MY_MEASUREMENTS);">
        SHIPPING
      </v-btn>
      <v-btn class="links pointer" v-model="inp" @click="$emit('update:inp', dropdownOptions.MY_ORDER);">
        PAYPAL
      </v-btn>
      <v-btn class="links pointer" v-model="inp" @click="$emit('update:inp', dropdownOptions.ALTERATIONS);">
        MY PURCHASES
      </v-btn>
      <v-btn class="links pointer" v-model="inp" @click="$emit('update:inp', dropdownOptions.RETURNS);">
        MY ACCOUNT
      </v-btn>
      <v-btn class="links pointer" v-model="inp" @click="$emit('update:inp', dropdownOptions.SELL_ON_ESATTA);">
        ALTERATIONS AND MISTAKES
      </v-btn>
      <v-btn class="links pointer" v-model="inp" @click="$emit('update:inp', dropdownOptions.CAREERS);">
        CARE
      </v-btn>
      <v-btn class="links pointer" v-model="inp" @click="$emit('update:inp', dropdownOptions.PRESS);">
        STORE CREDIT
      </v-btn>
      <v-btn class="links pointer" v-model="inp" @click="$emit('update:inp', dropdownOptions.OTHERS);">
        RETURNS
      </v-btn>
    </div>
    <div class="hidden lg:block main-div lg:relative">
      <img class="h-screen w-screen object-cover lg:block opacity-50" src="../../../../assets/contact_bcg.jpg">
      <div class="imgText lg:absolute lg:block m-auto table">
        <h1 class="text-5xl ml-20">
          FAQ
        </h1>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main-div{
  color: white;
  background-color: black;
}
.imgText{
  width: 60%;
  text-align: center;
  top: 45%;
}
.imgText2{
  text-align: center;
  position: absolute;
  top: 22%;
  left: 36%;
  font-size: xxx-large
}
.links{
    padding: 15px;
    font-size: medium;
}
.linkContainer{
    display: grid;
    padding-top: 6rem;
    background-color: #C57974;
    color: white;
}
.icon{
    position: sticky;
    left: 41%;
}
</style>
