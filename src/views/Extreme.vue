<template>
  <div class="content">
    <section class="flex-row">
      <div class="flex">
        <Nav></Nav>
      </div>
      <div class="flex7 flex-row">
        <div class="flex2 flex-column">
          <div class="flex">
            <ExtremeBorderMainLonger title="簇总电压差趋势">
              <div id="myChart1" class="charts"></div>
            </ExtremeBorderMainLonger>
          </div>
          <div class="flex">
            <ExtremeBorderMainLonger>
              <div class="flex-column" style="height: 100%">
                <div class="flex" style="margin-bottom: 2px;">
                  <ExtremeBg title="单体高低压统计">
                    <div id="myChart2" class="charts"></div>
                  </ExtremeBg>
                </div>
                <div class="flex">
                  <ExtremeBg title="单体高低压统计">
                    <div id="myChart3" class="charts"></div>
                  </ExtremeBg>
                </div>
              </div>
            </ExtremeBorderMainLonger>
          </div>
        </div>
        <div class="flex3 flex-column">
          <div class="flex flex-row">
            <div class="flex">
              <ExtremeBorderMain>
                <div class="flex-column" style="height: 100%">
                  <div>
                    <ExtremeInfo
                      title1="环境温度"
                      title2="单体平均电压"
                      title3="簇平均电压"
                      value1="28.3℃"
                      value2="3.261V"
                      value3="48.6V"
                    ></ExtremeInfo>
                  </div>
                  <div class="flex info-box">
                    <happy-scroll
                      color="rgba(0,0,0,0.5)"
                      size="8"
                      resize
                      hide-horizontal
                    >
                      <ul>
                        <li
                          v-for="(item, index) in batterys"
                          :key="index"
                          class="flex-row"
                          style="justify-content: space-between"
                        >
                          <p style="width: 50px">第{{ index + 1 }}簇</p>
                          <p style="width: 120px">单体平均{{ item.vol }}</p>
                          <p>功率温度{{ item.temperature }}</p>
                        </li>
                      </ul>
                    </happy-scroll>
                  </div>
                </div>
              </ExtremeBorderMain>
            </div>
            <div class="flex">
              <ExtremeBorderRight title="正负绝缘极值分布">
                <div id="myChart4" class="charts"></div>
              </ExtremeBorderRight>
            </div>
          </div>
          <div class="flex">
            <ExtremeBorderRightLonger>
              <div class="flex-row" style="height: 100%">
                <div class="flex flex-column" style="margin-right: 2px;">
                  <div class="flex" style="margin-bottom: 2px;">
                    <ExtremeBgSquare>
                      <div id="myChart5" class="charts"></div>
                    </ExtremeBgSquare>
                  </div>
                  <div class="flex">
                    <ExtremeBgSquare>
                      <div id="myChart6" class="charts"></div>
                    </ExtremeBgSquare>
                  </div>
                </div>
                <div class="flex3">
                  <ExtremeBgBigger title="单体压差趋势">
                    <div id="myChart7" class="charts"></div>
                  </ExtremeBgBigger>
                </div>
              </div>
            </ExtremeBorderRightLonger>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ExtremeInfo from "../components/ExtremeInfo";
