<template>
  <section id="cart_items">
    <div class="container">
      <div class="breadcrumbs">
        <ol class="breadcrumb">
          <li><a href="#">Home</a></li>
          <li class="active">Check out</li>
        </ol>
      </div>
      <!--/breadcrums-->

      <!--/checkout-options-->

      <!--/register-req-->
      <div class="review-payment">
        <h2>Review & Payment</h2>
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
              <td class="remove">Remove</td>
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
        <div class="col-sm-6">
          <div>
            <ul>
              <li>
                <h2>
                  <b>Total: ₹ {{ subtotal }}</b>
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />

      <br />

      <div class="shopper-informations">
        <div class="row">
          <div class="col-sm-12">
            <div class="bill-to">
              <p>Ship To</p>
              <div class="form-one">
                <form @submit="postcheckout()">
                  <div class="form-group">
                    <input
                      type="email"
                      placeholder="Email*"
                      v-model="user.email"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.email.$error,
                      }"
                    />
                    <div
                      v-if="submitted && $v.user.email.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.user.email.required"
                        >Email is required</span
                      >
                    </div>
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Name*"
                      v-model="user.name"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.name.$error,
                      }"
                    />
                    <div
                      v-if="submitted && $v.user.name.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.user.name.required"
                        >Name is required</span
                      >
                    </div>
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Address*"
                      v-model="user.address"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.address.$error,
                      }"
                    />
                    <div
                      v-if="submitted && $v.user.address.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.user.address.required"
                        >Address is required</span
                      >
                      <span v-if="!$v.user.address.minLength"
                        >Address minimum legth should be atleast 6</span
                      >
                    </div>
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Mobile*"
                      v-model="user.mobile"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.mobile.$error,
                      }"
                    />
                    <div
                      v-if="submitted && $v.user.mobile.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.user.mobile.required"
                        >Mobile is required</span
                      >
                    </div>
                  </div>

                  <p>Bill To</p>

                  <div class="form-group">
                    <input
                      type="email"
                      placeholder="Email*"
                      v-model="user.bemail"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.bemail.$error,
                      }"
                    />
                    <div
                      v-if="submitted && $v.user.bemail.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.user.bemail.required"
                        >Email is required</span
                      >
                    </div>
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Name*"
                      v-model="user.bname"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.bname.$error,
                      }"
                    />
                    <div
                      v-if="submitted && $v.user.bname.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.user.bname.required"
                        >Name is required</span
                      >
                    </div>
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Address*"
                      v-model="user.baddress"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.baddress.$error,
                      }"
                    />
                    <div
                      v-if="submitted && $v.user.baddress.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.user.baddress.required"
                        >Address is required</span
                      >
                      <span v-if="!$v.user.baddress.minLength"
                        >Address minimum legth should be atleast 6</span
                      >
                    </div>
                  </div>

                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Mobile*"
                      v-model="user.bmobile"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.bmobile.$error,
                      }"
                    />
                    <div
                      v-if="submitted && $v.user.bmobile.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.user.bmobile.required"
                        >Mobile is required</span
                      >
                    </div>
                  </div>

                  <div class="form-group">
                    <button class="btn btn-primary">Place your Order</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--/#cart_items-->
</template>

<script>
import { checkout } from "@/common/Service";
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  name: "Checkout",
  data() {
    return {
      item: undefined,
      server: "http://127.0.0.1:8000/storage/",
      user: {
        email: "",
        name: "",
        address: "",
        mobile: "",
        bemail: "",
        bname: "",
        baddress: "",
        bmobile: "",
      },
      submitted: false,

      subtotal: localStorage.getItem("total"),
    };
  },
  validations: {
    user: {
      name: { required },
      email: { required, email },
      address: { required, minLength: minLength(6) },
      mobile: { required },
      bname: { required },
      bemail: { required, email },
      baddress: { required, minLength: minLength(6) },
      bmobile: { required },
    },
  },
  mounted() {
    this.item = JSON.parse(localStorage.getItem("myCart"));
  },
  methods: {
    postcheckout() {
      this.submitted = true;
      let formData = {
        name: this.user.name,
        email: this.user.email,
        address: this.user.address,
        mobile: this.user.mobile,
        bname: this.user.bname,
        bemail: this.user.bemail,
        baddress: this.user.baddress,
        bmobile: this.user.bmobile,
        id: localStorage.getItem("uid"),
        cart: JSON.parse(localStorage.getItem("myCart")),
      };

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      console.log(formData);
      checkout(formData)
        .then((res) => {
          if (res.data.err == 0) {
            console.log(res.data.checkout);
            alert(res.data.msg);
            this.$router.push({ path: "/" });
          } else {
            alert("something went wrong");
            console.log(res.data);
          }
        })
        .catch((err) => {
          console.log("Something Wrong " + err);
        });
    },

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
};
</script>

<style>
</style>