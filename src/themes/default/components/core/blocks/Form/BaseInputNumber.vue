<template>
  <div class="base-input-number">
    <label class="base-input-number__label cl-primary flex pb-3" :for="getInputId">{{ name }}</label>
    <button type="button" class="button hollow circle" data-quantity="minus" data-field="quantity">
      <i class="material-icons">plus</i>
    </button>
    <input
      :id="getInputId"
      type="number"
      :min="min"
      class="m0 no-outline base-input-number__input brdr-cl-primary bg-cl-transparent h4"
      :focus="autofocus"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    >
    <ValidationMessages v-if="validations" :validations="validations" />
  </div>
</template>

<script>
import ValidationMessages from './ValidationMessages.vue'
export default {
  name: 'BaseInput',
  components: {
    ValidationMessages
  },
  data () {
    return {
    }
  },
  props: {
    value: {
      type: [String, Number],
      default: 0
    },
    name: {
      type: String,
      required: false,
      default: ''
    },
    min: {
      type: Number,
      default: 0
    },
    autofocus: {
      type: Boolean,
      required: false,
      default: false
    },
    validations: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    getInputId () {
      return `input_${this._uid}`
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~theme/css/variables/colors';
  @import '~theme/css/helpers/functions/color';

  .base-input-number {
    display: flex;
    width: 100%;

    &__input {
      font-weight: bold;
      font-size: x-small;
      width: 50px;
      height: 1.4rem;
      // line-height: 1.7rem;
      @media (min-width: 768px) {
        height: 1.7rem;
      }
    }

    &__label {
      color: #C57974;
      font-size: x-small;
      // line-height: 1.2rem;
      max-width: 100px;
      @media (min-width: 768px) {
        font-size: x-small;
        line-height: 1.4rem;
      }
    }
  }

</style>
