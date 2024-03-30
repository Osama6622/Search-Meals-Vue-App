<template>
  <div class="flex justify-center gap-2 mt-2">
    <router-link
      v-for="letter of letters"
      :key="letter"
      :to="{ name: 'MealsByLetter', params: { letter } }"
    >
      {{ letter }}
    </router-link>
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
import { useRoute } from "vue-router";
import store from "../store";
import { computed, onMounted, ref, watch } from "vue";


const checkMeals = ref(false);
const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const meals = computed(() => store.state.mealsByLetter);

// Load Meals When Route (Letter) Changed
watch(route, () => {
  store.dispatch('searchMealsByLetter', route.params.letter);
  checkMeals.value = true
})

</script>