<template>
  <div>
    <page-header class="hidden md:block" />
    <page-headermobile class="md:hidden" />

    <info-section class="hidden md:block" />
    <info-sectionmobile class="md:hidden" />

    <stepone-section class="hidden md:block" />
    <stepone-sectionmobile class="md:hidden" />

    <steptwo-section class="hidden md:block" />
    <steptwo-sectionmobile class="md:hidden" />

    <stepthree-section class="hidden md:block" />
    <stepthree-sectionmobile class="md:hidden" />

    <socialresponsibility-section class="hidden lg:block" />
    <socialresponsibility-sectiontablet class="lg:hidden" />

    <manufacturing-section class="hidden lg:block" />
    <manufacturing-sectiontablet class="hidden md:block lg:hidden" />
    <manufacturing-sectionmobile class="md:hidden" />

    <support-section class="hidden lg:block" />
    <support-sectiontablet class="hidden md:block lg:hidden" />
    <support-sectionmobile class="md:hidden" />
  </div>
</template>

<script>
import PageHeader from 'theme/components/custom/how-it-works-page/PageHeader'
import PageHeadermobile from 'theme/components/custom/how-it-works-page/PageHeadermobile'

import InfoSection from 'theme/components/custom/how-it-works-page/InfoSection'
import InfoSectionmobile from 'theme/components/custom/how-it-works-page/InfoSectionmobile'

import SteponeSection from 'theme/components/custom/how-it-works-page/SteponeSection'
import SteponeSectionmobile from 'theme/components/custom/how-it-works-page/SteponeSectionmobile'

import SteptwoSection from 'theme/components/custom/how-it-works-page/SteptwoSection'
import SteptwoSectionmobile from 'theme/components/custom/how-it-works-page/SteptwoSectionmobile'

import StepthreeSection from 'theme/components/custom/how-it-works-page/StepthreeSection'
import StepthreeSectionmobile from 'theme/components/custom/how-it-works-page/StepthreeSectionmobile'

import SocialresponsibilitySection from 'theme/components/custom/how-it-works-page/SocialresponsibilitySection'
import SocialresponsibilitySectiontablet from 'theme/components/custom/how-it-works-page/SocialresponsibilitySectiontablet'

import ManufacturingSection from 'theme/components/custom/how-it-works-page/ManufacturingSection'
import ManufacturingSectiontablet from 'theme/components/custom/how-it-works-page/ManufacturingSectiontablet'
import ManufacturingSectionmobile from 'theme/components/custom/how-it-works-page/ManufacturingSectionmobile'

import SupportSection from 'theme/components/custom/how-it-works-page/SupportSection'
import SupportSectiontablet from 'theme/components/custom/how-it-works-page/SupportSectiontablet'
import SupportSectionmobile from 'theme/components/custom/how-it-works-page/SupportSectionmobile'

export default {
  components: {
    PageHeader,
    PageHeadermobile,
    InfoSection,
    InfoSectionmobile,
    SteponeSection,
    SteponeSectionmobile,
    SteptwoSection,
    SteptwoSectionmobile,
    StepthreeSection,
    StepthreeSectionmobile,
    SocialresponsibilitySection,
    SocialresponsibilitySectiontablet,
    ManufacturingSection,
    ManufacturingSectiontablet,
    ManufacturingSectionmobile,
    SupportSection,
    SupportSectiontablet,
    SupportSectionmobile
  }
}
</script>
