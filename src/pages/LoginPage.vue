<template>
  <div class="container">
    <br/>
    <h1 class="title">Login</h1>
    <br/>
    <b-form @submit.prevent="onLogin">
      <b-form-group
        id="input-group-Username"
        label-cols-sm="3"
        label="Username:"
        label-for="Username"
        class="field"

      >
        <b-form-input
          id="Username"
          v-model="$v.form.username.$model"
          type="text"
          :state="validateState('username')"
        ></b-form-input>
        <b-form-invalid-feedback>
          Username is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-Password"
        label-cols-sm="3"
        label="Password:"
        label-for="Password"
        class="field"
      >
        <b-form-input
          id="Password"
          type="password"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
        ></b-form-input>
        <b-form-invalid-feedback>
          Password is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button
        type="submit"
        variant="primary"
        class="btnReg"
        >Login</b-button
      >
      <div class="mt-2">
        Do not have an account yet? <br>
        <router-link id="links" to="register"> Register in here !</router-link>
      </div>
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Login failed: {{ form.submitError }}
    </b-alert>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        submitError: undefined
      }
    };
  },
  validations: {
    form: {
      username: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Login() {
      try {
        
        const response = await this.axios.post(
          // "https://test-for-3-2.herokuapp.com/user/Login",
          this.$root.store.server_domain +"/Login",
          // "http://132.72.65.211:80/Login",
          // "http://132.73.84.100:80/Login",

          {
            username: this.form.username,
            password: this.form.password
          }
        );
        // console.log(response);
        // this.$root.loggedIn = true;
        console.log(this.$root.store.login);
        this.$root.store.login(this.form.username);
        this.$router.push("/");
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onLogin() {
      // console.log("login method called");
      this.form.submitError = undefined;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("login method go");

      this.Login();
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 400px;
  font-family: "Comic Sans MS";
  // box-shadow: 0 4px 8px rgba(199, 29, 29, 0.2);
}
.title {
  // font-family: "Roboto", Arial, sans-serif;
  font-size: 36px;
  color: rgb(215, 141, 52);
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
  margin-left: 80px;
}
.field {
  // font-family: "Comic Sans MS";
  font-size: 16px;
  color: #4a4a4a;
  font-weight: bold;
  margin-bottom: 10px;
}

.btnReg {
  width: 75%;
  padding: 11px 12px;
  background-color: rgb(215, 141, 52);
  border: none;
  border-radius: 4px;
  font-weight: bold;
  color: #FFFFFF;
  margin-left: 95px;
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
  background-color: #e5a95bd2;
}


.mt-2{
  font-size: 14px;
  color: #4a4a4a;
  font-weight: bold;
  margin-left: 140px;
  
}

#links{
  margin-left: 33px;
  font-weight: bold;
  color: #ff8400;
  font-size: 15px;

}

#links:hover{
  color: #579c3b;

}

</style>

