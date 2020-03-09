<template>
  <div class="container">
    <h6 class="font-extrabold p-16">
      WHAT CAN WE HELP YOU WITH
    </h6>
    <div class="linkContainer">
      <router-link class="links" :to="localizedRoute('/')" exact>
        MY MEASUREMENTS
        <i class="material-icons icon">keyboard_arrow_right</i>
      </router-link>
      <router-link class="links" :to="localizedRoute('/')" exact>
        MY ORDER
        <i class="material-icons icon">keyboard_arrow_right</i>
      </router-link>
      <router-link class="links" :to="localizedRoute('/')" exact>
        ALTERATIONS
        <i class="material-icons icon">keyboard_arrow_right</i>
      </router-link>
      <router-link class="links" :to="localizedRoute('/')" exact>
        RETURNS
        <i class="material-icons icon">keyboard_arrow_right</i>
      </router-link>
      <router-link class="links" :to="localizedRoute('/')" exact>
        SELL ON ESATTA
        <i class="material-icons icon">keyboard_arrow_right</i>
      </router-link>
      <router-link class="links" :to="localizedRoute('/')" exact>
        CAREERS
        <i class="material-icons icon">keyboard_arrow_right</i>
      </router-link>
      <router-link class="links" :to="localizedRoute('/')" exact>
        PRESS
        <i class="material-icons icon">keyboard_arrow_right</i>
      </router-link>
      <router-link class="links" :to="localizedRoute('/')" exact>
        OTHERS
        <i class="material-icons icon">keyboard_arrow_right</i>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
.container{
    background-color: #C57974;
    color: white;
}
.links{
    padding: 10px;
    font-size: medium;
}
.linkContainer{
    display: grid;
    text-align: center;
    padding-top: 1rem;
}
.icon{
    position: sticky;
    left: 41%;
}
</style>
