<template>
  <div>
    <section id="cart_items">
      <div class="container">
        <div class="breadcrumbs">
          <ol class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li class="active">Shopping Cart</li>
          </ol>
        </div>
        <div class="table-responsive cart_info">
          <table class="table table-condensed">
            <thead>
              <tr class="cart_menu">
                <td class="image">Item</td>
                <td class="description">Name</td>
                <td class="price">Price</td>
                <td class="quantity">Quantity</td>
                <td class="total">Total</td>
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
                <td class="cart_quantity">
                  <div class="cart_quantity_button">
                    <button @click="addQty(product)">+</button>

                    <b> {{ product.quantity }} </b>

                    <button @click="subQty(product)">-</button>
                  </div>
                </td>
                <td class="cart_total">
                  <p class="cart_total_price">
                    {{ product.price * product.quantity }}
                  </p>
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
    </section>
    <!--/#cart_items-->

    <section id="do_action">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="chose_area">
              <ul class="user_option">
                <li>
                  <input type="checkbox" />
                  <label>Use Coupon Code</label>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6">
            <div>
              <ul>
                <li>
                  <h2>
                    <b>Total: ₹ {{ subtotal }}</b>
                  </h2>
                </li>
              </ul>

              <router-link class="btn btn-default check_out" to="/checkout"
                >Check Out</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/#do_action-->
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      item: undefined,
      server: "http://127.0.0.1:8000/storage/",
      total: 0,
    };
  },
  mounted() {
    this.item = JSON.parse(localStorage.getItem("myCart"));
    console.log(this.item);
  },
  methods: {
    addQty(product) {
      Object.assign(product, {
        quantity: parseInt(product.quantity) + 1,
      });
      this.total += product.quantity * product.price;
      localStorage.setItem("myCart", JSON.stringify(this.item));
    },

    subQty(product) {
      Object.assign(product, {
        quantity: parseInt(product.quantity) - 1,
      });
      if (product.quantity < 1) {
        alert("You will miss it !! ");
        let cart = this.item.indexOf(product);
        this.item.splice(cart, 1);
      }
      this.total -= product.quantity * product.price;
      localStorage.setItem("myCart", JSON.stringify(this.item));
    },

    delItem(product) {
      let cart = this.item.indexOf(product);
      console.log(cart);
      this.item.splice(cart, 1);
      localStorage.setItem("myCart", JSON.stringify(this.item));
    },
  },

  computed: {
    subtotal: function () {
      return this.item.reduce((total, product) => {
        return (total += product.quantity * product.price);
      }, 0);
    },
  },
};
</script>

<style>
</style>