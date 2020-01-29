<template>
  <footer class="f1 lg:pr-nav">
    <div class="hidden md:block">
      <ShopWomen />
    </div>
    <hr class="hr-text">
    <div class="downfooter hidden md:flex">
      <!-- <div class="container hidden md:inline-block">
        <p class="heading">
          {{ $t('Shop Woman') }}
        </p>
        <div class="Subcontainer">
          <p class="subheading">
            {{ $t('CATEGORIES') }}
          </p>
          <div class="links">
            <div class="link">
              <div class="mb-1">
                <router-link :to="localizedRoute('/returns')" exact>
                  {{ $t('FESTIVALS') }}
                </router-link>
              </div>
              <div class="mb-1">
                <router-link :to="localizedRoute('/returns')" exact>
                  {{ $t('BRIDAL PARTIES') }}
                </router-link>
              </div>
              <div class="mb-1">
                <router-link :to="localizedRoute('/returns')" exact>
                  {{ $t('BEACH TO BAR') }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="container hidden lg:inline-block">
        <div class="">
          <p class="heading">
            {{ $t('Browse') }}
          </p>
          <div class="link">
            <router-link :to="localizedRoute('/my-account')" exact>
              {{ $t('SHOP WOMAN') }}
            </router-link>
          </div>
          <div class="link">
            <router-link :to="localizedRoute('/delivery')" exact>
              {{ $t('LATEST DESIGNS') }}
            </router-link>
          </div>
          <div class="link">
            <router-link :to="localizedRoute('/returns')" exact>
              {{ $t('BUY FOR A FRIEND') }}
            </router-link>
          </div>
          <div class="link">
            <router-link :to="localizedRoute('/returns')" exact>
              {{ $t('BODY SHAPES') }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="container hidden md:inline-block">
        <div class="">
          <p class="heading">
            {{ $t('Account') }}
          </p>
          <div class="link">
            <router-link :to="localizedRoute('/my-account')" exact>
              {{ $t('YOUR BAG') }}
            </router-link>
          </div>
          <div class="link">
            <router-link :to="localizedRoute('/delivery')" exact>
              {{ $t('LIKED') }}
            </router-link>
          </div>
          <div class="link">
            <router-link :to="localizedRoute('/returns')" exact>
              {{ $t('PURCHASE HISTORY') }}
            </router-link>
          </div>
          <div class="link">
            <router-link :to="localizedRoute('/returns')" exact>
              {{ $t('SETTINGS') }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="container inline-block text-center md:text-left">
        <p class="heading">
          {{ $t('Quick Links') }}
        </p>
        <div class="link">
          <router-link :to="localizedRoute('/i/about-us')" exact>
            {{ $t('MEASURE ME') }}
          </router-link>
        </div>
        <div class="link">
          <router-link :to="localizedRoute('/i/customer-service')" exact>
            {{ $t('HOW IT WORKS') }}
          </router-link>
        </div>
        <div class="link">
          <router-link :to="localizedRoute('/store-locator')" exact>
            {{ $t('OUR DESIGNERS') }}
          </router-link>
        </div>
        <div class="link">
          <router-link :to="localizedRoute('/store-locator')" exact>
            {{ $t('SELL ON ESSATA') }}
          </router-link>
        </div>
      </div>
      <div class="container hidden md:inline-block">
        <p class="heading">
          {{ $t('Help') }}
        </p>
        <div class="link">
          <router-link :to="localizedRoute('/customer-service')" exact>
            {{ $t('DELIVERY') }}
          </router-link>
        </div>
        <div class="link">
          <router-link :to="localizedRoute('/size-guide')" exact>
            {{ $t('ALTERATIONS & RETURNS') }}
          </router-link>
        </div>
        <div class="link">
          <router-link :to="localizedRoute('/contact')" exact>
            {{ $t('FAQ') }}
          </router-link>
        </div>
        <div class="link">
          <router-link :to="localizedRoute('/contact')" exact>
            {{ $t('CONTACT') }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="md:hidden">
      <div class="block">
        <SocialMedia />
      </div>
      <div class="container inline-block text-center md:text-left">
        <p class="headingQL">
          {{ $t('Quick Links') }}
        </p>
        <div class="link">
          <router-link :to="localizedRoute('/i/about-us')" exact>
            {{ $t('DELIVERY') }}
          </router-link>
        </div>
        <div class="link">
          <router-link :to="localizedRoute('/i/customer-service')" exact>
            {{ $t('ALTERATIONS') }}
          </router-link>
        </div>
        <div class="link">
          <router-link :to="localizedRoute('/store-locator')" exact>
            {{ $t('FAQ') }}
          </router-link>
        </div>
        <div class="link">
          <router-link :to="localizedRoute('/store-locator')" exact>
            {{ $t('SELL ON ESSATA') }}
          </router-link>
        </div>
        <div class="link">
          <router-link :to="localizedRoute('/store-locator')" exact>
            {{ $t('CONTACT') }}
          </router-link>
        </div>
      </div>
      <div class="securepayment pb-3">
        <SecurePayment />
      </div>
    </div>
    <jtb />
    <div class="h-16 lg:hidden" />
  </footer>
</template>

<script>
import ShopWomen from 'theme/components/core/blocks/Footer/ShopWomen'
import SocialMedia from 'theme/components/core/blocks/Footer/SocialMedia'
import SecurePayment from 'theme/components/core/blocks/Footer/SecurePayment'
import jtb from 'theme/components/core/blocks/Footer/jtb'
export default {
  components: {
    ShopWomen,
    SocialMedia,
    SecurePayment,
    jtb
  }
}
</script>

<style scoped>
.f1{
  background-color : rgb(20, 0, 0);
  color: rgb(209, 193, 169);
  justify-content: center;
  height: 50%;
  font-family: LATO, "EB GARAMOND";
}
.downfooter{
  /* display: flex; */
}
.container{
  height: 10%;
  align-items: vertical;
  margin: 3%;
  justify-content: center;
  align-items: center;
  font-size: 8pt;
  width: -webkit-fill-available;
}
.Subcontainer{
  width: fit-content;
}
.subheading{
  letter-spacing: 1px;
  padding: 1%;
  font-size: 8pt;
  padding-bottom: 15%;
}
.heading{
  color: #C57974;
  font-size: 12pt;
  margin-bottom: 15%;
}
.headingQL{
  color: #C57974;
  font-size: 12pt;
  margin-bottom: 5%;
}
.links{
  /* color: rgb(207, 132, 132); */
  display: flex;
  padding-left: 2%;
  padding-right: 2%;
  font-size: 6pt;
  letter-spacing: 2px;
}
.link{
  letter-spacing: 1px;
  padding: 1%;
}
.link:hover{
  color: #C57974;
  transition: 0.3s;
}
.divider{
  background-color: brown;
}
.hr-text {
  line-height: 1em;
  position: relative;
  outline: 0;
  margin-left: 3%;
  margin-right: 3%;
  /* border: 0; */
  color: #C57974;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 1.5em;
  opacity: .5;
  /* width: 80%; */
  }
  .hr1 {
    border: none;
    border-top: 1px double white;
    overflow: visible;
    text-align: center;
    height: 5px;
    margin-bottom: 2%;
    width: 80%;
    font-size: x-small;
    letter-spacing: 1px;
    opacity: 0.30;
}
hr1:after {
    background: rgb(20, 0, 0);
    color:white;
    content: 'SECURE PAYMENT';
    padding: 0 4px;
    position: relative;
    top: -9px;
    margin: 2%;
}
.securepayment{
  width: 100%;
  height: 40%;
}
</style>
