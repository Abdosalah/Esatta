<template>
  <div class="h-screen lg:h-65% lg:flex">
    <header id="login" class="modal-header py25 px-15% h1 serif weight-700 sm:text-left md:text-center lg:text-left lg:hidden">
      <i
        slot="close"
        class="modal-close material-icons p15 cl-bg-tertiary"
        @click="close"
      >
        close
      </i>
      {{ $t('LOGIN') }}
    </header>
    <!-- WHAT SHOULD BE HIDDEN WHEN ARROW IS CLICKED -->
    <div v-if="showLogin" class="main-div sm:px-0 md:px-13% lg:px-0 lg:w-1/2">
      <header id="login" class="modal-header px-15% h1 serif weight-700 sm:text-left md:text-center lg:text-left hidden lg:block">
        <i
          slot="close"
          class="modal-close material-icons p15 cl-bg-tertiary"
          @click="close"
        >
          close
        </i>
        {{ $t('LOGIN') }}
      </header>
      <div v-if="hasRedirect" class="pt10 pb10 px65 redirect-error">
        <p class="h5 mb0 mt0">
          {{ $t('You need to be logged in to see this page') }}
        </p>
      </div>
      <!-- FB LOGIN -->
      <div class="mb10 mx-6 md:mx-15% flex">
        <div class="w-1/6 bg-blue-700 opacity-50 p-2">
          <img class="h-6 w-6 m-auto" src="../../../../assets/esatta-images/facebook.svg">
        </div>
        <div class="w-5/6 p-2 fb-blue">
          <p class="text-white text-center text-sm">
            LOGIN WITH FACEBOOK
          </p>
        </div>
      </div>
      <div class="mb10 mx-6 md:mx-15% flex">
        <div class="w-1/6 bg-white p-2">
          <img class="h-6 w-6 m-auto" src="../../../../assets/esatta-images/google.svg">
        </div>
        <div class="w-5/6 p-2 bg-red">
          <p class="text-white text-center text-sm">
            LOGIN WITH GOOGLE
          </p>
        </div>
      </div>
      <p class=" text-center my-text-color">
        or
      </p>
      <div class="modal-content pt-2 pb-4 px-15% cl-secondary">
        <form @submit.prevent="login" novalidate>
          <!-- EMAIL FIELD -->
          <base-input
            class="mb-2"
            type="email"
            name="email"
            focus
            v-model="email"
            @blur="$v.email.$touch()"
            :placeholder="$t('Email')"
            :validations="[
              {
                condition: !$v.email.required && $v.email.$error,
                text: $t('Field is required.')
              },
              {
                condition: !$v.email.email && $v.email.$error,
                text: $t('Please provide valid e-mail address.')
              }
            ]"
          />
          <!-- PASSWORD FIELD -->
          <base-input
            class="mb-2"
            type="password"
            name="password"
            v-model="password"
            @blur="$v.password.$touch()"
            :placeholder="$t('Password')"
            :validations="[{
              condition: !$v.password.required && $v.password.$error,
              text: $t('Field is required.')
            }]"
          />
          <div class="row text-black">
            <base-checkbox
              class="col-xs-7 col-sm-6 mb20"
              id="remember"
              v-model="remember"
            >
              <p class="text-sm">
                Remember me
              </p>
            </base-checkbox>
            <div class="col-xs-5 col-sm-6 mb35 flex end-xs middle-xs my-text-color text-sm">
              <a href="#" @click.prevent="remindPassword">
                {{ $t('Forgot your password?') }}
              </a>
            </div>
          </div>
          <button-full type="submit" data-testid="loginSubmit">
            {{ $t('LOGIN & CONTINUE') }}
          </button-full>
          <!-- REGISTER LINK -->
          <!-- <div class="center-xs text-black">
            {{ $t('or') }}
            <a href="#" @click.prevent="switchElem" data-testid="registerLink">
              {{ $t('register an account') }}
            </a>
          </div> -->
        </form>
      </div>
    </div>

    <div class="hidden lg:block bg-black h-auto w-1/2 relative">
      <img
        class="w-full h-full opacity-25 object-fill"
        src="../../../../assets/esatta-images/login.jpg"
      >
      <!-- md top 15% -->
      <div class="absolute rounded-full h-16 w-16 flex items-center justify-center bg-white left-10% top-10%">
        <img
          class="h-10 w-10"
          src="../../../../assets/esatta-images/signup/measure_me.svg"
        >
      </div>
      <!-- md top 45% -->
      <p class="absolute font-extrabold text-3xl text-center text-white top-12% left-30%">
        MEASURE ME
      </p>
      <p class="absolute text-white text-center top-35% w-full">
        Just answer a few questions about
        <br>yourself to calculate your body shape
      </p>
      <div class="w-fill absolute bottom-10% text-center">
        <button class="border border-white py-2 px-6">
          <img class="h-8 w-6 inline" src="../../../../assets/esatta-images/my-profile/measure_tape_white.svg">
          <p class="text-sm ml-2 inline text-white">
            BASIC MEASUREMENTS
          </p>
        </button>
      </div>
    </div>

    <div class="lg:hidden bg-black h-1/2 lg:bg-white lg:h-auto lg:w-1/2 relative">
      <img
        class="w-full h-full opacity-25 object-cover lg:opacity-100 lg:object-fill"
        src="../../../../assets/esatta-images/login.jpg"
      >
      <a v-if="showLogin" class="left-50% top-0 absolute text-white text-2xl cursor-pointer" @click="showLogin = !showLogin">&#8681;</a>
      <a v-if="!showLogin" class="left-50% top-0 absolute text-white text-2xl cursor-pointer" @click="showLogin = !showLogin">&#8679;</a>
      <!-- md top 6%% -->
      <div class="measure-me-img left-10% md:left-30% bg-white top-10% lg:bg-transparent lg:top-33%">
        <img
          class="h-10 w-10"
          src="../../../../assets/esatta-images/signup/measure_me.svg"
        >
      </div>
      <!-- md top 45% -->
      <p class="absolute tracking-widest text-white font-extrabold text-4xl text-center top-11% left-30% md:left-40%">
        Measure Me
      </p>
      <p class="absolute text-white text-center top-35% w-full">
        Just answer a few questions about
        <br>yourself to calculate your body shape
      </p>
      <div class="w-fill absolute bottom-20% text-center">
        <button class="border border-white py-2 px-6">
          <img class="h-8 w-6 inline" src="../../../../assets/esatta-images/my-profile/measure_tape_white.svg">
          <p class="text-sm ml-2 inline text-white">
            BASIC MEASUREMENTS
          </p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '@vue-storefront/core/compatibility/components/blocks/Auth/Login'

