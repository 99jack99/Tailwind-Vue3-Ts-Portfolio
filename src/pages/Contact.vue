<script setup lang="ts"></script>

<template>
  <div class="container-fluid h-screen flex flex-col">
    <div
      class="border-4 border-black w-full h-fit p-5 text-7xl sm:text-9xl font-semibold font-organical"
    >
      Lets connect!
    </div>
    <div class="flex h-full">
      <div
        class="border-4 border-black w-1/2 p-5 flex flex-col items-start bg-amber-400 pl-20 pt-20"
      >
        <h1 class="text-5xl underline underline-offset-4">
          Dont be shy! Talk to me
        </h1>

        <div class="flex flex-col mt-10">
          <label for="name">Name</label>
          <input
            name="name"
            type="text"
            class="border-2 border-black p-2 w-80"
          />
        </div>
        <div class="flex flex-col mt-10">
          <label for="name">Email</label>
          <input
            name="name"
            type="text"
            class="border-2 border-black p-2 w-80"
          />
        </div>
        <div class="flex flex-col mt-10">
          <label for="name">Message</label>
          <input
            name="name"
            type="text"
            class="border-2 border-black p-2 w-80"
          />
        </div>
        <div
          class="mt-10 p-2 bg-black text-white flex items-center justify-center w-24"
        >
          Submit
        </div>
      </div>
      <div
        class="border-4 border-black text-white bg-black flex flex-col w-1/2 pl-20 pt-20"
      >
        <div class="flex flex-col">
          <h1 class="text-5xl underline underline-offset-4">Socials</h1>
          <div class="flex mt-8">
            <img
              src="@/assets/icons/linkedin.svg"
              class="h-12 w-12 mr-3 hover:scale-125 cursor-pointer"
              alt=""
            />
          </div>
        </div>

        <div class="flex flex-col mt-10">
          <h1 class="text-5xl underline underline-offset-4">Links</h1>
          <div class="flex mt-8">
            <img
              src="@/assets/icons/github.svg"
              class="h-12 w-12 mr-3 hover:scale-125 cursor-pointer"
              alt=""
            />
          </div>
        </div>

        <div class="flex flex-col mt-20">
          <h1 class="text-2xl">Made by me, myself. You can steal my work</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
