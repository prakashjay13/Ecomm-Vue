<template>
  <section>
    <Slider />
    <section>
      <div class="container">
        <div class="row">
          <Sidebar />
          <div class="col-sm-9 padding-right">
            <div class="features_items">
              <!--features_items-->
              <h2 class="title text-center">Features Items</h2>
              <div class="container">
                <h3>Wanna shop some awesome Products??</h3>
                <router-link to="/product">
                  <button id="myButton" class="btn-btn-primary">Go!</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Slider from "./includes/Slider.vue";
import Sidebar from "./includes/Sidebar.vue";
export default {
  name: "Main",
  components: {
    Slider,
    Sidebar,
  },
};
</script>

<style>
#myButton {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>