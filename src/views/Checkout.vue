<template>
  <div class="chekout">
       <Navbar></Navbar>

        <div class="container mt-5 pt-5">

            <div class="row">

                <div class="col-md-9">
                    <h4 class="py-4">Checkout page</h4>
                     <ul>
                        <li v-for="item in this.$store.state.cart" class="media">
                        <img :src="item.productImage" width="80px" class="align-self-center mr-3" alt="">
                        <div class="media-body">
                            <h5 class="mt-0">{{item.productName}}</h5>
                            <p class="mt-0">{{item.productPrice }}</p>
                            <p class="mt-0">Quantity : {{item.productQuantity }}</p>
                        </div>
                        </li>

                    </ul>
                </div>
                <div class="col-md-3">
                    Total Price
                </div>
            </div>

        </div>
  </div>
</template>

<script>
export default {
  name: "add-to-cart",
  props: {
    name: String,
    price: String,
    image: String,
    pId: String
  },

  data() {
    return {
      item: {
        productName: this.name,
        productImage: this.image,
        productPrice: this.price,
        productId: this.pId,
        productQuantity: 1,
      }

    }
  },
  methods: {
    addToCart() {
      $('#miniCart').modal('show');
      this.$store.commit('addToCart', this.item)
    }

  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
</style>
