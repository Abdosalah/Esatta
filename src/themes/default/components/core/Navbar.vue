<template>
  <nav>
    <div class="Navbar hidden lg:block animated fadein">
      <img class="image" src="../../assets/logo.svg">
      <router-link v-if="!currentUser" :to="localizedRoute('/my-profile')" exact class="link">
        <img src="../../assets/svg/measure.svg" class="images">
        {{ $t('MEASURE ME') }}
      </router-link>
      <router-link :to="localizedRoute('/b/women-20')" exact class="link">
        <img src="../../assets/svg/browse_b.svg" class="images opacity-25">
        {{ $t('BROWSE') }}
      </router-link>
      <router-link :to="localizedRoute('/')" exact class="link">
        <img src="../../assets/svg/like_prod.svg" class="images opacity-25">
        <!-- <WishlistIcon /> -->
        {{ $t('LIKED') }}
      </router-link>
      <!-- <router-link :to="localizedRoute('/MicrocartIcon')" exact class="link">
        <img src="assets/svg/bag.svg" class="images">
        {{ $t('BAG') }}
      </router-link> -->
      <MicrocartIcon />
      <router-link v-if="!currentUser" :to="localizedRoute('/returns')" exact class="link">
        <img src="../../assets/svg/log_in.svg" class="images">
        {{ $t('LOG IN') }}
      </router-link>
      <router-link v-else :to="localizedRoute('/my-account')" exact class="link">
        <img src="../../assets/svg/measure.svg" class="images">
        {{ $t('MEASURE ME') }}
      </router-link>
      <Currency class="currency opacity-25" />
      <div class="downlinks">
        <router-link :to="localizedRoute('/how-it-works')" exact class="link">
          {{ $t('HOW IT WORKS') }}
        </router-link>
        <router-link :to="localizedRoute('/designers')" exact class="link">
          {{ $t('OUR DESIGNERS') }}
        </router-link>
        <router-link v-if="!currentUser" :to="localizedRoute('/body-shapes')" exact class="link">
          {{ $t('BODY SHAPES') }}
        </router-link>
      </div>
    </div>
    <div class="lg:hidden">
      <MediumNavbar />
    </div>
  </nav>
</template>

<script>
import Currency from 'theme/components/core/Currency'
import MediumNavbar from 'theme/components/core/MediumNavbar'
import MicrocartIcon from 'theme/components/core/blocks/Header/MicrocartIcon'
import WishlistIcon from 'theme/components/core/blocks/Header/WishlistIcon'
export default {
  components: {
    Currency,
    MediumNavbar,
    MicrocartIcon,
    WishlistIcon
  }
}
</script>

<style lang="scss" scoped>
.Navbar{
  position: fixed;
  right: 4%;
  top: 24%;
  z-index: 1000;
  background-color: white;
  padding: 5px;
  color: black;
  font-weight: bold;
  width: 11rem;
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
  color: #536C4E;
  font-size: xx-small;
  text-align: center;
  letter-spacing: 1px;
  padding: 5%;
  padding-top: 0%;
  margin-bottom: 10%;
}
</style>>
