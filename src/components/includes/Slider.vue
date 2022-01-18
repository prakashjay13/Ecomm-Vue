<template>
  <section id="slider">
    <!--slider-->
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div id="slider-carousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li
                data-target="#slider-carousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#slider-carousel" data-slide-to="1"></li>
              <li data-target="#slider-carousel" data-slide-to="2"></li>
            </ol>

            <div class="carousel-inner">
              <div class="item active">
                <div class="col-sm-6">
                  <h1>Heading</h1>
                  <h2>Description</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button type="button" class="btn btn-default get">
                    Get it now
                  </button>
                </div>
                <div class="col-sm-6">
                  <img
                    src="images/home/girl1.jpg"
                    class="girl img-responsive"
                    alt=""
                  />
                </div>
              </div>
              <div class="item" v-for="banner of sliderdata" :key="banner.id">
                <div class="col-sm-6">
                  <h1>{{ banner.heading }}</h1>
                  <h2>{{ banner.description }}</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button type="button" class="btn btn-default get">
                    Get it now
                  </button>
                </div>
                <div class="col-sm-6">
                  <img
                    v-bind:src="server + banner.image"
                    height="100"
                    class="girl img-responsive"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <a
              href="#slider-carousel"
              class="left control-carousel hidden-xs"
              data-slide="prev"
            >
              <i class="fa fa-angle-left"></i>
            </a>
            <a
              href="#slider-carousel"
              class="right control-carousel hidden-xs"
              data-slide="next"
            >
              <i class="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { banner } from "@/common/Service";
export default {
  name: "Slider",
  data() {
    return {
      sliderdata: undefined,

      server: "http://127.0.0.1:8000/storage/",
    };
  },
  mounted() {
    banner().then((res) => {
      if (res.data.err == 0) {
        this.sliderdata = res.data.banner;

        console.log(res.data.banner);
      }
    });
  },
};
</script>

<style>
</style>