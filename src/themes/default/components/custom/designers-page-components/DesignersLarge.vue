<template>
  <div class="mr-18%">
    <div class="my-grid mx-2.5%">
      <div
        v-for="(designer, key) in deignersList"
        :key="key"
        class="w-95% mx-2.5%"
      >
        <img :src="designer.imageUrl" class="">
        <div class="text-center">
          <p class="mt-4 mb-2 text-2xl">
            {{ designer.name }}
          </p>
          <p class="text-red mb-10">
            {{ designer.origin }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['deignersList']
}
</script>

<style scoped>
.my-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  display: grid;
}
</style>
