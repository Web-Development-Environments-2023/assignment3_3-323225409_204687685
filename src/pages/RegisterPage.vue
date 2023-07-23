
<template>
  <div class="container">
    <br/>
    <h1 class="title">Register</h1>
    <br/>
    <b-form @submit.prevent="onRegister" @reset.prevent="onReset">
      <b-form-group
        id="input-group-username"
        label-cols-sm="3"
        label="Username:"
        label-for="username"
        class="field"
      >
        <b-form-input
          id="username"
          v-model="$v.form.username.$model"
          type="text"
          :state="validateState('username')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.username.required">
          Username is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.username.length">
          Username length should be between 3-8 characters long
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.username.alpha">
          Username cannot contain numbers
        </b-form-invalid-feedback>
      </b-form-group>
    
      <b-form-group
        id="input-group-firstName"
        label-cols-sm="3"
        label="First Name:"
        label-for="firstName"
        class="field"
              
      >
      <b-form-input
          id="firstName"
          v-model="$v.form.firstName.$model"
          type="text"
          :state="validateState('firstName')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.firstName.required">
          FirstName is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.firstName.alpha">
          A name cannot contain numbers
        </b-form-invalid-feedback>
      </b-form-group>   

      
      <b-form-group
        id="input-group-lastName"
        label-cols-sm="3"
        label="Last Name:"
        label-for="lastName"
        class="field"

      >
        <b-form-input
          id="lastName"
          v-model="$v.form.lastName.$model"
          type="text"
          :state="validateState('lastName')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.lastName.required">
          LastName is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.lastName.alpha">
          LastName cannot contain numbers
        </b-form-invalid-feedback>
      </b-form-group>  

      <b-form-group
        id="input-group-email"
        label-cols-sm="3"
        label="Email:"
        label-for="email"
        class="field"

      >
        <b-form-input
          id="email"
          v-model="$v.form.email.$model"
          type="email"
          :state="validateState('email')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.email.required">
          Email is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.email.validEmail">
          The Email is not valid!
        </b-form-invalid-feedback>
      </b-form-group> 
      <b-form-group
        id="input-group-country"
        label-cols-sm="3"
        label="Country:"
        label-for="country"
        class="field"
      >
        <b-form-select
          id="country"
          v-model="$v.form.country.$model"
          :options="countries"
          :state="validateState('country')"
        ></b-form-select>
        <b-form-invalid-feedback>
          Country is required
        </b-form-invalid-feedback>
      </b-form-group>
    

           

      <b-form-group
        id="input-group-Password"
        label-cols-sm="3"
        label="Password:"
        label-for="password"
        class="field"
      >
        <b-form-input
          id="password"
          type="password"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.password.required">
          Password is required
        </b-form-invalid-feedback>
        <b-form-text v-else-if="$v.form.password.$error" text-variant="info">
          <!-- Your password should be <strong>strong</strong> -->
        </b-form-text>
        <b-form-invalid-feedback
        v-if="$v.form.password.required || !$v.form.password.length || !$v.form.password.specialChar || !$v.form.password.digit"
        >
        The password should contain 5 to 10 characters and at least one special character and one number
        </b-form-invalid-feedback>
      </b-form-group>


      <b-form-group
        id="input-group-confirmPassword"
        label-cols-sm="3"
        label="Confirm Password:"
        label-for="confirmPassword"
        class="field"
      >
        <b-form-input
          id="confirmPassword"
          type="password"
          v-model="$v.form.confirmPassword.$model"
          :state="validateState('confirmPassword')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.confirmPassword.required">
          Confirmation is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback
          v-else-if="!$v.form.confirmPassword.sameAsPassword"
        >
        The two passwords do not match
        </b-form-invalid-feedback>
      </b-form-group>
      <b-button  type="submit" class="btnReg" variant="primary" >Register</b-button>

      <b-button  class = "btnReset" type="reset" variant="danger">Reset</b-button>
      
      <div class="mt-2">
        Do you have an account already?
        <router-link id="links" to="login"> Log in here</router-link>
      </div>
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Register failed: {{ form.submitError }}
    </b-alert>
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
        confirmPassword: "",
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
      firstName: {
        required,
        alpha
      },
      lastName:{
        required,
        alpha
      },
      email:{
        required,
        email,
      },
      password: {
        required,
        length: (p) => p.length >= 5 && p.length <= 10,
        specialChar: (p) => /[^\w\s]/.test(p),
        digit: (p) => /\d/.test(p),
        

      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs("password")
      }
    }
  },
  mounted() {

    this.countries.push(...countries);

  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Register() {
      try {
        
        const response = await this.axios.post(
          this.$root.store.server_domain + "/Register",
          {
            
            username: this.form.username,
            firstname: this.form.firstName,
            lastname: this.form.lastName,
            country: this.form.country,
            password: this.form.password,
            confirmation_password: this.form.confirmation_password,
            email: this.form.email,
          }
        );
   
        this.$router.push("/Login");
      } catch (err) {
        this.form.submitError = err.response.data.message;
      }
    },
    onRegister() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      this.Register();
    },
    onReset() {
      this.form = {
        username: "",
        firstName: "",
        lastName: "",
        country: null,
        password: "",
        confirmPassword: "",
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
  max-width: 550px;
  border-radius: 10px;
  padding: 20px;
  background-color: #F8F8F8;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  font-family: cursive;
  background-color:rgba(139, 82, 21, 0.088);
  margin-top: 3%;
}

.title {
  font-size: 36px;
  // color: #333333;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  text-shadow:0 2px 6px rgba(0, 0, 0, 0.3);;
  padding: 10px 10px;
  color: rgb(174, 109, 45);
}

.btnReg {
  width: 100%;
  padding: 15px 20px;
  background-color: #df8a45;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  color: #FFFFFF;
  margin-bottom: 20px;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  align-items: center;
  border-radius: 50px;
}

.btnReg:before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  transform: skewX(-30deg);
  transition: transform 0.5s ease-in-out;
}

.btnReg:hover:before {
  transform: skewX(0);
  left: 100%;
}

.btnReg:hover {
  background-color: #ff9131;
}

.btnReset {
  width: 100%;
  padding: 15px 20px;
  background-color: #81c133;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  color: #FFFFFF;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 50px;
  
}

#links{
  color: #ea730a;
}

#links:hover{
  color: #ffa75a;

}

.btnReset:hover {
  background-color: #97e847;
}

.field {
  font-family: "Arial", sans-serif;
  font-size: 14px;
  color: #333333;
  font-weight: bold;
}

.b-form-group {
  margin-bottom: 30px;
}

.b-form-input {
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
  transition: border-color 0.3s ease;
}

.b-form-input:focus {
  outline: none;
  border-color: #4285F4;
}

.b-form-invalid-feedback {
  color: #b8069d;
  font-size: 12px;
  margin-top: 5px;
}

.b-alert {
  margin-top: 20px;
  background-color: #b8069d;
  color: #FFFFFF;
  padding: 10px;
  border-radius: 4px;
}
</style>