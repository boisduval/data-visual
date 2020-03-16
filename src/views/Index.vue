<template>
  <div class="content">
    <section>
      <!-- 左边开始 -->
      <div class="content-left">
        <!-- 第一块开始 -->
        <BorderLeft class="box-l" title="系统电量统计">
          <div class="circle-box">
            <Semicircle color="#0071bc" title="系统装机电量" class="circle">
              <div class="num">
                <p>1000</p>
              </div>
              <div class="units">
                <p>Kwh</p>
              </div>
            </Semicircle>

            <Semicircle title="SOC" class="circle">
              <p>11.1%</p>
            </Semicircle>

            <Semicircle color="#39b54a" title="系统剩余电量" class="circle">
              <div class="num">
                <p>1000</p>
              </div>
              <div class="units">
                <p>Kwh</p>
              </div>
            </Semicircle>
          </div>
        </BorderLeft>
        <!-- 第一块结束 -->
        <!-- 第二块开始 -->
        <BorderLeft class="box-l" title="系统当前电量曲线">
          <div id="myChart1" class="charts"></div>
        </BorderLeft>
        <!-- 第二块结束 -->
        <!-- 第三块开始 -->
        <BorderLeft class="box-l" title="电量排行榜">
          <div class="energy-order">
            <div
              class="order-row"
              v-for="(item, index) in batterOrder"
              :key="index"
            >
              <div class="row-l">
                <div class="num">
                  {{ index + 1 }}
                </div>
                {{ item.Name }}
              </div>
              <div class="row-r">
                {{ item.Value }}
                Kwh
              </div>
            </div>
          </div>
        </BorderLeft>
        <!-- 第三块结束 -->
        <!-- 第四块开始 -->
        <BorderLeft class="box-l" title="充放电周统计">
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
              <BorderBg title="电费高峰统计">
                <div id="myChart3" class="charts"></div>
              </BorderBg>
              <BorderBg style="margin-top:10px;" title="装机设备统计">
                <div class="device-count flex-column">
                  <div
                    class="device-row"
                    v-for="(item, index) in deviceCount"
                    :key="index"
                  >
                    <p class="row-l">
                      {{ item.label }}
                    </p>
                    <div class="row-r">
                      <p class="num">
                        {{ item.Value }}
                      </p>
                      <p style="display:inline-block">个</p>
                    </div>
                  </div>
                </div>
              </BorderBg>
            </div>
            <div class="bottom-c"></div>
            <div class="bottom-r">
              <BorderBg title="用电高峰统计">
                <div id="myChart4" class="charts"></div>
              </BorderBg>
              <BorderBg style="margin-top:10px;" title="充放电曲线">
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
        <BorderRight class="box-r" title="直流电气统计">
          <div id="myChart6" class="charts"></div>
        </BorderRight>
        <!-- 第一块结束 -->
        <!-- 第二块开始 -->
        <BorderRight class="box-r" title="月耗能统计">
          <div id="myChart7" class="charts"></div>
        </BorderRight>
        <!-- 第二块结束 -->
        <!-- 第三块开始 -->
        <BorderRight class="box-r" title="事件统计">
          <div id="myChart8" class="charts"></div>
        </BorderRight>
        <!-- 第三块结束 -->
        <!-- 第四块开始 -->
        <BorderRight class="box-r" title="系统当前电量曲线">
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
      batterOrder: [
        {
          Name: "控制器",
          Value: "333"
        },
        {
          Name: "控制器",
          Value: "333"
        },
        {
          Name: "控制器",
          Value: "333"
        },
        {
          Name: "控制器",
          Value: "333"
        },
        {
          Name: "控制器",
          Value: "333"
        },
        {
          Name: "控制器",
          Value: "333"
        },
        {
          Name: "控制器",
          Value: "333"
        }
      ],
      interval: "",
      deviceCount: [
        {
          label: "控制器",
          Value: "7"
        },
        {
          label: "控制器",
          Value: "7"
        },
        {
          label: "控制器",
          Value: "7"
        },
        {
          label: "控制器",
          Value: "7"
        },
        {
          label: "控制器",
          Value: "7"
        }
      ],
      grid: {
        left: "6%",
        right: "8%",
        top: "30%",
        bottom: "10%",
        containLabel: true
      },
      yAxis: {
        type: "value",
        axisLabel: { color: "#46a6b5", fontSize: 10 }, // x轴字体颜色

        axisLine: {
          lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
        },
        splitLine: {
          show: false
        }
      }
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
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLabel: { color: "#46a6b5", fontSize: 10 }, // x轴字体颜色

          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          }
        },
        yAxis: this.yAxis,
        grid: this.grid,
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
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
          data: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
          axisLabel: { color: "#46a6b5", fontSize: 10 }, // x轴字体颜色
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
            name: "Forest",
            type: "bar",
            barGap: 0,
            data: [320, 332, 301, 334, 390, 334, 390],
            label: {
              show: true,
              position: "top",
              fontSize: "10px",
              color: "rgba(247,147,31,0.5)"
            }
          },
          {
            name: "Steppe",
            type: "bar",
            data: [220, 182, 191, 234, 290, 234, 290],
            label: {
              show: true,
              position: "top",
              fontSize: "10px",
              color: "rgba(58,181,75,0.5)"
            }
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
          data: ["周一", "周二", "周三", "周四", "周五"],
          axisLabel: { color: "#46a6b5", fontSize: 10 }, // x轴字体颜色
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
            name: "直接访问",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "right",
              color: "#46a6b5",
              fontSize: "10px"
            },
            data: [320, 302, 301, 334, 390]
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
          data: ["周一", "周二", "周三", "周四", "周五"],
          axisLabel: { color: "#46a6b5", fontSize: 10 }, // x轴字体颜色
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
            name: "直接访问",
            type: "bar",
            stack: "总量",
            label: {
              show: true,
              position: "right",
              color: "#46a6b5",
              fontSize: "10px"
            },
            data: [320, 302, 301, 334, 390]
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
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLabel: { color: "#46a6b5", fontSize: 10 }, // x轴字体颜色
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
            data: [520, 632, 701, 734, 290, 330, 320],
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
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLabel: { color: "#46a6b5", fontSize: 10 }, // x轴字体颜色

          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          }
        },
        yAxis: this.yAxis,
        grid: this.grid,
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
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
          data: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
          axisLabel: { color: "#46a6b5", fontSize: 10 }, // x轴字体颜色
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
            name: "Forest",
            type: "bar",
            barGap: 0,
            data: [320, 332, 301, 334, 390, 334, 390],
            label: {
              show: true,
              position: "top",
              fontSize: "10px",
              color: "rgba(247,147,31,0.5)"
            }
          },
          {
            name: "Steppe",
            type: "bar",
            data: [220, 182, 191, 234, 290, 234, 290],
            label: {
              show: true,
              position: "top",
              fontSize: "10px",
              color: "rgba(58,181,75,0.5)"
            }
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
              color: "#fff",
              // backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: "销售", max: 6500 },
            { name: "管理", max: 16000 },
            { name: "信息技术", max: 30000 },
            { name: "客服", max: 38000 },
            { name: "研发", max: 52000 },
            { name: "市场", max: 25000 }
          ],
          splitArea: {
            show: false
          }
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: "预算分配"
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: "实际开销"
              }
            ]
          }
        ],
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
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问", color: "#cacaca" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ],
        color: ["#549D6B", "#F5AE52", "#CACACA", "#6ABFBC", "#E7E67E"]
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
  width: 18px;
  height: 18px;
  line-height: 18px;
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
  overflow: auto;
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
  width: 30px;
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
  .device-row .row-r .num {
    width: 12px;
    height: 12px;
    line-height: 12px;
    font-size: 10px;
  }
  .energy-order {
    font-size: 10px;
    padding: 0 10px;
    overflow: auto;
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
  .device-row .row-r .num {
    width: 14px;
    height: 14px;
    line-height: 14px;
    font-size: 10px;
  }
  .energy-order {
    font-size: 12px;
    padding: 0 20px;
    overflow: auto;
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
  .device-row .row-r .num {
    width: 18px;
    height: 18px;
    line-height: 18px;
    font-size: 14px;
  }
  .energy-order {
    font-size: 16px;
    padding: 0 30px;
    overflow: auto;
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
