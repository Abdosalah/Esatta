<template>
  <div class="relative">
    <img class="h-1/2 w-screen object-cover" src="assets/esatta-images/page-banner/hp_banner.jpg">
    <div class="h-2/5 absolute bottom-0 bg-white w-full md:w-80% lg:w-65% md:ml-10% ">
      <p class="text-6xl text-center font-bold mt-16">
        Designers
      </p>
      <div class="text-center w-30% m-auto mt-16">
        <form action="">
          <input type="text" placeholder="Search" name="search" class="w-82%">
          <button type="submit">
            &#128269;
          </button>
        </form>
        <hr>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.keep-browsing:hover::after {
  content: none;
  display: none;
}
button {
  width: 18%;
  float: right;
  padding: 6px 10px;
  font-size: 20px;
  border: none;
  cursor: pointer;
}
input:focus {
  outline: none;
  -webkit-appearance: none;
}
button:focus {
  outline: none;
  -webkit-appearance: none;
}
</style>
