import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from 'jquery';
import {fb}   from './firebase'
import VueFirestore from 'vue-firestore'
require('firebase/firestore')


window.$ = window.jQuery = jQuery;

import 'popper.js';
import 'bootstrap';
import './assets/app.scss';


Vue.component('Navbar', require('./components/Navbar.vue').default);
// Vue.component('Hero', require('./components/Hero.vue').default);
// Vue.component('mini-cart', require('./components/MiniCart.vue').default);
// Vue.component('products-list', require('./sections/ProductList.vue').default);

Vue.config.productionTip = false

let app = '';

fb.auth().onAuthStateChanged(function(user) {

  if(!app){
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");

  }

});
