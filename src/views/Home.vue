<template>
  <div class="home flex-column">
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
    <router-view class="flex"></router-view>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

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
          label: "系统安全",
          path: "security"
        }
      ],
      interval: "",
      time: ""
    };
  },
  computed: {
    ...mapState("nav", ["currentDevice", "slideList", "currentNum"]),
    ...mapState("os", ["os"])
  },
  methods: {
    ...mapMutations("nav", [
      "set_current_device",
      "set_slide_list",
      "set_current_num"
    ]),
    ...mapMutations("os", ["set_os"]),
    // 获取时间
    getDate() {
      var date = new Date();
      date = date.toLocaleString();
      this.time = date;
    },
    getData(callback) {
      this.$axios
        .get(`api/Statement/GetDeviceNames`)
        .then(res => {
          if (res.data.code === 0) {
            this.set_slide_list(res.data.data);
            this.set_current_device(this.slideList[0]);
            this.set_current_num(0);
            if (typeof callback === "function") {
              callback();
            }
          }
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.error(err);
        });
    },
    getOperatingSystemInfo() {
      let operatingInfo = navigator.userAgent;
      let isWin =
        navigator.platform === "Win32" || navigator.platform === "Windows";
      let isMac =
        navigator.platform === "Mac68K" ||
        navigator.platform === "MacPPC" ||
        navigator.platform === "Macintosh" ||
        navigator.platform === "MacIntel";
      if (isMac) return "Mac";
      let isUnix = navigator.platform === "X11" && !isWin && !isMac;
      if (isUnix) return "Unix";
      let isLinux = String(navigator.platform).indexOf("Linux") > -1;
      if (isLinux) return "Linux";
      if (isWin) {
        let isWin2K =
          operatingInfo.indexOf("Windows NT 5.0") > -1 ||
          operatingInfo.indexOf("Windows 2000") > -1;
        if (isWin2K) return "Win2000";
        let isWinXP =
          operatingInfo.indexOf("Windows NT 5.1") > -1 ||
          operatingInfo.indexOf("Windows XP") > -1;
        if (isWinXP) return "WinXP";
        let isWin2003 =
          operatingInfo.indexOf("Windows NT 5.2") > -1 ||
          operatingInfo.indexOf("Windows 2003") > -1;
        if (isWin2003) return "Win2003";
        let isWinVista =
          operatingInfo.indexOf("Windows NT 6.0") > -1 ||
          operatingInfo.indexOf("Windows Vista") > -1;
        if (isWinVista) return "WinVista";
        let isWin7 =
          operatingInfo.indexOf("Windows NT 6.1") > -1 ||
          operatingInfo.indexOf("Windows 7") > -1;
        if (isWin7) return "Win7";
        let isWin10 = operatingInfo.indexOf("Windows NT 10") !== -1;
        if (isWin10) return "Win10";
      }
      return "other";
    }
  },
  created() {
    if (!localStorage.getItem("token")) {
      localStorage.setItem("token", "0");
    }
    let operatingSystemInfo = this.getOperatingSystemInfo();
    this.set_os(operatingSystemInfo);
    this.getData();
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
  /*background-repeat: no-repeat;*/
  /*background-size: cover;*/
  /*background-position: center center;*/
  /*background-image: url("../assets/img/bg.png");*/
  height: 100%;
  min-width: 1400px;
  overflow: hidden;
  position: relative;
}
.header {
  width: 90%;
  margin: 0 5%;
  background: url("../assets/img/header.png") center no-repeat;
  background-size: auto 100%;
  display: flex;
  justify-content: center;
  position: relative;
  /*position: absolute;*/
  /*top: 0;*/
  /*left: 0;*/
}
.header h1 {
  margin-bottom: 5%;
  text-align: center;
  font-size: 20px;
  color: rgba(128, 255, 255, 0.996078431372549);
  /* margin-top: 10px; */
}
.header-name {
  padding: 0 50px;
}
.left-nav h1,
.right-nav h1 {
  margin: 0;
  color: #46a6b5;
  font-size: 16px;
  display: inline;
  /*padding-bottom: 5px;*/
  letter-spacing: 2px;
}
.left-nav,
.right-nav {
  display: flex;
  margin-top: 20px;
  text-align: center;
  align-items: center;
  flex: 1;
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
  /*padding: 0 5%;*/
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
  right: -4%;
  top: 100%;
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
  .header {
    margin-bottom: 15px;
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
  .header {
    margin-bottom: 18px;
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
  .header {
    margin-bottom: 22px;
  }
}
</style>
