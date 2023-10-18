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

      <div
        class="w-full flex flex-col sm:flex-row items-center sm:items-start sm:justify-around mt-5 sm:m-0"
      >
        <div class="flex flex-col">
          <div class="flex items-center justify-start my-3 sm:mb-4">
            <img src="@/assets/icons/vue.svg" class="h-10 w-10" alt="" />
            <div class="ml-2 text-lg font-semibold">Vue.js</div>
          </div>
          <div class="flex items-center justify-start my-3 sm:mb-4">
            <img src="@/assets/icons/ts.svg" class="h-10 w-10" alt="" />
            <div class="ml-2 text-lg font-semibold">Typescript</div>
          </div>
          <div class="flex items-center justify-start my-3 sm:mb-4">
            <img src="@/assets/icons/js.svg" class="h-10 w-10" alt="" />
            <div class="ml-2 text-lg font-semibold">Javascript</div>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex items-center justify-start my-3 sm:mb-4">
            <img src="@/assets/icons/tailwind.svg" class="h-10 w-10" alt="" />
            <div class="ml-2 text-lg font-semibold">Tailwind</div>
          </div>
          <div class="flex items-center justify-start my-3 sm:mb-4">
            <img src="@/assets/icons/vue.svg" class="h-10 w-10" alt="" />
            <div class="ml-2 text-lg font-semibold">Vue.js</div>
          </div>
          <div class="flex items-center justify-start my-3 sm:mb-4">
            <img src="@/assets/icons/vue.svg" class="h-10 w-10" alt="" />
            <div class="ml-2 text-lg font-semibold">Vue.js</div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col items-center sm:flex-row justify-around sm:items-start w-full mt-5 sm:mt-10"
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
          <h1 class="text-6xl font-semibold ml-4 text-white">VIDEOGAMES*</h1>
        </div>
        <div
          class="bg-black border-4 border-black h-32 my-10 flex items-center justify-start cursor-crosshair"
        >
          <h1 class="text-6xl font-semibold ml-4 text-white">SPORTS*</h1>
        </div>
        <div
          class="bg-black border-4 border-black h-32 flex items-center justify-start cursor-crosshair"
        >
          <h1 class="text-6xl font-semibold ml-4 text-white">LEARNING*</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
