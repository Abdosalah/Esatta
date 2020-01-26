<template>
  <div class="securepayments">
    <hr>
    <img class="securepayments" src="assets/footer_payment.png">
  </div>
</template>>
<script>
export default {
}
</script>>
<style lang= scss scoped>
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
    margin-left: 10%;
}
hr:after {
    background: rgb(20, 0, 0);
    color:white;
    content: 'SEQURE PAYMENT';
    padding: 0 4px;
    position: relative;
    top: -9px;
    margin: 2%;
}
.securepayments{
    margin-left: 10%;
    width: 80%;
}
</style>
