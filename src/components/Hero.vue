<template>
    <div class="hero">
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  Javascript Tutorial
                   For Developers
                </h1>
                <p>
                  Javascript を学ぶ全ての人たちに役立つ素晴らしいチュートリアルを届けよう
                </p>
                <div class="hero-btn mt-5">
                    <!-- <button class="btn custom-btn btn-primary mr-4">Explore</button> -->
                    <a class="btn custom-btn btn-primary mr-4 start-btn" data-toggle="modal" data-target="#login">はじめる</a>
                    <button class="btn custom-btn btn-outline-secondary">Tutorials</button>
                </div>
              </div>
            </div>
            <div class="col-md-7">
                <div class="graphic">
                    <img src="/img/svg/11.svg" alt="" id="top-img">
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
  padding-top: 0rem;
  text-align: left;
}
.start-btn {
  color: white !important;
}
</style>
