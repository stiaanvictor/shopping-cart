import { createRouter, createWebHistory } from "vue-router";
import Shop from "../views/Shop.vue";
import Cart from "../views/Cart.vue";

const routes = [
  {
    path: "/",
    name: "Shop",
    component: Shop
  },
  {
    path: "/cart",
    name: "Cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Cart
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
