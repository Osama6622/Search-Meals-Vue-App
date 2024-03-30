<template>
  <div>
    <div class="ingredients grid gap-3 m-3 pb-3 text-pretty text-center">
      <router-link
        class="pt-1 pb-1 pr-2 pl-2 rounded bg-white hover:bg-orange-500 hover:text-white text-black cursor-pointer"
        v-for="ingredient of ingrediants"
        :key="ingredient"
        :to="{ name: 'MealsByIngredient', params: { ingredient } }"
        >{{ ingredient }}</router-link
      >
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 cursor-pointer">
      <meal-item
        :meal="meal"
        v-for="meal in meals"
        :key="meal.idMeal"
      ></meal-item>

      <MealsError :meals="meals" :checkMeals="checkMeals" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import store from "../store";
import MealItem from "../components/MealItem.vue";
import MealsError from "../components/MealsError.vue";

const ingrediants = ref([]);
const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);
const checkMeals = ref(false);
console.log(meals);

onMounted(() => {
  axiosClient.get(`list.php?c=list`).then(({ data }) => {
    // debugger;
    for (let i = 0; i < data.meals.length; i++) {
      // console.log(data.meals[i].strCategory);
      ingrediants.value.push(data.meals[i].strCategory);
    }
  });
});

watch(route, () => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
  checkMeals.value = true;
});
</script>

<style scoped>
.ingredients {
  grid-template-columns: repeat(auto-fill, minmax(115px, 1fr));
}
</style>