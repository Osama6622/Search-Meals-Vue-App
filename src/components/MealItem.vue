<template>
  <div class="bg-white shadow rounded-xl overflow-hidden hover:shadow-2xl">
    <router-link :to="{ name: 'MealDetails', params: { id: meal.idMeal } }">
      <div class="overflow-hidden">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="rounded-t-xl w-full h-48 object-cover hover:scale-110 transition-transform"
        />
      </div>
    </router-link>
    <div class="p-3">
      <h3 class="font-bold mb-2">{{ meal.strMeal }}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
        reprehenderit?
      </p>
      <div class="mt-5 mb-2">
        <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>