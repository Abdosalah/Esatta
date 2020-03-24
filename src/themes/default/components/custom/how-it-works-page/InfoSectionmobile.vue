<template>
  <div class="mb-16">
    <p class="text-center font-bold my-12 mx-20%">
      INDEPENDENT DESIGNS MADE FOR YOU
    </p>
    <carousel class="mx-10% cl-secondary" :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="true">
      <slide class="">
        <p class="pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed pretium sodales sem, a ultricies massa laoreet eget.
          Mauris nibh mi, efficitur et sem rutrum, accumsan varius ex.
          Vestibulum a molestie erat. Nam sit amet lectus arcu. Quisque placerat.
        </p>
        <p class="pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed pretium sodales sem, a ultricies massa laoreet eget.
          Mauris nibh mi, efficitur et sem rutrum, accumsan varius ex.
          Vestibulum a molestie erat. Nam sit amet lectus arcu. Quisque placerat.
        </p>
      </slide>
      <slide class="">
        <p class="pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed pretium sodales sem, a ultricies massa laoreet eget.
          Mauris nibh mi, efficitur et sem rutrum, accumsan varius ex.
          Vestibulum a molestie erat. Nam sit amet lectus arcu. Quisque placerat.
        </p>
        <p class="pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed pretium sodales sem, a ultricies massa laoreet eget.
          Mauris nibh mi, efficitur et sem rutrum, accumsan varius ex.
          Vestibulum a molestie erat. Nam sit amet lectus arcu. Quisque placerat.
        </p>
      </slide>
      <slide class="">
        <p class="pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed pretium sodales sem, a ultricies massa laoreet eget.
          Mauris nibh mi, efficitur et sem rutrum, accumsan varius ex.
          Vestibulum a molestie erat. Nam sit amet lectus arcu. Quisque placerat.
        </p>
        <p class="pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed pretium sodales sem, a ultricies massa laoreet eget.
          Mauris nibh mi, efficitur et sem rutrum, accumsan varius ex.
          Vestibulum a molestie erat. Nam sit amet lectus arcu. Quisque placerat.
        </p>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  }
};
</script>
