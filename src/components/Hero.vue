<template>
    <div class="hero">
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  Gadget Shop For Developers
                </h1>
                <p>
                  This site is made with Vue.js. The database uses FireBase and the server uses Heroku. Here are some of the products that will be of great help for all web developers.
                </p>
                <div class="hero-btn mt-5">
                    <button class="btn custom-btn btn-primary mr-4">Explore</button>
                    <button class="btn custom-btn btn-outline-secondary">Products</button>
                </div>
              </div>
            </div>
            <div class="col-md-7">
                <div class="graphic">
                    <img src="/img/svg/10.svg" alt="" id="top-img">
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hero {
  width: 100%;
  height: 500px;
  padding-top: 3rem;
  text-align: left;
}
</style>
