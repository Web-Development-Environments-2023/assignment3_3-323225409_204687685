<!-- <template>
  <div class="container">
    <h1 class="title">Search Recipes</h1>

    <b-form class="formsDesign" @submit.prevent="onSearch" @reset.prevent="onReset">
      
      <b-form-group id="input-group-query" label-cols-sm="3" label="Recipe Name: " label-for="query" class="search-field">
        <b-form-input id="query" v-model="$v.form.query.$model" type="text" class="search-field" :state="validateState('query')"> </b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.query.required">query is required</b-form-invalid-feedback>
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
        selected_sort: "popularity",
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
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },

    
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

</style> -->



<template>
  <div id="search_form" class="search-container">
    <h1 class="title">Search Recipes</h1>
    <b-form @submit.prevent="onSearch" @reset.prevent="onReset">
      <b-row>
        <b-col>
          <!-- Query -->
          <b-form-group id="input-group-query" label-cols-sm="1" label="Query:" label-for="search" >
            <b-form-input id="search" v-model="$v.form.search.$model" type="text" :state="validateState('search')"></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.search.required">query is required</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>   
      <b-row>   
        <b-col sm="4">   
          <!-- Cuisine -->
          <b-form-group id="input-group-cuisine" label-cols-sm="3" label="Cuisine:" label-for="cuisine">
            <b-form-select id="cuisine" v-model="$v.form.cuisine.$model" :options="cuisines"></b-form-select>
          </b-form-group>
        </b-col>
        <b-col sm="4">  
          <!-- Diet -->
          <b-form-group id="input-group-diet" label-cols-sm="3" label="Diet:" label-for="diet">
            <b-form-select id="diet" v-model="$v.form.diet.$model" :options="diet"></b-form-select>
          </b-form-group>
        </b-col>
        <b-col sm="4">  
          <!-- Intolerance -->
          <b-form-group id="input-group-intolerance" label-cols-sm="5" label="Intolerance:" label-for="intolerance">
            <b-form-select id="intolerance" v-model="$v.form.intolerance.$model" :options="intolerances"></b-form-select>
          </b-form-group>
        </b-col>
      </b-row> 
      <b-row>  
        <b-col sm="3">
          <!-- Number of results -->
          <b-form-group label="number of results:" class="search-field" v-slot="{ ariaDescribedby }">
            <b-form-radio v-model="$v.form.number.$model" :aria-describedby="ariaDescribedby" name="some-radios" value="5">5</b-form-radio>
            <b-form-radio v-model="$v.form.number.$model" :aria-describedby="ariaDescribedby" name="some-radios" value="10">10</b-form-radio>
            <b-form-radio v-model="$v.form.number.$model" :aria-describedby="ariaDescribedby" name="some-radios" value="15">15</b-form-radio>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <!-- Buttons -->
        <b-col sm="4.5">
          <b-button id="search-button" type="submit" variant="primary">Search</b-button>
        </b-col>
        <b-col sm="4.5">
          <b-button id="reset-button" type="reset" variant="danger">Reset</b-button>
        </b-col>
        
      </b-row> 

    </b-form>

    <b-alert class="mt-2" v-if="form.submitError" variant="warning" dismissible show>Search failed: {{ form.submitError }}</b-alert>

  <!-- <div v-if="$root.store.username && !LastSearchcalled" :do="LastSearch()"></div> -->
  <div v-if="$root.store.username && search_results"></div>
    <div v-if="search_results">
      <h5 id="no-results" v-if="noResults">We couldn't find recipes that match your search</h5>
      <div v-else class="text-center"> 

        <b-dropdown id="sort" v-if="!isEmpty" text="Sort By" class="m-2">
          <b-dropdown-item v-on:click="this.sortByPrepTime">Preperation Time</b-dropdown-item>
          <b-dropdown-item v-on:click="this.sortByPopularity">Popularity</b-dropdown-item>
        </b-dropdown>

        <b-row v-for="r in search_results" :key="r.id">
          <b-col>
            <RecipePreview class="recipePreview" :recipe="r"/>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>


