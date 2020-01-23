<template>
  <div>
    <Navbarup />
    <div class="sm:hidden md:flex">
      <v-bottom-navigation v-model="bottomNav" class="nav">
        <v-btn value="recent" class="button">
          <img src="assets/svg/browse_b.svg" class="image opacity-25">
          <span>BROWSE</span>
        </v-btn>
        <v-btn value="favorites" class="button">
          <img src="assets/svg/like_prod.svg" class="image opacity-25">
          <span>LIKED</span>
        </v-btn>
        <v-btn value="nearby" class="button">
          <img src="assets/esatta-images/page-banner/measure.svg" class="image opacity-25">
          <span>MEASURE ME</span>
        </v-btn>
        <v-btn value="nearby" class="button">
          <img src="assets/svg/bag.svg" class="image">
          <span>BAG</span>
        </v-btn>
      </v-bottom-navigation>
    </div>
    <div class="md:hidden">
      <v-bottom-navigation v-model="bottomNav" class="nav2">
        <v-btn value="recent" class="button2">
          <img src="assets/svg/browse_b.svg" class="image2 ">
          <span>BROWSE</span>
        </v-btn>
        <v-btn value="favorites" class="button2">
          <img src="assets/svg/like_prod.svg" class="image2 ">
          <span>LIKED</span>
        </v-btn>
        <v-btn value="nearby" class="button2">
          <img src="assets/esatta-images/page-banner/measure.svg" class="image2 ">
          <span>MEASURE ME</span>
        </v-btn>
        <v-btn value="nearby" class="button2">
          <img src="assets/svg/bag.svg" class="image2">
          <span>BAG</span>
        </v-btn>
      </v-bottom-navigation>
    </div>
  </div>
</template>

<script>
import Navbarup from 'theme/components/core/blocks/Header/NavBar'
export default {
  data () {
    return {
      bottomNav: 'recent'
    }
  },
  components: {
    Navbarup
  }
}
</script>

<style lang="scss" scoped>
.nav{
  bottom: 0;
  z-index: 1000;
  background: white;
  position: fixed;
  width: 100%;
  text-align: center;
  height: 7%;
  padding: 0;
  margin: 0;
  display:flex;
  flex-direction:row;
}
.nav2{
  bottom: 0;
  z-index: 1000;
  background: white;
  position: fixed;
  width: 100%;
  text-align: center;
  height: 10%;
  padding: 0;
  margin: 0;
  display: inline-block;
  // display:flex;
  flex-direction:row;
}
// .nav:hover{
//   background: none;
// }
.button{
  padding: 0px 20px;
  background-color: white;
  border-right: 1px solid #c2c0c0;
  border-bottom: 1px solid #c2c0c0;
  text-align: center;
  line-height: 40px;
  flex-grow:1;
  font-size: x-small;
  letter-spacing: 2px;
  font-weight: bold;
  width: 20%;
}
.button:hover{
  background-color: rgba(255, 255, 255, 0.3);
}
.button2{
  // padding: 0px 20px;
  background-color: white;
  border-right: 1px solid #c2c0c0;
  // border-bottom: 1px solid #c2c0c0;
  text-align: center;
  display: table-cell;
  width: 25%;
  padding-top: 4%;
  padding-bottom: 4%;
  // display: flex;
  // flex-direction: column;
  // line-height: 40px;
  // flex-grow:1;
  font-size: xx-small;
  width: 10%;
}
.button2:hover{
  background-color: rgba(255, 255, 255, 0.3);
}
.image{
  display: inline-block;
  width:20%;
  height:50%;
  text-align: center;
  justify-content: center;
}
// .image:hover{
//   color: black;
//   opacity: 1;
// }
.image2{
  width: 100%;
  height: 20%;
  padding-bottom: 10%;
  text-align: center;
  justify-content: center;
}

</style>>
