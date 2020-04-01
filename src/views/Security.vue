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
                <SecurityInfo
                  :title="SummaryOfWarningTimes.name"
                  :value="SummaryOfWarningTimes.value"
                  v-if="SummaryOfWarningTimes"
                ></SecurityInfo>
              </div>
              <div class="flex" style="padding-right: 8px;">
                <SecurityInfo
                  type="protect"
                  :title="ProtectionTimesSummary.name"
                  :value="ProtectionTimesSummary.value"
                  v-if="ProtectionTimesSummary"
                  bg-color="#F59B23"
                ></SecurityInfo>
              </div>
              <div class="flex" style="padding-right: 8px;">
                <SecurityInfo
                  type="close"
                  :title="SummaryOfStoppingTimes.name"
                  :value="SummaryOfStoppingTimes.value"
                  v-if="SummaryOfStoppingTimes"
                  bg-color="#00A7F0"
                ></SecurityInfo>
              </div>
              <div class="flex" style="padding-right: 8px;">
                <SecurityInfo
                  type="safe"
                  :title="SafetyIndex.name"
                  :value="SafetyIndex.value"
                  v-if="SafetyIndex"
                  bg-color="#8500FF"
                ></SecurityInfo>
              </div>
              <div class="flex" style="padding-right: 8px;">
                <SecurityInfo
                  type="warning"
                  :title="NumberOfAlarmsOnThatDay.name"
                  :value="NumberOfAlarmsOnThatDay.value"
                  v-if="NumberOfAlarmsOnThatDay"
                  bg-color="#8081FF"
                ></SecurityInfo>
              </div>
              <div class="flex" style="padding-right: 8px;">
                <SecurityInfo
                  type="protect"
                  :title="ProtectionTimesOfTheDay.name"
                  :value="ProtectionTimesOfTheDay.value"
                  v-if="ProtectionTimesOfTheDay"
                  bg-color="#EC808E"
                ></SecurityInfo>
              </div>
              <div class="flex" style="padding-right: 8px;">
                <SecurityInfo
                  type="close"
                  :title="NumberOfDailyShutdowns.name"
                  v-if="NumberOfDailyShutdowns"
                  :value="NumberOfDailyShutdowns.value"
                  bg-color="#82D4F8"
                ></SecurityInfo>
              </div>
            </div>
          </SecurityBorderTop>
        </div>
        <div class="flex3 flex-row">
          <div class="flex">
            <SecurityBorderMain :title="MonthlyWarningShutdown.Name">
              <div id="myChart1" class="charts"></div>
            </SecurityBorderMain>
          </div>
          <div class="flex">
            <SecurityBorderMain :title="AlarmShutdownTrend.Name">
              <div id="myChart2" class="charts"></div>
            </SecurityBorderMain>
          </div>
        </div>
        <div class="flex3 flex-row">
          <div class="flex">
            <SecurityBorderMain>
              <div class="flex-row" style="height: 100%">
                <div class="flex" style="margin-right: 2px;">
                  <SecurityBg :title="ClassifiedStatistic.Name">
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
                            v-for="(val, key) in TheAlarmList.valueUnits"
                            :key="key"
                            class="flex-row"
                            style="justify-content: space-between"
                          >
                            <p class="num">{{ val.name }}</p>
                            <p class="flex">
                              {{ val.value.value }}{{ val.value.unit }}
                            </p>
                            <p class="time">
                              {{ val.position.value + " "
                              }}{{ val.position.unit }}
                            </p>
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
                  <SecurityBg :title="TheAlarmListOfTheTop.Name">
                    <div id="myChart4" class="charts"></div>
                  </SecurityBg>
                </div>
                <div class="flex">
                  <SecurityBg :title="DownOnTheTopList.Name">
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
import { mapState } from "vuex";

