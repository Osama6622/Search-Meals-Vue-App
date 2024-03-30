import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import MealsByLetter from '../views/MealsByLetter.vue';
import MealsByIngredient from '../views/MealsByIngredient.vue';
import MealsByName from '../views/MealsByName.vue';
import MealDetails from '../views/MealDetails.vue';
import DefaultLayout from '../components/DefaultLayout.vue';


const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'HomeView',
        component: HomeView
      },
      {
        path: '/MealsByLetter/:letter?',
        name: 'MealsByLetter',
        component: MealsByLetter
      },
      {
        path: '/MealsByName/:name?',
        name: 'MealsByName',
        component: MealsByName
      },
      {
        path: '/MealsByIngredient/:ingredient?',
        name: 'MealsByIngredient',
        component: MealsByIngredient
      },
      {
        path: '/meal/:id',
        name: 'MealDetails',
        component: MealDetails
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;