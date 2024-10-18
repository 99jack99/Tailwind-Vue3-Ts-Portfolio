<script setup lang="ts">
import { ref } from 'vue'

let keywords = ref([
  {
    id: 1,
    name: 'Features Development'
  },
  {
    id: 2,
    name: 'UI/UX'
  },
  {
    id: 3,
    name: 'Code maintanability'
  }
])
</script>

<template>
  <div
    class="container-fluid flex flex-col justify-center items-start p-7 lg:p-20 overflow-hidden"
  >
    <h1 class="text-7xl lg:text-9xl font-semibold font-organical">
      LOVE, PASSION AND GLORY
    </h1>

    <div
      class="flex flex-col lg:flex-row w-full mt-20 bg-[url(../assets/imgs/form.jpg)] bg-cover bg-right py-10 border-4 border-black px-5 rounded-sm"
    >
      <div class="text-2xl font-medium w-full lg:w-2/3">
        Programming has been an adventure... Turns out, I enjoyed how the
        process of creating a web page, translate in understandin the concept of
        idea of a product behind it.

        <div class="mt-10 mx-10 text-normal text-gray-800">
          “If you can do what you do best and be happy, you are further along in
          life than most people.”
        </div>
      </div>

      <div class="w-full h-96 relative text-white mt-10 lg:mt-0">
        <video
          class="border-4 rounded-sm border-black grayscale absolute top-0 left-0 ml-[20%] h-96 opacity-90"
          autoplay
          muted
          loop
        >
          <source src="@/assets/imgs/mini.mp4" type="video/mp4" />
        </video>

        <h1 class="absolute top-2 right-2 ml-10 text-8xl text-black">Less</h1>
        <h1 class="absolute top-12 right-8 ml-10 text-6xl text-[#a32404]">
          is
        </h1>
        <h1
          class="absolute top-16 right-2 lg:right-16 ml-12 text-8xl text-black"
        >
          Better
        </h1>
      </div>
    </div>

    <div
      class="flex flex-col items-center lg:flex-row justify-around lg:items-start w-full mt-20 lg:mt-20"
    >
      <div class="h-96 w-80">
        <div
          class="h-4/5 border-2 bg-[url(../assets/imgs/jackson-normal-unedited.png)] bg-cover bg-right rounded-sm"
        ></div>
        <div class="h-1/5 flex flex-col justify-center p-1 mt-4">
          <div class="text-2xl font-semibold">Jackson Almeida</div>
          <div class="text-2xl font-thin">25, Front-end Developer</div>
        </div>
      </div>

      <div class="flex flex-col mt-10 lg:mt-0">
        <div
          class="flex flex-col w-full ml-0 lg:ml-5 mt-10 lg:mt-0 lg:mb-5 px-0"
          v-for="words in keywords"
          :key="words.id"
        >
          <div
            class="bg-black border-black p-6 flex items-center justify-start cursor-crosshair"
          >
            <h1 class="text-3xl lg:text-6xl font-semibold ml-4 text-white">
              {{ words.name }} *
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
