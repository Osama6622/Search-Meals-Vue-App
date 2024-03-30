<template>
  <div v-if="checkMeals" class="flex justify-center">
    <p v-if="!meals" class="text-2xl font-bold text-orange-500">
      There Are No Meals...
    </p>
  </div>
</template>

<script setup>
const { meals, checkMeals } = defineProps({
  meals: {
    required: true,
  },
  checkMeals: {
    required: true,
  },
});
</script>