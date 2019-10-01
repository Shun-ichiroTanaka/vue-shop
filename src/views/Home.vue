<template>
<div class="home">
  <div class="maxvh">
    <Navbar></Navbar>
    <Hero />
  </div>

  <products-list></products-list>

  <div class="container h-100">
    <div class="row p-5 h-100 justify-content-center align-items-center">
      <div class="col-md-6">
        <img src="/img/svg/28.svg" alt="" width="400">
      </div>
      <div class="col-md-6">
        <h3>Learn More About Me</h3>
        <p>
          このアプリケーションはFirebaseとVue.jsで作成されており、決済システムはStripeを使用しています。
          決済はテストユーザーとして行われるため実際には購入はされません。Javascriptのチュートリアルだけをまとめた
          「Note」のような販売サイトが理想です。
        </p>
        <button class="btn custom-btn btn-outline-secondary mr-4">Browse Products</button>
      </div>
    </div>
  </div>
  <login></login>

  <mini-cart></mini-cart>

</div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Products from "@/sections/Products.vue";
import Login from "@/components/Login.vue";

export default {
  name: "home",
  components: {
    Hero,
    Products,
    Login
  }
};
</script>

<style>

</style>
