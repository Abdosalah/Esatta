<template>
  <div class="main-div">
    <header class="modal-header py25 px65 h1 serif weight-700">
      <i
        slot="close"
        class="modal-close material-icons p15 cl-bg-tertiary"
        @click="close"
      >
        close
      </i>
      {{ $t('Log In') }}
    </header>
    <div v-if="hasRedirect" class="pt10 pb10 px65 redirect-error">
      <p class="h5 mb0 mt0">
        {{ $t('You need to be logged in to see this page') }}
      </p>
    </div>
    <div class="bg-blue-800 w-full mb10 ">
      <img class="h-5 w-5 mr-5" src="assets/esatta-images/facebook.svg">
    </div>
    <div class="modal-content pt30 pb60 px65 cl-secondary">
      <form @submit.prevent="login" novalidate>
        <base-input
          class="mb10"
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
        <base-input
          class="mb10"
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
            {{ $t('Remember me') }}
          </base-checkbox>
          <div class="col-xs-5 col-sm-6 mb35 flex end-xs middle-xs forgot-pass">
            <a href="#" @click.prevent="remindPassword">
              {{ $t('Forgot the password?') }}
            </a>
          </div>
        </div>
        <button-full class="mb20" type="submit" data-testid="loginSubmit">
          {{ $t('Log in to your account') }}
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
      hasRedirect: !!localStorage.getItem('redirect')
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

  .my-pass[type=password], textarea {
    background-color :cyan;
  }

  .modal-content {
    @media (max-width: 400px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  .redirect-error {
    background-color: $color-error;
    color: $white;
  }

  .forgot-pass {
    color : #C57974;
  }
</style>
