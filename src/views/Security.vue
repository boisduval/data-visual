<template>
  <div class="content">
    <section class="flex-row">
      <div class="flex">
        <Nav></Nav>
      </div>
      <div class="flex7 flex-column">
        <div class="flex">
          <SecurityBorderTop>
            <div class="flex-row" style="height: 100%">
              <div class="flex" style="padding-right: 8px;">
                <SecurityInfo title="警告次数汇总" value="3456"></SecurityInfo>
              </div>
              <div class="flex" style="padding-right: 8px;">
                <SecurityInfo
                  type="protect"
                  title="保护次数汇总"
                  value="2461"
                  bg-color="#F59B23"
                ></SecurityInfo>
              </div>
              <div class="flex" style="padding-right: 8px;">
                <SecurityInfo
                  type="close"
                  title="停机次数汇总"
                  value="1234"
                  bg-color="#00A7F0"
                ></SecurityInfo>
              </div>
              <div class="flex" style="padding-right: 8px;">
                <SecurityInfo
                  type="safe"
                  title="安全指数"
                  value="100%"
                  bg-color="#8500FF"
                ></SecurityInfo>
              </div>
              <div class="flex" style="padding-right: 8px;">
                <SecurityInfo
                  type="warning"
                  title="当日告警次数"
                  value="0"
                  bg-color="#8081FF"
                ></SecurityInfo>
              </div>
              <div class="flex" style="padding-right: 8px;">
                <SecurityInfo
                  type="protect"
                  title="当日保护次数"
                  value="12"
                  bg-color="#EC808E"
                ></SecurityInfo>
              </div>
              <div class="flex" style="padding-right: 8px;">
                <SecurityInfo
                  type="close"
                  title="当日停机次数"
                  value="5"
                  bg-color="#82D4F8"
                ></SecurityInfo>
              </div>
            </div>
          </SecurityBorderTop>
        </div>
        <div class="flex3 flex-row">
          <div class="flex">
            <SecurityBorderMain>
              <div id="myChart1" class="charts"></div>
            </SecurityBorderMain>
          </div>
          <div class="flex">
            <SecurityBorderMain>
              <div id="myChart2" class="charts"></div>
            </SecurityBorderMain>
          </div>
        </div>
        <div class="flex3 flex-row">
          <div class="flex">
            <SecurityBorderMain>
              <div class="flex-row" style="height: 100%">
                <div class="flex" style="margin-right: 2px;">
                  <SecurityBg title="分类统计">
                    <div id="myChart3" class="charts"></div>
                  </SecurityBg>
                </div>
                <div class="flex">
                  <SecurityBg>
                    <div class="info-box">
                      <happy-scroll
                        color="rgba(0,0,0,0.5)"
                        size="8"
                        resize
                        hide-horizontal
                      >
                        <ul>
                          <li
                            class="flex-row"
                            style="justify-content: space-between"
                          >
                            <p class="num">序号</p>
                            <p class="flex">安全信息</p>
                            <p class="time">发生时间</p>
                          </li>
                          <li
                            v-for="(item, index) in infos"
                            :key="index"
                            class="flex-row"
                            style="justify-content: space-between"
                          >
                            <p class="num">000{{ index + 1 }}</p>
                            <p class="flex">{{ item.content }}</p>
                            <p class="time">{{ item.time }}</p>
                          </li>
                        </ul>
                      </happy-scroll>
                    </div>
                  </SecurityBg>
                </div>
              </div>
            </SecurityBorderMain>
          </div>
          <div class="flex">
            <SecurityBorderMain>
              <div class="flex-row" style="height: 100%">
                <div class="flex" style="margin-right: 2px;">
                  <SecurityBg title="告警top榜">
                    <div id="myChart4" class="charts"></div>
                  </SecurityBg>
                </div>
                <div class="flex">
                  <SecurityBg title="停机top榜">
                    <div id="myChart5" class="charts"></div>
                  </SecurityBg>
                </div>
              </div>
            </SecurityBorderMain>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    getEcharts() {
      // 第一个图
      var myChart1 = this.$echarts.init(document.getElementById("myChart1"));
      myChart1.setOption({
        color: ["#F7931E", "#D4155A"],
        legend: {
          data: ["警告", "停机"],
          textStyle: {
            color: "#46a6b5"
          },
          top: "5%"
        },
        grid: {
          left: "1%",
          right: "4%",
          top: "20%",
          bottom: "5%",
          containLabel: true
        },
        tooltip: {},
        dataset: {
          source: [
            ["product", "警告", "停机"],
            ["01", 43.3, 85.8],
            ["02", 83.1, 73.4],
            ["03", 86.4, 65.2],
            ["04", 72.4, 53.9],
            ["05", 72.4, 53.9],
            ["06", 72.4, 53.9],
            ["07", 43.3, 85.8],
            ["08", 83.1, 73.4],
            ["09", 86.4, 65.2],
            ["10", 72.4, 53.9],
            ["11", 72.4, 53.9],
            ["12", 72.4, 53.9]
          ]
        },
        xAxis: {
          type: "category",
          axisLabel: { color: "#46a6b5" }, // x轴字体颜色
          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          axisLabel: { color: "#46a6b5" }, // x轴字体颜色
          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          },
          splitLine: {
            // lineStyle: {
            //   color: "rgba(70,166,181,0.5)"
            // }
            show: false
          }
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          { type: "bar", barCategoryGap: "40%" },
          { type: "bar", barCategoryGap: "40%" }
        ]
      });
      // 第二个图
      var myChart2 = this.$echarts.init(document.getElementById("myChart2"));
      myChart2.setOption({
        color: ["#F7931E", "#D4155A"],
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["警告", "停机"],
          textStyle: {
            color: "#46a6b5"
          },
          top: "5%"
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
            // lineStyle: {
            //   color: "rgba(70,166,181,0.5)"
            // }
            show: false
          }
        },
        series: [
          {
            name: "警告",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
            smooth: true,
            symbol: "none"
          },
          {
            name: "停机",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
            smooth: true,
            symbol: "none"
          }
        ]
      });
      // 第三个图
      var myChart3 = this.$echarts.init(document.getElementById("myChart3"));
      myChart3.setOption({
        color: ["#F7931F", "#FF0100"],
        tooltip: {},
        legend: {
          data: ["停机情况", "告警情况"],
          textStyle: {
            color: "#46a6b5"
          },
          top: "15%",
          orient: "vertical",
          left: "5%",
          itemWidth: 20,
          itemHeight: 5
        },
        radar: {
          indicator: [
            { name: "数据一", max: 6500 },
            { name: "数据二", max: 16000 },
            { name: "数据三", max: 30000 },
            { name: "数据四", max: 38000 },
            { name: "数据五", max: 52000 }
          ],
          splitArea: {
            areaStyle: {
              color: [
                "rgba(147, 39, 143, 0.6)",
                "rgba(237, 30, 121, 0.6)",
                "rgba(0, 103, 188, 0.6)",
                "rgba(34, 181, 115, 0.6)",
                "rgba(76, 191, 191, 0.6)"
              ],
              shadowColor: "rgba(0, 0, 0, 0.6)",
              shadowBlur: 10
            }
          },
          radius: "70%",
          center: ["50%", "60%"],
          axisLine: {
            lineStyle: {
              color: "rgba(179, 228, 161, 0.5)"
            }
          },
          splitLine: {
            lineStyle: {
              color: [
                "rgba(179, 228, 161, 0.1)",
                "rgba(179, 228, 161, 0.2)",
                "rgba(179, 228, 161, 0.4)",
                "rgba(179, 228, 161, 0.6)",
                "rgba(179, 228, 161, 0.8)",
                "rgba(179, 228, 161, 1)"
              ].reverse()
            }
          }
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            // areaStyle: {normal: {}}
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: "停机情况"
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: "告警情况"
              }
            ]
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
        grid: {
          left: "3%",
          right: "4%",
          bottom: "8%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          axisLabel: { color: "#46a6b5" }, // x轴字体颜色
          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          },
          splitLine: {
            // lineStyle: {
            //   color: "rgba(70,166,181,0.5)"
            // }
            show: false
          }
        },
        yAxis: {
          type: "category",
          data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          axisLabel: { color: "#46a6b5" }, // x轴字体颜色
          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          },
          splitLine: {
            // lineStyle: {
            //   color: "rgba(70,166,181,0.5)"
            // }
            show: false
          }
        },
        series: [
          {
            name: "直接访问",
            type: "bar",
            stack: "总量",
            data: [320, 302, 301, 334, 390, 330, 320, 390, 330, 320, 200],
            color: "#F7931F",
            barCategoryGap: "40%"
          }
        ]
      });
      // 第五个图
      var myChart5 = this.$echarts.init(document.getElementById("myChart5"));
      myChart5.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "8%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          axisLabel: { color: "#46a6b5" }, // x轴字体颜色
          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          },
          splitLine: {
            // lineStyle: {
            //   color: "rgba(70,166,181,0.5)"
            // }
            show: false
          }
        },
        yAxis: {
          type: "category",
          data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          axisLabel: { color: "#46a6b5" }, // x轴字体颜色
          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          },
          splitLine: {
            // lineStyle: {
            //   color: "rgba(70,166,181,0.5)"
            // }
            show: false
          }
        },
        series: [
          {
            name: "直接访问",
            type: "bar",
            stack: "总量",
            data: [320, 302, 301, 334, 390, 330, 320, 390, 330, 320, 200],
            color: "#ED1E7A",
            barCategoryGap: "40%"
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
        };
      }, 200);
    }
  },
  created() {
    this.$nextTick(() => {
      this.getEcharts();
    });
  },
  data() {
    return {
      infos: [
        {
          content: "风机故障",
          time: "2020-03-10 12:00"
        },
        {
          content: "风机故障",
          time: "2020-03-10 12:00"
        },
        {
          content: "风机故障",
          time: "2020-03-10 12:00"
        },
        {
          content: "风机故障",
          time: "2020-03-10 12:00"
        },
        {
          content: "风机故障",
          time: "2020-03-10 12:00"
        },
        {
          content: "风机故障",
          time: "2020-03-10 12:00"
        },
        {
          content: "风机故障",
          time: "2020-03-10 12:00"
        },
        {
          content: "风机故障",
          time: "2020-03-10 12:00"
        },
        {
          content: "风机故障",
          time: "2020-03-10 12:00"
        },
        {
          content: "风机故障",
          time: "2020-03-10 12:00"
        },
        {
          content: "风机故障",
          time: "2020-03-10 12:00"
        },
        {
          content: "风机故障",
          time: "2020-03-10 12:00"
        }
      ]
    };
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
  padding: 5% 0;
}
ul {
  height: 100%;
  width: 100%;
  overflow-y: auto;
}
li {
  border: rgba(70, 166, 181, 0.5) solid 1px;
  margin-bottom: 2px;
  padding: 2px 10px;
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
  li .num {
    width: 30px;
  }
  li .time {
    width: 110px;
  }
}

@media screen and (min-width: 1300px) {
  li p {
    font-size: 12px;
  }
  li .num {
    width: 35px;
  }
  li .time {
    width: 110px;
  }
}

@media screen and (min-width: 1500px) {
  li p {
    font-size: 14px;
  }
  li .num {
    width: 50px;
  }
  li .time {
    width: 120px;
  }
}
</style>
