<script setup lang="ts"></script>

<template>
  <div
    class="container-fluid flex flex-col justify-center items-start p-7 sm:p-20 overflow-hidden"
  >
    <h1 class="text-7xl sm:text-9xl font-semibold font-organical">
      LOVE, PASSION AND GLORY
    </h1>

    <div class="flex flex-col sm:flex-row w-full mt-20">
      <div class="text-2xl font-medium w-full sm:w-2/3">
        I`ve been programming since I was a teen... and guess what? I only got
        better. My passion, consistence and loved for it, made me a fierce
        developer. Nowadays I dedicate my time in Futuristic and modern web
        pages.
      </div>

      <div class="w-full m-0 relative font-chalmone bg-slate-300">
        <video
          class="border-4 border-black grayscale absolute top-0 left-0 h-min"
          autoplay
          muted
          loop
        >
          <source src="@/assets/imgs/mini.mp4" type="video/mp4" />
        </video>

        <h1 class="absolute top-2 left-2 ml-10 text-9xl">Less</h1>
        <h1 class="absolute top-8 left-8 ml-10 text-6xl">is</h1>
        <div class="absolute top-12 left-16 ml-12 text-9xl text-cyan-900">
          <span class="line-through">MORE</span><span> better</span>
        </div>
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
          <h1 class="text-5xl sm:text-6xll font-semibold ml-4 text-white">
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
