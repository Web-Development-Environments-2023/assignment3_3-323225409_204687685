<template>
  <div class="main-container">
    <b-row>
      <!-- Left side of the screen -->
      <b-col class="RandomRecipesCol" sm="6">
        <div class="content-container">
          
          <RecipePreviewList ref="random" title="Random Recipes" route_name="/recipes/random3recipes" class="RandomRecipes" />
          
        </div>
      </b-col>
      <!-- Right side of the screen -->
      <b-col class="AuthButtonsCol" sm="6">
        <div class="content-container">
         
          <router-link class="button" to="/login">Login</router-link>
          <router-link class="button" to="/register">Register</router-link>
          <b-button class="button" @click="updateRandomRecipes">Refresh recipes</b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";

export default {
  name: "RecipeView",
  components: {
    RecipePreviewList,
  },
  methods: {
    async updateRandomRecipes() {
      console.log(this.$refs);
      await this.$refs.random.updateRecipes();
    },
  },
};
</script>

<style scoped>
.main-container {
  max-width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.RandomRecipesCol,
.AuthButtonsCol {
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: right;
  padding-left: 400px;
}

.title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.button,
.button:focus,
.button:active {
  margin-top: 200px;

  padding: 10px 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  background-color: #a46ef4;
  border: 1px solid #8d09eb;
  transition: 0.5s ease;
  user-select: none;
}

.button:hover {
  color: #ffffff;
  background: #c0a6f8;
  border: 1px solid #d5b5f3;
  text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
  box-shadow: 0 0 5px #d5b5f3, 0 0 20px #d5b5f3, 0 0 50px #d5b5f3, 0 0 100px #d5b5f3;
}
</style>