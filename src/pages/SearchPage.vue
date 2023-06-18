<template>
  <div class="container">
    <h1 class="title">Search Recipes</h1>

    <b-form @submit.prevent="onSearch" @reset.prevent="onReset">
      
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
        ></b-form-select>
      </b-form-group>

      <b-row class="sort-num">
      <b-col >
      <b-form-group label="number of results:" class="search-field" v-slot="{ ariaDescribedby }">
        <b-form-radio v-model="form.selected_num" :aria-describedby="ariaDescribedby" name="some-radios" value="5">5</b-form-radio>
        <b-form-radio v-model="form.selected_num" :aria-describedby="ariaDescribedby" name="some-radios" value="10">10</b-form-radio>
        <b-form-radio v-model="form.selected_num" :aria-describedby="ariaDescribedby" name="some-radios" value="15">15</b-form-radio>
      </b-form-group>
      </b-col>
      <b-col>
        <b-form-group label="sort results by:" class="search-field" v-slot="{ ariaDescribedby }">
          <b-form-radio v-model="form.selected_sort" :aria-describedby="ariaDescribedby" name="some-radios2" value="popularity">popularity</b-form-radio>
          <b-form-radio v-model="form.selected_sort" :aria-describedby="ariaDescribedby" name="some-radios2" value="time">time</b-form-radio>
        </b-form-group>
     </b-col>  
      
      </b-row>


      <b-button type="reset" variant="danger">Reset</b-button>
      <b-button
        type="submit"
        variant="primary"
        style="width:250px;"
        class="ml-5 w-75"
        >Search !</b-button
      >
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
import countries from "../assets/countries";
import {
  required,
  minLength,
  maxLength,
  alpha,
  sameAs,
  email
} from "vuelidate/lib/validators";

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        firstName: "",
        lastName: "",
        country: null,
        password: "",
        confirmedPassword: "",
        email: "",
        submitError: undefined
      },
      countries: [{ value: null, text: "", disabled: true }],
      errors: [],
      validated: false
    };
  },
  validations: {
    form: {
      username: {
        required,
        length: (u) => minLength(3)(u) && maxLength(8)(u),
        alpha
      },
      country: {
        required
      },
      password: {
        required,
        length: (p) => minLength(5)(p) && maxLength(10)(p)
      },
      confirmedPassword: {
        required,
        sameAsPassword: sameAs("password")
      }
    }
  },
  mounted() {
    // console.log("mounted");
    this.countries.push(...countries);
    // console.log($v);
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Register() {
      try {
        const response = await this.axios.post(
          // "https://test-for-3-2.herokuapp.com/user/Register",
          this.$root.store.server_domain + "/Register",

          {
            username: this.form.username,
            password: this.form.password
          }
        );
        this.$router.push("/login");
        // console.log(response);
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onRegister() {
      // console.log("register method called");
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("register method go");
      this.Register();
    },
    onReset() {
      this.form = {
        username: "",
        firstName: "",
        lastName: "",
        country: null,
        password: "",
        confirmedPassword: "",
        email: ""
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 500px;
}
</style>
