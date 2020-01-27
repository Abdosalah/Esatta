<template>
  <div id="my_account" class="relative">
    <img class="my-bg-img" src="../assets/esatta-images/my-profile/profile_bg.jpg">

    <div class="bg-white absolute pt-12 top-5% ml-9% mr-9% w-82% lg:w-69%">
      <div class="flex">
        <!--  -->
        <!-- <breadcrumbs
          :routes="[{name: 'Homepage', route_link: '/'}]"
          active-route="My Account"
        /> -->
        <p class="pl-8% pt-12 text-5xl font-extrabold w-1/2">
          My Profile
        </p>
        <div class="pl-10% pt-20 w-2/3">
          <p class="pl-5% inline-block text-dark_grey hover:text-red" v-for="(page, index) in navigation" :key="index">
            <router-link :to="localizedRoute(page.link)" class="router-links">
              {{ page.title }}
            </router-link>
          </p>
        </div>
      </div>

      <div class="">
        <!-- <div class="">
          <nav class="">
            <ul class="">
              <li class="" v-for="(page, index) in navigation" :key="index" @click="notify(page.title)">
                <router-link :to="localizedRoute(page.link)" class="">
                  {{ page.title }}
                </router-link>
              </li>
            </ul>
          </nav>
        </div> -->

        <div class="">
          <no-ssr>
            <component :is="this.$props.activeBlock" />
          </no-ssr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyAccount from '@vue-storefront/core/pages/MyAccount'
import MyProfile from '../components/core/blocks/MyAccount/MyProfile'
import MyMeasurements from '../components/core/blocks/MyAccount/MyMeasurements'
import MyContactDetails from '../components/core/blocks/MyAccount/MyContactDetails'
import MyOrders from '../components/core/blocks/MyAccount/MyOrders'
import MyOrder from '../components/core/blocks/MyAccount/MyOrder'
import NoSSR from 'vue-no-ssr'

export default {
  data () {
    return {
      navigation: [
        { title: this.$t('Measurements'), link: '/my-profile/measurements' },
        { title: this.$t('Purchases'), link: '/my-profile/contact-details' },
        { title: this.$t('Settings'), link: '/my-profile/orders' }
      ]
    }
  },
  components: {
    MyProfile,
    MyMeasurements,
    MyContactDetails,
    MyOrders,
    MyOrder,
    'no-ssr': NoSSR
  },
  mixins: [MyAccount]
  // methods: {
  //   notify (title) {
  //     if (title === 'My loyalty card' || title === 'My product reviews') {
  //       this.$store.dispatch('notification/spawnNotification', {
  //         type: 'warning',
  //         message: this.$t('This feature is not implemented yet! Please take a look at https://github.com/DivanteLtd/vue-storefront/issues for our Roadmap!'),
  //         action1: { label: this.$t('OK') }
  //       })
  //     }
  //   }
  // }
}
</script>

<style lang="scss">
@import '~theme/css/base/text';
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';

.static-menu {
  ul {
    list-style: none;
  }

  a {
    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
    }

    &:hover,
    &.router-link-exact-active {
      &:after {
        opacity: 0;
      }
    }
  }
}

#my_account {
  height: 310vh;
}

.my-bg-img {
  height: 150vh;
  width: 100vw;
  object-fit: cover;
  background: linear-gradient( rgba( 0, 0, 0, 0.0 ), #ffff);
}
.router-links:hover::after {
  content: none;
}
</style>
