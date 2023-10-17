<script setup lang="ts"></script>

<template>
  <div class="h-screen">
    <div
      class="grid grid-cols-3 grid-rows-3 md:grid-cols-3 md:grid-rows-3 h-full"
    >
      <div
        class="col-span-2 md:col-span-2 border-4 border-black grid justify-items-center items-center cursor-pointer hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500"
      >
        <h1 class="text-6xl font-semibold">INTRO</h1>
      </div>
      <div
        class="row-span-2 md:row-span-2 border-4 border-black grid justify-items-center items-center cursor-pointer hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500"
      >
        <h1 class="text-6xl font-semibold">ABOUT ME</h1>
      </div>
      <div
        class="row-span-2 md:row-span-2 border-4 border-black grid justify-items-center items-center hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500"
      >
        <h1 class="text-6xl font-semibold">EXPERIENCE</h1>
      </div>

      <div
        class="border-4 border-black img bg-center bg-cover bg-no-repeat"
      ></div>

      <div
        class="col-span-2 md:col-span-2 border-4 border-black grid justify-items-center items-center hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500"
      >
        <h1 class="text-6xl font-semibold">CONTACT</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.img {
  background-image: url(../assets/imgs/guy.jpg);
}
</style>
