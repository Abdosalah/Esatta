<template>
  <div>
    <div class="Navbar hidden lg:block">
      <img class="image" src="assets/logo.svg">

      <router-link :to="localizedRoute('/my-account')" exact class="link">
        <img src="assets/esatta-images/page-banner/measure.svg" class="images opacity-25">
        {{ $t('MEASURE ME') }}
      </router-link>
      <router-link :to="localizedRoute('/delivery')" exact class="link">
        <img src="assets/svg/browse_b.svg" class="images opacity-25">
        {{ $t('BROWSE') }}
      </router-link>
      <router-link :to="localizedRoute('/returns')" exact class="link">
        <img src="assets/svg/like_prod.svg" class="images opacity-25">
        {{ $t('LIKED') }}
      </router-link>
      <router-link :to="localizedRoute('/MicrocartIcon')" exact class="link">
        <img src="assets/svg/bag.svg" class="images">
        <MicrocartIcon />
        {{ $t('BAG') }}
      </router-link>
      <router-link :to="localizedRoute('/returns')" exact class="link">
        <img src="assets/svg/log_in.svg" class="images">
        {{ $t('LOG IN') }}
      </router-link>
      <Currency class="currency opacity-25" />
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
import MicrocartIcon from 'theme/components/core/blocks/Header/MicrocartIcon'
export default {
  components: {
    Currency,
    MediumNavbar,
    MicrocartIcon
  }
}
</script>

<style lang="scss" scoped>
.Navbar{
  position: fixed;
  right: 5%;
  top: 24%;
  z-index: 1000;
  background-color: white;
  padding: 5px;
  color: black;
  font-weight: bold;
  width: 10rem;
  height: auto;
}
.image{
    padding-left: 12%;
    padding-right: 20%;
    padding-bottom: 20%;
    padding-top: 15%
}
.link{
  display: flex;
  text-align: center;
  font-size: x-small;
  letter-spacing: 2px;
  padding: 4%;
  padding-left: 10%;
  transition: all 0.3s ease 0s;
}
.link:hover {
  transform: translateY(-7px);
  box-shadow: 0px 15px 20px rgba(0,0,0,0.2);
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
  border-style: none;
  background: transparent;
  outline: none;
  text-align: center;
  font-size: x-small;
  margin-top: 10%;
  text-align: center;
  margin-left: 10%;
  height: fit-content;
}
.downlinks{
  color: #EC145B;
  font-size: xx-small;
  text-align: center;
  letter-spacing: 1px;
  padding: 5%;
  padding-top: 0%;
  margin-bottom: 10%;
}
</style>>
