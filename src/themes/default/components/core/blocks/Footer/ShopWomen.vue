<template>
  <footer class="f2">
    <div class="shopwomancontainer flex">
      <Newsletter />
    </div>
  </footer>
</template>

<script>
import Newsletter from 'theme/components/core/blocks/Footer/Newsletter'
export default {
  components: {
    Newsletter
  }
}
</script>

<style scoped>
.f2{
  display: flex;
  background-color : rgb(20, 0, 0);
  color: rgb(209, 193, 169);
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 3%;
}
.upfooter{
  display: flex;
  justify-content: center;
  padding: 3%;
}
.shopwomancontainer{
  align-items: center;
  width: 100%;
}
.container{
  width: fit-content;
}
.heading{
  color: rgb(214, 155, 121);
  font-size: 12pt;
  text-align: center;
  padding-bottom: 5%;
  padding-right: 5%;
}
.subheading{
  letter-spacing: 1px;
  padding: 1%;
  font-size: 8pt;
  padding-bottom: 4%;
}
.links{
  color: rgb(207, 132, 132);
  display: flex;
  padding-left: 2%;
  padding-right: 2%;
  font-size: 6pt;
  letter-spacing: 2px;
}
.link{
  padding: 2%;
}
.link:hover{
  color: #C57974;
  transition: 0.3s;
}
</style>
