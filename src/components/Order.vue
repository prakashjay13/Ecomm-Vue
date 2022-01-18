<template>
  <div class="container">
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orderdata" :key="order.id">
          <td>{{ order.name }}</td>
          <td>{{ order.quantity }}</td>
          <td>{{ order.price }}</td>
          <td>{{ order.quantity * order.price }}</td>
          <td><h4>Processing</h4></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { MAIN_URL } from "@/common/Url";

export default {
  name: "order",
  data() {
    return {
      id: localStorage.getItem("uid"),
      orderdata: undefined,
    };
  },

  mounted() {
    axios.get(`${MAIN_URL}order/` + this.id).then((res) => {
      if (res.data.err == 0) {
        this.orderdata = res.data.order;
        console.log(this.orderdata);
      }
    });
  },
};
</script>

<style>
</style>