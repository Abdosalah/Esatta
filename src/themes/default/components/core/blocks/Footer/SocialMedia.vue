<template>
  <div class="social">
    <hr>
    <div class="container">
      <img src="/assets/svg/social/instagram.svg" class="img pointer">
      <img src="/assets/svg/social/twitter.svg" class="img pointer">
      <img src="/assets/svg/social/facebook.svg" class="imgF pointer">
      <img src="/assets/svg/social/pinterest.svg" class="img pointer">
      <img src="/assets/svg/social/google.svg" class="img pointer">
    </div>
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
    content: 'SOCIAL MEDIA';
    padding: 0 4px;
    position: relative;
    top: -9px;
    margin: 2%;
}
.social{

}
.container{
    display: flex;
    justify-content: center;
}
.img{
    width: 10%;
    padding-left: 3%;
    padding-right: 3%;
    margin-left: 2%;
    margin-right: 2%;
}
.imgF{
    width: 10%;
    padding-left: 3%;
    padding-right: 4%;
    margin-left: 4%;
    margin-right: 2%;
}
</style>
