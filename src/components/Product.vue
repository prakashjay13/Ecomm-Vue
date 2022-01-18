<template>
  <section>
    <div class="container">
      <div class="row">
        <Sidebar />

        <div class="col-sm-9 padding-right">
          <div class="features_items">
            <!--features_items-->
            <h2 class="title text-center">Features Items</h2>
            <div v-for="product in prodata" :key="product.id" class="col-sm-4">
              <div class="product-image-wrapper">
                <div class="single-products">
                  <div class="productinfo text-center">
                    <img
                      v-bind:src="server + product.product_image[0].image"
                      height="200"
                      alt=""
                    />
                    <h2></h2>
                    <b>{{ product.name }}</b>
                    <p>{{ product.description }}</p>
                    <p>In-stock: {{ product.quantity }}</p>
                    <p>₹ {{ product.price }}</p>
                  </div>
                  <div>
                    <div>
                      <button
                        class="btn btn-default"
                        @click="addToCart(product)"
                      >
                        <i class="fa fa-shopping-cart"></i>Add to cart
                      </button>
                      <button
                        class="btn btn-default"
                        @click="addtoWishlist(product)"
                      >
                        <i class="fa fa-plus-square"></i>Add to wishlist
                      </button>
                    </div>
                  </div>
                </div>
                <div class="choose">
                  <ul class="nav nav-pills nav-justified">
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!--features_items-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { product } from "@/common/Service";
import Sidebar from "./includes/Sidebar.vue";
export default {
  name: "Product",
  props: ["id"],
  components: {
    Sidebar,
  },
  data() {
    return {
      prodata: undefined,
      server: "http://127.0.0.1:8000/storage/",
      proimage: undefined,
    };
  },
  computed: {
    inCart() {
      return this.$store.getters.inCart;
    },
  },
  methods: {
    addToCart(product) {
      if (localStorage.getItem("myCart") != undefined) {
        let arr = JSON.parse(localStorage.getItem("myCart"));
        let obj = {
          pid: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.product_image[0].image,
        };
        const found = arr.some((el) => el.pid == product.id);
        if (found) {
          alert("This Product is already added");
        } else {
          arr.push(obj);
          localStorage.setItem("myCart", JSON.stringify(arr));
          this.$store.dispatch("addToCart", arr);
        }
      } else {
        let arr = [];
        let obj = {
          pid: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.product_image[0].image,
        };
        arr.push(obj);
        console.log(product);
        localStorage.setItem("myCart", JSON.stringify(arr));
        this.$store.dispatch("addToCart", arr);
      }
    },

    addtoWishlist(product) {
      let arr = [];
      let obj = {
        pid: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.product_image[0].image,
      };
      arr.push(obj);
      console.log(product);
      localStorage.setItem("myWishlist", JSON.stringify(arr));
    },
  },
  mounted() {
    product().then((res) => {
      if (res.data.err == 0) {
        this.prodata = res.data.product;
        this.proimage = res.data.product_image;
        console.log("product", res.data.product);
      }
    });
  },
  watch: {
    $route(to) {
      this.params = to.params.id;
      //  console.log(this.params);
      const url = "http://127.0.0.1:8000/api/catpro/";
      axios.get(`${url}` + this.params).then((res) => {
        this.prodata = res.data.product;
        this.proimage = res.data.product_image;
      });
    },
  },
};
</script>

<style>
button:hover {
  animation-name: background-color;
  animation-duration: 3000ms;
}

@keyframes background-color {
  100% {
    background-color: yellow;
  }
}
</style>