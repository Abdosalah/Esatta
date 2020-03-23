<template>
  <div class="container">
    <router-link :to="localizedRoute('/my-account')" exact>
      {{ $t('NEW ARRIVALS') }}
    </router-link>
    <router-link :to="localizedRoute('/my-account')" exact>
      {{ $t('ALMOST DONE') }}
    </router-link>
    <router-link :to="localizedRoute('/my-account')" exact>
      {{ $t('MOST POPULAR') }}
    </router-link>
    <router-link :to="localizedRoute('/my-account')" exact>
      {{ $t('BRAND (A TO Z)') }}
    </router-link>
    <router-link :to="localizedRoute('/my-account')" exact>
      {{ $t('BRAND (Z TO A)') }}
    </router-link>
    <router-link :to="localizedRoute('/my-account')" exact>
      {{ $t('COUNTRY OF ORIGIN (A TO Z)') }}
    </router-link>
    <router-link :to="localizedRoute('/my-account')" exact>
      {{ $t('COUNTRY OF ORIGIN (Z TO A)') }}
    </router-link>
    <router-link :to="localizedRoute('/my-account')" exact>
      {{ $t('PRICE (HIGH TO LOW)') }}
    </router-link>
    <router-link :to="localizedRoute('/my-account')" exact>
      {{ $t('PRICE (LOW TO HIGH)') }}
    </router-link>
    <Dropdown />
  </div>
</template>

<script>
import Dropdown from 'theme/components/core/blocks/Browse/Dropdown'
export default {
  components: {
    Dropdown
  }
}
</script>

<style scoped>
.container{
    color: #7b4240;
    font-size: x-small;
    letter-spacing: 1px;
    display: grid;
    margin-left: 20%;
    width: fit-content;
}
</style>
