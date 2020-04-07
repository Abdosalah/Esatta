<template>
  <div id="navbarinternal">
    <div v-if="categories.length > '0'" class="buttonContainer">
      <div class="m-2">
        <v-btn @click="deleteAllEvents(categories)" class="filteredButton pointer">
          <span style="margin-top: 8px;">
            CLEAR ALL
          </span>
          <i class="material-icons" style="font-size: 11px">
            close
          </i>
        </v-btn>
      </div>
      <div v-for="(f, index) in categories" :key="f" class="m-2">
        <v-btn @click="deleteEvent(index)" class="filteredButton pointer">
          <span style="margin-top: 8px;">
            {{ f }}
          </span>
          <i class="material-icons" style="font-size: 11px">
            close
          </i>
        </v-btn>
      </div>
    </div>
    <div class="extendedRefine">
      <v-btn flat slot="activated" class="button" @click="upHereAgain = !upHereAgain">
        <span style="margin-top: 8px; font-colo">
          DRESSES
        </span>
      </v-btn>
      <v-btn flat slot="activated" class="button">
        <span style="margin-top: 8px;">
          DESIGNER
        </span>
      </v-btn>
      <v-btn flat slot="activated" class="button">
        <span style="margin-top: 8px;">
          ACTIVITIES
        </span>
      </v-btn>
      <v-btn flat slot="activated" class="button">
        <span style="margin-top: 8px;">
          THEMES
        </span>
      </v-btn>
      <v-btn flat slot="activated" class="button">
        <span style="margin-top: 8px;">
          COLOURS & PATTERNS
        </span>
      </v-btn>
      <v-btn flat slot="activated" class="button">
        <span style="margin-top: 8px;">
          BODY SHAPE
        </span>
      </v-btn>
      <div class="nav mx-auto" id="checkboxes" v-show="upHereAgain">
        <div class="pl-12 column options flex items-center mr-4 mb-4">
          <input @click="categoryFilter(categories)" id="radio1" type="checkbox" name="radio" class="hidden" checked value="ALL DRESSES" v-model="categories">
          <label for="radio1" class="flex items-center cursor-pointer">
            <span class="w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink" />
            ALL DRESSES</label>
        </div>

        <div class="pl-12 pr-48 pb-6 flex d-flex flex-row">
          <div class="container d-flex flex-column">
            <div class="options flex items-center mr-4 mb-4">
              <input @click="categoryFilter(categories)" id="radio2" type="checkbox" name="radio" class="hidden" value="RAINWEAR" v-model="categories">
              <label for="radio2" class="flex items-center cursor-pointer">
                <span class="w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink" />
                RAINWEAR</label>
            </div>

            <div class="options flex items-center mr-4 mb-4">
              <input @click="categoryFilter(categories)" id="radio3" type="checkbox" name="radio" class="hidden" value="SMART-CASUAL" v-model="categories">
              <label for="radio3" class="flex items-center cursor-pointer">
                <span class="w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink" />
                SMART-CASUAL</label>
            </div>

            <div class="options flex items-center mr-4 mb-4">
              <input @click="categoryFilter(categories)" id="radio4" type="checkbox" name="radio" class="hidden" value="WARDROBE ESSENTIALS" v-model="categories">
              <label for="radio4" class="flex items-center cursor-pointer">
                <span class="w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink" />
                WARDROBE ESSENTIALS</label>
            </div>

            <div class="options flex items-center mr-4 mb-4">
              <input @click="categoryFilter(categories)" id="radio5" type="checkbox" name="radio" class="hidden" value="70S / HIPSTER" v-model="categories">
              <label for="radio5" class="flex items-center cursor-pointer">
                <span class="w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink" />
                70S / HIPSTER</label>
            </div>
          </div>

          <div class="container d-flex flex-column">
            <div class="options flex items-center mr-4 mb-4">
              <input @click="categoryFilter(categories)" id="radio6" type="checkbox" name="radio" class="hidden" value="LINGERIE" v-model="categories">
              <label for="radio6" class="flex items-center cursor-pointer">
                <span class="w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink" />
                LINGERIE</label>
            </div>

            <div class="options flex items-center mr-4 mb-4">
              <input @click="categoryFilter(categories)" id="radio7" type="checkbox" name="radio" class="hidden" value="LINGERIE / BRA" v-model="categories">
              <label for="radio7" class="flex items-center cursor-pointer">
                <span class="w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink" />
                LINGERIE / BRA</label>
            </div>

            <div class="options flex items-center mr-4 mb-4">
              <input @click="categoryFilter(categories)" id="radio8" type="checkbox" name="radio" class="hidden" value="LINGERIE / PANTIES" v-model="categories">
              <label for="radio8" class="flex items-center cursor-pointer">
                <span class="w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink" />
                LINGERIE / PANTIES</label>
            </div>

            <div class="options flex items-center mr-4 mb-4">
              <input @click="categoryFilter(categories)" id="radio9" type="checkbox" name="radio" class="hidden" value="PANTS / TROUSERS" v-model="categories">
              <label for="radio9" class="flex items-center cursor-pointer">
                <span class="w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink" />
                PANTS / TROUSERS</label>
            </div>
          </div>

          <div class="container d-flex flex-column">
            <div class="options flex items-center mr-4 mb-4">
              <input @click="categoryFilter(categories)" id="radio10" type="checkbox" name="radio" class="hidden" value="SHORTS" v-model="categories">
              <label for="radio10" class="flex items-center cursor-pointer">
                <span class="w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink" />
                SHORTS</label>
            </div>

            <div class="options flex items-center mr-4 mb-4">
              <input @click="categoryFilter(categories)" id="radio11" type="checkbox" name="radio" class="hidden" value="SKIRTS" v-model="categories">
              <label for="radio11" class="flex items-center cursor-pointer">
                <span class="w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink" />
                SKIRTS</label>
            </div>

            <div class="options flex items-center mr-4 mb-4">
              <input @click="categoryFilter(categories)" id="radio12" type="checkbox" name="radio" class="hidden" value="SLEEPWEAR / NIGHTWEAR" v-model="categories">
              <label for="radio12" class="flex items-center cursor-pointer">
                <span class="w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink" />
                SLEEPWEAR / NIGHTWEAR</label>
            </div>

            <div class="options flex items-center mr-4 mb-4">
              <input @click="categoryFilter(categories)" id="radio13" type="checkbox" name="radio" class="hidden" value="SUITS" v-model="categories">
              <label for="radio13" class="flex items-center cursor-pointer">
                <span class="w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink" />
                SUITS</label>
            </div>
          </div>

          <div class="container d-flex flex-column">
            <div class="options flex items-center mr-4 mb-4">
              <input @click="categoryFilter(categories)" id="radio14" type="checkbox" name="radio" class="hidden" value="SWIMWEAR / BEACHWEAR" v-model="categories">
              <label for="radio14" class="flex items-center cursor-pointer">
                <span class="w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink" />
                SWIMWEAR / BEACHWEAR</label>
            </div>

            <div class="options flex items-center mr-4 mb-4">
              <input @click="categoryFilter(categories)" id="radio15" type="checkbox" name="radio" class="hidden" value="SWIMWEAR / BIKINI BOTTOM" v-model="categories">
              <label for="radio15" class="flex items-center cursor-pointer">
                <span class="w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink" />
                SWIMWEAR / BIKINI BOTTOM</label>
            </div>

            <div class="options flex items-center mr-4 mb-4">
              <input @click="categoryFilter(categories)" id="radio16" type="checkbox" name="radio" class="hidden" value="SWIMWEAR / BIKINI TOP" v-model="categories">
              <label for="radio16" class="flex items-center cursor-pointer">
                <span class="w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink" />
                SWIMWEAR / BIKINI TOP</label>
            </div>

            <div class="options flex items-center mr-4 mb-4">
              <input @click="categoryFilter(categories)" id="radio17" type="checkbox" name="radio" class="hidden" value="TOPS" v-model="categories">
              <label for="radio17" class="flex items-center cursor-pointer">
                <span class="w-6 h-6 inline-block mr-2 rounded-full border border-grey flex-no-shrink" />
                TOPS</label>
            </div>
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
      categories: []
    };
  },
  methods: {
    categoryFilter (categories) {
      this.categories = categories
    },
    deleteEvent: function (index) {
      // this.filter.splice(index);
      this.$delete(this.categories, index)
    },
    deleteAllEvents: function (index) {
      this.categories.splice(index);
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
.container{
    /* width: fit-content; */
}
.column{
    margin-left: 9px;
    padding-top: 2%;
}
.nav{
  background-color: #E2E2E2;
  color: black;
}
</style>
