<template>
  <div class="">
    <div class="container">
      <router-link :to="localizedRoute('/i/about-us')" exact class="text">
        {{ $t('PRIVACY') }}
      </router-link>
      <router-link :to="localizedRoute('/i/about-us')" exact class="text">
        {{ $t('TERMS & CONDITIONS') }}
      </router-link>
      <router-link :to="localizedRoute('/i/about-us')" exact class="text">
        {{ $t('© 2020 Esatta') }}
      </router-link>
      <!-- <p class="text">WEBSITE DESIGN BY</p>
      <img src="/assets/svg/jtb_logo.svg" class="img pointer sm:w-10prc md:w-7prc"> -->
    </div>
  </div>
</template>>
<script>
export default {
}
</script>>
<style lang= scss scoped>

.img{
    width: 7%;
    margin-bottom: 2%;
}
.container{
  padding-bottom: 15px;
  display: flex;
  /* font-size: xx-small; */
  font-size: xx-small;
  color: #C57974;
  justify-content: center;
}
.text{
  margin-left: 2%;
  letter-spacing: 1px;
  padding-top: 1%;
}
</style>
