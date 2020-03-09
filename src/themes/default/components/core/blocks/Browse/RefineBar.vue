<template>
  <div>
    <div class="navbar">
      <v-bottom-navigation v-model="bottomNav" class="nav lg:pr-50%">
        <v-btn flat slot="activated" class="button" @click="upHere = !upHere"
               :class="{'white': !upHere, 'blue': upHere}"
        >
          <span style="margin-top: 8px;">
            REFINE
          </span>
          <img src="../../../../assets/svg/flter.svg" class="images">
        </v-btn>
        <v-btn class="button" @click="sortby = !sortby">
          <span style="margin-top: 8px;">
            SORT BY
          </span>
          <img src="../../../../assets/svg/flter.svg" class="images">
        </v-btn>

        <v-btn class="button hidden md:block">
          <span style="margin-top: 8px;">
            SHOW
          </span>
          <img src="../../../../assets/svg/ar_d.svg" class="images">
        </v-btn>

        <v-btn class="button hidden md:block">
          <span style="margin-top: 8px;">
            MODEL
          </span>
          <img src="../../../../assets/svg/eye.svg" class="images">
        </v-btn>
      </v-bottom-navigation>
      <ExtendedRefine id="navbarinternal" v-show="upHere" />
    </div>
    <SortBY v-show="sortby" />
    <!-- <Dropdown /> -->
  </div>
</template>

<script>
import ExtendedRefine from 'theme/components/core/blocks/Browse/ExtendedRefine'
import SortBY from 'theme/components/core/blocks/Browse/SortBY'
import Dropdown from 'theme/components/core/blocks/Browse/Dropdown'
export default {
  components: {
    ExtendedRefine,
    SortBY,
    Dropdown
  },
  data: function () {
    return {
      upHere: false,
      sortby: false
    };
  }

}
</script>>

<style lang="scss" scoped>
.navbar{
  background: #e2e2e2;
  // padding-right: 50%;
  // width: 100%;
  // height: 60px;
  // background-color: #e2e2e2;
  // bottom: 0;
  // box-shadow: 0.1px 0.1px 15px 0.1px #273c75;
  // border-radius:10px;
  // display: flex;
}
.nav{
  bottom: 0;
  z-index: 1000;
  background: #e2e2e2;
  color: black;
  // position: fixed;
  width: 100%;
  text-align: center;
  height: 7%;
  margin: 0;
  display:flex;
  flex-direction:row;
}
.button{
  padding: 0px 3%;
  border-right: 1px solid white;
  //border-bottom: 1px solid #c2c0c0;
  text-align: center;
  line-height: 45px;
  flex-grow:1;
  font-size: x-small;
  letter-spacing: 2px;
  font-weight: bold;
  width: 20%;
  justify-content: center;
  // color: black;
  &.is-active {
              background-color: white;
  }
}
.button::after{
  position: absolute;
  left    : 0;
  bottom  : 0;
  height: 5%;
}
.images{
  display: inline-block;
  width:10%;
  height:45%;
  margin-bottom: 4px;
  text-align: center;
  justify-content: center;
}
#navbarinternal{
  background-color: white;
  color: #7b4240;
}
.button:hover, .button:active {
  background-color: white;
}
</style>
