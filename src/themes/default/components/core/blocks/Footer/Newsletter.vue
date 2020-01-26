<template>
  <footer class="footer">
    <div>
      <SocialMedia class="securepayments" />
    </div>
    <div class="securepayments hidden md:block">
      <hr>
      <img class="securepayments" src="assets/footer_payment.png">
    </div>
  </footer>
</template>

<script>
import SocialMedia from 'theme/components/core/blocks/Footer/SocialMedia'
export default {
  components: {
    SocialMedia
  }
}
</script>

<style lang= scss scoped>
.footer{
  display: contents;
}
.heading{
  color: rgb(214, 155, 121);
  display: block;
}
.securepayments{
    width: 80%;
}
hr {
    border: none;
    border-top: 1px double white;
    overflow: visible;
    text-align: center;
    height: 5px;
    margin-bottom: 2%;
    width: 80%;
    font-size: x-small;
    letter-spacing: 1px;
    opacity: 0.30;
}
hr:after {
    background: rgb(20, 0, 0);
    color:white;
    content: 'SECURE PAYMENT';
    padding: 0 4px;
    position: relative;
    top: -9px;
    margin: 2%;
}
input {
  border-style: none;
  background: transparent;
  outline: none;
  text-align: center;
  font-size: x-small;
  letter-spacing: 1px;
}

button {
  padding: 0;
  background: none;
  border: none;
  outline: none;
}
/* input[type="text"] {
    display: block;
    font-size: 15px;
    font-size: 1.5rem;
    letter-spacing: 0.05em;
    width: 100%;
    background: none;
    border: none;
    background-image: url(/assets/esatta-images/page-banner/wave.svg);
    background-repeat: repeat-x;
    background-position: 0 bottom;
    padding: 0 0 1em;
    -webkit-animation: input-wave 0.4s linear infinite;
    animation: input-wave 0.4s linear infinite;
      animation-duration: 0.4s;
      animation-timing-function: linear;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-fill-mode: none;
      animation-play-state: running;
      animation-name: input-wave;
  } */
  /* assets/esatta-images/page-banner/wave.svg */
</style>
