<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-orange-500 focus:border-orange-500 focus:ring-orange-500 w-full"
      placeholder="Search For Meals"
      @change="searchMeals"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 cursor-pointer">
    <meal-item
      :meal="meal"
      v-for="meal in meals"
      :key="meal.idMeal"
    ></meal-item>

    <MealsError :meals="meals" :checkMeals="checkMeals" />
  </div>
</template>

<script setup>
import MealItem from "../components/MealItem.vue";
import MealsError from "../components/MealsError.vue";
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";


const checkMeals = ref(false);
const route = useRoute();
const keyword = ref("");
const meals = computed(() => {
  return store.state.searchedMeals;
});

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
  checkMeals.value = true
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>