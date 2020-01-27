<template>
  <div>
    <header class="text-center">
      <p class="text-3xl font-bold mb-4 mt-12">
        Shoulder Angle
      </p>
      <p>
        A basic estimation of your measurement has<br>
        been performed. We limit the clothing you have access.<br>
      </p>
    </header>
    <div class="flex mt-16">
      <div class="w-1/3 text-center">
        <button class="selection-button" />
        <p class="font-bold pt-8 pb-4">
          Flat
        </p>
        <p class="text-sm">
          A basic estimation of your<br>
          measurement has been
        </p>
      </div>
      <div class="w-1/3 text-center">
        <button class="selection-button" />
        <p class="font-bold pt-8 pb-4">
          Normal
        </p>
        <p class="text-sm">
          A basic estimation of your<br>
          measurement has been
        </p>
      </div>
      <div class="w-1/3 text-center">
        <button class="selection-button" />
        <p class="font-bold pt-8 pb-4">
          Prominent
        </p>
        <p class="text-sm">
          A basic estimation of your<br>
          measurement has been
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.selection-button {
  height: 9.5rem;
  width: 9.5rem;
  border-radius: 50%;
  background-color: #E2E2E2;
  display: block;
  margin: auto;
}

button:focus {
  outline: none;
  box-shadow: 0px 0px 0px 5px red;
}
</style>
