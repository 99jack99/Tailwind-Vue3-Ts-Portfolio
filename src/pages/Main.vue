<script setup lang="ts"></script>

<template>
  <div class="h-screen">
    <div class="flex flex-col md:grid md:grid-cols-3 md:grid-rows-3 h-full">
      <!-- INTRODUCTION -->
      <router-link
        to="/Introduction"
        class="h-48 md:h-auto md:col-span-2 border-4 border-black grid place-content-center cursor-pointer hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500"
      >
        <h1 class="text-5xl md:text-6xl font-semibold">INTRO</h1>
      </router-link>

      <!-- ABOUT ME -->
      <router-link
        to="/Project"
        class="h-48 md:h-auto md:row-span-2 md:col-span-1 border-4 border-black grid place-content-center cursor-pointer hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500"
      >
        <h1 class="text-5xl md:text-6xl font-semibold">PROJECTS</h1>
      </router-link>

      <!-- EXPERIENCE -->
      <router-link
        to="/Experience"
        class="truncate md:text-clip h-48 md:h-auto md:row-span-2 md:col-span-1 border-4 cursor-pointer border-black grid place-content-center hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500"
      >
        <h1 class="text-5xl md:text-6xl font-semibold">EXPERIENCE</h1>
      </router-link>

      <!-- PHOTO -->
      <router-link
        to="/"
        class="h-48 md:h-auto border-4 border-black bg-[url(../assets/imgs/jackjack.png)] bg-center bg-cover bg-no-repeat order-first md:order-none cursor-pointer hover:grayscale"
      ></router-link>

      <!-- CONTACT -->
      <router-link
        to="/Contact"
        class="h-48 md:h-auto md:row-span-1 md:col-span-2 border-4 cursor-pointer border-black grid place-content-center hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500"
      >
        <h1 class="text-5xl md:text-6xl font-semibold">CONTACT</h1>
      </router-link>
    </div>
  </div>
</template>
