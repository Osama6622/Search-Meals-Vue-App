import axiosClient from "../axiosClient";

// Get Meals By name
export function searchMeals({ commit }, keyword) {
  axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
      // console.log(`data for meal` + JSON.stringify(data));
      commit('setSearchedMeals', data.meals)
    })
}

// Get Meals By Letter
export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get(`search.php?f=${letter}`)
    .then(({ data }) => {
      // console.log(`data for letter` + JSON.stringify(data));
      commit('setMealsByLetter', data.meals)
    })
}

// Get Meals By Ingredient
export function searchMealsByIngredient({ commit }, ingredient) {
  axiosClient.get(`filter.php?i=${ingredient}`)
    .then(({ data }) => {
      // console.log(`data for ingredient` + JSON.stringify(data));
      commit('setMealsByIngredient', data.meals)
    })
}