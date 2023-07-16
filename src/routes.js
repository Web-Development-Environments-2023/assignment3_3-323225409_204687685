import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
  {
    path: "/users/MyRecipes",
    name: "MyRecipesPage",
    component: () => import("./pages/MyRecipesPage"),
  },
  {
    path: "/users/favorites",
    name: "FavoritePage",
    component: () => import("./pages/FavoritePage"),
  },
  {
    path: "/users/FamilyRecipes",
    name: "FamilyRecipes",
    component: () => import("./pages/FamilyPage"),
  },

  {
    path: "/AboutUs",
    name: "AboutUs",
    component: () => import("./pages/AboutUsPage"),
  },
  {
    path: "/users/CreateRecipe",
    name: "CreateRecipe",
    component: () => import("./pages/CreateRecipePage"),
  },

];

export default routes;
