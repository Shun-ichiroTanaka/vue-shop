<template>
<div class="products" id="products">
  <div class="container">
    <h1 class="text-center pt-5 pb-4">Our Products List</h1>
    <div class="row">

      <div class="col-md-4" v-for="product in products">
        <div class="card product-item">

          <carousel :perPage="1" class="carousel">
            <slide v-for="(image, index) in product.images">
              <img :src="image" class="carousel-img" id="carousel-img" alt="...">
            </slide>
          </carousel>

          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <div class="d-flex justify-content-between">
              <h6 class="card-priceS">¥ {{ product.price }}</h6>
              <add-to-cart
              :product-image="getImage(product.images)"
              :product-id="product.id"
              :price="product.price"
              :name="product.name">
              </add-to-cart>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
</template>

<script>
import {
  db
} from '../firebase';

export default {
  name: "Products-list",
  props: {
    msg: String
  },

  data() {
    return {
      products: [],

    }
  },

  methods: {

    getImage(images) {
      return images[0];
    }

  },

  firestore() {
    return {
      products: db.collection('products'),
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.products {
  position: relative;
  padding-bottom: 3rem;
  background: #f2f2f2;
}

.product-item {
  max-height: 550px;
  margin-bottom: 30px;
  box-shadow: 0 3px 10px rgba(156, 156, 156, .4);
}

.carousel {
  max-height: 350px;
}

#carousel-img {
  width: 100%;
  height: 300px;
  padding: 20px 10px 0 10px;

  object-fit: contain !important;
}

.card-body {
  max-height: 200px;
}

.card-title {
  display: block;
  padding-right: 10px;
  margin-bottom: 50px;
}

.btn-add_cart {
  position: absolute;
  right: 15px;
  bottom: 15px;
}
</style>
