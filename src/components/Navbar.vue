<template>
  <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'HomeView' }"
      class="inline-flex items-center px-5 text-3xl text-orange-400 font-semibold"
    >
      Home</router-link
    >
    <div class="flex items-center gap-1">
      <router-link
        v-if="!showIcon"
        :to="{ name: 'MealsByName' }"
        class="inline-flex items-center px-2 h-full transition-colors sm:text-sm text-xl hover:bg-orange-400 hover:text-white"
        >Search Meals</router-link
      >
      <router-link
        v-else
        :to="{ name: 'MealsByName' }"
        class="inline-flex items-center px-2 h-full transition-colors sm:text-sm text-xl hover:bg-orange-400 hover:text-white"
        ><i class="fa-solid fa-magnifying-glass"></i
      ></router-link>

      <router-link
        v-if="!showIcon"
        :to="{ name: 'MealsByLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors sm:text-sm text-xl hover:bg-orange-400 hover:text-white"
        >Meals By Letter</router-link
      >
      <router-link
        v-else
        :to="{ name: 'MealsByLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors sm:text-sm text-xl hover:bg-orange-400 hover:text-white"
        ><i class="fa-solid fa-arrow-down-a-z"></i
      ></router-link>

      <router-link
        v-if="!showIcon"
        :to="{ name: 'MealsByIngredient' }"
        class="inline-flex items-center px-2 h-full transition-colors sm:text-sm text-xl hover:bg-orange-400 hover:text-white"
        >Meals By Ingredients</router-link
      >
      <router-link
        v-else
        :to="{ name: 'MealsByIngredient' }"
        class="inline-flex items-center px-2 h-full transition-colors sm:text-sm text-xl hover:bg-orange-400 hover:text-white"
        ><i class="fa-brands fa-discourse"></i
      ></router-link>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

let windowWidth = ref(window.innerWidth);
const showIcon = ref(false);

onMounted(() => {
  window.addEventListener("resize", handelResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handelResize);
});

const handelResize = () => {
  windowWidth.value = window.innerWidth;

  // if (windowWidth.value < 650) {
  //   showIcon.value = true;
  // }

  if (window.innerWidth < 650) {
    showIcon.value = true;
  } else {
    showIcon.value = false;
  }
};
</script>