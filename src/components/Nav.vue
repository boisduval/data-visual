<template>
  <div class="nav-box">
    <NavBorder>
      <p class="title">控制器列表信息</p>
      <nav>
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide
            v-for="(item, index) in slideItems"
            :key="index"
            class="swiper-slide"
            :data-id="item.SystemID"
            :data-para="item.Para"
            :data-name="item.Name"
            ><p>{{ item.Name }}</p></swiper-slide
          >
        </swiper>
      </nav>
    </NavBorder>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    title: String
  },
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        slideToClickedSlide: true,
        on: {
          slideChangeTransitionEnd: () => {
            var dom = this.$(this.$(".swiper-slide-active")[0]);
            var params = {
              SystemID: dom.data("id"),
              Para: dom.data("para"),
              Name: dom.data("name")
            };
            this.set_currentDevice(params);
          }
        }
      },
      slideItems: [],
      activeItem: ""
    };
  },
  computed: {
    ...mapState("nav", ["currentDevice"])
  },
  methods: {
    ...mapMutations("nav", ["set_currentDevice"]),
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    getData() {
      this.$axios
        .get(`api/Statement/GetDeviceNames`)
        .then(res => {
          if (res.data.code === 0) {
            this.slideItems = res.data.data;
            this.set_currentDevice(this.slideItems[0]);
          }
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.error(err);
        });
    }
  },
  created() {
    // eslint-disable-next-line no-console
    console.log("this is current swiper instance object", this.swiper);
    this.getData();
  }
};
</script>

<style scoped>
.nav-box {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* background: #fff; */
  /* height: 30px; */
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  transition: 300ms;
  transform: scale(0.8);
  color: #46a6b5;
  cursor: pointer;
}
.swiper-slide p {
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  overflow-wrap: break-word;
  word-wrap: break-word;
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1);
  transform: translateX(30px);
}
section {
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  height: calc(100% - 65px);
  overflow: hidden;
}
.content-one,
.content-two {
  flex: 1;
  display: flex;
}
.left-box,
.center-box,
.right-box {
  flex: 1;
}
nav {
  margin-top: -1%;
  padding: 55px 0;
  width: 170px;
  height: 561px;
  overflow: hidden;
  box-sizing: border-box;
  background-image: url("../assets/img/leftbg.png");
  background-position: left center;
  background-repeat: no-repeat;
}
.swiper-container {
  height: 451px;
}
.title {
  position: absolute;
  top: 2%;
  color: #46a6b5;
  width: 100%;
  text-align: center;
}
@media screen and (max-width: 1300px) {
  .swiper-slide p,
  .title {
    font-size: 12px;
  }
}
@media screen and (min-width: 1300px) {
  .swiper-slide p,
  .title {
    font-size: 14px;
  }
}
@media screen and (min-width: 1500px) {
  .swiper-slide p,
  .title {
    font-size: 16px;
  }
}
</style>
