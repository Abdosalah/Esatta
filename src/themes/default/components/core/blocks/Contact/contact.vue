<template>
  <div>
    <div class="block lg:flex">
      <miniContactImg class="block lg:hidden" />
      <help :inp.sync="parentData" />
      <contactImg class="hidden lg:block" />
    </div>
    <div class="block lg:flex lg:mr-nav ">
      <contactForm :options="computedData" class="hidden lg:block" />
      <miniContactForm class="block lg:hidden" />
      <links class="lg:mt-16" />
    </div>
  </div>
</template>
<script>
import help from 'theme/components/core/blocks/Contact/help'
import contactImg from 'theme/components/core/blocks/Contact/contactImg'
import miniContactImg from 'theme/components/core/blocks/Contact/miniContactImg'
import contactForm from 'theme/components/core/blocks/Contact/form'
import miniContactForm from 'theme/components/core/blocks/Contact/miniForm'
import links from 'theme/components/core/blocks/Contact/links'
export default {
  components: {
    help,
    contactImg,
    miniContactImg,
    contactForm,
    links,
    miniContactForm
  },
  data () {
    return {
      parentData: Object
    }
  },
  computed: {
    computedData () {
      return this.parentData
    }
  }
}
</script>