export default {
  components: { ExtremeInfo },
  data() {
    return {
      seriesLabel: {
        normal: {
          show: true
        }
      },
      batterys: [
        {
          vol: "3.333v",
          state: "开启",
          temperature: "34.6℃"
        },
        {
          vol: "3.333v",
          state: "开启",
          temperature: "34.6℃"
        },
        {
          vol: "3.333v",
          state: "开启",
          temperature: "34.6℃"
        },
        {
          vol: "3.333v",
          state: "开启",
          temperature: "34.6℃"
        },
        {
          vol: "3.333v",
          state: "开启",
          temperature: "34.6℃"
        },
        {
          vol: "3.333v",
          state: "开启",
          temperature: "34.6℃"
        },
        {
          vol: "3.333v",
          state: "开启",
          temperature: "34.6℃"
        },
        {
          vol: "3.333v",
          state: "开启",
          temperature: "34.6℃"
        },
        {
          vol: "3.333v",
          state: "开启",
          temperature: "34.6℃"
        },
        {
          vol: "3.333v",
          state: "开启",
          temperature: "34.6℃"
        },
        {
          vol: "3.333v",
          state: "开启",
          temperature: "34.6℃"
        },
        {
          vol: "3.333v",
          state: "开启",
          temperature: "34.6℃"
        },
        {
          vol: "3.333v",
          state: "开启",
          temperature: "34.6℃"
        },
        {
          vol: "3.333v",
          state: "开启",
          temperature: "34.6℃"
        }
      ]
    };
  },
  methods: {
    getEcharts() {
      // 第一个图
      var myChart1 = this.$echarts.init(document.getElementById("myChart1"));
      myChart1.setOption({
        color: ["#51D0AB", "#F7931E", "#D4155A"],
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["第1簇", "第2簇", "第3簇"],
          textStyle: {
            color: "#46a6b5"
          },
          top: "10%"
        },
        grid: {
          left: "1%",
          right: "4%",
          top: "20%",
          bottom: "10%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLabel: { color: "#46a6b5" }, // x轴字体颜色
          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          axisLabel: { color: "#46a6b5" }, // x轴字体颜色
          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          },
          splitLine: {
            lineStyle: {
              color: "rgba(70,166,181,0.5)"
            }
          }
        },
        series: [
          {
            name: "第1簇",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
            smooth: true,
            symbol: "none"
          },
          {
            name: "第2簇",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
            smooth: true,
            symbol: "none"
          },
          {
            name: "第3簇",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410],
            smooth: true,
            symbol: "none"
          }
        ]
      });
      // 第二个图
      var myChart2 = this.$echarts.init(document.getElementById("myChart2"));
      myChart2.setOption({
        color: ["#F7931F", "#D4155A"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: "4%",
          right: "5%",
          top: "20%",
          bottom: "10%",
          containLabel: true
        },

        xAxis: {
          type: "value",
          axisLabel: { color: "#46a6b5" }, // x轴字体颜色
          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: "category",
          inverse: true,
          data: ["1", "2", "3"],
          axisLabel: { color: "#46a6b5" }, // x轴字体颜色
          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          }
        },
        series: [
          {
            name: "U",
            type: "bar",
            data: [165, 170, 200],
            label: this.seriesLabel
          },
          {
            name: "V",
            type: "bar",
            label: this.seriesLabel,
            data: [150, 105, 180]
          }
        ]
      });
      // 第三个图
      var myChart3 = this.$echarts.init(document.getElementById("myChart3"));
      myChart3.setOption({
        color: ["#F7931F", "#D4155A"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: "4%",
          right: "5%",
          top: "20%",
          bottom: "10%",
          containLabel: true
        },

        xAxis: {
          type: "value",
          axisLabel: { color: "#46a6b5" }, // x轴字体颜色
          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: "category",
          inverse: true,
          data: ["1", "2", "3"],
          axisLabel: { color: "#46a6b5" }, // x轴字体颜色
          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          }
        },
        series: [
          {
            name: "U",
            type: "bar",
            data: [165, 170, 200],
            label: this.seriesLabel
          },
          {
            name: "V",
            type: "bar",
            label: this.seriesLabel,
            data: [150, 105, 180]
          }
        ]
      });
      // 第四个图
      var myChart4 = this.$echarts.init(document.getElementById("myChart4"));
      myChart4.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ["正极绝缘值", "负极绝缘值"],
          textStyle: {
            color: "#46a6b5"
          },
          top: "10%"
        },
        grid: {
          left: "3%",
          right: "4%",
          top: "20%",
          bottom: "10%",
          containLabel: true
        },
        xAxis: [
          {
            type: "value",
            axisLabel: { color: "#46a6b5" }, // x轴字体颜色
            axisLine: {
              lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
            },
            splitLine: {
              lineStyle: {
                color: "rgba(70,166,181,0.5)"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "category",
            axisTick: {
              show: false
            },
            axisLabel: { color: "#46a6b5" }, // x轴字体颜色
            axisLine: {
              lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
            },
            data: [
              "第1簇",
              "第2簇",
              "第3簇",
              "第4簇",
              "第5簇",
              "第6簇",
              "第7簇",
              "第8簇",
              "第9簇",
              "第10簇",
              "第11簇",
              "第12簇"
            ]
          }
        ],
        series: [
          {
            name: "负极绝缘值",
            type: "bar",
            stack: "总量",
            label: {
              show: true
            },
            data: [
              320,
              302,
              341,
              374,
              390,
              450,
              420,
              374,
              390,
              450,
              420,
              374,
              390,
              450,
              420,
              333
            ],
            color: "#F7931F"
          },
          {
            name: "正极绝缘值",
            type: "bar",
            stack: "总量",
            label: {
              show: true
            },
            data: [
              -120,
              -132,
              -101,
              -134,
              -190,
              -230,
              -210,
              -134,
              -190,
              -230,
              -210,
              -134
            ],
            color: "#D4155A"
          }
        ]
      });
      // 第五个图
      var myChart5 = this.$echarts.init(document.getElementById("myChart5"));
      myChart5.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // grid: {
        //   left: "3%",
        //   right: "4%",
        //   top: "4%",
        //   containLabel: true
        // },
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "90%",
            center: ["55%", "50%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 274, name: "联盟广告" },
              { value: 235, name: "视频广告" },
              { value: 400, name: "搜索引擎" }
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            label: {
              color: "rgba(255, 255, 255, 0.3)",
              show: false
            },
            itemStyle: {
              color: "#c23531"
            },
            animationType: "scale",
            animationEasing: "elasticOut",
            // eslint-disable-next-line no-unused-vars
            animationDelay: function(idx) {
              return Math.random() * 200;
            }
          }
        ]
      });
      // 第六个图
      var myChart6 = this.$echarts.init(document.getElementById("myChart6"));
      myChart6.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // grid: {
        //   left: "3%",
        //   right: "4%",
        //   top: "4%",
        //   containLabel: true
        // },
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "90%",
            center: ["55%", "50%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 274, name: "联盟广告" },
              { value: 235, name: "视频广告" },
              { value: 400, name: "搜索引擎" }
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            label: {
              color: "rgba(255, 255, 255, 0.3)",
              show: false
            },
            itemStyle: {
              color: "#c23531"
            },
            animationType: "scale",
            animationEasing: "elasticOut",
            // eslint-disable-next-line no-unused-vars
            animationDelay: function(idx) {
              return Math.random() * 200;
            }
          }
        ]
      });
      // 第七个图
      var myChart7 = this.$echarts.init(document.getElementById("myChart7"));
      myChart7.setOption({
        color: ["#51D0AB", "#F7931E", "#D4155A"],
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["第1簇", "第2簇", "第3簇"],
          textStyle: {
            color: "#46a6b5"
          },
          top: "10%"
        },
        grid: {
          left: "1%",
          right: "4%",
          top: "20%",
          bottom: "10%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLabel: { color: "#46a6b5" }, // x轴字体颜色
          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          axisLabel: { color: "#46a6b5" }, // x轴字体颜色
          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          },
          splitLine: {
            lineStyle: {
              color: "rgba(70,166,181,0.5)"
            }
          }
        },
        series: [
          {
            name: "第1簇",
            type: "line",
            stack: "总量",
            data: [120, 300, 101, 134, 90, 230, 100],
            smooth: true,
            symbol: "none"
          },
          {
            name: "第2簇",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 500, 290, 330, 100],
            smooth: true,
            symbol: "none"
          },
          {
            name: "第3簇",
            type: "line",
            stack: "总量",
            data: [150, 232, 500, 300, 190, 330, 410],
            smooth: true,
            symbol: "none"
          }
        ]
      });
      setTimeout(function() {
        window.onresize = () => {
          myChart1.resize();
          myChart2.resize();
          myChart3.resize();
          myChart4.resize();
          myChart5.resize();
          myChart6.resize();
          myChart7.resize();
        };
      }, 200);
    }
  },
  created() {
    this.$nextTick(() => {
      this.getEcharts();
    });
  }
};
</script>

<style scoped>
section {
  padding-top: 5px;
}
.info-box {
  z-index: 9999;
  height: 100%;
  padding-top: 1%;
}
ul {
  height: 100%;
  width: 100%;
  overflow-y: auto;
}
li {
  border: rgba(70, 166, 181, 0.5) solid 1px;
  margin-bottom: 2px;
  padding: 2px 20px;
  color: #46a6b5;
}
/deep/.happy-scroll-container {
  height: 100% !important;
  width: 100% !important;
}
/deep/.happy-scroll-container .happy-scroll-content {
  width: 100%;
}
@media screen and (max-width: 1300px) {
  li p {
    font-size: 10px;
  }
}

@media screen and (min-width: 1300px) {
  li p {
    font-size: 12px;
  }
}

@media screen and (min-width: 1500px) {
  li p {
    font-size: 14px;
  }
}
</style>
