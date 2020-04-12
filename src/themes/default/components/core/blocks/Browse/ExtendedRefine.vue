<template>
  <div id="navbarinternal">
    <div v-if="clearAllCheck(refineOptions)" class="buttonContainer">
      <div class="">
        <v-btn @click="deleteAllEvents(refineOptions)" class="filteredButton pointer">
          <span>
            CLEAR ALL
          </span>
          <i class="material-icons" style="font-size: 11px">
            close
          </i>
        </v-btn>
      </div>
      <div v-for="(options, index) in refineOptions" :key="options" class="closeButtonMainDiv">
        <span v-if="categorySelected(options)" class="index"> {{ index }} : </span>
        <div v-for="option in options" :key="option" class="">
          <v-btn v-show="option.selected === true" @click="option.selected = !option.selected" class="filteredButton pointer">
            {{ option.name }}
            <i class="material-icons" style="font-size: 11px">
              close
            </i>
          </v-btn>
        </div>
      </div>
    </div>
    <hr v-if="clearAllCheck(refineOptions)" class="hr-text mr-1% lg:mr-20%">
    <div class="extendedRefine">
      <v-btn v-for="(options, index) in refineOptions" :key="options" flat slot="activated" class="button" @click="changeActive(options)">
        <span style="margin-top: 8px;">
          {{ index }}
        </span>
      </v-btn>
      <div class="checkbox lg:pr-10%">
        <div v-for="(options, index) in activeClass" :key="options">
          <div v-if="options.name && index === 1" class="checkboxAllitemDiv">
            <label class="flex items-center m-2 cursor-pointer">
              <input @click="options.selected = !options.selected" type="checkbox" name="radio" class="hidden" checked :value="options.name" v-model="categories">
              <span v-show="!options.selected" class="w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink" />
              <span v-show="options.selected" class="w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink bg-black" />
              {{ options.name }} </label>
          </div>
          <div v-if="options.name && index !== 1" class="checkboxSecondDiv">
            <label class="flex items-center m-2 cursor-pointer">
              <input @click="options.selected = !options.selected" type="checkbox" name="radio" class="hidden" checked :value="options.name" v-model="categories">
              <span v-show="!options.selected" class="w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink" />
              <span v-show="options.selected" class="w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink bg-black" />
              {{ options.name }} </label>
          </div>
        </div>
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
      upHereAgain: false,
      activeClass: [],
      refineOptions: {
        DRESSES: [
          {category: 'DRESSES'},
          {name: 'ALL DRESSES',
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
          {name: 'ALL DESIGNER',
            selected: false},
          {name: 'DESIGNER2',
            selected: false},
          {name: 'DESIGNER3',
            selected: false}
        ],
        ACTIVITIES: [
          {category: 'ACTIVITIES'},
          {name: 'ALL ACTIVITIES',
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

<style lang="scss" scoped>
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
}
#navbarinternal{
  color: #7b4240;
}
.button:hover, .button:active {
  background-color: white;
}
.buttonContainer{
  display: flex;
  margin-right: 25%;
  max-width: 1000px;
  padding: 0.5rem;
  flex-wrap: wrap;
}
.filteredButton{
  // padding: 0px 3%;
  border: 1px solid black;
  line-height: 45px;
  font-size: x-small;
  letter-spacing: 2px;
  font-weight: bold;
  white-space: nowrap;
  color: black;
  padding: 0.5rem;
  margin: 0.5rem;
}
body{
 margin:0;
 padding: 0;
 color: black;
}

input[type="checkbox"] + label span {
    transition: background .2s,
      transform .2s;
}

input[type="checkbox"] + label span:hover,
input[type="checkbox"] + label:hover span{
  transform: scale(1.2);
}

input[type="checkbox"]:checked + label span {
  background-color: black;
  /* box-shadow: 0px 0px 0px 2px white inset; */
}

input[type="checkbox"]:checked + label{
   color: black;
}
.options{
    font-size: xx-small;
    letter-spacing: 1px;
    color: black;
}
.checkbox{
    display: flex;
    color: black;
    background-color: #f2f2f2;
    flex-wrap: wrap;
    padding-left: 2%;
    font-size: x-small;
}
.checkboxSecondDiv{
    width: 18rem;
}
.checkboxAllitemDiv{
    width: 80rem;
    padding-right: 80;
    margin-top: 1%;
}
.column{
    margin-left: 9px;
    padding-top: 2%;
}
.nav{
  background-color: #f2f2f2;
  color: black;
}
.closeButtonMainDiv{
  display: flex;
  margin-left: 0.5rem;
  flex-wrap: wrap;
}
.index{
  font-size: x-small;
  margin: 1rem;
}
.hr-text {
  line-height: 1em;
  position: relative;
  outline: 0;
  margin-left: 1%;
  // margin-right: 20%;
  height: 0%;
  color: black;
  text-align: center;
  align-items: center;
  justify-content: center;
  opacity: .5;
  }
</style>
