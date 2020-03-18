￿
<template>
  <div class="content">
    <section>
      <!-- 左边开始 -->
      <div class="content-left">
        <!-- 第一块开始 -->
        <BorderLeft class="box-l" title="系统电量统计">
          <div class="circle-box">
            <Semicircle
              color="#0071bc"
              :title="Installed_system_power.name"
              class="circle"
            >
              <div class="num">
                <p>{{ Installed_system_power.value }}</p>
              </div>
              <div class="units">
                <p>{{ Installed_system_power.unit }}</p>
              </div>
            </Semicircle>

            <Semicircle :title="SOC.name" class="circle">
              <p>{{ SOC.value }}</p>
            </Semicircle>

            <Semicircle
              color="#39b54a"
              :title="System_residual_power.name"
              class="circle"
            >
              <div class="num">
                <p>{{ System_residual_power.value }}</p>
              </div>
              <div class="units">
                <p>{{ System_residual_power.unit }}</p>
              </div>
            </Semicircle>
          </div>
        </BorderLeft>
        <!-- 第一块结束 -->
        <!-- 第二块开始 -->
        <BorderLeft
          class="box-l"
          :title="Current_power_trend_of_the_system.Name"
        >
          <div id="myChart1" class="charts"></div>
        </BorderLeft>
        <!-- 第二块结束 -->
        <!-- 第三块开始 -->
        <BorderLeft class="box-l" title="电量排行榜">
          <div class="energy-order">
            <div
              class="order-row"
              v-for="(item, index) in Electricity_leaderboard"
              :key="index"
            >
              <div class="row-l">
                <div class="num">
                  {{ index + 1 }}
                </div>
                {{ item.name }}
              </div>
              <div class="row-r">
                {{ item.value }}
                {{ item.unit }}
              </div>
            </div>
          </div>
        </BorderLeft>
        <!-- 第三块结束 -->
        <!-- 第四块开始 -->
        <BorderLeft
          class="box-l"
          :title="Charge_and_discharge_week_statistics.Name"
        >
          <div id="myChart2" class="charts"></div>
        </BorderLeft>
        <!-- 第四块结束 -->
      </div>
      <!-- 左边结束 -->
      <!-- 中间开始 -->
      <div class="content-center">
        <!-- 上半部分开始 -->
        <div class="box-c">
          <div class="img"></div>
        </div>
        <!-- 上半部分结束 -->
        <!-- 下半部分开始 -->
        <BorderMain class="box-c">
          <div class="bottom">
            <div class="bottom-l">
              <BorderBg :title="Peak_statistics.Name">
                <div id="myChart3" class="charts"></div>
              </BorderBg>
              <BorderBg style="margin-top:10px;" title="装机设备统计">
                <div class="device-count flex-column">
                  <div
                    class="device-row"
                    v-for="(item, index) in Installation_statistics"
                    :key="index"
                  >
                    <p class="row-l">
                      {{ item.name }}
                    </p>
                    <div class="row-r">
                      <p class="num">
                        {{ item.value }}
                      </p>
                      <p style="display:inline-block">
                        {{ item.unit }}
                      </p>
                    </div>
                  </div>
                </div>
              </BorderBg>
            </div>
            <div class="bottom-c"></div>
            <div class="bottom-r">
              <BorderBg :title="Peak_electricity_consumption_statistics.Name">
                <div id="myChart4" class="charts"></div>
              </BorderBg>
              <BorderBg
                style="margin-top:10px;"
                :title="Trend_of_charge_and_discharge.Name"
              >
                <div id="myChart5" class="charts"></div>
              </BorderBg>
            </div>
          </div>
        </BorderMain>
        <!-- 下半部分结束 -->
      </div>
      <!-- 中间结束 -->
      <!-- 右边开始 -->
      <div class="content-right">
        <!-- 第一块开始 -->
        <BorderRight class="box-r" :title="Dc_electrical_statistics.Name">
          <div id="myChart6" class="charts"></div>
        </BorderRight>
        <!-- 第一块结束 -->
        <!-- 第二块开始 -->
        <BorderRight
          class="box-r"
          :title="Monthly_energy_consumption_statistics.Name"
        >
          <div id="myChart7" class="charts"></div>
        </BorderRight>
        <!-- 第二块结束 -->
        <!-- 第三块开始 -->
        <BorderRight class="box-r" :title="Event_statistics.Name">
          <div id="myChart8" class="charts"></div>
        </BorderRight>
        <!-- 第三块结束 -->
        <!-- 第四块开始 -->
        <BorderRight
          class="box-r"
          :title="Time_distribution_of_electricity_consumption.Name"
        >
          <div id="myChart9" class="charts"></div>
        </BorderRight>
        <!-- 第四块结束 -->
      </div>
      <!-- 右边结束 -->
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interval: "",
      grid: {
        left: "6%",
        right: "8%",
        top: "30%",
        bottom: "10%",
        containLabel: true
      },
      yAxis: {
        type: "value",
        axisLabel: { color: "#46a6b5", fontSize: 12 }, // x轴字体颜色

        axisLine: {
          lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
        },
        splitLine: {
          show: false
        }
      },
      Installed_system_power: {},
      SOC: {},
      System_residual_power: {},
      Current_power_trend_of_the_system: {},
      Electricity_leaderboard: [],
      Charge_and_discharge_week_statistics: {},
      Dc_electrical_statistics: [],
      Monthly_energy_consumption_statistics: {},
      Peak_statistics: {},
      Installation_statistics: [],
      Peak_electricity_consumption_statistics: {},
      Trend_of_charge_and_discharge: {},
      Event_statistics: {},
      Time_distribution_of_electricity_consumption: {}
    };
  },
  methods: {
    getEcharts() {
      // 第一个图
      var myChart1 = this.$echarts.init(document.getElementById("myChart1"));
      myChart1.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        xAxis: {
          type: "category",
          data: this.Current_power_trend_of_the_system.XAxisData,
          axisLabel: { color: "#46a6b5", fontSize: 12 }, // x轴字体颜色
          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          }
        },
        yAxis: this.yAxis,
        grid: this.grid,
        series: [
          {
            data: this.Current_power_trend_of_the_system.SeriesData[0].data,
            type: "line",
            symbol: "triangle",
            name: this.Current_power_trend_of_the_system.SeriesData[0].name,
            symbolSize: 7,
            lineStyle: {
              color: "rgb(243, 128, 25)",
              width: 1
            },
            itemStyle: {
              color: "rgb(243, 128, 25)"
            }
          }
        ]
      });
      // 第二个图
      var myChart2 = this.$echarts.init(document.getElementById("myChart2"));
      myChart2.setOption({
        color: ["rgb(247,147,31)", "#3AB54B"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        xAxis: {
          type: "category",
          axisTick: { show: false },
          data: this.Charge_and_discharge_week_statistics.XAxisData,
          axisLabel: { color: "#46a6b5", fontSize: 12 }, // x轴字体颜色
          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          },
          splitLine: {
            show: false
          }
        },
        yAxis: this.yAxis,
        grid: this.grid,
        series: [
          {
            name: this.Charge_and_discharge_week_statistics.SeriesData[0].name,
            type: "bar",
            barGap: 0,
            data: this.Charge_and_discharge_week_statistics.SeriesData[0].data
            // label: {
            //   show: true,
            //   position: "insideBottom",
            //   // fontSize: "14px",
            //   // color: "rgba(58,181,75,0.5)"
            //   color: "#fff",
            //   verticalAlign: "middle",
            //   rotate: 90,
            //   distance: 15,
            //   align: "left"
            // }
          },
          {
            name: this.Charge_and_discharge_week_statistics.SeriesData[1].name,
            type: "bar",
            data: this.Charge_and_discharge_week_statistics.SeriesData[1].data
            // label: {
            //   show: true,
            //   position: "insideBottom",
            //   // fontSize: "14px",
            //   // color: "rgba(58,181,75,0.5)"
            //   color: "#fff",
            //   verticalAlign: "middle",
            //   rotate: 90,
            //   distance: 15,
            //   align: "left"
            // }
          }
        ]
      });
      // 第三个图
      var myChart3 = this.$echarts.init(document.getElementById("myChart3"));
      myChart3.setOption({
        color: "#84C739",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "0",
          right: "20%",
          top: "20%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          splitLine: {
            show: false
          },
          show: false
        },
        yAxis: {
          type: "category",
          data: this.Peak_statistics.XAxisData,
          axisLabel: { color: "#46a6b5", fontSize: 12 }, // x轴字体颜色
          axisLine: {
            show: false
          },
          axisTick: {
            //y轴刻度线
            show: false
          }
        },
        series: [
          {
            name: this.Peak_statistics.SeriesData[0].name,
            type: "bar",
            label: {
              show: true,
              position: "right",
              color: "#46a6b5",
              fontSize: "12px"
            },
            data: this.Peak_statistics.SeriesData[0].data
          }
        ]
      });
      // 第四个图
      var myChart4 = this.$echarts.init(document.getElementById("myChart4"));
      myChart4.setOption({
        color: "#F7931F",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "0",
          right: "20%",
          top: "20%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          splitLine: {
            show: false
          },
          show: false
        },
        yAxis: {
          type: "category",
          data: this.Peak_electricity_consumption_statistics.XAxisData,
          axisLabel: { color: "#46a6b5", fontSize: 12 }, // x轴字体颜色
          axisLine: {
            show: false
          },
          axisTick: {
            //y轴刻度线
            show: false
          }
        },
        series: [
          {
            name: this.Peak_electricity_consumption_statistics.SeriesData[0]
              .name,
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "right",
              color: "#46a6b5",
              fontSize: "12px"
            },
            data: this.Peak_electricity_consumption_statistics.SeriesData[0]
              .data
          }
        ]
      });
      // 第五个图
      var myChart5 = this.$echarts.init(document.getElementById("myChart5"));
      myChart5.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        xAxis: {
          type: "category",
          data: this.Trend_of_charge_and_discharge.XAxisData,
          axisLabel: { color: "#46a6b5", fontSize: 12 }, // x轴字体颜色
          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          }
        },
        yAxis: this.yAxis,
        grid: {
          left: "0",
          right: "4%",
          top: "20%",
          bottom: "10%",
          containLabel: true
        },
        series: [
          {
            data: this.Trend_of_charge_and_discharge.SeriesData[0].data,
            name: this.Trend_of_charge_and_discharge.SeriesData[0].name,
            type: "line",
            symbol: "triangle",
            symbolSize: 7,
            lineStyle: {
              color: "rgb(243, 128, 25)",
              width: 1
            },
            itemStyle: {
              color: "rgb(243, 128, 25)"
            }
          },
          {
            data: this.Trend_of_charge_and_discharge.SeriesData[1].data,
            name: this.Trend_of_charge_and_discharge.SeriesData[1].name,
            type: "line",
            symbol: "triangle",
            symbolSize: 7,
            lineStyle: {
              color: "#36AA49",
              width: 1
            },
            itemStyle: {
              color: "#36AA49"
            }
          }
        ]
      });
      // 第六个图
      var myChart6 = this.$echarts.init(document.getElementById("myChart6"));
      myChart6.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        xAxis: {
          type: "category",
          data: this.Dc_electrical_statistics.XAxisData,
          axisLabel: { color: "#46a6b5", fontSize: 12 }, // x轴字体颜色

          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          }
        },
        yAxis: this.yAxis,
        grid: this.grid,
        series: [
          {
            data: this.Dc_electrical_statistics.SeriesData[0].data,
            type: "line",
            name: this.Dc_electrical_statistics.SeriesData[0].name,
            stack: this.Dc_electrical_statistics.SeriesData[0].stack,
            symbol: "triangle",
            symbolSize: 7,
            lineStyle: {
              color: "rgb(243, 128, 25)",
              width: 1
            },
            itemStyle: {
              color: "rgb(243, 128, 25)"
            }
          },
          {
            data: this.Dc_electrical_statistics.SeriesData[1].data,
            type: "line",
            name: this.Dc_electrical_statistics.SeriesData[1].name,
            stack: this.Dc_electrical_statistics.SeriesData[1].stack,
            symbol: "triangle",
            symbolSize: 7,
            lineStyle: {
              color: "#36AA49",
              width: 1
            },
            itemStyle: {
              color: "#36AA49"
            }
          },
          {
            data: this.Dc_electrical_statistics.SeriesData[2].data,
            type: "line",
            name: this.Dc_electrical_statistics.SeriesData[2].name,
            stack: this.Dc_electrical_statistics.SeriesData[2].stack,
            symbol: "triangle",
            symbolSize: 7,
            lineStyle: {
              color: "#ED1E7A",
              width: 1
            },
            itemStyle: {
              color: "#ED1E7A"
            }
          }
        ]
      });
      // 第七个图
      var myChart7 = this.$echarts.init(document.getElementById("myChart7"));
      myChart7.setOption({
        color: ["rgb(247,147,31)", "#3AB54B"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        xAxis: {
          type: "category",
          axisTick: { show: false },
          data: this.Monthly_energy_consumption_statistics.XAxisData,
          axisLabel: { color: "#46a6b5", fontSize: 12 }, // x轴字体颜色
          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          },
          splitLine: {
            show: false
          }
        },
        yAxis: this.yAxis,
        grid: this.grid,
        series: [
          {
            name: this.Monthly_energy_consumption_statistics.SeriesData[0].name,
            type: "bar",
            barGap: 0,
            data: this.Monthly_energy_consumption_statistics.SeriesData[0].data
            // label: {
            //   show: true,
            //   position: "insideBottom",
            //   // fontSize: "14px",
            //   // color: "rgba(58,181,75,0.5)"
            //   color: "#fff",
            //   verticalAlign: "middle",
            //   rotate: 90,
            //   distance: 15,
            //   align: "left"
            // }
          },
          {
            name: this.Monthly_energy_consumption_statistics.SeriesData[1].name,
            type: "bar",
            data: this.Monthly_energy_consumption_statistics.SeriesData[1].data
            // label: {
            //   show: true,
            //   position: "insideBottom",
            //   // fontSize: "14px",
            //   // color: "rgba(58,181,75,0.5)"
            //   color: "#fff",
            //   verticalAlign: "middle",
            //   rotate: 90,
            //   distance: 15,
            //   align: "left"
            // }
          }
        ]
      });
      // 第八个图
      var myChart8 = this.$echarts.init(document.getElementById("myChart8"));
      myChart8.setOption({
        radar: {
          // shape: 'circle',
          center: ["50%", "50%"],
          // 圆中心坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
          radius: "50%",
          name: {
            textStyle: {
              color: "#46a6b5",
              // fontSize: "14px",
              padding: [3, 5]
            }
          },
          indicator: this.Event_statistics.IndicatorList,
          // [{ name: this.Event_statistics.IndicatorList[0].Name, max: this.Event_statistics.IndicatorList.Max },],
          splitArea: {
            show: false
          },
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
            name: this.Event_statistics.Datas[0].name,
            type: "radar",
            // areaStyle: {normal: {}},
            data: [{ value: this.Event_statistics.Datas[0].values }],
            itemStyle: {
              color: "#B3E4A1"
            },
            symbol: "none",
            areaStyle: {
              opacity: 0.05
            },
            lineStyle: {
              normal: {
                width: 1,
                opacity: 1
              }
            }
          }
        ],
        tooltip: {},
        grid: this.grid
      });
      // 第九个图
      var myChart9 = this.$echarts.init(document.getElementById("myChart9"));
      myChart9.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            type: "pie",
            name: this.Time_distribution_of_electricity_consumption.Name,
            radius: "55%",
            center: ["50%", "60%"],
            data: this.Time_distribution_of_electricity_consumption.Datas,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            label: {
              color: "#46a6b5"
              // fontSize: "14px"
            },
            labelLine: {
              lineStyle: {
                color: "#46a6b5"
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            }
          }
        ]
        // color: ["#549D6B", "#F5AE52", "#CACACA", "#6ABFBC", "#E7E67E"]
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
          myChart8.resize();
          myChart9.resize();
        };
      }, 200);
    },
    getData() {
      var url = "/api/Statement/GetSystemPage?SystemToken=0";
      this.$axios
        .get(url)
        .then(res => {
          if (res.data.code === 0) {
            var data = res.data.data;
            this.Installed_system_power = data.Installed_system_power;
            this.SOC = data.SOC;
            this.System_residual_power = data.System_residual_power;
            this.Current_power_trend_of_the_system =
              data.Current_power_trend_of_the_system;
            this.Electricity_leaderboard = data.Electricity_leaderboard;
            this.Charge_and_discharge_week_statistics =
              data.Charge_and_discharge_week_statistics;
            this.Dc_electrical_statistics = data.Dc_electrical_statistics;
            this.Monthly_energy_consumption_statistics =
              data.Monthly_energy_consumption_statistics;
            this.Peak_statistics = data.Peak_statistics;
            this.Installation_statistics = data.Installation_statistics;
            this.Peak_electricity_consumption_statistics =
              data.Peak_electricity_consumption_statistics;
            this.Trend_of_charge_and_discharge =
              data.Trend_of_charge_and_discharge;
            this.Event_statistics = data.Event_statistics;
            this.Time_distribution_of_electricity_consumption =
              data.Time_distribution_of_electricity_consumption;
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
  created() {
    this.getData();
  }
};
</script>

<style scoped>
section {
  height: 100%;
  display: flex;
}

.content-left,
.content-right {
  flex: 1;
}

.content-center {
  flex: 2;
  /* margin: 0 10px; */
}

.content-left,
.content-right,
.content-center {
  display: flex;
  flex-direction: column;
}

.box-l,
.box-r {
  flex: 1;
  margin-top: 10px;
  /* min-height: 0; */
}

.box-c {
  flex: 1;
}

.box-c .img {
  height: 100%;
  width: 100%;
  background: url("../assets/img/home_system_diagram.png") center no-repeat;
  background-size: contain;
}

.bottom {
  height: 100%;
  display: flex;
}

.bottom-l,
.bottom-r {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.bottom-c {
  flex: 2;
  background: url("../assets/img/home_container.gif") center no-repeat;
  background-size: contain;
}

border-bg {
  flex: 1;
}

/* 排行榜 */
.order-row .row-l .num {
  /*width: 18px;*/
  /*height: 18px;*/
  /*line-height: 18px;*/
  border-radius: 50%;
  color: #fff;
  background-color: #46a6b5;
  display: inline-block;
  text-align: center;
  margin-right: 5px;
}

.energy-order {
  font-size: 16px;
  padding: 5vh 5vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.order-row {
  display: flex;
  justify-content: space-between;
  margin: 0;
  color: #46a6b5;
}

.order-row .row-l,
.order-row .row-r {
  flex: 1;
}

.order-row .row-l {
  text-align: left;
}

.order-row .row-r {
  text-align: right;
}

/* 设备统计 */
.device-count {
  justify-content: center;
  height: 100%;
  margin-top: 5px;
}

.device-row {
  display: flex;
  justify-content: space-between;
  color: #46a6b5;
  margin-top: calc(1vh - 3px);
}

.device-row .row-r .num {
  display: inline-block;
  width: 35px;
  color: #f59b23;
}

/* 左一 */
.circle-box {
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  /* padding: 5vh 20px; */
}

.circle-box .circle {
  flex: 1;
}

@media screen and (max-width: 1300px) {
  .order-row .row-l .num {
    width: 12px;
    height: 12px;
    line-height: 12px;
    font-size: 10px;
  }

  .energy-order {
    font-size: 10px;
    padding: 0 10px;
  }

  .device-row {
    font-size: 12px;
  }

  .circle-box .circle .num {
    font-size: 14px;
  }

  .circle-box .circle .units {
    font-size: 10px;
  }
}

@media screen and (min-width: 1300px) {
  .order-row .row-l .num {
    width: 14px;
    height: 14px;
    line-height: 14px;
    font-size: 10px;
  }

  .energy-order {
    font-size: 12px;
    padding: 0 20px;
  }

  .device-row {
    font-size: 12px;
  }

  .circle-box .circle .num {
    font-size: 16px;
  }

  .circle-box .circle .units {
    font-size: 12px;
  }
}

@media screen and (min-width: 1500px) {
  .order-row .row-l .num {
    width: 16px;
    height: 16px;
    line-height: 16px;
    font-size: 12px;
  }

  .energy-order {
    font-size: 16px;
    padding: 0 30px;
  }

  .device-row {
    font-size: 16px;
  }

  .circle-box .circle .num {
    font-size: 18px;
  }

  .circle-box .circle .units {
    font-size: 14px;
  }
}
</style>
