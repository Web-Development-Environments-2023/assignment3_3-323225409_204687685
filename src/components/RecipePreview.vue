<template>



  <div class="recipe-card">
    <div class="recipe-card-image">
      <router-link :to="{ name: 'recipe', params: { recipeId: recipe.id, route_name: this.route_name } }" class="recipe-preview" @click.native="addToWatched(recipe.id)"> <img :src="recipe.image" alt="Recipe Image" class="recipe-image">
      </router-link>
    </div>

    <div class="recipe-card-content">
      <h2 class="recipe-title">{{ recipe.title }}</h2>
      <div class="recipe-details">
        <div class="recipe-detail">
          <img src="../assets/prep_time.png" alt="Preparation Time" class="detail-icon">
          <span class="detail-text">{{ recipe.readyInMinutes }} mins</span>
        </div>
        <div v-if="recipe.aggregateLikes" class="recipe-detail">
          <img src="../assets/like.png" alt="Likes" class="detail-icon">
          <span class="detail-text">{{ recipe.aggregateLikes }} Likes</span>
          
        </div>
        <div v-if="!recipe.if_recipe_exist_in_user_favorites && $root.store.username && this.route_name !== '/users/MyRecipes' && this.route_name !== '/users/familyRecipes'" class="recipe-detail">
            <b-icon-suit-heart @click.stop.prevent="() => addToFavorites(recipe.id)" aria-hidden="true" />
        </div>
        <div v-if="recipe.if_recipe_exist_in_user_favorites && $root.store.username && this.route_name !== '/users/MyRecipes' && this.route_name !== '/users/familyRecipes'" class="recipe-detail">
          <b-icon-heart-fill aria-hidden="true"/>
        </div>

        <!-- <div v-if="recipe.isFavorite">
            <b-icon icon="heart-fill" aria-hidden="true"></b-icon>
             <img src="../assets/addfavorite.png" alt="Add to Favorites" class="personal-icon">
        </div> -->
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
      <div v-if="recipe.if_recipe_watched_by_user" class="personal-info">
        <img src="../assets/watched.png" alt="Watched Recipe" class="personal-icon">
        <span class="personal-text">Viewed Recipe</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipePreview",
  mounted() {
    if (this.$root.store.username) {
      this.checkifWatched();
      this.checkifFavorite();
    }
  },
  data() {
    return {
      isWatched: false,
      isFavorite: false,
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true,
    },
    route_name: {
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
        if (!this.isFavorite) {
          const response = await this.axios.post(
          this.$root.store.server_domain + "/users/favorites",
          {
            recipe_id: recipeId
          }
          ).then(() => this.$root.store.favorite_list.push(this.recipe));
          this.recipe.isFavorite = true;
        }
      }
      catch (error) {
        console.log(error);
      }
    },
    async addToWatched(recipeId){
      if (!this.isWatched) {
        try {
          const response = await this.axios.post(
            this.$root.store.server_domain + "/users/lastseen",
            {
              recipe_id: recipeId
            }
          ).then(() => this.$root.store.watched_list.push(this.recipe));
          this.recipe.isWatched = true;
        } catch (error) {
          console.log(error);
        }
      }
    },
    checkifFavorite() {
      const recipeId = this.recipe.id;
      const favoriteList = this.$root.store.favorite_list;
      for(let i = 0; i < favoriteList.length; i++) {
        if (favoriteList[i].id === recipeId) {
          this.isFavorite = true;
          break;
        }
      }
      //this.isFavorite = favoriteList.some((recipe) => recipe.id === recipeId);
    },
    checkifWatched() {
      const recipeId = this.recipe.id;
      const watchedList = this.$root.store.watched_list;
      for(let i = 0; i < watchedList.length; i++) {
        if (watchedList[i].id === recipeId) {
          this.isWatched = true;
          break;
        }
      }
      //this.isWatched = watchedList.some((recipe) => recipe.id === recipeId);
      // if (this.isWatched) {
      // this.isWatched = true; // Set it to true explicitly
  // }
    },
  },
};
</script>


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
  color: rgb(224, 147, 53);
  text-shadow: 4px 4px 6px rgba(87, 46, 10, 0.3);
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

.recipe-image {
  width: 25vw;
  height: 25vw;
}
</style>