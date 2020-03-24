<template>
  <!-- <div>
    <img class="hidden lg:block" src="../../../../assets/contact_bcg.jpg">
  </div> -->
  <div class="main-div lg:relative">
    <img class="h-screen w-screen object-cover lg:block opacity-50" src="../../../../assets/contact_bcg.jpg">
    <div class="imgText lg:absolute lg:block m-auto table">
      <h1 class="text-5xl">
        Contact
      </h1>
      <div class="pt-8">
        <div>
          <p class="my-5">
            Esatta is commited to delivering the best expierience to
            its customers. Therefore, we will globally answer any
            questions you may have as soon as possible
          </p>
          <p>
            Please review our sections for answers to the most
            common questions.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-div{
  color: white;
  background-color: black;
}
.imgText{
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
