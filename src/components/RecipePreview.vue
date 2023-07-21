<template>
  <div class="recipe-card">
    <div class="recipe-card-image">
      <router-link :to="{name: 'recipe', params: {recipeId: recipe.id, routeName: this.routeName}}" class="recipe-link">
        <img :src="recipe.image" alt="Recipe Image" class="recipe-image">
      </router-link>
    </div>
    <div class="recipe-card-content">
      <h2 class="recipe-title">{{ recipe.title }}</h2>
      <div class="recipe-details">
        <div class="recipe-detail">
          <img src="../assets/prep_time.png" alt="Preparation Time" class="detail-icon">
          <span class="detail-text">{{ recipe.readyInMinutes }} mins</span>
        </div>
        <div class="recipe-detail">
          <img src="../assets/like.png" alt="Likes" class="detail-icon">
          <!-- aggregate likes -->
          <span class="detail-text">{{ recipe.aggregateLikes }} Likes</span>
          
        </div>
        <div v-if="recipe.isFavorite && $root.store.username && this.routeName !== '/users/myRecipes' && this.routeName !== '/users/familyRecipes'" class="recipe-detail">
          <img src="../assets/star.png" alt="Favorite" class="detail-icon">
        </div>
        <div v-if="!recipe.isFavorite && $root.store.username && this.routeName !== '/users/myRecipes' && this.routeName !== '/users/familyRecipes'" class="recipe-detail">
          <button @click="addToFavorites(recipe.id)" class="heart-button">
            <img src="../assets/addfavorite.png" alt="Add to Favorites" class="personal-icon">
          </button>
        </div>
      </div>
      <div class="recipe-info">
        <div v-if="recipe.glutenFree" class="info-item">
          <img src="../assets/gluten.png" alt="Gluten" class="info-icon">
          <span class="info-text">Gluten-Free</span>
        </div>
        <div v-if="recipe.vegan" class="info-item">
          <img src="../assets/vegan.png" alt="Vegan" class="info-icon">
          <span class="info-text">Vegan</span>
        </div>
        <div v-if="recipe.vegetarian" class="info-item">
          <img src="../assets/vegetarian.png" alt="Vegetarian" class="info-icon">
          <span class="info-text">Vegetarian</span>
        </div>
      </div>
      <div v-if="recipe.isWatched" class="personal-info">
        <img src="../assets/watched.png" alt="Watched Recipe" class="personal-icon">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipePreview",
  mounted() {
    this.axios.get(this.recipe.image).then(() => {
      this.imageLoaded = true;
    });
    if (this.$root.store.username) {
      this.checkifWatched();
      this.checkifFavorite();
      this.updateWatchedList();
    }
  },
  data() {
    return {
      imageLoaded: false,
      isWatched: false,
      isFavorite: false,
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true,
    },
    routeName: {
      type: String,
      required: false,
    },
  },
  watch: {
    'recipe.isFavorite'(newValue) {
      this.recipe.isFavorite = newValue;
    },
  },
  methods: {
    async addToFavorites(recipeId){
      try {
        const response = await this.axios.post(
          this.$root.store.server_domain + "/users/favorites",
          {
            recipe_id: recipeId
          }
        );
        this.updateFavorites();
        this.recipe.isFavorite = true;
      } catch (error) {
        console.log(error);
      }
    },
    async updateFavorites() {
      try {
        const response = await this.axios.get(
          `${this.$root.store.serverDomain}/users/favorites`
        );
        const recipes = response.data;
        this.$root.store.updateFavoriteList([...recipes]);
      } catch (error) {
        console.log(error);
      }
    },
    checkifFavorite() {
      const recipeId = this.recipe.id;
      const favoriteList = this.$root.store.favoriteList;
      this.isFavorite = favoriteList.some((recipe) => recipe.id === recipeId);
      if (this.isFavorite) {
        this.isFavorite = true;
      }
    },
    async updateWatchedList() {
      try {
        const response = await this.axios.get(
          `${this.$root.store.serverDomain}/users/lastseen`
        );
        const recipes = response.data;
        this.$root.store.updateWatchedList([...recipes]);
      } catch (error) {
        console.log(error);
      }
    },
    checkifWatched() {
      const recipeId = this.recipe.id;
      const watchedList = this.$root.store.watchedList;
      this.isWatched = watchedList.some((recipe) => recipe.id === recipeId);
    },
  },
};
</script>


<!-- <style scoped>
.recipe-card{
  align-content: center;
  width: 100%;
  height: 100%;
  max-width: 500px;
  min-height: 500px;
 
  margin: 20px 15px;
 
  color: rgb(6, 6, 6); 
  
  
}

.recipe-title {
  font-weight: 700;
  font-family: calibri;  
  color:rgb(14, 14, 14);
}
.detail-icon {
  width: 40px;
  height: 40px;
  
}

.info-icon {
  
  width: 50px;
  height: 40px;
}
.personal-icon {
  width: 40px;
  height: 40px;
}

.recipe-meta {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.meta-item {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.meta-icon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}

.recipe-tags {
  display: flex;
  justify-content: center;
}

.tag {
  display: inline-block;
  padding: 4px 8px;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 4px;
  margin-right: 5px;
}

.gluten-free {
  background-color: #70ad47;
  color: #fff;
  width: 40px;
  height: 40px;
}

.vegan {
  background-color: #7030a0;
  color: #fff;
  width: 40px;
  height: 40px;
}

.vegetarian {
  background-color: #00b0f0;
  color: #fff;
  width: 40px;
  height: 40px;
}

</style> -->
<style scoped>
.recipe-card {
  align-content: center;
  width: 100%;
  height: 100%;
  max-width: 500px;
  min-height: 500px;
  margin: 20px 15px;
  color: rgb(6, 6, 6);
}

.recipe-title {
  font-weight: 700;
  font-family: calibri;
  color: rgb(14, 14, 14);
  text-align: center;
}

.recipe-card-image {
  /* Set a fixed aspect ratio to maintain the image's proportions */
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio (height/width) */
  position: relative;
  overflow: hidden;
}

.recipe-card-image img {
  /* Position the image to cover the entire container */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Scale the image while maintaining aspect ratio */
}

.recipe-details,
.recipe-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.recipe-detail {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.recipe-info .info-item {
  margin-right: 10px;
}

.detail-icon,
.info-icon,
.personal-icon {
  width: 25px; /* Adjust the size as needed */
  height: 24px; /* Adjust the size as needed */
}

.recipe-meta {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.meta-item {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.meta-icon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}

.recipe-tags {
  display: flex;
  justify-content: center;
}

.tag {
  display: inline-block;
  padding: 4px 8px;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 4px;
  margin-right: 5px;
}

.gluten-free {
  background-color: #70ad47;
  color: #fff;
  width: 40px;
  height: 40px;
}

.vegan {
  background-color: #7030a0;
  color: #fff;
  width: 40px;
  height: 40px;
}

.vegetarian {
  background-color: #00b0f0;
  color: #fff;
  width: 40px;
  height: 40px;
}
</style>