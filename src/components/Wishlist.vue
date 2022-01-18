<template>
  <div class="container">
    <div class="table-responsive cart_info">
      <table class="table table-condensed">
        <thead>
          <tr class="cart_menu">
            <td class="image">Item</td>
            <td class="description">Name</td>
            <td class="price">Price</td>

            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in item" :key="product.id">
            <td class="cart_product">
              <a href=""
                ><img
                  v-bind:src="server + product.image"
                  height="100"
                  width="100"
                  alt=""
              /></a>
            </td>
            <td class="cart_description">
              <h4>
                <a href="">{{ product.name }}</a>
              </h4>
              <p></p>
            </td>
            <td class="cart_price">
              <p>{{ product.price }}</p>
            </td>

            <td>
              <button @click="delItem(product)" class="btn btn-danger">
                ❌
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wishlist",
  data() {
    return {
      item: undefined,
      server: "http://127.0.0.1:8000/storage/",
      proimage: undefined,
    };
  },
  mounted() {
    this.item = JSON.parse(localStorage.getItem("myWishlist"));
  },
  methods: {
    delItem(product) {
      let wishlist = this.item.indexOf(product);
      console.log(wishlist);
      this.item.splice(wishlist, 1);
      localStorage.setItem("myWishlist", JSON.stringify(this.item));
    },
  },
};
</script>

<style>
</style>