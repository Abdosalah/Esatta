<template>
  <div>
    <Navbarup />
    <div class=" hidden md:flex">
      <v-bottom-navigation v-model="bottomNav" class="nav">
        <v-btn value="recent" class="button">
          <img src="assets/svg/browse_b.svg" class="image opacity-20">
          <span>BROWSE</span>
        </v-btn>
        <v-btn value="favorites" class="button">
          <img src="assets/svg/like_prod.svg" class="image opacity-20">
          <span>LIKED</span>
        </v-btn>
        <v-btn value="nearby" class="button">
          <img src="assets/svg/measure.svg" class="image">
          <span>MEASURE ME</span>
        </v-btn>
        <!-- <v-btn value="nearby" class="button">
          <img src="assets/svg/bag.svg" class="image">
          <span>BAG</span>
        </v-btn> -->
        <MicrocartIcon class="button" />
      </v-bottom-navigation>
    </div>
    <div class="md:hidden">
      <v-bottom-navigation v-model="bottomNav" class="nav2">
        <v-btn value="recent" class="button2">
          <img src="assets/svg/browse_b.svg" class="image2 opacity-25">
          <span>BROWSE</span>
        </v-btn>
        <v-btn value="favorites" class="button2">
          <img src="assets/svg/like_prod.svg" class="image2 opacity-25">
          <span>LIKED</span>
        </v-btn>
        <v-btn value="nearby" class="button2">
          <img src="assets/svg/measure.svg" class="image2">
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
import MicrocartIcon from 'theme/components/core/blocks/Header/MicrocartIcon'
export default {
  data () {
    return {
      bottomNav: 'recent'
    }
  },
  components: {
    Navbarup,
    MicrocartIcon
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
.nav:hover{
  background: none !important;
}
.nav:active{
  background: none;
}
.nav2{
  bottom: 0;
  z-index: 1000;
  background: white;
  position: fixed;
  width: 100%;
  text-align: center;
  height: 8%;
  padding: 0;
  margin: 0;
  display: inline-block;
  // display:flex;
  flex-direction:row;
}
.nav2:hover{
  background: none;
}
.button{
  padding: 0px 20px;
  background-color: white;
  border-right: 1px solid #c2c0c0;
  border-bottom: 1px solid #c2c0c0;
  text-align: center;
  line-height: 45px;
  flex-grow:1;
  font-size: x-small;
  letter-spacing: 2px;
  font-weight: bold;
  width: 20%;
  justify-content: center;
}
.button:hover{
  background-color: rgba(255, 255, 255, 0.3);
}
.button:active{
  background-color: none !important;
}
.button2{
  // padding: 0px 20px;
  background-color: white;
  border-right: 1px solid #c2c0c0;
  // border-bottom: 1px solid #c2c0c0;
  text-align: center;
  display: table-cell;
  width: 25%;
  padding-top: 2%;
  padding-bottom: 4%;
  // display: flex;
  // flex-direction: column;
  // line-height: 40px;
  // flex-grow:1;
  font-size: x-small;
}
.button2:hover{
  background-color: rgba(255, 255, 255, 0.3);
}
.image{
  display: inline-block;
  width:22%;
  height:45%;
  margin-bottom: 4px;
  text-align: center;
  justify-content: center;
}
// .image:hover{
//   color: black;
//   opacity: 1;
// }
.image2{
  width: 100%;
  height: 15%;
  padding-bottom: 10%;
  text-align: center;
  justify-content: center;
}

</style>>