export default {
  methods: {
    getEcharts() {
      // 第一个图
      var myChart1 = this.$echarts.init(document.getElementById("myChart1"));
      myChart1.setOption({
        color: ["#F7931E", "#D4155A"],
        legend: {
          data: [
            this.MonthlyWarningShutdown.SeriesData[0].name,
            this.MonthlyWarningShutdown.SeriesData[1].name
          ],
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
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        series: [
          {
            name: this.MonthlyWarningShutdown.SeriesData[0].name,
            type: "bar",
            stack: this.MonthlyWarningShutdown.SeriesData[0].stack,
            data: this.MonthlyWarningShutdown.SeriesData[0].data,
            barCategoryGap: "40%"
          },
          {
            name: this.MonthlyWarningShutdown.SeriesData[1].name,
            type: "bar",
            stack: this.MonthlyWarningShutdown.SeriesData[1].stack,
            data: this.MonthlyWarningShutdown.SeriesData[1].data,
            barCategoryGap: "40%"
          }
        ],
        xAxis: {
          type: "category",
          axisLabel: { color: "#46a6b5" }, // x轴字体颜色
          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          },
          splitLine: {
            show: false
          },
          data: this.MonthlyWarningShutdown.XAxisData
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
        }
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
      });
      // 第二个图
      var myChart2 = this.$echarts.init(document.getElementById("myChart2"));
      myChart2.setOption({
        color: ["#F7931E", "#D4155A"],
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: [
            this.AlarmShutdownTrend.SeriesData[0].name,
            this.AlarmShutdownTrend.SeriesData[1].name
          ],
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
          data: this.AlarmShutdownTrend.XAxisData,
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
            name: this.AlarmShutdownTrend.SeriesData[0].name,
            type: "line",
            stack: this.AlarmShutdownTrend.SeriesData[0].stack,
            data: this.AlarmShutdownTrend.SeriesData[0].data,
            smooth: true,
            symbol: "none"
          },
          {
            name: this.AlarmShutdownTrend.SeriesData[1].name,
            type: "line",
            stack: this.AlarmShutdownTrend.SeriesData[1].stack,
            data: this.AlarmShutdownTrend.SeriesData[1].data,
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
          data: [
            this.ClassifiedStatistic.Datas[0].name,
            this.ClassifiedStatistic.Datas[1].name
          ],
          textStyle: {
            color: "#46a6b5"
          },
          top: "10%",
          orient: "vertical",
          left: "5%",
          itemWidth: 20,
          itemHeight: 5
        },
        radar: {
          indicator: this.ClassifiedStatistic.IndicatorList,
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
          radius: "50%",
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
            type: "radar",
            // areaStyle: {normal: {}}
            data: [
              {
                value: this.ClassifiedStatistic.Datas[0].values,
                name: this.ClassifiedStatistic.Datas[0].name
              },
              {
                value: this.ClassifiedStatistic.Datas[1].values,
                name: this.ClassifiedStatistic.Datas[1].name
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
          right: "6%",
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
          data: this.TheAlarmListOfTheTop.XAxisData,
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
            color: "#F7931F",
            barCategoryGap: "40%",
            name: this.TheAlarmListOfTheTop.SeriesData[0].name,
            type: "bar",
            stack: this.TheAlarmListOfTheTop.SeriesData[0].stack,
            data: this.TheAlarmListOfTheTop.SeriesData[0].data
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
          right: "6%",
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
          data: this.DownOnTheTopList.XAxisData,
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
            name: this.DownOnTheTopList.SeriesData[0].name,
            type: "bar",
            stack: this.DownOnTheTopList.SeriesData[0].stack,
            data: this.DownOnTheTopList.SeriesData[0].data,
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
    },
    getData() {
      let url = `/api/Statement/GetSystemSafety?SystemToken=0&DeviceSystemID=${this.currentDevice.SystemID}`;
      this.$axios
        .get(url)
        .then(res => {
          if (res.data.code === 0) {
            let data = res.data.data;
            this.SummaryOfWarningTimes = data.SummaryOfWarningTimes;
            this.ProtectionTimesSummary = data.ProtectionTimesSummary;
            this.SummaryOfStoppingTimes = data.SummaryOfStoppingTimes;
            this.SafetyIndex = data.SafetyIndex;
            this.NumberOfAlarmsOnThatDay = data.NumberOfAlarmsOnThatDay;
            this.ProtectionTimesOfTheDay = data.ProtectionTimesOfTheDay;
            this.NumberOfDailyShutdowns = data.NumberOfDailyShutdowns;
            this.MonthlyWarningShutdown = data.MonthlyWarningShutdown;
            this.ClassifiedStatistic = data.ClassifiedStatistic;
            this.TheAlarmList = data.TheAlarmList;
            this.AlarmShutdownTrend = data.AlarmShutdownTrend;
            this.TheAlarmListOfTheTop = data.TheAlarmListOfTheTop;
            this.DownOnTheTopList = data.DownOnTheTopList;
            this.$nextTick(() => {
              this.getEcharts();
            });
          }
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.error(err);
        });
    }
  },
  data() {
    return {
      SummaryOfWarningTimes: "",
      ProtectionTimesSummary: "",
      SummaryOfStoppingTimes: "",
      SafetyIndex: "",
      NumberOfAlarmsOnThatDay: "",
      ProtectionTimesOfTheDay: "",
      NumberOfDailyShutdowns: "",
      MonthlyWarningShutdown: "",
      ClassifiedStatistic: "",
      TheAlarmList: "",
      AlarmShutdownTrend: "",
      TheAlarmListOfTheTop: "",
      DownOnTheTopList: ""
    };
  },
  computed: {
    ...mapState("nav", ["currentDevice"])
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
    width: 125px;
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
    width: 140px;
  }
}
</style>