<script>
import { required } from "vuelidate/lib/validators";
import cuisines from "../assets/cuisines";
import dietOptions from "../assets/diet";
import intolerances from "../assets/intolerances";
import RecipePreviewList from "../components/RecipePreviewList";
import RecipePreview from "../components/RecipePreview";


export default {
  name: "Search",
  components: {
    RecipePreview,
  },
  data() {
    return {
      form: {
        search: "",
        number: "5",
        cuisine: null,
        diet: null,
        intolerance: null,
        // diet: "",
        // intolerance:"",
        submitError: undefined
      },
      cuisines: [{ value: null, text: "Select...", disabled: false }],
      diet: [{ value: null, text: "Select...", disabled: false }],
      intolerances: [{ value: null, text: "Select...", disabled: false }],
      errors: [],
      search_results: [],
      noResults: false,
      LastSearchcalled: false,
    };
  },
  validations: {
    form: {
      search: {required,},
      number: {required,},
      // search: {required,},
      // number: {},
      cuisine: {},
      diet: {},
      intolerance: {},
    }
  },
  mounted() {
    this.cuisines.push(...cuisines);
    this.intolerances.push(...intolerances);
    this.diet.push(...dietOptions);

    if(localStorage.lastSearch){
      this.search_results.push(...JSON.parse(localStorage.lastSearch));
    }

  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async LastSearch() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/lastSearch"
        );
        this.search_results = response.data;
      } catch (error) {
        console.log(error);
      }
      this.LastSearchcalled=true;
    },
    async Search() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/recipes/searchRecipes",
          {
            params:{
            query: this.form.search,
            amount: this.form.number,
            cuisine: this.form.cuisine,
            diet: this.form.diet,
            intolerance: this.form.intolerance,
          }
          },
        );
        this.search_results = response.data;
        localStorage.setItem("lastSearch", JSON.stringify(this.search_results));
        if (this.isEmpty) {
          this.noResults = true;
        }
    } catch (err) {
      console.log(err);
      // this.form.submitError = err.response.data.message;
    }
    },
    onSearch() {
      this.noResults = false;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.Search();
    },
    onReset() {
      console.log("On reset method called");
      this.form.search = ""; // Reset the search field to an empty string
      this.form.number = "5"; // Reset the number field to its default value
      this.form.cuisine = null; // Reset the cuisine field to null
      this.form.diet = null; // Reset the diet field to null
      this.form.intolerance = null; // Reset the intolerance field to null
      this.noResults = false; // Reset the noResults flag to false
      this.$v.$reset(); // Reset the vuelidate form validation
    },
    sortByPrepTime() {
        this.search_results.sort(function(a, b) {
          return a.readyInMinutes - b.readyInMinutes;
        })
    },
    sortByPopularity() {
        this.search_results.sort(function(a, b) {
          return b.popularity - a.popularity;
        })
    },
  },
  computed: {
    isEmpty: ({ search_results }) => search_results.length === 0,
  }
};
</script>


<style lang="scss" scoped>
.search-container {
  background-color:rgba(139, 82, 21, 0.088);
  margin: auto;
  margin-top: 2%;
  max-width: 750px;
  padding: 30px;
  color: rgb(0, 0, 0);
  font-family: cursive;
  font-weight: 900;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.title{
  text-align: center;
  padding: 10px 10px;
  color: rgb(174, 109, 45);
  font-weight: 700;
}
#no-results {
  text-align: center;
}
#search-button {
  margin: 35px 0px 0px 40px;
  padding: 10px 110px;
  background-color: rgba(151, 194, 123, 0.567);
  border-color: rgb(108, 158, 92);
  font-weight: 900;
  color: rgb(0, 0, 0);
}
#search-button:hover {
  background-color: rgb(173, 241, 149);
}
#reset-button {
  margin: 35px;
  padding: 10px 60px;
  font-weight: 900;
  background-color: rgb(255, 198, 134);
  
  border-color: rgb(208, 116, 5);
  color: rgb(0, 0, 0);
}
#reset-button:hover {
  background-color:  rgb(233, 152, 45);
}
</style>