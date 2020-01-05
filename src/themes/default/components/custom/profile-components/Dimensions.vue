<template>
  <div>
    <p class="text-sm">
      {{ attrName }}
    </p>
    <p class="text-4xl text-grey_text pt-2">
      {{ attrValue }}
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
  margin-right: 4rem;
}
</style>
