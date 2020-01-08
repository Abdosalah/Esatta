<template>
  <footer class="f2">
    <div class="shopwomancontainer hidden lg:inline-block">
      <p class="heading">
        {{ $t('Shop Woman') }}
      </p>
      <div class="upfooter">
        <div class="container">
          <p class="subheading">
            {{ $t('CATEGORIES') }}
          </p>
          <div class="links">
            <div class="link">
              <div>
                <router-link :to="localizedRoute('/returns')" exact>
                  {{ $t('FESTIVALS') }}
                </router-link>
              </div>
              <div>
                <router-link :to="localizedRoute('/returns')" exact>
                  {{ $t('BRIDAL PARTIES') }}
                </router-link>
              </div>
              <div>
                <router-link :to="localizedRoute('/returns')" exact>
                  {{ $t('BEACH TO BAR') }}
                </router-link>
              </div>
            </div>
            <div class="link">
              <div>
                <router-link :to="localizedRoute('/returns')" exact>
                  {{ $t('CHRISTMAS PARTY') }}
                </router-link>
              </div>
              <div>
                <router-link :to="localizedRoute('/returns')" exact>
                  {{ $t('SUMMER FUN') }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <p class="subheading">
            {{ $t('PRODUCTS') }}
          </p>
          <div class="links">
            <div class="link">
              <div>
                <router-link :to="localizedRoute('/returns')" exact>
                  {{ $t('FESTIVALS') }}
                </router-link>
              </div>
              <div>
                <router-link :to="localizedRoute('/returns')" exact>
                  {{ $t('BRIDAL PARTIES') }}
                </router-link>
              </div>
              <div>
                <router-link :to="localizedRoute('/returns')" exact>
                  {{ $t('BEACH TO BAR') }}
                </router-link>
              </div>
            </div>
            <div class="link">
              <div>
                <router-link :to="localizedRoute('/returns')" exact>
                  {{ $t('CHRISTMAS PARTY') }}
                </router-link>
              </div>
              <div>
                <router-link :to="localizedRoute('/returns')" exact>
                  {{ $t('SUMMER FUN') }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shopwomancontainer inline-block">
      <Newsletter />
    </div>
  </footer>
</template>

<script>
import Newsletter from 'theme/components/core/blocks/Footer/Newsletter'
export default {
  components: {
    Newsletter
  }
}
</script>

<style scoped>
.f2{
  display: flex;
  background-color : rgb(20, 0, 0);
  color: rgb(209, 193, 169);
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 3%;
}
.upfooter{
  display: flex;
  justify-content: center;
  padding: 3%;
}
.shopwomancontainer{
  height: 10%;
  align-items: vertical;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.container{
  width: fit-content;
}
.heading{
  color: rgb(214, 155, 121);
  font-size: 12pt;
  text-align: center;
  padding-bottom: 5%;
  padding-right: 5%;
}
.subheading{
  letter-spacing: 1px;
  padding: 1%;
  font-size: 8pt;
  padding-bottom: 4%;
}
.links{
  color: rgb(207, 132, 132);
  display: flex;
  padding-left: 2%;
  padding-right: 2%;
  font-size: 6pt;
  letter-spacing: 2px;
}
.link{
  padding: 2%;
}
.link:hover{
  color: #C57974;
  transition: 0.3s;
}
</style>
