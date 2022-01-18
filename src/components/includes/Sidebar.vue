<template>
  <div class="col-sm-3">
    <div class="left-sidebar">
      <h2>Category</h2>
      <div class="panel-group category-products" id="accordian">
        <!--category-productsr-->

        <div
          class="panel panel-default"
          v-for="($cat, index) in category"
          :key="index"
        >
          <div class="panel-heading">
            <h4 class="panel-title">
              <router-link :to="{ name: 'Product', params: { id: $cat.id } }">{{
                $cat.title
              }}</router-link>
            </h4>
          </div>
        </div>
      </div>
      <!--/category-products-->

      <!--/brands_products-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Sidebar",
  data() {
    return {
      category: null,
    };
  },
  mounted() {
    axios.get("http://127.0.0.1:8000/api/category").then(($res) => {
      this.category = $res.data.category;
    });
  },
  watch: {
    $route(to) {
      this.params = to.params.id;
      console.log(this.params);
    },
  },
};
</script>

<style>
</style>