<template>
  <div>
    <div class="Navbar hidden lg:block">
      <img class="images" src="assets/esatta-images/plus.svg">

      <router-link :to="localizedRoute('/my-account')" exact class="link">
        <img src="assets/esatta-images/page-banner/measure.svg" class="images">
        {{ $t('MEASURE ME') }}
      </router-link>
      <router-link :to="localizedRoute('/delivery')" exact class="link">
        <img src="assets/esatta-images/page-banner/browse.svg" class="images">
        {{ $t('BROWSE') }}
      </router-link>
      <router-link :to="localizedRoute('/returns')" exact class="link">
        <img src="assets/esatta-images/page-banner/measure.svg" class="images">
        {{ $t('LIKED') }}
      </router-link>
      <router-link :to="localizedRoute('/returns')" exact class="link">
        <img src="assets/esatta-images/page-banner/measure.svg" class="images">
        {{ $t('BAG') }}
      </router-link>
      <router-link :to="localizedRoute('/returns')" exact class="link">
        <img src="assets/esatta-images/page-banner/measure.svg" class="images">
        {{ $t('LOG IN') }}
      </router-link>
      <Currency class="currency" />
      <div class="downlinks">
        <router-link :to="localizedRoute('/returns')" exact class="link">
          {{ $t('HOW IT WORKS') }}
        </router-link>
        <router-link :to="localizedRoute('/returns')" exact class="link">
          {{ $t('OUR DESIGNERS') }}
        </router-link>
        <router-link :to="localizedRoute('/returns')" exact class="link">
          {{ $t('BODY SHAPES') }}
        </router-link>
      </div>
    </div>
    <div class="lg:hidden">
      <MediumNavbar />
    </div>
  </div>
</template>

<script>
import Currency from 'theme/components/core/Currency'
import MediumNavbar from 'theme/components/core/MediumNavbar'
export default {
  components: {
    Currency,
    MediumNavbar
  }
}
</script>

<style lang="scss" scoped>
.Navbar{
  position: fixed;
  right: 5%;
  top: 28%;
  z-index: 1000;
  background-color: white;
  padding: 5px;
  color: black;
  font-weight: bold;
  width: 12%;
  height: 57%;
}
.image{
  width:20%;
  height:10%;
  text-align: center;
  padding-top: 20%;
  padding-bottom: 20%;
  justify-content: center;
}
.images{
  opacity: 0.20;
}
.link{
  display: flex;
  text-align: center;
  font-size: x-small;
  letter-spacing: 2px;
  padding: 2%;
  padding-left: 10%;
}
.images{
  width:1.75rem;
  height:1.75rem;
  padding: 2%;
  margin-right: 10%;
  position: relative;
  bottom: 8px;
}
.currency{
  width: 80%;
  border-style: none;
  background: transparent;
  outline: none;
  text-align: center;
  font-size: x-small;
  margin-top: 10%;
  text-align: center;
}
.downlinks{
  color: #EC145B;
  font-size: xx-small;
  text-align: center;
  letter-spacing: 1px;
  padding: 5%;
}
</style>>
