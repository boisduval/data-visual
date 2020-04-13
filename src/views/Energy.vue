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
                v-if="DailyCharge"
                :title="DailyCharge.data.name"
                scale-color="#fff"
                text-color="#51D0AB"
                :rotate="DailyCharge.scale + ''"
                :value="DailyCharge.data.value"
              ></IndicatingInstrumentKw>
              <IndicatingInstrumentKw
                scale-color="#fff"
                text-color="#028C44"
                v-if="DailyDischarge"
                :title="DailyDischarge.data.name"
                :rotate="DailyDischarge.scale + ''"
                :value="DailyDischarge.data.value"
              ></IndicatingInstrumentKw>
              <IndicatingInstrumentKw
                v-if="TheCurrentPower"
                :title="TheCurrentPower.data.name"
                :rotate="TheCurrentPower.scale + ''"
                :value="TheCurrentPower.data.value"
              ></IndicatingInstrumentKw>
              <IndicatingInstrumentKw
                scale-color="#fff"
                text-color="#D95854"
                v-if="TheCumulativeCharge"
                :title="TheCumulativeCharge.data.name"
                :rotate="TheCumulativeCharge.scale + ''"
                :value="TheCumulativeCharge.data.value"
              ></IndicatingInstrumentKw>
              <IndicatingInstrumentKw
                scale-color="#fff"
                text-color="#D4155A"
                v-if="TheCumulativeDischarge"
                :title="TheCumulativeDischarge.data.name"
                :rotate="TheCumulativeDischarge.scale + ''"
                :value="TheCumulativeDischarge.data.value"
              ></IndicatingInstrumentKw>
            </div>
          </BorderCenterLongest>
        </div>
        <div class="flex5 flex-row">
          <div class="flex">
            <BorderCenterLonger :title="TotalElectricityStatistics.Name">
              <div id="myChart1" class="charts" v-if="TotalElectricityStatistics"></div>
            </BorderCenterLonger>
          </div>
          <div class="flex">
            <BorderCenterLonger :title="AnnualRevenueStatistics.Name">
              <div id="myChart2" class="charts" v-if="AnnualRevenueStatistics"></div>
            </BorderCenterLonger>
          </div>
        </div>
        <div class="flex5 flex-row">
          <div class="flex">
            <BorderCenterLonger :title="MonthlyIncome.Name">
              <div id="myChart3" class="charts" v-if="MonthlyIncome"></div>
            </BorderCenterLonger>
          </div>
          <div class="flex">
            <BorderCenterLonger :title="EnergyStorageRevenue?'储能收益情况':''">
              <div class="flex-column" style="padding: 10% 5% 5%;height: 100%">
                <div class="energy-visual flex">
                  <EnergyEarnings
                    :value="EnergyStorageRevenue.CumulativeTotalIncome.value"
                    v-if="EnergyStorageRevenue"
                  ></EnergyEarnings>
                </div>
                <div class="energy-text-box flex-row" v-if="EnergyStorageRevenue">
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
import { mapState } from "vuex";

