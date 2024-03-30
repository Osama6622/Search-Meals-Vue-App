<template>
  <div class="bg-gray-100 h-full">
    <Navbar class="pl-5 pr-5" />
    <main>
      <div class="max-w-[1200px] mx-auto">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>