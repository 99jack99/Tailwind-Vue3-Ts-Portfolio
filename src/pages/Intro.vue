<script setup lang="ts"></script>

<template>
  <div
    class="container-fluid flex flex-col justify-center items-start p-7 sm:p-20 overflow-hidden"
  >
    <h1 class="text-7xl sm:text-9xl font-semibold font-organical">
      LOVE, PASSION AND GLORY
    </h1>

    <div
      class="flex flex-col sm:flex-row w-full mt-20 bg-[url(../assets/imgs/form.jpg)] bg-cover bg-right py-10 border-4 border-black px-5 rounded-sm"
    >
      <div class="text-2xl font-medium w-full sm:w-2/3">
        Programming has been an adventure... I came from playing games, and
        internet itself. We all have some curiosity about how some things work.
        Turns out, I enjoyed how the process of creating a web page translate in
        understandin the concept of idea or product behind it.

        <div class="mt-10 mx-10 text-normal text-gray-800">
          “If you can do what you do best and be happy, you are further along in
          life than most people.”
        </div>
      </div>

      <div class="w-full h-96 relative text-white">
        <video
          class="border-4 rounded-sm border-black grayscale absolute top-0 left-0 ml-[20%] h-96 opacity-90"
          autoplay
          muted
          loop
        >
          <source src="@/assets/imgs/mini.mp4" type="video/mp4" />
        </video>

        <h1 class="absolute top-2 right-2 ml-10 text-8xl">Less</h1>
        <h1 class="absolute top-16 right-8 ml-10 text-6xl text-[#a32404]">
          is
        </h1>
        <h1 class="absolute top-12 right-16 ml-12 text-8xl">Better</h1>
      </div>
    </div>

    <div
      class="flex flex-col items-center sm:flex-row justify-around sm:items-start w-full mt-5 sm:mt-20"
    >
      <div class="h-96 w-80">
        <div
          class="h-4/5 bg-[url(../assets/imgs/lucas.jpg)] bg-cover bg-right rounded-sm"
        ></div>
        <div class="h-1/5 flex flex-col justify-center p-1 mt-4">
          <div class="text-2xl font-semibold">Lucas Drove</div>
          <div class="text-2xl font-thin">27, Front-end Developer</div>
        </div>
      </div>

      <div class="flex flex-col sm:w-3/4 mt-20 sm:mt-0 px-10">
        <div
          class="bg-black border-4 border-black h-32 flex items-center justify-start cursor-crosshair"
        >
          <h1 class="text-5xl sm:text-6xl font-semibold ml-4 text-white">
            VIDEOGAMES*
          </h1>
        </div>
        <div
          class="bg-black border-4 border-black h-32 my-10 flex items-center justify-start cursor-crosshair"
        >
          <h1 class="text-5xl sm:text-6xl font-semibold ml-4 text-white">
            SPORTS*
          </h1>
        </div>
        <div
          class="bg-black border-4 border-black h-32 flex items-center justify-start cursor-crosshair"
        >
          <h1 class="text-5xl sm:text-6xl font-semibold ml-4 text-white">
            LEARNING*
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
