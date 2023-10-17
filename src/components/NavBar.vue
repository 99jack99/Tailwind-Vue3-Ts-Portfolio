<script setup></script>

<template>
  <div
    class="container-fluid bg-white flex flex-col sm:flex-row justify-around sticky bottom-0 right-0 left-0"
  >
    <!-- INTRODUCTION -->
    <router-link
      to="/Introduction"
      class="px-4 py-4 border-2 border-black w-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 font-semibold"
      >INTRO</router-link
    >

    <!-- ABOUT ME -->
    <router-link
      to="/About"
      class="px-4 py-4 border-2 border-black w-full hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 font-semibold"
      >ABOUT ME</router-link
    >

    <!-- LOGO -->
    <!-- <router-link
      to="/"
      class="px-4 py-4 border-2 border-black bg-black w-full sm:w-80 order-first sm:order-none"
    >
      <img src="@/assets/imgs/guy.jpg" class="object-cover" />
    </router-link> -->

    <router-link
      to="/"
      class="border-2 border-black w-full h-20 sm:w-80 order-first sm:order-none bg-[url(../assets/imgs/guy.jpg)] bg-cover bg-center"
    >
      <!-- class="h-4/5 bg-[url(../assets/imgs/per.jpg)] bg-cover bg-right border-4" -->
    </router-link>

    <!-- EXPERIENCE -->
    <router-link
      to="/Experience"
      class="px-4 py-4 border-2 border-black w-full hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 font-semibold"
      >EXPERIENCE</router-link
    >

    <!-- CONTACT -->
    <router-link
      to="/Contact"
      class="px-4 py-4 border-2 border-black w-full hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 font-semibold"
      >CONTACT</router-link
    >
  </div>
</template>

<style lang="scss" scoped></style>
