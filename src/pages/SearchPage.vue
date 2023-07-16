<template>
  <div class="container">
    <h1 class="title">Search Recipes</h1>

    <b-form class="formsDesign" @submit.prevent="onSearch" @reset.prevent="onReset">
      
      <b-form-group
        id="input-group-query"
        label-cols-sm="3"
        label="Recipe Name: "
        label-for="query"
        class="search-field"
      >
        <b-form-input
          id="query"
          v-model="form.query"
          type="text"
          class="search-field"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-cuisine"
        label-cols-sm="3"
        label="Choose Cuisine: "
        label-for="cuisine"
        class="search-field"
      >
        <b-form-select
          id="cuisine"
          v-model="form.cuisine"
          :options="cuisines"
          class="search-field"
        ></b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-diet"
        label-cols-sm="3"
        label="Choose Diet: "
        label-for="diet"
        class="search-field"
      >
        <b-form-select
          id="diet"
          v-model="form.diet"
          :options="diet"
          class="search-field"
        ></b-form-select>
      </b-form-group>


      <b-form-group
        id="input-group-intolerances"
        label-cols-sm="3"
        label="Choose Intolerances: "
        label-for="intolerances"
        class="search-field"
      >
        <b-form-select
          id="intolerances"
          v-model="form.intolerances"
          :options="intolerances"
          class="search-field"
        ></b-form-select>
      </b-form-group>

    


      <b-row class="sort-num">
        <b-col >
          <b-form-group label="Number Of Results:" class="search-field" v-slot="{ ariaDescribedby }">
            <b-form-radio v-model="form.selected_num" :aria-describedby="ariaDescribedby" name="some-radios" value="5">5</b-form-radio>
            <b-form-radio v-model="form.selected_num" :aria-describedby="ariaDescribedby" name="some-radios" value="10">10</b-form-radio>
            <b-form-radio v-model="form.selected_num" :aria-describedby="ariaDescribedby" name="some-radios" value="15">15</b-form-radio>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Sort Results By:" class="search-field" v-slot="{ ariaDescribedby }">
            <b-form-radio v-model="form.selected_sort" :aria-describedby="ariaDescribedby" name="some-radios2" value="popularity">popularity</b-form-radio>
            <b-form-radio v-model="form.selected_sort" :aria-describedby="ariaDescribedby" name="some-radios2" value="time">time</b-form-radio>
          </b-form-group>
        </b-col> 
      </b-row>

      
      <b-button 
        type="submit"
        variant="primary"
        style="width:250px;"
        class="searchButton"
        >Search !</b-button
      >
      <b-button type="reset" variant="danger" class="resetButton">Reset</b-button>



    </b-form>

    <b-alert
      class="mt-2"
      v-if="form.submitError"
      squared variant="primary"
      dismissible
      show
    >
      Search failed: {{ form.submitError }}
    </b-alert>

    <RecipePreviewList v-if="searchClicked" v-bind:route_name="search_url_" title="Search Results" class="SearchResults center" />
    
  </div>
</template>


<script>
import cuisines from "../assets/cuisines";
import diet from "../assets/diet";
import intolerances from "../assets/intolerances";
import RecipePreviewList from "../components/RecipePreviewList";


export default {
  name: "Search",
    components: {
      RecipePreviewList,
      // 'b-form-radio': BFormRadio
  },
  data() {
    return {
      form: {
        query: "",
        cuisine: "",
        selected_sort: "", 
        selected_num :"5",
        diet: "",
        intolerance:"",
        submitError: undefined,
      },
      cuisines: [{ value: null, text: "", disabled: true }],
      diet: [{ value: null, text: "", disabled: true }],
      intolerances: [{ value: null, text: "", disabled: true }],
      searchClicked: false,
      errors: [],
      search_url_:"",
    };
  },
  
  mounted() {
    this.cuisines.push(...cuisines);
    this.diet.push(...diet);
    this.intolerances.push(...intolerances);
    // this.check_local_storage();
  },
  methods: {

    
  }
};
</script>



<style lang="scss" scoped>


  .container {
    max-width: 700px;
    background-color: rgb(248, 239, 230);
    border-radius: 30px;
    padding: 4vh 2vw 2vw 3vh;
  }

  .sort-num{
    max-width: 900px;
    border-radius: 45px;
  }

  .search-field{
    border-radius: 20px;
  }

  .searchButton {
  border-radius: 5px;
  padding: 1.5vh 1vw;
  background-color: #F19CBB;
  border-color: #F19CBB;
  font-weight: bold;
  color: #080807;
  margin: 2vh 3vw 0.5vw 3vh;
}

.resetButton{
  border-radius: 5px;
  padding: 1.5vh 1vw;
  background-color: #F19CBB;
  border-color: #F19CBB;
  font-weight: bold;
  color: #080807;
  margin: 2vh 3vw 0.5vw 3vh;

}

</style>
