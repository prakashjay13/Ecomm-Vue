<template>
  <div>
    <table class="table">
      <tr v-for="cms in cmsdata" :key="cms.id">
        <div class="container">
          <h2>{{ cms.title }}</h2>
          <td>{{ cms.body }}</td>
        </div>
      </tr>
    </table>
  </div>
</template>

<script>
import { cms } from "@/common/Service";
export default {
  name: "Cms",
  data() {
    return {
      cmsdata: undefined,
    };
  },
  mounted() {
    cms().then((res) => {
      //promise
      if (res.data.err == 0) {
        this.cmsdata = res.data.cms;
      }
    });
  },
};
</script>

<style>
</style>