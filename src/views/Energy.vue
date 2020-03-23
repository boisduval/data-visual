<template>
  <div class="content">
    <section>
      <div class="flex">
        <Nav></Nav>
      </div>
      <div class="box-right flex-column">
        <div class="flex4">
          <BorderCenterLongest>
            <div class="energy-strument-box flex-row">
              <IndicatingInstrumentKw
                title="当天充电"
                scale-color="#fff"
                text-color="#51D0AB"
                rotate="80"
                value="3500"
              ></IndicatingInstrumentKw>
              <IndicatingInstrumentKw
                title="当天放电"
                scale-color="#fff"
                text-color="#028C44"
                rotate="20"
                value="3500"
              ></IndicatingInstrumentKw>
              <IndicatingInstrumentKw
                title="当前功率"
                rotate="20"
                value="3500"
              ></IndicatingInstrumentKw>
              <IndicatingInstrumentKw
                title="累计充电"
                scale-color="#fff"
                text-color="#D95854"
                rotate="80"
                value="3500"
              ></IndicatingInstrumentKw>
              <IndicatingInstrumentKw
                title="累计放电"
                scale-color="#fff"
                text-color="#D4155A"
                rotate="50"
                value="3500"
              ></IndicatingInstrumentKw>
            </div>
          </BorderCenterLongest>
        </div>
        <div class="flex5 flex-row">
          <div class="flex">
            <BorderCenterLonger title="总电量统计趋势">
              <div id="myChart1" class="charts"></div>
            </BorderCenterLonger>
          </div>
          <div class="flex">
            <BorderCenterLonger title="收益年度统计情况">
              <div id="myChart2" class="charts"></div>
            </BorderCenterLonger>
          </div>
        </div>
        <div class="flex5 flex-row">
          <div class="flex">
            <BorderCenterLonger title="月度收益趋势">
              <div id="myChart3" class="charts"></div>
            </BorderCenterLonger>
          </div>
          <div class="flex">
            <BorderCenterLonger title="储能收益情况">
              <div class="flex-column" style="padding: 10% 5% 5%;height: 100%">
                <div class="energy-visual flex">
                  <EnergyEarnings value="34567"></EnergyEarnings>
                </div>
                <div class="energy-text-box flex-row">
                  <div
                    class="energy-text flex"
                    v-for="(item, index) in cube4"
                    :key="index"
                  >
                    <div class="energy-text-num" :style="{ color: item.color }">
                      {{ item.value }}
                    </div>
                    <div class="energy-text-title">
                      {{ item.title }}
                    </div>
                  </div>
                </div>
              </div>
            </BorderCenterLonger>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cube4: [
        {
          title: "当日储能收益",
          color: "#D95854",
          value: "3456"
        },
        {
          title: "储能累计总收益",
          color: "#51D0AB",
          value: "3456"
        },
        {
          title: "当日放电电量",
          color: "#028C44",
          value: "3456"
        },
        {
          title: "储能累计放电电量",
          color: "#D4155A",
          value: "3456"
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
          data: ["收益趋势", "充电趋势", "放电趋势"],
          textStyle: {
            color: "#46a6b5"
          },
          top: "10%"
        },
        grid: {
          left: "1%",
          right: "4%",
          top: "20%",
          bottom: "5%",
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
            name: "收益趋势",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
            smooth: true,
            symbol: "none"
          },
          {
            name: "充电趋势",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
            smooth: true,
            symbol: "none"
          },
          {
            name: "放电趋势",
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
        color: ["#F7931E", "#51D0AB", "#D4155A"],
        legend: {
          data: ["收益", "充电", "放电"],
          textStyle: {
            color: "#46a6b5"
          },
          top: "10%"
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
            ["product", "收益", "充电", "放电"],
            ["01", 43.3, 85.8, 93.7],
            ["02", 83.1, 73.4, 55.1],
            ["03", 86.4, 65.2, 82.5],
            ["04", 72.4, 53.9, 39.1],
            ["05", 72.4, 53.9, 39.1],
            ["06", 72.4, 53.9, 39.1],
            ["07", 43.3, 85.8, 93.7],
            ["08", 83.1, 73.4, 55.1],
            ["09", 86.4, 65.2, 82.5],
            ["10", 72.4, 53.9, 39.1],
            ["11", 72.4, 53.9, 39.1],
            ["12", 72.4, 53.9, 39.1]
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
            lineStyle: {
              color: "rgba(70,166,181,0.5)"
            }
          }
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
      });
      // 第三个图
      var myChart3 = this.$echarts.init(document.getElementById("myChart3"));
      myChart3.setOption({
        color: ["#51D0AB", "#F7931E", "#D4155A"],
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["当前电量曲线", "充电曲线", "放电曲线"],
          textStyle: {
            color: "#46a6b5"
          },
          top: "10%"
        },
        grid: {
          left: "1%",
          right: "4%",
          top: "20%",
          bottom: "5%",
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
            name: "当前电量曲线",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
            smooth: true,
            symbol: "none"
          },
          {
            name: "充电曲线",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
            smooth: true,
            symbol: "none"
          },
          {
            name: "放电曲线",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410],
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
  display: flex;
}
.box-right {
  flex: 7;
}
.energy-strument-box {
  height: 100%;
}
.energy-text-box {
  margin-top: 5%;
}
.energy-text-box .energy-text .energy-text-num {
  color: #d95854;
  text-align: center;
}
.energy-text-box .energy-text .energy-text-title {
  color: #46a6b5;
  text-align: center;
  margin-top: 3%;
}
.energy-visual {
  padding: 0 15%;
}
@media screen and (max-width: 1300px) {
  .energy-text-box .energy-text .energy-text-num {
    font-size: 20px;
  }
  .energy-text-box .energy-text .energy-text-title {
    font-size: 12px;
  }
}
@media screen and (min-width: 1300px) {
  .energy-text-box .energy-text .energy-text-num {
    font-size: 24px;
  }
  .energy-text-box .energy-text .energy-text-title {
    font-size: 14px;
  }
}
@media screen and (min-width: 1500px) {
  .energy-text-box .energy-text .energy-text-num {
    font-size: 28px;
  }
  .energy-text-box .energy-text .energy-text-title {
    font-size: 18px;
  }
}
</style>
