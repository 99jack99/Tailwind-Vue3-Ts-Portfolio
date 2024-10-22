<script setup></script>

<template>
  <div
    class="container-fluid bg-white flex flex-col sm:flex-row justify-around sticky bottom-0 w-full"
  >
    <!-- INTRODUCTION -->
    <router-link
      to="/Introduction"
      class="p-2 md:p-4 border-2 border-black w-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 font-semibold"
      >INTRO</router-link
    >

    <!-- ABOUT ME -->
    <router-link
      to="/Project"
      class="p-2 md:p-4 border-2 border-black w-full hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 font-semibold"
      >PROJECTS</router-link
    >

    <router-link
      to="/"
      class="border-2 border-black w-full h-14 md:h-20 md:w-80 order-first sm:order-none bg-[url(@/assets/imgs/myself.png)] bg-cover bg-center"
    >
    </router-link>

    <!-- EXPERIENCE -->
    <router-link
      to="/Experience"
      class="p-2 md:p-4 border-2 border-black w-full hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 font-semibold"
      >EXPERIENCE</router-link
    >

    <!-- CONTACT -->
    <router-link
      to="/Contact"
      class="p-2 md:p-4 border-2 border-black w-full hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 font-semibold"
      >CONTACT</router-link
    >
  </div>
</template>

<style lang="scss" scoped></style>
