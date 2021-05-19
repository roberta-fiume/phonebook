import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/Search.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Search",
    component: Search,
  },
  {
    path: "/search/:term",
    name: "Search",
    component: Search,
  },
  {
    path: "/contact/:contactName",
    name: "Contact",
    component: Contact,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
