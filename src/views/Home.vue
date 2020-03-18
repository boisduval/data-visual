<template>
  <div class="home">
    <header class="header">
      <div class="left-nav">
        <div
          class="nav-item"
          v-for="(item, index) in leftNav"
          :key="index"
          :id="item.path"
          @click="$router.push({ name: item.path })"
        >
          <h1>{{ item.label }}</h1>
        </div>
      </div>
      <div class="header-name">
        <h1>{{ name }}</h1>
      </div>
      <div class="right-nav">
        <div
          class="nav-item"
          v-for="(item, index) in rightNav"
          :key="index"
          :id="item.path"
          @click="$router.push({ name: item.path })"
        >
          <h1>{{ item.label }}</h1>
        </div>
      </div>
      <p id="time">
        {{ time }}
      </p>
    </header>
    <!-- 内容 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "数据监控中心",
      leftNav: [
        {
          label: "系统首页",
          path: "index"
        },
        {
          label: "系统架构",
          path: "framework"
        },
        {
          label: "实时状态",
          path: "realtime"
        }
      ],
      rightNav: [
        {
          label: "能源统计",
          path: "energy"
        },
        {
          label: "极值统计",
          path: "extreme"
        },
        {
          label: "异常信息",
          path: "abnormal"
        }
      ],
      interval: "",
      time: ""
    };
  },
  methods: {
    // 获取时间
    getDate() {
      var date = new Date();
      date = date.toLocaleString();
      this.time = date;
    }
  },
  created() {
    this.$nextTick(() => {
      this.$(this.$("#" + this.$route.name)[0]).addClass("is-active");
    });
    this.interval = setInterval(() => {
      this.getDate();
    }, 1000);
    this.$once("hook:beforeDestroy", () => {
      clearInterval(this.interval);
    });
  },
  watch: {
    $route(to) {
      this.$(".nav-item").removeClass("is-active");
      var name = to.name;
      this.$(this.$("#" + name)[0]).addClass("is-active");
    }
  }
};
</script>
<style scoped>
.home {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-position: center center;
  background-image: url("../assets/img/bg.png");
  height: 100%;
  min-width: 1100px;
  overflow: hidden;
  position: relative;
}
.header {
  margin: 0 auto;
  width: 100%;
  max-width: 1920px;
  background: url("../assets/img/header.png") center no-repeat;
  background-size: auto 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
}
.header h1 {
  margin-bottom: 1vh;
  text-align: center;
  font-size: 20px;
  color: rgba(128, 255, 255, 0.996078431372549);
  /* margin-top: 10px; */
}
.header-name {
  padding: 0 calc(3% + 20px);
}
.left-nav h1,
.right-nav h1 {
  margin: 0;
  padding: 0;
  color: #46a6b5;
  font-size: 16px;
  display: inline;
  padding-bottom: 5px;
  letter-spacing: 2px;
}
.left-nav,
.right-nav {
  display: flex;
  margin-top: 20px;
  text-align: center;
  align-items: center;
}
.left-nav {
  justify-content: flex-end;
}
.right-nav {
  justify-content: flex-start;
}
.nav-item {
  flex: 1;
  border-right: 1px solid #666;
  cursor: pointer;
  padding: 0 calc(10vh - 45px);
}
.nav-item:hover h1,
.nav-item:focus h1,
.is-active h1 {
  border-bottom: 3px solid #46a6b5;
}
.left-nav .nav-item:nth-child(3),
.right-nav .nav-item:nth-child(3) {
  border: none;
}
#time {
  color: #46a6b5;
  position: absolute;
  right: 0;
  top: calc(6vh + 5px);
  width: 200px;
}
@media screen and (max-width: 1300px) {
  .header h1 {
    font-size: 18px;
  }
  .left-nav h1,
  .right-nav h1 {
    font-size: 14px;
  }
  #time {
    font-size: 12px;
  }
}
@media screen and (min-width: 1300px) {
  .header h1 {
    font-size: 20px;
  }
  .left-nav h1,
  .right-nav h1 {
    font-size: 18px;
  }
  #time {
    font-size: 14px;
  }
}
@media screen and (min-width: 1500px) {
  .header h1 {
    font-size: 24px;
  }
  .left-nav h1,
  .right-nav h1 {
    font-size: 20px;
  }
  .border-title {
    font-size: 14px;
  }
  #time {
    font-size: 16px;
  }
}
</style>
