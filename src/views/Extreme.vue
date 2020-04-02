<template>
  <div class="content">
    <section class="flex-row">
      <div class="flex">
        <Nav></Nav>
      </div>
      <div class="flex7 flex-row">
        <div class="flex2 flex-column">
          <div class="flex">
            <ExtremeBorderMainLonger :title="TotalElectricityStatistics.Name">
              <div id="myChart1" class="charts"></div>
            </ExtremeBorderMainLonger>
          </div>
          <div class="flex">
            <ExtremeBorderMainLonger>
              <div class="flex-column" style="height: 100%">
                <div class="flex">
                  <ExtremeBgBigger
                    :title="MonomerHighLowDatas.totalname"
                    v-if="MonomerHighLowDatas"
                  >
                    <div id="myChart2" class="charts"></div>
                  </ExtremeBgBigger>
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
                      :title1="EnvironmentTemp.name"
                      :title2="MonomerAverageVoltage.name"
                      :title3="ClusterAverageVoltage.name"
                      :value1="EnvironmentTemp.value + EnvironmentTemp.unit"
                      :value2="
                        MonomerAverageVoltage.value + MonomerAverageVoltage.unit
                      "
                      :value3="
                        ClusterAverageVoltage.value + ClusterAverageVoltage.unit
                      "
                    ></ExtremeInfo>
                  </div>
                  <div class="flex info-box">
                    <ul>
                      <li
                        v-for="(val, key) in EachClusterInformation.valueUnits"
                        :key="key"
                        class="flex-row"
                        style="justify-content: space-between"
                      >
                        <p style="width: 50px">{{ val.name }}</p>
                        <p style="width: 120px">
                          {{ val.value.unit }}{{ val.value.value }}
                        </p>
                        <p>{{ val.position.unit }}{{ val.position.value }}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </ExtremeBorderMain>
            </div>
            <div class="flex">
              <ExtremeBorderRight :title="InsulationExtremum.Name">
                <div id="myChart4" class="charts"></div>
              </ExtremeBorderRight>
            </div>
          </div>
          <div class="flex">
            <ExtremeBorderRightLonger>
              <div class="flex-row" style="height: 100%">
                <div class="flex flex-column" style="margin-right: 2px;">
                  <div class="flex" style="margin-bottom: 2px;">
                    <ExtremeBgSquare
                      :title="MonomerMaximumVoltage.Name"
                      v-if="MonomerMaximumVoltage"
                    >
                      <div id="myChart5" class="charts"></div>
                    </ExtremeBgSquare>
                  </div>
                  <div class="flex">
                    <ExtremeBgSquare
                      :title="MonomerMinimumVoltage.Name"
                      v-if="MonomerMinimumVoltage"
                    >
                      <div id="myChart6" class="charts"></div>
                    </ExtremeBgSquare>
                  </div>
                </div>
                <div class="flex3">
                  <ExtremeBgBigger :title="SingleDifferentialPressure.Name">
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
import { mapState } from "vuex";
export default {
  components: { ExtremeInfo },
  data() {
    return {
      seriesLabel: {
        normal: {
          show: true
        }
      },
      TotalElectricityStatistics: "",
      MonomerHighLowPressure: "",
      EnvironmentTemp: {
        name: "",
        value: "",
        unit: ""
      },
      MonomerAverageVoltage: {
        name: "",
        value: "",
        unit: ""
      },
      ClusterAverageVoltage: {
        name: "",
        value: "",
        unit: ""
      },
      EachClusterInformation: "",
      InsulationExtremum: "",
      MonomerMaximumVoltage: "",
      MonomerMinimumVoltage: "",
      SingleDifferentialPressure: "",
      MonomerHighLowDatas: ""
    };
  },
  computed: {
    ...mapState("nav", ["currentDevice"])
  },
  methods: {
    getEcharts() {
      // 第一个图
      var myChart1 = this.$echarts.init(document.getElementById("myChart1"));
      myChart1.setOption({
        // color: ["#51D0AB", "#F7931E", "#D4155A"],
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: this.TotalElectricityStatistics.legend,
          textStyle: {
            color: "#46a6b5"
          },
          top: "10%",
          type: "scroll"
        },
        grid: {
          left: "1%",
          right: "6%",
          top: "20%",
          bottom: "5%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.TotalElectricityStatistics.XAxisData,
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
          },
          min: this.TotalElectricityStatistics.YAxisMin,
          max: this.TotalElectricityStatistics.YAxisMax
        },
        series: this.TotalElectricityStatistics.series
      });
      // 第二个图
      var myChart2 = this.$echarts.init(document.getElementById("myChart2"));
      myChart2.setOption({
        tooltip: {
          type: "item",
          formatter: function(param) {
            let str =
              param.data[4] +
              "<br/>" +
              param.data[3] +
              " : " +
              param.data[0] +
              "<br/>" +
              "次数 : " +
              param.data[2];
            return str;
          }
        },
        legend: {
          data: [
            "单体最高电压",
            "单体最低电压",
            "单体最高温度",
            "单体最低温度"
          ],
          textStyle: {
            color: "#46a6b5"
          },
          type: "scroll",
          top: "12%"
        },
        grid: {
          left: "1%",
          right: "8%",
          top: "20%",
          bottom: "6%",
          containLabel: true
        },
        xAxis: [
          {
            type: "value",
            name: "电压",
            axisLabel: {
              formatter: "{value} mV",
              color: "#46a6b5"
            },
            scale: true,
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "rgba(70,166,181,0.5)"
              },
              show: false
            },
            axisLine: {
              lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
            }
          },
          {
            type: "value",
            name: "温度",
            axisLabel: {
              formatter: "{value} °C",
              color: "#46a6b5"
            },
            scale: true,
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "rgba(70,166,181,0.5)"
              },
              show: false
            },
            axisLine: {
              lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
            }
          }
        ],
        yAxis: {
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "rgba(70,166,181,0.5)"
            }
          },
          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          }
        },
        series: [
          {
            name: "单体最高电压",
            data: this.MonomerHighLowDatas.valueUnits[0],
            type: "scatter",
            symbolSize: function(data) {
              return Math.sqrt(data[2]) * 3;
            },
            emphasis: {
              label: {
                show: true,
                formatter: function(param) {
                  return param.data[3];
                },
                position: "top",
                color: "#fff"
              }
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(16,103,120,0.5)",
              shadowOffsetY: 5,
              color: new this.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                {
                  offset: 0,
                  color: "rgb(40,192,251)"
                },
                {
                  offset: 1,
                  color: "rgb(30,133,204)"
                }
              ])
            }
          },
          {
            name: "单体最低电压",
            data: this.MonomerHighLowDatas.valueUnits[1],
            type: "scatter",
            symbolSize: function(data) {
              return Math.sqrt(data[2]) * 3;
            },
            emphasis: {
              label: {
                show: true,
                formatter: function(param) {
                  return param.data[3];
                },
                position: "top",
                color: "#fff"
              }
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(25, 100, 150, 0.5)",
              shadowOffsetY: 5,
              color: new this.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                {
                  offset: 0,
                  color: "rgb(129, 227, 238)"
                },
                {
                  offset: 1,
                  color: "rgb(25, 183, 207)"
                }
              ])
            }
          },
          {
            name: "单体最高温度",
            data: this.MonomerHighLowDatas.valueUnits[2],
            type: "scatter",
            symbolSize: function(data) {
              return Math.sqrt(data[2]) * 3;
            },
            emphasis: {
              label: {
                show: true,
                formatter: function(param) {
                  return param.data[3];
                },
                position: "top",
                color: "#fff"
              }
            },
            xAxisIndex: 1,
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(99,222,118,0.5)",
              shadowOffsetY: 5,
              color: new this.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                {
                  offset: 0,
                  color: "rgb(36,255,220)"
                },
                {
                  offset: 1,
                  color: "rgb(81,247,199)"
                }
              ])
            }
          },
          {
            name: "单体最低温度",
            data: this.MonomerHighLowDatas.valueUnits[3],
            type: "scatter",
            symbolSize: function(data) {
              return Math.sqrt(data[2]) * 3;
            },
            emphasis: {
              label: {
                show: true,
                formatter: function(param) {
                  return param.data[3];
                },
                position: "top",
                color: "#fff"
              }
            },
            xAxisIndex: 1,
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(83,190,126,0.5)",
              shadowOffsetY: 5,
              color: new this.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                {
                  offset: 0,
                  color: "rgb(153,239,205)"
                },
                {
                  offset: 1,
                  color: "rgb(67,208,203)"
                }
              ])
            }
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
          right: "6%",
          top: "20%",
          bottom: "6%",
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
            data: this.InsulationExtremum.XAxisData
          }
        ],
        series: [
          {
            name: "负极绝缘值",
            type: "bar",
            stack: "KΩ",
            label: {
              show: true
            },
            data: this.InsulationExtremum.SeriesData[0].data,
            color: "#F7931F"
          },
          {
            name: "正极绝缘值",
            type: "bar",
            stack: "KΩ",
            label: {
              show: true
            },
            data: this.InsulationExtremum.SeriesData[1].data,
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
        series: [
          {
            name: this.MonomerMaximumVoltage.Name,
            type: "pie",
            radius: "80%",
            center: ["55%", "60%"],
            data: this.MonomerMaximumVoltage.Datas.sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            label: {
              color: "rgba(255, 255, 255, 0.3)",
              show: false
            },
            // itemStyle: {
            //   color: "#4cc1c2"
            // },
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
        series: [
          {
            name: this.MonomerMinimumVoltage.Name,
            type: "pie",
            radius: "80%",
            center: ["55%", "60%"],
            data: this.MonomerMinimumVoltage.Datas.sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            label: {
              color: "rgba(255, 255, 255, 0.8)",
              show: false
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
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: this.SingleDifferentialPressure.legend,
          textStyle: {
            color: "#46a6b5"
          },
          top: "10%",
          type: "scroll"
        },
        grid: {
          left: "1%",
          right: "4%",
          top: "20%",
          bottom: "6%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.SingleDifferentialPressure.XAxisData,
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
          },
          min: this.SingleDifferentialPressure.YAxisMin,
          max: this.SingleDifferentialPressure.YAxisMax
        },
        series: this.SingleDifferentialPressure.series
      });
      setTimeout(function() {
        window.onresize = () => {
          myChart1.resize();
          myChart2.resize();
          // myChart3.resize();
          myChart4.resize();
          myChart5.resize();
          myChart6.resize();
          myChart7.resize();
        };
      }, 200);
    },
    getData() {
      let url = `/api/Statement/GetExtremumStatistical?SystemToken=0&DeviceSystemID=${this.currentDevice.SystemID}`;
      this.$axios
        .get(url)
        .then(res => {
          if (res.data.code === 0) {
            let data = res.data.data;
            this.TotalElectricityStatistics = data.TotalElectricityStatistics;
            this.MonomerHighLowPressure = data.MonomerHighLowPressure;
            this.EnvironmentTemp = data.EnvironmentTemp;
            this.MonomerAverageVoltage = data.MonomerAverageVoltage;
            this.ClusterAverageVoltage = data.ClusterAverageVoltage;
            this.EachClusterInformation = data.EachClusterInformation;
            this.InsulationExtremum = data.InsulationExtremum;
            this.MonomerMaximumVoltage = data.MonomerMaximumVoltage;
            this.MonomerMinimumVoltage = data.MonomerMinimumVoltage;
            this.MonomerHighLowDatas = data.MonomerHighLowDatas;
            this.SingleDifferentialPressure = data.SingleDifferentialPressure;
            this.SingleDifferentialPressure.legend = [];
            this.SingleDifferentialPressure.series = [];
            this.SingleDifferentialPressure.SeriesData.forEach(item => {
              this.SingleDifferentialPressure.legend.push(item.name);
              this.SingleDifferentialPressure.series.push({
                name: item.name,
                type: "line",
                stack: item.stack,
                data: item.data,
                smooth: true,
                symbol: "none"
              });
            });
            this.TotalElectricityStatistics.legend = [];
            this.TotalElectricityStatistics.series = [];
            this.TotalElectricityStatistics.SeriesData.forEach(item => {
              this.TotalElectricityStatistics.legend.push(item.name);
              this.TotalElectricityStatistics.series.push({
                name: item.name,
                type: "line",
                stack: item.stack,
                data: item.data,
                smooth: true,
                symbol: "none"
              });
            });
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
  mounted() {
    this.$(".info-box ul").niceScroll({
      cursorborder: "none",
      hwacceleration: true,
      mousescrollstep: 30,
      scrollspeed: 40,
      preventmultitouchscrolling: true,
      autohidemode: "leave",
      hidecursordelay: 100,
      cursorcolor: "rgba(255,255,255,0.3)"
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