import ButtonFull from 'theme/components/theme/ButtonFull.vue'
import BaseCheckbox from '../Form/BaseCheckbox.vue'
import BaseInput from '../Form/BaseInput.vue'
import { required, email } from 'vuelidate/lib/validators'

export default {
  mixins: [Login],
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  data () {
    return {
      hasRedirect: !!localStorage.getItem('redirect'),
      showLogin: true
    }
  },
  methods: {
    close (e) {
      if (e) localStorage.removeItem('redirect')
      this.$bus.$emit('modal-hide', 'modal-signup')
    },
    login () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        this.$store.dispatch('notification/spawnNotification', {
          type: 'error',
          message: this.$t('Please fix the validation errors'),
          action1: { label: this.$t('OK') }
        })
        return
      }
      this.callLogin()
    },
    remindPassword () {
      if (!(typeof navigator !== 'undefined' && navigator.onLine)) {
        this.$store.dispatch('notification/spawnNotification', {
          type: 'error',
          message: this.$t('Reset password feature does not work while offline!'),
          action1: { label: this.$t('OK') }
        })
      } else {
        this.callForgotPassword()
      }
    },
    onSuccess () {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'success',
        message: this.$t('You are logged in!'),
        action1: { label: this.$t('OK') }
      })
    },
    onFailure (result) {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'error',
        message: this.$t(result.result),
        action1: { label: this.$t('OK') }
      })
    }
  },
  components: {
    ButtonFull,
    BaseCheckbox,
    BaseInput
  }
}
</script>

<style lang="scss" scoped>
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$color-error: color(error);
$white: color(white);

.main-div {
  background-color: #FADBD9;
}

#login {
  background-color: #FADBD9;
}

.redirect-error {
  background-color: $color-error;
  color: $white;
}

.my-text-color {
  color : #C57974;
}

.fb-blue {
  background-color: #3b5998;
}
.measure-me-img {
  justify-content: center;
  border-radius: 9999px;
  align-items: center;
  position: absolute;
  display: flex;
  height: 4rem;
  width: 4rem;
}

a:hover::after {
  display: none;
}
</style>
