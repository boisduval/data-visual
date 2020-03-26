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
                <div class="flex" style="margin-bottom: 2px;">
                  <ExtremeBg :title="MonomerHighLowPressure.Name">
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
                    <happy-scroll
                      color="rgba(0,0,0,0.5)"
                      size="8"
                      resize
                      hide-horizontal
                    >
                      <ul>
                        <li
                          v-for="(val,
                          key) in EachClusterInformation.valueUnits"
                          :key="key"
                          class="flex-row"
                          style="justify-content: space-between"
                        >
                          <p style="width: 50px">{{ val.name }}</p>
                          <p style="width: 120px">
                            {{ val.value.value }}{{ val.value.unit }}
                          </p>
                          <p>{{ val.position.value }}{{ val.position.unit }}</p>
                        </li>
                      </ul>
                    </happy-scroll>
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
      SingleDifferentialPressure: ""
    };
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
          data: [
            this.TotalElectricityStatistics.SeriesData[0].name,
            this.TotalElectricityStatistics.SeriesData[1].name,
            this.TotalElectricityStatistics.SeriesData[2].name,
            this.TotalElectricityStatistics.SeriesData[3].name,
            this.TotalElectricityStatistics.SeriesData[4].name,
            this.TotalElectricityStatistics.SeriesData[5].name
          ],
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
          bottom: "10%",
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
          }
        },
        series: [
          {
            name: this.TotalElectricityStatistics.SeriesData[0].name,
            type: "line",
            stack: this.TotalElectricityStatistics.SeriesData[0].stack,
            data: this.TotalElectricityStatistics.SeriesData[0].data,
            smooth: true,
            symbol: "none"
          },
          {
            name: this.TotalElectricityStatistics.SeriesData[1].name,
            type: "line",
            stack: this.TotalElectricityStatistics.SeriesData[1].stack,
            data: this.TotalElectricityStatistics.SeriesData[1].data,
            smooth: true,
            symbol: "none"
          },
          {
            name: this.TotalElectricityStatistics.SeriesData[2].name,
            type: "line",
            stack: this.TotalElectricityStatistics.SeriesData[2].stack,
            data: this.TotalElectricityStatistics.SeriesData[2].data,
            smooth: true,
            symbol: "none"
          },
          {
            name: this.TotalElectricityStatistics.SeriesData[3].name,
            type: "line",
            stack: this.TotalElectricityStatistics.SeriesData[3].stack,
            data: this.TotalElectricityStatistics.SeriesData[3].data,
            smooth: true,
            symbol: "none"
          },
          {
            name: this.TotalElectricityStatistics.SeriesData[4].name,
            type: "line",
            stack: this.TotalElectricityStatistics.SeriesData[4].stack,
            data: this.TotalElectricityStatistics.SeriesData[4].data,
            smooth: true,
            symbol: "none"
          },
          {
            name: this.TotalElectricityStatistics.SeriesData[5].name,
            type: "line",
            stack: this.TotalElectricityStatistics.SeriesData[5].stack,
            data: this.TotalElectricityStatistics.SeriesData[5].data,
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
            name: this.MonomerHighLowPressure.SeriesData[0].name,
            type: "bar",
            data: [
              this.MonomerHighLowPressure.SeriesData[0].data[0].value,
              this.MonomerHighLowPressure.SeriesData[0].data[1].value,
              this.MonomerHighLowPressure.SeriesData[0].data[2].value
            ]
          },
          {
            name: this.MonomerHighLowPressure.SeriesData[1].name,
            type: "bar",
            data: [
              this.MonomerHighLowPressure.SeriesData[1].data[0].value,
              this.MonomerHighLowPressure.SeriesData[1].data[1].value,
              this.MonomerHighLowPressure.SeriesData[1].data[2].value
            ]
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
          },
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
          right: "6%",
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
            colorLightness: [0.2, 1]
          }
        },
        series: [
          {
            name: this.MonomerMaximumVoltage.Name,
            type: "pie",
            radius: "90%",
            center: ["55%", "50%"],
            data: this.MonomerMaximumVoltage.Datas.sort(function(a, b) {
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
            colorLightness: [0.2, 1]
          }
        },
        series: [
          {
            name: this.MonomerMinimumVoltage.Name,
            type: "pie",
            radius: "90%",
            center: ["55%", "50%"],
            data: this.MonomerMinimumVoltage.Datas.sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            label: {
              color: "rgba(255, 255, 255, 0.8)",
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
        // color: ["#51D0AB", "#F7931E", "#D4155A"],
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: [
            this.SingleDifferentialPressure.SeriesData[0].name,
            this.SingleDifferentialPressure.SeriesData[1].name,
            this.SingleDifferentialPressure.SeriesData[2].name,
            this.SingleDifferentialPressure.SeriesData[3].name,
            this.SingleDifferentialPressure.SeriesData[4].name,
            this.SingleDifferentialPressure.SeriesData[5].name,
          ],
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
          bottom: "10%",
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
          }
        },
        series: [
          {
            name: this.SingleDifferentialPressure.SeriesData[0].name,
            type: "line",
            stack: this.SingleDifferentialPressure.SeriesData[0].stack,
            data: this.SingleDifferentialPressure.SeriesData[0].data,
            smooth: true,
            symbol: "none"
          },
          {
            name: this.SingleDifferentialPressure.SeriesData[1].name,
            type: "line",
            stack: this.SingleDifferentialPressure.SeriesData[1].stack,
            data: this.SingleDifferentialPressure.SeriesData[1].data,
            smooth: true,
            symbol: "none"
          },
          {
            name: this.SingleDifferentialPressure.SeriesData[2].name,
            type: "line",
            stack: this.SingleDifferentialPressure.SeriesData[2].stack,
            data: this.SingleDifferentialPressure.SeriesData[2].data,
            smooth: true,
            symbol: "none"
          },
          {
            name: this.SingleDifferentialPressure.SeriesData[3].name,
            type: "line",
            stack: this.SingleDifferentialPressure.SeriesData[3].stack,
            data: this.SingleDifferentialPressure.SeriesData[3].data,
            smooth: true,
            symbol: "none"
          },
          {
            name: this.SingleDifferentialPressure.SeriesData[4].name,
            type: "line",
            stack: this.SingleDifferentialPressure.SeriesData[4].stack,
            data: this.SingleDifferentialPressure.SeriesData[4].data,
            smooth: true,
            symbol: "none"
          },
          {
            name: this.SingleDifferentialPressure.SeriesData[5].name,
            type: "line",
            stack: this.SingleDifferentialPressure.SeriesData[5].stack,
            data: this.SingleDifferentialPressure.SeriesData[5].data,
            smooth: true,
            symbol: "none"
          },
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
    },
    getData() {
      let url =
        "/api/Statement/GetExtremumStatistical?SystemToken=0&DeviceSystemID=637103628712992044";
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
            this.SingleDifferentialPressure = data.SingleDifferentialPressure;
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
