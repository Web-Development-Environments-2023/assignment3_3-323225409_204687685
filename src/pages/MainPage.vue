<template>
  <div class="main-container">
    <b-row>
      <!-- Left side of the screen -->
      <b-col class="RandomRecipesCol" sm="7">
        <div class="content-container">
          <h1 class="section-title">Explore These Recipes</h1>
          <RecipePreviewList
          title="Random Recipes"
          ref="random"
          route_name="/recipes/random3recipes"
          class="RandomRecipes"
        />
          <b-button class="refresh-button" @click="$refs.random.updateRecipes()">Refresh Random Recipes</b-button>
        </div>
      </b-col>
      <!-- Right side of the screen -->
      <b-col class="LastWatchedOrLoginCol" sm="5">
        <!-- if user is logged in -->
        <div v-if="$root.store.username">
          <h1 class="section-title">Last Watched Recipes</h1>
          <RecipePreviewList ref="watched" route_name="/users/lastseen" class="LastWatchedRecipes"/>
        </div>
        <!-- if user is not logged in -->
        <div id="loginDiv" v-else>
          
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
    async updateWatchedList() {
      try {
        const response = await this.axios.get(
          `${this.$root.store.server_domain}/users/lastseen`
        );
        const recipes = response.data;
        this.$root.store.updateStoredWatchedList([...recipes]);
      } catch (error) {
        console.log(error);
      }
    },
    async updateFavorites() {
      try {
        const response = await this.axios.get(
          `${this.$root.store.server_domain}/users/favorites`
        );
        const recipes = response.data;
        this.$root.store.updateFavoriteList([...recipes]);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    if (this.$root.store.username) {
      this.updateFavorites();
      this.updateWatchedList();
    }
  },
  mounted() {
    // this.$refs.random.updateRecipes();
    
  },
};

</script>

<style lang="scss" scoped>
/* Common styles for the main container and content */
.main-container {
  // max-width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  font-family: cursive;
  // background-color: #fffaf68a;
  
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: aqua;

  max-width: 100%;
  margin: 0 auto;
  padding: 4vh;
  text-align: center;
  // background-color: #eee4db8a;
  font-family: cursive;
  // box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

/* Left side - Random Recipes */
.RandomRecipesCol {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section-title {
  // font-size: 24px;
  // font-weight: bold;
  // margin-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  padding: 10px 10px;
  color: rgb(174, 109, 45);
  font-weight: 700;
}

.refresh-button {
  background-color: transparent;
  border: 1px solid #af661c;
  box-sizing: border-box;
  color: rgb(255, 255, 255); /* Set a visible text color */
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
  background-color: rgb(236, 149, 43);
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
  background-color: #ffa856; /* Apply the same background-color on hover and active */
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

#loginDiv{
  position: fixed;
  margin-bottom: 100%;
  margin-top: 0%;
  zoom: 80%;
  margin-right: 15vw;

}
.login{
  position: relative;
  // margin-bottom: 50vh;
  margin-left: 20vw;
  // margin-bottom: 150vh;
  // position: fixed;
}

/* Customize styles for the RecipePreviewList component */
// .LastWatchedRecipes {
  
// }

</style>

















<!-- <template> ORIGINALLLL
  <div class="main-container">
    <b-row>
      <b-col class="RandomRecipesCol" sm="6">
        <div class="content-container">
          
          <RecipePreviewList ref="random" title="Random Recipes" route_name="/recipes/random3recipes" class="RandomRecipes" />
          
        </div>
      </b-col>
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
</style> -->