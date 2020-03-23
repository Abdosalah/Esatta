<template>
  <div>
    <div class="container">
      <router-link class="links" :to="localizedRoute('/')" exact>
        <i class="material-icons icon">add</i>
        PHONE
      </router-link>
      <p>Weekdays 9am to 6pm AEST</p>
      <p>(+61) 2342432342</p>
    </div>
    <div class="container">
      <router-link class="links" :to="localizedRoute('/')" exact>
        <i class="material-icons icon">add</i>
        LIVE CHAT
      </router-link>
      <p>Weekdays 9am to 9:30pm AEST</p>
      <p>Saturday 9am to 6pm AEST</p>
    </div>
  </div>
</template>

<style scoped>
.container{
    display: grid;
    font-size: small;
    margin-top: 4rem;
    margin-bottom: 3rem;
}
p{
    width: max-content;
    margin-left: 15%;
}
.links{
    font-weight: 800;
    font-size: small;
    margin-bottom: 5%;
    width: fit-content;
}
.icon{
    font-weight: 800;
    font-size: medium;
}
</style>
