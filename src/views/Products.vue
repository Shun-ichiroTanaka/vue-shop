<template>
<div class="overview">
  <div class="container h-100">
    <div class="intro h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-md-6">
          <h3>Products Page</h3>
          <p>
            商品がまだ登録されていません。商品を登録・販売して商品管理しよう。
          </p>
        </div>
        <div class="col-md-6">
          <img src="/img/svg/2.svg" alt="" class="img-fluid">
        </div>
      </div>
    </div>

    <h3>Basic CRUD (create/read/update/delete) in Firebase and Vue</h3>
    <div class="product-test">
      <div class="form-group">
        <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
      </div>
      <div class="form-group">
        <input type="text" placeholder="Price" v-model="product.price" class="form-control">
      </div>
      <div class="form-group">
        <button @click="saveData" class="btn btn-primary">Save Data</button>
      </div>

    </div>

    <div class="product-test">
      <h3 class="d-inline-block">Products list</h3>
      <button class="btn btn-primary float-right">Add Product</button>
      <div class="table-responsive">

        <table class="table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Modify</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="product in products">
              <td>{{ product.name }}</td>
              <td>{{ product.price }}</td>
              <td>
                <button class="btn btn-primary">Edit</button>
                <button class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>

        </table>

      </div>
    </div>
  </div>

</div>
</template>

<script>
import {
  fb,
  db
} from '../firebase';

export default {
  name: "Products",
  props: {
    msg: String
  },

  data() {
    return {
      products: [],
      product: {
        name: null,
        price: null,
      }

    }
  },

  methods: {
    readData() {
      // Firebaseからproductsデータの取得
      db.collection("products").get().then((querySnapshot) => {

        querySnapshot.forEach((doc) => {

          this.products.push(doc.data());
        });

      });
    },
    saveData() {
      // Firebaseにデータの保存
      db.collection("products").add(this.product)
        .then((docRef) => {
          console.log("Document written with ID:", docRef.id);
          this.readData();
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });

    },
    reset() {
      // Object.assign(this.$data, this.$options.data.apply(this));
    }
  },
  created() {
    this.readData();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">

</style>
