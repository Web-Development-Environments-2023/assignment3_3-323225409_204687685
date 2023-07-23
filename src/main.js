import Vue from "vue";
import App from "./App.vue";
import VueAxios from "vue-axios";
import axios from "axios";

import routes from "./routes";
import VueRouter from "vue-router";
import VueCookies from "vue-cookies";
Vue.use(VueRouter);
Vue.use(VueCookies);
const router = new VueRouter({
  routes,
});

import Vuelidate from "vuelidate";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueScrollFixedNavbar from "vue-scroll-fixed-navbar";

import { BFormRadio } from 'bootstrap-vue';
Vue.component('b-form-radio', BFormRadio);
import { BootstrapVue, IconsPlugin, ModalPlugin } from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(ModalPlugin);
Vue.use(VueScrollFixedNavbar);


import {
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
  FormRadioPlugin,
  FormCheckboxPlugin,
  FormTextareaPlugin,
  ListGroupPlugin,
} from "bootstrap-vue";
[
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
  FormRadioPlugin,
  FormCheckboxPlugin,
  FormTextareaPlugin,
  ListGroupPlugin,
].forEach((x) => Vue.use(x));
Vue.use(Vuelidate);
axios.defaults.withCredentials=true;
axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const shared_data = {
  server_domain: "http://127.0.0.1:3000",
  username: localStorage.username,
  lastSearch: sessionStorage.lastSearch,
  favorite_list: localStorage.favorite_list,
  watched_list: localStorage.watched_list,
  login(username) {
    localStorage.setItem("username", username);
    this.username = username;
    this.watched_list = [];
    console.log("login", this.username);
  },
  logout() {
    console.log("logout");
    localStorage.removeItem("username");
    localStorage.removeItem("lastSearch");
    localStorage.removeItem("watched_list");
    this.username = undefined;
    this.watched_list = undefined;
  },
  updateFavoriteList(favorite_list) {
    localStorage.setItem("favorite_list", favorite_list);
    this.favorite_list = favorite_list;
  },
  updateStoredWatchedList(watched_list) {
    localStorage.setItem("watched_list", watched_list);
    this.watched_list = watched_list;
  },
  setLastSearch(searchDetails){
    this.lastSearch = searchDetails;
    sessionStorage.setItem("lastSearch", this.lastSearch);
  }
};
// Vue.prototype.$root.store = shared_data;

new Vue({
  router,
  data() {
    return {
      store: shared_data,
    };
  },
  methods: {
    toast(title, content, variant = null, append = false) {
      this.$bvToast.toast(`${content}`, {
        title: `${title}`,
        toaster: "b-toaster-top-center",
        variant: variant,
        solid: true,
        appendToast: append,
        autoHideDelay: 3000,
      });
    },
  },
  render: (h) => h(App),
}).$mount("#app");
