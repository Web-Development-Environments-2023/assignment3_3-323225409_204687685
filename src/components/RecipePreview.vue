
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
          <span class="detail-text">{{ recipe.popularity }} Likes</span>
        </div>
        <div v-if="recipe.isFavorite && $root.store.username && this.routeName !== '/users/MyRecipes' && this.routeName !== '/users/familyRecipes'" class="recipe-detail">
          <img src="../assets/star.png" alt="Favorite" class="detail-icon">
        </div>
        <div v-if="!recipe.isFavorite && $root.store.username && this.routeName !== '/users/MyRecipes' && this.routeName !== '/users/familyRecipes'" class="recipe-detail">
          <button @click="addToFavorites(recipe.id)" class="heart-button">
            <img src="../assets/addfavorite.png" alt="Add to Favorites" class="personal-icon">
          </button>
        </div>
      </div>
      <div class="recipe-info">
        <div v-if="recipe.glutenFree" class="info-item">
          <img src="../assets/gluten.png" alt="Gluten-Free" class="info-icon">
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
        <span class="personal-text">Viewed Recipe</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.axios.get(this.recipe.image).then(() => {
      this.imageLoaded = true;
    });
    if (this.$root.store.username) {
      this.checkifWatched();
      this.checkifFavorite();
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
    async addToFavorites(recipeId) {
      try {
        await this.axios.post(
          `${this.$root.store.serverDomain}/users/favorites/`,
          {
            recipeId: recipeId,
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
    },
    async updateWatchedList() {
      try {
        const response = await this.axios.get(
          `${this.$root.store.serverDomain}/users/allLastWatchedRecipes`
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


<style scoped>
.recipe-card{
  align-content: center;
  width: 100%;
  height: 100%;
  max-width: 500px;
  min-height: 500px;
  align-items: center;
  margin: 20px 15px;
  text-align: center;
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

</style>