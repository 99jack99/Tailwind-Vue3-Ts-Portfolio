<script setup lang="ts"></script>

<template>
  <div
    class="container-fluid flex flex-col items-center min-h-screen p-10 bg-red-300"
  >
    <h1 class="text-7xl sm:text-9xl font-semibold font-organical">
      My job timeline
    </h1>
    <div class="flex flex-col justify-center items-center bg-blue-300 w-full">
      <!-- CARD -->
      <div
        class="bg-black min-w-sm max-w-md flex items-center mt-20 text-white p-5 rounded-md"
      >
        <div class="flex flex-col">
          <div
            class="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 p-1 rounded-lg"
          >
            <img src="@/assets/icons/google.svg" class="h-10 w-10" alt="" />
            <h1 class="text-xl font-semibold ml-4">Google Inc.</h1>
          </div>

          <h2 class="italic text-lg">from 2019 till now</h2>
          <div class="inline mt-5">
            <span
              class="font-semibold relative z-0 before:content-[''] before:-z-10 before:absolute before:left-2 before:bottom-0 before:w-full before:h-3 before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500"
              >Software Engineer</span
            >
            -
            <span>Software development in clients custom project</span>
          </div>
        </div>
      </div>

      <!-- CARD -->
      <div
        class="bg-black min-w-sm max-w-md relative flex items-center mt-20 text-white p-4 rounded-md"
      >
        <div class="flex flex-col">
          <div
            class="flex items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 p-1 rounded-lg"
          >
            <img src="@/assets/icons/amazon.svg" class="h-10 w-10" alt="" />
            <h1 class="text-xl font-semibold ml-4">Amazon Inc.</h1>
          </div>

          <h2 class="italic text-lg">from 2014 to 2009</h2>
          <div class="inline mt-5">
            <span
              class="font-semibold relative z-0 before:content-[''] before:-z-10 before:absolute before:left-2 before:bottom-0 before:w-full before:h-3 before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500"
              >Software Engineer</span
            >
            -
            <span>Software development in clients custom project</span>
          </div>
        </div>
      </div>

      <!-- card -->
      <div
        class="bg-black min-w-sm max-w-md relative flex items-center text-white p-4 mt-20 rounded-md"
      >
        <div class="flex flex-col">
          <div
            class="flex items-center bg-gradient-to-r from-amber-500 to-orange-500 p-1 rounded-lg"
          >
            <img src="@/assets/icons/meta.svg" class="h-10 w-10" alt="" />
            <h1 class="text-xl font-semibold ml-4">Meta Platform</h1>
          </div>

          <h2 class="italic text-lg">from 2019 to 2014</h2>
          <div class="inline mt-5">
            <span
              class="font-semibold relative z-0 before:content-[''] before:-z-10 before:absolute before:left-2 before:bottom-0 before:w-full before:h-3 before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500"
              >Software Engineer</span
            >
            -
            <span>Software development in clients custom project</span>
          </div>
        </div>
      </div>

      <!-- card -->
      <div
        class="bg-black min-w-sm max-w-md flex items-center text-white p-4 mt-20 rounded-md"
      >
        <div class="flex flex-col">
          <div
            class="flex items-center bg-gradient-to-r from-red-500 to-pink-500 p-1 rounded-lg"
          >
            <img src="@/assets/icons/vue.svg" class="h-10 w-10" alt="" />
            <h1 class="text-xl font-semibold">Google Inc.</h1>
          </div>

          <h2 class="italic text-lg">2019 - Current</h2>
          <div class="inline mt-5">
            <span
              class="font-semibold relative z-0 before:content-[''] before:-z-10 before:absolute before:left-2 before:bottom-0 before:w-full before:h-3 before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500"
              >Software Engineer</span
            >
            -
            <span>Software development in clients custom project</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
