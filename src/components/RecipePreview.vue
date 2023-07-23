<!-- <template>
  <router-link
    :to="!created ? { name: 'recipe', params: { recipeId: recipe.id } } : { name: 'myrecipe', params: { recipe: JSON.stringify(recipe) } }"
    class="recipe-preview"
    @click.native="addToWatched(recipe.id)"
  >


  

     <b-card
      :title="recipe.title"
      :img-src="recipe.image"
      :img-alt="recipe.title"
      footer-tag="footer"
      class="mb-2"
    >

    <div class="indicators" v-if="$root.store.username && !created">
          <span class="likes" v-if="recipe.Likes > 0">{{recipe.Likes}}<b-icon-hand-thumbs-up /></span>
          <b-icon-eye-fill v-if="watched" />
          <b-icon-eye v-else />
          <b-icon-star-fill v-if="favorite" class="favorite-icon" />
          <b-icon-star v-else @click.stop.prevent="() => addFavorite(recipe.id)" />
    </div>

      <template #footer>
        <div>
          <p>Preperation time: {{ recipe.readyInMinutes }} minutes</p>
        </div>
        <div class="diet-indicators">
          <img src="../assets/gluten.png" v-if="recipe.glutenFree" title="Gluten free" />
          <img src="../assets/vegan.png" v-if="recipe.vegan" title="Vegan" />
          <img src="../assets/vegetarian.png" v-if="recipe.vegetarian" title="Vegetarian" />
        </div> 
        
        <div class="indicators" v-if="$root.store.username && !created">
          <span class="likes" v-if="recipe.Likes > 0">{{recipe.Likes}}<b-icon-hand-thumbs-up /></span>
          <b-icon-eye-fill v-if="watched" />
          <b-icon-eye v-else />
          <b-icon-star-fill v-if="favorite" class="favorite-icon" />
          <b-icon-star v-else @click.stop.prevent="() => addFavorite(recipe.id)" />
        </div>
      </template>
    </b-card>
  </router-link>


</template>

<script>
export default {
  name: "RecipePreview",
  data() {
    return {};
  },
  props: {
    recipe: {
      type: Object,
      required: true
    },
    watched: {
      type: Boolean,
      required: true
    },
    favorite: {
      type: Boolean,
      required: true
    },
  	addFavorite: {
      type: Function,
      required: true
    },
    created: {
      type: Boolean,
      required: true
    },
    addToWatched: {
      type: Function,
      required: true
    },
  }
};
</script>

<style lang="scss" scoped>
.favorite {
  color: yellow;
}
.recipe-preview {
  width: 100%;
  height: 100%;
  text-decoration: none;

  &:hover .card-title {
    text-decoration: underline;
  }

  .card {
    border: unset;
    overflow: hidden;

    .card-img {
      width: 25vw;
      height: 25vw;
      object-fit: cover;
      transition: transform .5s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
    .card-body {
      padding: 1vw;
      width: 25vw;
      background-color: black;
      z-index: 1;
      margin-bottom: 1vw;

      .card-title {
        font-size: 1.5vw;
        color: white;
        margin: 0;
      }
    }
    .card-footer {
      padding: 0 1vh 2vh 1vh;
      background-color: unset;
      border-top: unset;

      p {
        font-size: 2.5vh;
        color: #93a4b0;
        margin: 0;
      }

      .indicators {
        & > * {
          margin: 2vh 2vh 2vh;
          color: black;
          font-size: 5vh;
        }

        .likes {
          float: right;
          font-size: 3vh;
        }
      }

      .diet-indicators {
        img {
          height: 6vh;
          margin-bottom: 0.5vw;
        }
      }
    } 
  }
}

</style>

 -->





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
      <div v-if="recipe.isWatched" class="personal-info">
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
    async addToWatched(recipeId){
      try {
        
        const response = await this.axios.post(
          this.$root.store.server_domain + "/users/lastseen",
          {
            recipe_id: recipeId
          }
         
        );
        this.updateWatchedList();
        this.recipe.isWatched = true;
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
    checkifFavorite() {
      const recipeId = this.recipe.id;
      const favoriteList = this.$root.store.favoriteList;
      this.isFavorite = favoriteList.some((recipe) => recipe.id === recipeId);
    },
    async updateWatchedList() {
      try {
        const response = await this.axios.get(
          `${this.$root.store.server_domain}/users/lastseen`
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
      console.log(this.isWatched);
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
</style>
