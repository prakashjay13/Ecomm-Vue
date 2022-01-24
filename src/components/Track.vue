<template>
  <div class="container">
      <h2><b>Track your order :</b></h2>
      <input type="text" placeholder="Enter the order id" v-model="index">
      <div>
          <br>
          <div>
      <input type="button" class="btn btn-primary" value="Track" @click="search()">
          </div>
      </div>
      <br>
      <p v-if="store">
        <section class="container">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
              <th>Name</th>
             
            <th>quantity</th>
            <th>price</th>
            <th>total</th>
            <th>status</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="storedata in store" :key="storedata.id">
                <td>{{storedata.name}}</td>
              
                 <td>{{storedata.quantity}}</td>
                  <td>{{storedata.price}}</td>
                  <td>{{storedata.quantity*storedata.price}}</td>
                    <section v-if="storedata.status=='Processing'">
                        <td class="text text-danger">{{ storedata.status}}</td>
                    </section>
                     <section v-else>
                        <td class="text text-success">{{ storedata.status}}</td>
                    </section>
                  
            </tr>
            </tbody>
      </table>
    </section>
      </p>
      
  </div>
</template>

<script>
import axios from "axios";
import { MAIN_URL } from "@/common/Url";
export default {
  name: "Track",
  data() {
    return {
      store: undefined,
      index: null,
    };
  },
  methods: {
    search() {
      axios.get(`${MAIN_URL}track/` + this.index).then((res) => {
        if (res.data.err == 0) {
          this.store = res.data.track;
          console.log(this.orderdata);
        }
      });
    },
  },
};
</script>

<style>
</style>