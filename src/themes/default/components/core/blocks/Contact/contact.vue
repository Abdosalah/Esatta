<template>
  <div>
    <div class="flex">
      <help />
      <contactImg />
    </div>
    <div class="flex lg:mr-nav ">
      <contactForm />
      <links />
    </div>
  </div>
</template>
<script>
import help from 'theme/components/core/blocks/Contact/help'
import contactImg from 'theme/components/core/blocks/Contact/contactImg'
import contactForm from 'theme/components/core/blocks/Contact/form'
import links from 'theme/components/core/blocks/Contact/links'
export default {
  components: {
    help,
    contactImg,
    contactForm,
    links
  }
}
</script>
