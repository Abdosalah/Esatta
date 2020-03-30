<template>
  <div class="cl-secondary mb-32">
    <div class="font-bold text-center">
      <p class="mb-6 text-red">
        PRIVACY STATEMENT
      </p>
      <p class="mb-10">
        ----
      </p>
    </div>
    <div class="md:mx-15% text-center">
      <div class="mb-4 relative cursor-pointer" @click="toggle(1)">
        <hr class="mb-4 opacity-50">
        <img class="absolute h-3 w-3 right-0 mt-5" src="assets/esatta-images/plus.svg">
        <p>
          SECTION 1 - WHAT DO WE DO
          <br>WITH YOUR INFORMATION
        </p>
        <p v-if="activeDiv === 1" class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat
          mi in nunc malesuada, ut sollicitudin lacus egestas. Nam et nibh semper
          dui ultricies iaculis vitae id nulla. Mauris ullamcorper dolor quis est
          ullamcorper, quis cursus turpis tempor. Suspendisse nec facilisis augue,
          quis feugiat elit. In vulputate nisl nec orci gravida, non accumsan neque
          volutpat. Duis nec posuere sem. Quisque leo ex, dapibus quis mi eget,
          vehicula vulputate nisl. Vestibulum et nisi bibendum, ultrices turpis ut,
          viverra ante. Sed tempor maximus efficitur.
        </p>
      </div>
      <div class="mb-4 relative cursor-pointer" @click="toggle(2)">
        <hr class="mb-4 opacity-50">
        <img class="absolute h-3 w-3 right-0 mt-0.4rem" src="assets/esatta-images/plus.svg">
        <p>
          SECTION 2 - CONSENT
        </p>
        <p v-if="activeDiv === 2" class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat
          mi in nunc malesuada, ut sollicitudin lacus egestas. Nam et nibh semper
          dui ultricies iaculis vitae id nulla. Mauris ullamcorper dolor quis est
          ullamcorper, quis cursus turpis tempor. Suspendisse nec facilisis augue,
          quis feugiat elit. In vulputate nisl nec orci gravida, non accumsan neque
          volutpat. Duis nec posuere sem. Quisque leo ex, dapibus quis mi eget,
          vehicula vulputate nisl. Vestibulum et nisi bibendum, ultrices turpis ut,
          viverra ante. Sed tempor maximus efficitur.
        </p>
      </div>
      <div class="mb-4 relative cursor-pointer" @click="toggle(3)">
        <hr class="mb-4 opacity-50">
        <img class="absolute h-3 w-3 right-0 mt-0.4rem" src="assets/esatta-images/plus.svg">
        <p>
          SECTION 3 - DISCLOSURE
        </p>
        <p v-if="activeDiv === 3" class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat
          mi in nunc malesuada, ut sollicitudin lacus egestas. Nam et nibh semper
          dui ultricies iaculis vitae id nulla. Mauris ullamcorper dolor quis est
          ullamcorper, quis cursus turpis tempor. Suspendisse nec facilisis augue,
          quis feugiat elit. In vulputate nisl nec orci gravida, non accumsan neque
          volutpat. Duis nec posuere sem. Quisque leo ex, dapibus quis mi eget,
          vehicula vulputate nisl. Vestibulum et nisi bibendum, ultrices turpis ut,
          viverra ante. Sed tempor maximus efficitur.
        </p>
      </div>
      <div class="mb-4 relative cursor-pointer" @click="toggle(4)">
        <hr class="mb-4 opacity-50">
        <img class="absolute h-3 w-3 right-0 mt-0.4rem" src="assets/esatta-images/plus.svg">
        <p>
          SECTION 4 - SHOPIFY
        </p>
        <p v-if="activeDiv === 4" class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat
          mi in nunc malesuada, ut sollicitudin lacus egestas. Nam et nibh semper
          dui ultricies iaculis vitae id nulla. Mauris ullamcorper dolor quis est
          ullamcorper, quis cursus turpis tempor. Suspendisse nec facilisis augue,
          quis feugiat elit. In vulputate nisl nec orci gravida, non accumsan neque
          volutpat. Duis nec posuere sem. Quisque leo ex, dapibus quis mi eget,
          vehicula vulputate nisl. Vestibulum et nisi bibendum, ultrices turpis ut,
          viverra ante. Sed tempor maximus efficitur.
        </p>
      </div>
      <div class="mb-4 relative cursor-pointer" @click="toggle(5)">
        <hr class="mb-4 opacity-50">
        <img class="absolute h-3 w-3 right-0 mt-5" src="assets/esatta-images/plus.svg">
        <p>
          SECTION 5 - THIRD-PARTY
          <br>SERVICES
        </p>
        <p v-if="activeDiv === 5" class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat
          mi in nunc malesuada, ut sollicitudin lacus egestas. Nam et nibh semper
          dui ultricies iaculis vitae id nulla. Mauris ullamcorper dolor quis est
          ullamcorper, quis cursus turpis tempor. Suspendisse nec facilisis augue,
          quis feugiat elit. In vulputate nisl nec orci gravida, non accumsan neque
          volutpat. Duis nec posuere sem. Quisque leo ex, dapibus quis mi eget,
          vehicula vulputate nisl. Vestibulum et nisi bibendum, ultrices turpis ut,
          viverra ante. Sed tempor maximus efficitur.
        </p>
      </div>
      <div class="mb-4 relative cursor-pointer" @click="toggle(6)">
        <hr class="mb-4 opacity-50">
        <img class="absolute h-3 w-3 right-0 mt-0.4rem" src="assets/esatta-images/plus.svg">
        <p>
          SECTION 6 - SECURITY
        </p>
        <p v-if="activeDiv === 6" class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat
          mi in nunc malesuada, ut sollicitudin lacus egestas. Nam et nibh semper
          dui ultricies iaculis vitae id nulla. Mauris ullamcorper dolor quis est
          ullamcorper, quis cursus turpis tempor. Suspendisse nec facilisis augue,
          quis feugiat elit. In vulputate nisl nec orci gravida, non accumsan neque
          volutpat. Duis nec posuere sem. Quisque leo ex, dapibus quis mi eget,
          vehicula vulputate nisl. Vestibulum et nisi bibendum, ultrices turpis ut,
          viverra ante. Sed tempor maximus efficitur.
        </p>
      </div>
      <div class="mb-4 relative cursor-pointer" @click="toggle(7)">
        <hr class="mb-4 opacity-50">
        <img class="absolute h-3 w-3 right-0 mt-0.4rem" src="assets/esatta-images/plus.svg">
        <p>
          SECTION 7 - COOKIES
        </p>
        <p v-if="activeDiv === 7" class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat
          mi in nunc malesuada, ut sollicitudin lacus egestas. Nam et nibh semper
          dui ultricies iaculis vitae id nulla. Mauris ullamcorper dolor quis est
          ullamcorper, quis cursus turpis tempor. Suspendisse nec facilisis augue,
          quis feugiat elit. In vulputate nisl nec orci gravida, non accumsan neque
          volutpat. Duis nec posuere sem. Quisque leo ex, dapibus quis mi eget,
          vehicula vulputate nisl. Vestibulum et nisi bibendum, ultrices turpis ut,
          viverra ante. Sed tempor maximus efficitur.
        </p>
      </div>
      <div class="mb-4 relative cursor-pointer" @click="toggle(8)">
        <hr class="mb-4 opacity-50">
        <img class="absolute h-3 w-3 right-0 mt-5" src="assets/esatta-images/plus.svg">
        <p>
          QUESTIONS AND CONTACT
          <br>INFORMATION
        </p>
        <p v-if="activeDiv === 8" class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat
          mi in nunc malesuada, ut sollicitudin lacus egestas. Nam et nibh semper
          dui ultricies iaculis vitae id nulla. Mauris ullamcorper dolor quis est
          ullamcorper, quis cursus turpis tempor. Suspendisse nec facilisis augue.
          <br>sales@vaara.com
        </p>
      </div>
      <hr class="opacity-50">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeDiv: 0
    }
  },
  methods: {
    toggle (num) {
      if (this.activeDiv === num) {
        this.activeDiv = 0
      } else {
        this.activeDiv = num
      }
    }
  }
}
</script>

<style scoped>
.paragraph {
  margin: 2rem 2.5rem;
}
</style>
