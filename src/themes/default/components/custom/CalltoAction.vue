<template>
  <div class="main-div" v-if="display">
    <p class="inline">
      JOIN OUR NEWSLETTER
    </p>
    <p class="inline text-orange-400 italic">
      for exclusive designs available only for a limited time
    </p>
    <button class="close-button" @click="toggle()">
      X
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      display: true
    }
  },
  methods: {
    toggle () {
      this.display = false
    }
  }
}
</script>

<style lang="scss" scoped>
.main-div {
  background-color: black;
  text-align: center;
  font-size: .875rem;
  position: fixed;
  z-index: 1000;
  color: white;
  width: 100%;
  top: 0%;
}
.close-button {
  position: absolute;
  right: 0%;
  outline: none;
  padding: 0 1rem;
}
</style>
