<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
  </div>

  <div
    class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 cursor-pointer"
  >
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient";
import MealItem from "../components/MealItem.vue";

const meals = ref([]);

onMounted(async () => {
  // const response = await axiosClient.get('')
  for (let i = 0; i < 10; i++) {
    axiosClient.get(`random.php`).then(({ data }) => {
      meals.value.push(data.meals[0]);
    });
  }

  console.log(meals.value);
});
</script>