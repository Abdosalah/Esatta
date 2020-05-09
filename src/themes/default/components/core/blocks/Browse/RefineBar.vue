<template>
  <div>
    <ul class="refineBar">
      <li class="w-23% lg:w-13%">
        <a @click="upHere = !upHere">REFINE
          <img src="../../../../assets/svg/flter.svg" class="images">
        </a>
      </li>
      <li class="w-23% lg:w-13%">
        <a>SORT BY
          <img src="../../../../assets/svg/flter.svg" class="images">
        </a>
        <ul class="dropdown">
          <li><a href="#">NEW ARRIVALS</a></li>
          <li><a href="#">ALMOST DONE</a></li>
          <li><a href="#">MOST POPULAR</a></li>
          <li><a href="#">BRAND (A TO Z)</a></li>
          <li><a href="#">BRAND (Z TO A)</a></li>
          <li><a href="#">COUNTRY OF ORIGIN (A TO Z)</a></li>
          <li><a href="#">COUNTRY OF ORIGIN (Z TO A)</a></li>
          <li><a href="#">PRICE (HIGH TO LOW)</a></li>
          <li><a href="#">PRICE (LOW TO HIGH)</a></li>
        </ul>
      </li>
      <li class="hidden lg:block w-23% lg:w-13%">
        <a>SHOW
          <img src="../../../../assets/svg/ar_d.svg" class="images">
        </a>
        <ul class="dropdown">
          <li><a href="#">20</a></li>
          <li><a href="#">40</a></li>
          <li><a href="#">50</a></li>
        </ul>
      </li>
      <li class="hidden lg:block w-23% lg:w-13%">
        <a>MODEL
          <img src="../../../../assets/svg/eye.svg" class="images">
        </a>
        <ul class="dropdown">
          <li><a href="#">Model1</a></li>
          <li><a href="#">Model2</a></li>
          <li><a href="#">Model3</a></li>
        </ul>
      </li>
    </ul>
    <ExtendedRefine id="navbarinternal" v-show="upHere" />
  </div>
</template>

<script>
import ExtendedRefine from 'theme/components/core/blocks/Browse/ExtendedRefine'

export default {
  components: {
    ExtendedRefine
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
  .refineBar{
    font-size: x-small;
    padding-left: 3%;
  }
  .images{
    margin-left: 10%;
    display: inline-block;
    width:10%;
    height:45%;
    margin-bottom: 4px;
    text-align: center;
    justify-content: center;
  }
  ul{
    // border: 0 none;
    background-color: #E2E2E2;
    padding: 0;
    list-style: none;
    background: #f2f2f2;
  }
  ul li{
    display: inline-block;
    position: relative;
    line-height: 21px;
    text-align: left;
  }
  ul li a{
    border-right: 1px solid white;
    display: block;
    padding: 8px 25px;
    color: #333;
    text-decoration: none;
  }
  ul li a:hover{
    color: black;
    background: white;
  }
  ul li ul.dropdown{
    min-width: 120%; /* Set width of the dropdown */
    background: white;
    display: none;
    position: absolute;
    z-index: 999;
    left: 0;
  }
  ul li ul li{
    width: 100%;
  }
  ul li ul li a{
    color: #7b4240;
  }
  ul li:hover ul.dropdown{
    display: block;/* Display the dropdown */
  }
  ul li ul.dropdown li{
    display: block;
  }
</style>
