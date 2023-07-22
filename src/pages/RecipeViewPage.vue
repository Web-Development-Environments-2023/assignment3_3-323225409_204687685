<template>
  <div class="recipe-container">
    <div v-if="recipe">
      <div class="recipe-details">
        <div class="recipe-header">
          <h1 class="title">{{ recipe.title }}</h1>
          <img :src="recipe.image" class="image" alt="Recipe Image" />
        </div>
        <div class="recipe-info">
          <div class="info-item">
            <img src="../assets/prep_time.png" class="icon" />
            <span>{{ recipe.readyInMinutes }} minutes</span>
          </div>
          <div class="info-item">
            <img src="../assets/persons.png" class="icon" />
            <span>{{ recipe.servings }} servings</span>
          </div>
          <!-- Add other recipe info here -->
        </div>
        <div class="recipe-options">
          <!-- Add recipe options based on conditions -->
          <div v-if="recipe.popularity">
            <img src="../assets/like.png" class="icon" />
            <span>{{ recipe.popularity }} likes</span>
          </div>
          <div v-if="recipe.vegetarian">
            <img src="../assets/vegetarian.png" class="icon" />
            <span>Vegetarian</span>
          </div>
          <div v-if="recipe.vegan">
            <img src="../assets/vegan.png" class="icon" />
            <span>Vegan</span>
          </div>
          <div v-if="recipe.glutenFree">
            <img src="../assets/gluten.png" class="icon" />
            <span>Gluten Free</span>
          </div>
          
          <div v-if="recipe.isFavorite && showAddToFavorites">
            <b-button @click="addToFavorites(recipe.id)" class="heart-button">
              <img src="../assets/logo.png" class="icon" />
              Favorite Recipe
            </b-button>
          </div>
          <div v-if="!recipe.isFavorite && showAddToFavorites">
            <b-button @click="addToFavorites(recipe.id)" class="heart-button">

              Add to Favorites
            </b-button>
          </div>
        </div>
      </div>

      <div class="recipe-body">
        <div class="recipe-ingredients">
          <b><u>Ingredients:</u></b>
          <ul>
            <li v-for="ing in recipe.ingredients" :key="ing.name">
              {{ ing.amount }} {{ ing.name }}
            </li>
          </ul>
        </div>
        <div class="recipe-instructions">
          <b><u>Instructions:</u></b>
          <ol>
            <li v-for="step in recipe.instructions" :key="step.number">
              {{ step.step }}
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null,
      myRecipe: false,
      familyRecipes: false,
      showAddToFavorites: true,
      
    };
  },
  methods: {
    async addToFavorites(recipeId) {
      try {
        const response = await this.axios.post(
          this.$root.store.server_domain + "/users/favorites/",
          {
            recipeId: recipeId
          }
        );
        this.recipe.isFavorite = true;
      } catch (error) {
        console.log(error);
      }
    }
  },
  async created() {
    try {
      console.log("Im here");
      let response;
      
      let path = "/recipes/";
      let id = this.$route.params.recipeId;
      // console.log(this.$route.params);
      if (this.$route.params.route_name === "/users/MyRecipes") {
        path = "/users/myRecipes/";
        this.myRecipe = true;
      }
      if (this.$route.params.route_name === "/users/FamilyRecipes") {
        path = "/users/familyRecipes/";
        this.familyRecipes = true;
      }
      try {
        response = await this.axios.get(
          this.$root.store.server_domain + path + id
        );
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let _response;
      if (this.myRecipe || this.familyRecipes) {
        _response = response.data[0];
      } else {
        _response = response.data;
      }
      let {
        instructions,
        ingredients,
        popularity,
        readyInMinutes,
        servings,
        image,
        title,
        vegan,
        vegetarian,
        glutenFree,
        isWatched,
        isFavorite,
        creator,
        customary
      } = _response;

      // Check if the JSON data is defined before parsing
      ingredients = ingredients ? JSON.parse(ingredients) : [];
      instructions = instructions ? JSON.parse(instructions) : [];

      // Rest of the data processing remains unchanged

      let _recipe = {
        _instructions: instructions,
        ingredients: ingredients,
        popularity,
        readyInMinutes,
        servings,
        image,
        title,
        vegan,
        vegetarian,
        glutenFree,
        isWatched,
        isFavorite,
        creator,
        customary
      };
      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>

.recipe-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.recipe-details {
  max-width: 800px;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.recipe-header {
  text-align: center;
  margin-bottom: 20px;
}

.title {
  font-size: 36px;
  margin-bottom: 10px;
  color: #333;
}
/* .title{
  text-align: center;
  padding: 10px 10px;
  color: rgb(174, 109, 45);
  font-weight: 700;
} */

.image {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.recipe-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  color: #666;
}

.icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.recipe-options {
  margin-bottom: 20px;
}

.recipe-options div {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  color: #666;
}

.recipe-ingredients,
.recipe-instructions {
  flex: 1;
}

.recipe-ingredients li,
.recipe-instructions li {
  margin-bottom: 10px;
  color: #333;
}

.heart-button {
  cursor: pointer;
  background-color: #f7d3d4;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.2s ease-in-out;
}

.heart-button:hover {
  background-color: #eec8c9;
}

/* Additional styling for a professional look */
.recipe-body {
  border-top: 1px solid #e0e0e0;
  padding-top: 20px;
}

.recipe-ingredients,
.recipe-instructions {
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.recipe-ingredients ul,
.recipe-instructions ol {
  margin: 0;
  padding: 0;
}

.recipe-ingredients li,
.recipe-instructions li {
  list-style: none;
  line-height: 1.6;
}

.recipe-ingredients b,
.recipe-instructions b {
  font-size: 18px;
  font-weight: bold;
}

.recipe-instructions ol {
  counter-reset: recipe-counter;
}

.recipe-instructions li {
  counter-increment: recipe-counter;
}

.recipe-instructions li::before {
  content: counter(recipe-counter) ". ";
  font-weight: bold;
}

/* Additional styling for responsiveness */
@media screen and (max-width: 768px) {
  .recipe-details {
    max-width: 90%;
  }
}

/* Allrecipes-inspired color scheme */
.title {
  color: #333;
}

.recipe-ingredients,
.recipe-instructions {
  background-color: #fff;
}

.recipe-options div {
  color: #666;
}

.heart-button {
  background-color: #fdbcbe;
}

.heart-button:hover {
  background-color: #e74b4f;
}
</style>