
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