<template>
  <div>
    <Navbarup />
      <v-bottom-navigation v-model = "bottomNav" class = "nav">
        <v-btn value="recent" class="button">
          <img src="assets/esatta-images/page-banner/browse.svg" class="image">
          <span>BROWSE</span>
        </v-btn>
        <v-btn value="favorites" class="button">
          <img src="assets/esatta-images/page-banner/measure.svg" class="image">
          <span>LIKED</span>
        </v-btn>
        <v-btn value="nearby" class="button">
          <img src="assets/esatta-images/page-banner/measure.svg" class="image">
          <span>MEASURE ME</span>
        </v-btn>
        <v-btn value="nearby" class="button">
          <img src="assets/esatta-images/page-banner/measure.svg" class="image">
          <span>BAG</span>
        </v-btn>
      </v-bottom-navigation>
  </div>
</template>

<script>
import Navbarup from 'theme/components/core/blocks/Header/NavBar'
 export default {
    data () {
      return {
        bottomNav: 'recent',
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
  height: 6%;
  padding: 0;
  margin: 0;
  display:flex; 
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
  font-size: small;
}
.button:hover{
  background-color: rgba(255, 255, 255, 0.3);
}
.image{
  display: inline-block;
  width:20%;
  height:60%;
  text-align: center;
  justify-content: center;
  opacity: 0.5;
}
// .image:hover{
//   color: black;
//   opacity: 1;
// }

</style>>
