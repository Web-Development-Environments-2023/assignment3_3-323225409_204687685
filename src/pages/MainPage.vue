<template>
  <div class="main-container">
    <b-row>
      
      <b-col class="RandomRecipesCol" sm="7">
        <div class="content-container">
          <h1 class="section-title">Explore These Recipes</h1>
          <RecipePreviewList
          ref="random"
          route_name="/recipes/random3recipes"
          class="RandomRecipes"
        />
          <b-button class="refresh-button" @click="$refs.random.updateRecipes()">Refresh Random Recipes</b-button>
        </div>
      </b-col>
      
      <b-col class="LastWatchedOrLoginCol" sm="5">
        
        <div v-if="$root.store.username">
          <h1 class="section-title">Last Watched Recipes</h1>
          <RecipePreviewList ref="watched"  route_name="/users/lastseen" class="LastWatchedRecipes"/>
        </div>
        
        <div v-else>
          
          <LoginPage class="login"></LoginPage>
        </div>
      </b-col> 
    </b-row>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import LoginPage from './LoginPage.vue';
export default {
  components: {
    RecipePreviewList,
    LoginPage
  },
  methods: {
    onRecipeMouseOver(event) {
      const recipeImage = event.target;
      recipeImage.style.transform = 'scale(1.1)'; // Increase the size on hover
      recipeImage.style.transition = 'transform 0.3s ease';
    },
    onRecipeMouseLeave(event) {
      const recipeImage = event.target;
      recipeImage.style.transform = 'scale(1)'; // Reset the size on mouse leave
    },
  },

  mounted() {
    this.$refs.random.updateRecipes();
  },
};

</script>

<style lang="scss" scoped>
/* Common styles for the main container and content */
.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Left side - Random Recipes */
.RandomRecipesCol {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.refresh-button {
  background-color: transparent;
  border: 1px solid #266DB6;
  box-sizing: border-box;
  color: rgb(171, 168, 168); /* Set a visible text color */
  font-family: "Avenir Next LT W01 Bold", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  padding: 16px 23px;
  position: relative;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  cursor: pointer; /* Add a cursor to indicate it's clickable */
}

.refresh-button:hover,
.refresh-button:active {
  outline: 0;
  background-color: transparent; /* Apply the same background-color on hover and active */
  cursor: pointer;
}

.refresh-button:before {
  background-color: #ffe5bc;
  content: "";
  height: calc(100% + 3px);
  position: absolute;
  right: -7px;
  top: -9px;
  transition: background-color 300ms ease-in;
  width: 100%;
  z-index: -1;
}

.refresh-button:hover:before,
.refresh-button:active:before {
  background-color: #f6c06a; /* Apply the same background-color on hover and active */
}
.RecipePreviewList {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}


@media (min-width: 768px) {
  .refresh-button {
    padding: 16px 32px;
  }
}

/* Right side - Login or Last Watched Recipes */
.LastWatchedOrLoginCol {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin-bottom: 1320px;
}
.login{
  position: relative;
  margin-bottom: 1000px;
  margin-left: 150px;
}

/* Customize styles for the RecipePreviewList component */
.LastWatchedRecipes {
  
}

</style>