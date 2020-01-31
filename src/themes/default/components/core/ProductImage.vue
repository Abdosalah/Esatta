<template>
  <div class="image" v-on="$listeners">
    <img
      v-show="showPlaceholder"
      src="/assets/placeholder.svg"
      :alt="alt"
      key="placeholder"
      ref="images"
      itemprop="image"
      class="image__thumb image__thumb--placeholder"
    >
    <img
      v-if="!lowerQualityImageError || isOnline"
      v-show="showLowerQuality"
      :src="image.loading"
      :alt="alt"
      @load="imageLoaded('lower', true)"
      @error="imageLoaded('lower', false)"
      key="lowerQualityImage"
      ref="images"
      itemprop="image"
      class="image__thumb"
    >
    <img
      v-if="!highQualityImageError || isOnline"
      v-show="showHighQuality"
      :src="image.src"
      :alt="alt"
      @load="imageLoaded('high', true)"
      @error="imageLoaded('high', false)"
      key="highQualityImage"
      ref="images"
      itemprop="image"
      class="image__thumb"
    >
    <!-- <i class="close fa fa-times" /> -->
    <!-- <i class="material-icons">close</i> -->
  </div>
</template>

<script>
import { onlineHelper } from '@vue-storefront/core/helpers'

export default {
  props: {
    image: {
      type: Object,
      default: () => ({
        src: '',
        loading: ''
      })
    },
    alt: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      lowerQualityImage: false,
      lowerQualityImageError: false,
      highQualityImage: false,
      highQualityImageError: false
    }
  },
  computed: {
    showPlaceholder () {
      return !this.showLowerQuality && !this.showHighQuality
    },
    showLowerQuality () {
      return this.lowerQualityImage && !this.showHighQuality
    },
    showHighQuality () {
      return this.highQualityImage
    },
    isOnline (value) {
      return onlineHelper.isOnline
    }
  },
  methods: {
    imageLoaded (type, success = true) {
      this[`${type}QualityImage`] = success
      this[`${type}QualityImageError`] = !success
    }
  }
}
</script>

<style lang="scss" scoped>
  .image{
    position: relative;
    height: 0;
    padding-bottom: calc(740% / (1100 / 80));
    // overflow: hidden;
    &__thumb{
      max-width: 100%;
      height: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      width: auto;
      height: 100%;
      transform: translate3d(-50%, -50%, 0);
      &--placeholder{
        width: auto;
        height: auto;
      }
    }
  }
  i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5em;
    z-index: 1;
    transition: all 0.25s;
  }

  // &:hover {
  //   i {
  //     text-shadow: 1px 2px 5px black;
  //   }

  //   &:after {
  //     background: rgba(0,0,0,0.5);
  //   }
  // }

  // &:active {
  //     i {
  //     text-shadow: 0px 0px 1px black;
  //   }
  // }
</style>
