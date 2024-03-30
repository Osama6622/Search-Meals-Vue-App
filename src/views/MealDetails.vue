<template>
  <div class="max-w-[800px] mx-auto pt-8 p-6">
    <h1 class="text-5xl font-bold mb-6 text-orange-500">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]" />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2 max-w-[800px]">
      <p><strong class="font-bold">Category:</strong> {{ meal.strCategory }}</p>
      <p><strong class="font-bold">Area:</strong> {{ meal.strArea }}</p>
      <p><strong class="font-bold max-w-[100%]">Tags:</strong> {{ meal.strTags }}</p>
    </div>

    <div class="my-3">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-xl font-semibold mb-1">Ingredients:</h2>
        <ul>
          <template v-for="(el, index) of new Array(20)" :key="index">
            <li v-if="meal[`strIngredient${index + 1}`] === ' '"></li>
            <li v-else-if="meal[`strIngredient${index + 1}`]">
              {{ index + 1 }}) {{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>

      <div>
        <h2 class="text-xl font-semibold mb-1">Measures:</h2>
        <ul>
          <template v-for="(el, index) of new Array(20)" :key="index">
            <li v-if="meal[`strMeasure${index + 1}`] === ' '"></li>
            <li v-else-if="meal[`strMeasure${index + 1}`]">
              {{ index + 1 }}) {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>

      <div class="mt-6">
        <YoutubeButton :href="meal.strYoutube">Watch On Youtube</YoutubeButton>
        <a
          :href="meal.strSource"
          target="_blank"
          class="px-3 py-2 ml-4 rounded text-white border-2 border-red-600 bg-red-500 hover:bg-red-600 hover:text-white transition-colors"
          >Original Source</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    // debugger;
    meal.value = data.meals[0] || {};
    console.log(data.meals[0]);
  });
});
</script>