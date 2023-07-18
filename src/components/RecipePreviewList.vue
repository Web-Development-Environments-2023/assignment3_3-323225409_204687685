<!-- <template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
                  <RecipePreview class="recipePreview" :recipe="r" :title="title" :myRecipes="myRecipe" :route_name="route_name"/>

        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/recipes/random3recipes",
          // "https://test-for-3-2.herokuapp.com/recipes/random"
        );

        // console.log(response);
        const recipes = response.data.recipes;
        this.recipes = [];
        this.recipes.push(...recipes);
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style> -->
<!-- <template>
  <div class="list-container">
      <h3 class="title">
        {{ title }}
        <slot></slot>
      </h3>
      <b-container>
      <b-row v-for="r in recipes" :key="r.id">
        <b-col>
          <RecipePreview class="recipePreview" :recipe="r" :title="title" :myRecipes="myRecipe" :route_name="route_name"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    route_name:{
      type: String,
      required: true    
    }
  },
  data() {
    return {
      recipes: [],
      myRecipe: false,
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + this.route_name
        );
        const recipes = response.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        this.myRecipe = false;
      } catch (error) {
        console.log(error);
      }
    }
    
  },
};
</script>

<style scoped>
.recipe-preview-list {
  min-height: 400px;
}

.recipe-preview-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.recipe-preview-container {
  flex-basis: calc(33.33% - 20px);
  margin-bottom: 20px;
}
</style> -->

<template>
  <div class="recipe-preview-list">
    <div class="list-container">
      <h3 class="title">{{ title }}</h3>
      <div class="recipe-preview-wrapper">
        <RecipePreview v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
      </div>
    </div>
  </div>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";

export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    route_name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      recipes: [],
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get(this.$root.store.server_domain + this.route_name);
        this.recipes = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.recipe-preview-list {
  min-height: 400px;
  display: inline-block;
}

.list-container {
  margin-bottom: 20px;
  
}

.title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.recipe-preview-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  display: inline-block;
  
  
}

.recipe-preview-container {
  flex-basis: calc(33.33% - 20px);
  margin-bottom: 20px;
}
</style>