export default {
  data() {
    return {
      cube4: [
        {
          title: "",
          color: "#D95854",
          value: ""
        },
        {
          title: "",
          color: "#51D0AB",
          value: ""
        },
        {
          title: "",
          color: "#028C44",
          value: ""
        },
        {
          title: "",
          color: "#D4155A",
          value: ""
        }
      ],
      DailyCharge: "",
      DailyDischarge: "",
      TheCurrentPower: "",
      TheCumulativeCharge: "",
      TheCumulativeDischarge: "",
      TotalElectricityStatistics: "",
      MonthlyIncome: "",
      AnnualRevenueStatistics: "",
      EnergyStorageRevenue: ""
    };
  },
  computed: {
    ...mapState("nav", ["currentDevice"])
  },
  created() {
    if (this.currentDevice.SystemID) {
      this.getData();
    } else {
      this.$parent.getData(this.getData);
    }
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
          data: [
            this.TotalElectricityStatistics.SeriesData[0].name,
            this.TotalElectricityStatistics.SeriesData[1].name,
            this.TotalElectricityStatistics.SeriesData[2].name
          ],
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
          }
        ]
      });
      // 第二个图
      var myChart2 = this.$echarts.init(document.getElementById("myChart2"));
      myChart2.setOption({
        color: ["#F7931E", "#51D0AB", "#D4155A"],
        legend: {
          data: [
            this.AnnualRevenueStatistics.SeriesData[0].name,
            this.AnnualRevenueStatistics.SeriesData[1].name,
            this.AnnualRevenueStatistics.SeriesData[2].name
          ],
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
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        series: [
          {
            name: this.AnnualRevenueStatistics.SeriesData[0].name,
            type: "bar",
            stack: this.AnnualRevenueStatistics.SeriesData[0].stack,
            data: this.AnnualRevenueStatistics.SeriesData[0].data
          },
          {
            name: this.AnnualRevenueStatistics.SeriesData[1].name,
            type: "bar",
            stack: this.AnnualRevenueStatistics.SeriesData[1].stack,
            data: this.AnnualRevenueStatistics.SeriesData[1].data
          },
          {
            name: this.AnnualRevenueStatistics.SeriesData[2].name,
            type: "bar",
            stack: this.AnnualRevenueStatistics.SeriesData[2].stack,
            data: this.AnnualRevenueStatistics.SeriesData[2].data
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
          data: this.AnnualRevenueStatistics.XAxisData
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
          },
          type: "value"
        }
      });
      // 第三个图
      var myChart3 = this.$echarts.init(document.getElementById("myChart3"));
      myChart3.setOption({
        color: ["#51D0AB", "#F7931E", "#D4155A"],
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: [
            this.MonthlyIncome.SeriesData[0].name,
            this.MonthlyIncome.SeriesData[1].name,
            this.MonthlyIncome.SeriesData[2].name
          ],
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
          data: this.MonthlyIncome.XAxisData,
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
            name: this.MonthlyIncome.SeriesData[0].name,
            type: "line",
            stack: this.MonthlyIncome.SeriesData[0].stack,
            data: this.MonthlyIncome.SeriesData[0].data,
            smooth: true,
            symbol: "none"
          },
          {
            name: this.MonthlyIncome.SeriesData[1].name,
            type: "line",
            stack: this.MonthlyIncome.SeriesData[1].stack,
            data: this.MonthlyIncome.SeriesData[1].data,
            smooth: true,
            symbol: "none"
          },
          {
            name: this.MonthlyIncome.SeriesData[2].name,
            type: "line",
            stack: this.MonthlyIncome.SeriesData[2].stack,
            data: this.MonthlyIncome.SeriesData[2].data,
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
    },
    getData() {
      let url = `/api/Statement/GetEnergyStatistics?SystemToken=0&DeviceSystemID=${this.currentDevice.SystemID}`;
      this.$axios
        .get(url)
        .then(res => {
          if (res.data.code === 0) {
            let data = res.data.data;
            this.DailyCharge = data.DailyCharge;
            this.DailyDischarge = data.DailyDischarge;
            this.TheCurrentPower = data.TheCurrentPower;
            this.TheCumulativeCharge = data.TheCumulativeCharge;
            this.TheCumulativeDischarge = data.TheCumulativeDischarge;
            this.TotalElectricityStatistics = data.TotalElectricityStatistics;
            this.MonthlyIncome = data.MonthlyIncome;
            this.AnnualRevenueStatistics = data.AnnualRevenueStatistics;
            this.EnergyStorageRevenue = data.EnergyStorageRevenue;
            this.cube4[0].title = this.EnergyStorageRevenue.DayStorageIncome.name;
            this.cube4[0].value = this.EnergyStorageRevenue.DayStorageIncome.value;
            this.cube4[1].title = this.EnergyStorageRevenue.CumulativeTotalIncome.name;
            this.cube4[1].value = this.EnergyStorageRevenue.CumulativeTotalIncome.value;
            this.cube4[2].title = this.EnergyStorageRevenue.CurrentDischargeQuantity.name;
            this.cube4[2].value = this.EnergyStorageRevenue.CurrentDischargeQuantity.value;
            this.cube4[3].title = this.EnergyStorageRevenue.AccumulativeDischargeCharge.name;
            this.cube4[3].value = this.EnergyStorageRevenue.AccumulativeDischargeCharge.value;
            this.$nextTick(() => {
              this.getEcharts();
            });
          } else {
            this.open1(res.data.msg);
            this.DailyCharge = "";
            this.DailyDischarge = "";
            this.TheCurrentPower = "";
            this.TheCumulativeCharge = "";
            this.TheCumulativeDischarge = "";
            this.TotalElectricityStatistics = "";
            this.MonthlyIncome = "";
            this.AnnualRevenueStatistics = "";
            this.EnergyStorageRevenue = "";
          }
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.error(err);
        });
    },
    open1(msg) {
      this.$notify({
        message: msg,
        customClass: "notification",
        offset: 80
      });
    }
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
