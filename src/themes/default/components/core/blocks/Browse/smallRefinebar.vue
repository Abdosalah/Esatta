<template>
  <div>
    <ul class="refineBar">
      <li class="button1">
        <a @click="upHere = !upHere">REFINE
          <img src="../../../../assets/svg/flter.svg" class="images">
        </a>
      </li>
      <li class="button2">
        <a>SORT BY
          <img src="../../../../assets/svg/flter.svg" class="images">
        </a>
        <ul class="dropdown right-0">
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
    </ul>
    <div v-if="upHere" class="dropdown">
      <div v-for="(options, index) in refineOptions" :key="options" class="option">
        <div @click="changeActive(options)">
          <a href="#">{{ index }}</a>
        </div>
        <div v-if="checkActive(options)" class="dropdown">
          <div v-for="option in activeClass" :key="option" class="options">
            <div v-if="option.name">
              <a v-if="option.selected === false" @click="option.selected = !option.selected" href="#">{{ option.name }}</a>
              <a v-if="option.selected === true" class="font-bold" @click="option.selected = !option.selected" href="#">{{ option.name }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="buttonDiv">
        <button class="btn pointer" @click="upHere = false">
          <span>APPLY</span>
        </button>
        <button class="btn pointer" @click="deleteAllEvents(refineOptions), upHere = false">
          <span>CLEAR ALL</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Overlay from 'theme/components/core/Overlay.vue'
export default {
  components: {
  },
  data: function () {
    return {
      upHere: false,
      activeClass: [],
      chosen: false,
      refineOptions: {
        DRESSES: [
          {category: 'DRESSES'},
          {name: 'Dress1',
            selected: false},
          {name: 'Dress2',
            selected: false},
          {name: 'Dress3',
            selected: false},
          {name: 'Dress3',
            selected: false},
          {name: 'Dress3',
            selected: false},
          {name: 'Dress3',
            selected: false},
          {name: 'Dress3',
            selected: false},
          {name: 'Dress3',
            selected: false},
          {name: 'Dress3',
            selected: false},
          {name: 'Dress3',
            selected: false},
          {name: 'Dress3',
            selected: false},
          {name: 'Dress3',
            selected: false},
          {name: 'Dress3',
            selected: false},
          {name: 'Dress3',
            selected: false},
          {name: 'Dress3',
            selected: false},
          {name: 'Dress3',
            selected: false},
          {name: 'Dress3',
            selected: false},
          {name: 'Dress3',
            selected: false},
          {name: 'Dress3',
            selected: false},
          {name: 'Dress3',
            selected: false},
          {name: 'Dress3',
            selected: false},
          {name: 'Dress3',
            selected: false},
          {name: 'Dress3',
            selected: false},
          {name: 'Dress3',
            selected: false},
          {name: 'Dress3',
            selected: false}
        ],
        DESIGNER: [
          {category: 'DESIGNER'},
          {name: 'DESIGNER1',
            selected: false},
          {name: 'DESIGNER2',
            selected: false},
          {name: 'DESIGNER3',
            selected: false}
        ],
        ACTIVITIES: [
          {category: 'ACTIVITIES'},
          {name: 'ACTIVITIES1',
            selected: false},
          {name: 'ACTIVITIES2',
            selected: false},
          {name: 'ACTIVITIES3',
            selected: false}
        ]
      }
    }
  },
  methods: {
    deleteAllEvents: function (options) {
      for (let option in options) {
        for (let i = 0; i < options[option].length; i++) {
          options[option][i].selected = false
        }
      }
    },
    clearAllCheck: function (options) {
      for (let option in options) {
        for (let i = 0; i < options[option].length; i++) {
          if (options[option][i].selected === true) {
            return true
          }
        }
      }
    },
    changeActive: function (selected) {
      if (this.activeClass === selected) {
        this.activeClass = null
      } else { this.activeClass = selected }
    },
    checkActive: function (selected) {
      if (this.activeClass === selected) {
        return true
      } else { return false }
    },
    categorySelected: function (category) {
      for (let i = 0; i < category.length; i++) {
        if (category[i].selected === true) {
          return true
        }
      }
      return false
    }
  }

}
</script>>

<style scoped>
.refineBar{
    font-size: x-small;
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
  .button1{
    border-right: 1px solid white;
    width: 49%;
  }
  .button2{
    width: 49%;
  }
  ul{
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
    background: white;
    display: none;
    position: absolute;
    z-index: 999;
    min-width: 200%;
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
  .buttonDiv{
      background-color: white;
      color: black;
      display: grid;
  }
  .btn{
      font-weight: bold;
      font-size: xx-small;
      text-align: center;
      width: 94%;
      height: 2rem;
      margin-left: 3%;
      margin-right: 3%;
      margin-bottom: 2%;
      border: 1px solid black;
  }
  .option{
    font-size: xx-small;
    padding: 3%;
    color: #7b4240;
  }
  .options{
    font-size: xx-small;
    padding: 2%;
    color: black;
  }
</style>
