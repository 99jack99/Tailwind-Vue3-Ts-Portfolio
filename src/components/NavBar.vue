<script setup></script>

<template>
  <div
    class="container-fluid bg-white flex flex-col sm:flex-row justify-around sticky bottom-0 right-0 left-0"
  >
    <!-- INTRODUCTION -->
    <router-link
      to="/Introduction"
      class="px-4 py-4 border-2 border-black w-full"
      >INTRO</router-link
    >

    <!-- ABOUT ME -->
    <router-link to="/About" class="px-4 py-4 border-2 border-black w-full"
      >ABOUT ME</router-link
    >

    <!-- LOGO -->
    <router-link
      to="/"
      class="px-4 py-4 border-2 border-black bg-black w-full sm:w-80 order-first sm:order-none"
    >
      IMG
    </router-link>

    <!-- EXPERIENCE -->
    <router-link to="/Experience" class="px-4 py-4 border-2 border-black w-full"
      >EXPERIENCE</router-link
    >

    <!-- CONTACT -->
    <router-link to="/Contact" class="px-4 py-4 border-2 border-black w-full"
      >CONTACT</router-link
    >
  </div>
</template>

<style lang="scss" scoped></style>
