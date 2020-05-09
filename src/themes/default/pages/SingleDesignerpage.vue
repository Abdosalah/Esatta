<template>
  <div class="body_font">
    <page-header class="" />
    <about-section class="hidden lg:block" />
    <about-sectiontablet class="hidden md:block lg:hidden" />
    <about-sectionmobile class="md:hidden" />
    <inspiration-section class="hidden lg:block" />
    <inspiration-sectiontablet class="hidden md:block lg:hidden" />
    <inspiration-sectionmobile class="md:hidden" />
    <pastdesigns-section class="" />
    <div class="w-full mb-8 text-center">
      <button class="bg-red text-white tracking-widest m-auto py-8 px-12">
        BROWSE BY DESIGNER
      </button>
    </div>
  </div>
</template>

<script>
import PageHeader from 'theme/components/custom/single-designer-page/PageHeader'
import AboutSection from 'theme/components/custom/single-designer-page/AboutSection'
import AboutSectiontablet from 'theme/components/custom/single-designer-page/AboutSectiontablet'
import AboutSectionmobile from 'theme/components/custom/single-designer-page/AboutSectionmobile'
import InspirationSection from 'theme/components/custom/single-designer-page/InspirationSection'
import InspirationSectiontablet from 'theme/components/custom/single-designer-page/InspirationSectiontablet'
import InspirationSectionmobile from 'theme/components/custom/single-designer-page/InspirationSectionmobile'
import PastdesignsSection from 'theme/components/custom/single-designer-page/PastdesignsSection'
export default {
  components: {
    PageHeader,
    PastdesignsSection,
    InspirationSectionmobile,
    InspirationSectiontablet,
    InspirationSection,
    AboutSectionmobile,
    AboutSectiontablet,
    AboutSection
  }
}
</script>

<style lang="scss" scoped>
.body_font {
  font-family: 'Lato', sans-serif;
}
</style>
