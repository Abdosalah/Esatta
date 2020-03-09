<template>
  <div>
    <page-header class="" />
    <info-section />
    <stepone-section />
    <steptwo-section />
    <stepthree-section />
    <socialresponsibility-section />
  </div>
</template>

<script>
import PageHeader from 'theme/components/custom/how-it-works-page/PageHeader'
import InfoSection from 'theme/components/custom/how-it-works-page/InfoSection'
import StepthreeSection from 'theme/components/custom/how-it-works-page/StepthreeSection'
import SocialresponsibilitySection from 'theme/components/custom/how-it-works-page/SocialresponsibilitySection'
import SteptwoSection from 'theme/components/custom/how-it-works-page/SteptwoSection'
import SteponeSection from 'theme/components/custom/how-it-works-page/SteponeSection'
export default {
  components: {
    SocialresponsibilitySection,
    StepthreeSection,
    SteptwoSection,
    SteponeSection,
    InfoSection,
    PageHeader
  }
}
</script>

<style lang="scss" scoped>

</style>
