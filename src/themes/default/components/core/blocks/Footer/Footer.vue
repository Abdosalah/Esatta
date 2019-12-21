<template>
  <footer class="f1 lg:pr-nav">
    <div class="shopwoman">
      <ShopWomen />
    </div>
    <hr class="hr-text">
    <div class="downfooter">
      <div class="container hidden lg:inline-block">
        <div class="" >
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
              {{ $t('ACCOUNT SETTINGS') }}
            </router-link>
          </div>
          <div class="link">
            <router-link :to="localizedRoute('/returns')" exact>
              {{ $t('FOR A FRIEND SETTINGS') }}
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
            {{ $t('HOW TO SELL ON ESSATA') }}
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
      <div class="container hidden md:inline-block">
        <p class="heading">
          {{ $t('Follow Us') }}
        </p>
        <div class="link">
          <router-link :to="localizedRoute('/i/about-us')" exact>
            {{ $t('FACEBOOK') }}
          </router-link>
        </div>
        <div class="link">
          <router-link :to="localizedRoute('/i/customer-service')" exact>
            {{ $t('INSTAGRAM') }}
          </router-link>
        </div>
        <div class="link">
          <router-link :to="localizedRoute('/store-locator')" exact>
            {{ $t('SNAPCHAT') }}
          </router-link>
        </div>
        <div class="link">
          <router-link :to="localizedRoute('/store-locator')" exact>
            {{ $t('TUMBLER') }}
          </router-link>
        </div>
        <div class="link">
          <router-link :to="localizedRoute('/store-locator')" exact>
            {{ $t('TWITTER') }}
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import ShopWomen from 'theme/components/core/blocks/Footer/ShopWomen'
export default {
  components: {
    ShopWomen
  }
}
</script>

<style scoped>
.f1{
  background-color : rgb(20, 0, 0);
  color: rgb(209, 193, 169);
  justify-content: center;
  height: 50%;
}
.downfooter{
  display: flex;
}
.container{
  height: 10%;
  align-items: vertical;
  margin: 3%;
  justify-content: center;
  align-items: center;
  font-size: 8pt;
}
.heading{
  color: rgb(214, 155, 121);
  font-size: 12pt;
  margin-bottom: 15%;
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
.shopwoman{
  display: block;
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
</style>
