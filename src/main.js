import Vue from "vue";
import VueFirestore from 'vue-firestore'
import {fb}   from './firebase'
import App from "./App.vue";
import router from "./router";

import jQuery from 'jquery';
import 'popper.js';
import 'bootstrap';
import './assets/app.scss';
import Swal from 'sweetalert2';

require('firebase/firestore')
window.$ = window.jQuery = jQuery;
window.Swal = Swal;
window.Toast = Toast;


// firestore
Vue.use(VueFirestore, {
    key: 'id',         // the name of the property. Default is '.key'.
    enumerable: true  //  whether it is enumerable or not. Default is true.
})


// アラート
// アラート後のポップ
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})


Vue.component('Navbar', require('./components/Navbar.vue').default);
// Vue.component('Hero', require('./components/Hero.vue').default);
// Vue.component('mini-cart', require('./components/MiniCart.vue').default);
// Vue.component('products-list', require('./sections/ProductList.vue').default);

Vue.config.productionTip = false;

let app = '';

fb.auth().onAuthStateChanged(function(user) {

  if(!app){
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");

  }

});
