<template>
  <div>
    <p class="text-lg">
      {{ attrName }}
    </p>
    <p class="text-2xl text-grey_text pt-2">
      {{ attrValue }} cm
    </p>
    <hr class="my-underline mb-8">
  </div>
</template>

<script>
export default {
  props: ['attrName', 'attrValue']
}
</script>

<style scoped>
.my-underline{
  border-bottom: 1px solid #a0aec0;
  margin: 0rem 1rem 2rem;
}
</style>
