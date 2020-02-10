<template>
  <div id="my_account" class="relative">
    <img class="my-bg-img" src="../assets/esatta-images/my-profile/profile_bg.jpg">

    <div class="bg-white absolute pt-12 top-5% ml-9% mr-9% w-82% lg:w-69%">
      <div class="hidden md:flex">
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
        <!-- PAGE HEADER -->
        <div class="flex px-8%">
          <img class="profile-img" src="../assets/esatta-images/my-profile/avatar.jpg">
          <!-- WIP FOR TABLET VIEW -->
          <div class="hidden md:block lg:hidden w-3/5 pt-8 pl-3% text-2xl font-bold">
            ALEX
          </div>
          <div class="w-full ml-4% md:ml-0 lg:hidden">
            <div class="md:mt-6 tablet-header">
              <p class="md:hidden text-2xl font-bold">
                ALEX
              </p>
              <p class="tracking-widest font-bold">
                Womens Clothing
              </p>
            </div>
            <div class="block md:flex">
              <p class="md:w-1/2">
                Height: 173 cm
              </p>
              <p class="md:w-1/2 md:text-right">
                Weight: 70 kg
              </p>
            </div>
          </div>
          <div class="header-div hidden lg:flex">
            <p class="hdr-component">
              Alex
            </p>
            <p class="hdr-component">
              Height: 173 cm
            </p>
            <p class="hdr-component">
              Weight: 70 kg
            </p>
            <p class="pt-6 w-1/4 text-center inline-block">
              Womans Clothing
            </p>
          </div>
        </div>
        <div>
          <div class="pt-10 pl-4% w-full flex md:hidden">
            <p class="w-1/3 text-center inline-block text-dark_grey hover:text-red" v-for="(page, index) in navigation" :key="index">
              <router-link :to="localizedRoute(page.link)" class="router-links">
                {{ page.title }}
              </router-link>
            </p>
          </div>
        </div>
        <no-ssr>
          <component :is="this.$props.activeBlock" />
        </no-ssr>
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
.profile-img {
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
}
.tablet-header {
  border-bottom: 1px solid #EC145B;
}
.header-div {
  border-top: 1px solid #EC145B;
  margin-top: 3rem;
  margin-left: 2rem;
  width: 100%;
}
.hdr-component {
  border-right: 1px solid #EC145B;
  padding-top: 1.5rem;
  width: 25%;
  text-align: center;
  display: inline-block;
}
</style>
