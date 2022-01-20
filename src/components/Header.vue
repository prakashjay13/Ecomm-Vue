<template>
  <header id="header">
    <!--header-->
    <div class="header_top">
      <!--header_top-->
      <div class="container">
        <div class="row">
          <div class="col-sm-6"></div>
          <div class="col-sm-6">
            <div class="social-icons pull-right">
              <ul class="nav navbar-nav">
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-google-plus"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header_top-->

    <div class="header-middle">
      <!--header-middle-->
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="logo pull-left">
              <a href="index.html"><img src="images/home/logo.png" alt="" /></a>
            </div>
            <div class="btn-group pull-right"></div>
          </div>
          <div class="col-sm-8">
            <div class="shop-menu pull-right">
              <ul class="nav navbar-nav">
                <li>
                  <router-link to="/account">
                    <i class="fa fa-info"></i> Account</router-link
                  >
                </li>

                <li>
                  <router-link to="/order">
                    <i class="fa fa-gift"></i> My Orders</router-link
                  >
                </li>

                <li>
                  <router-link to="/changepassword">
                    <i class="fa fa-edit"></i> Change Password</router-link
                  >
                </li>

                <li>
                  <router-link to="/cms">
                    <i class="fa fa-check-circle"></i> About Us</router-link
                  >
                </li>

                <li>
                  <router-link to="/track">
                    <i class="fa fa-search"></i> Track Order</router-link
                  >
                </li>

                <li>
                  <router-link to="/checkout"
                    ><i class="fa fa-crosshairs"></i> Checkout</router-link
                  >
                </li>
                <li>
                  <router-link to="/wishlist"
                    ><i class="fa fa-gift"></i> Wishlist</router-link
                  >
                </li>
                <li>
                  <router-link to="/cart"
                    ><i class="fa fa-shopping-cart"></i> Cart{{
                      [numInCart]
                    }}</router-link
                  >
                </li>
                <li>
                  <router-link to="/register" v-if="!email"
                    ><i class="fa fa-user"></i> Register</router-link
                  >
                </li>
                <li v-if="!token">
                  <router-link to="/login"
                    ><i class="fa fa-lock"></i>Login</router-link
                  >
                </li>
                <li v-if="email">
                  <router-link to="/">Welcome {{ email }}</router-link>
                </li>
                <li v-if="token">
                  <a href="#" @click="logout"
                    ><i class="fa fa-sign-out"></i>Logout</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header-middle-->

    <div class="header-bottom">
      <!--header-bottom-->
      <div class="container">
        <div class="row">
          <div class="col-sm-9">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div class="mainmenu pull-left">
              <ul class="nav navbar-nav collapse navbar-collapse">
                <li>
                  <router-link to="/" exact>Home</router-link>
                </li>
                <li class="dropdown">
                  <a href="#">Shop<i class="fa fa-angle-down"></i></a>
                  <ul role="menu" class="sub-menu">
                    <li><router-link to="/product">Products</router-link></li>

                    <li>
                      <router-link to="/checkout">Checkout</router-link>
                    </li>
                    <li>
                      <router-link to="/cart">Cart</router-link>
                    </li>
                  </ul>
                </li>

                <li>
                  <router-link to="/contact" exact>Contact Us </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-3"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  computed: mapState({
    token: (state) => state.token,
    email: (state) => state.email,
    inCart() {
      return this.$store.getters.inCart;
    },
    numInCart() {
      return this.inCart.length;
    },
  }),
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style>
.router-link-active {
  color: black;
  background: blanchedalmond;
}
</style>