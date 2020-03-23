<template>
  <div class="content">
    <section>
      <div class="flex">
        <Nav></Nav>
      </div>
      <div class="box-right flex-column">
        <!-- 上开始 -->
        <div class="right-top">
          <!-- 左边开始 -->
          <div class="left">
            <BorderCenter>
              <Usp class="usp-content"></Usp>
              <div class="usp-text">
                <div class="text-box" v-for="item in usp" :key="item.id">
                  <p class="label">{{ item.label }}</p>
                  <p class="value">{{ item.value }}</p>
                </div>
              </div>
            </BorderCenter>
          </div>
          <!-- 左边结束 -->
          <!-- 右边开始 -->
          <div class="right">
            <BorderRightLonger>
              <div class="right-box">
                <!-- 右左开始 -->
                <div class="flex-column flex" style="margin-right:2px;">
                  <div class="flex" style="margin-bottom:2px;">
                    <BorderBg>
                      <div
                        class="flex-column font-small flex-space-between"
                        style="height:100%;padding:8% 1% 0;"
                      >
                        <!-- 第一块开始 -->
                        <p style="color:#46A6B5">
                          输入输出电压
                        </p>
                        <div class="text-bottom flex-column flex">
                          <div class="flex-column flex-center flex">
                            <div class="flex-row">
                              <p class="title flex">
                                U相
                              </p>
                              <p class="data flex">
                                382.5V
                              </p>
                              <p class="data flex" style="text-align: right;">
                                380.1V
                              </p>
                            </div>
                            <div class="flex-row">
                              <p class="title flex">
                                V相
                              </p>
                              <p class="data flex">
                                382.5V
                              </p>
                              <p class="data flex" style="text-align: right;">
                                380.1V
                              </p>
                            </div>
                            <div class="flex-row">
                              <p class="title flex">
                                W相
                              </p>
                              <p class="data flex">
                                382.5V
                              </p>
                              <p class="data flex" style="text-align: right;">
                                380.1V
                              </p>
                            </div>
                          </div>
                        </div>
                        <!-- 第一块结束 -->
                        <!-- 第二块开始 -->
                        <div class="text-bottom flex-column flex">
                          <div class="flex-column flex-center flex">
                            <div class="flex-row">
                              <p class="title flex5">
                                U相输出电流
                              </p>
                              <p class="data flex3" style="text-align: right;">
                                60.5A
                              </p>
                            </div>
                            <div class="flex-row">
                              <p class="title flex5">
                                V相输出电流
                              </p>
                              <p class="data flex3" style="text-align: right;">
                                60.5A
                              </p>
                            </div>
                            <div class="flex-row">
                              <p class="title flex5">
                                W相输出电流
                              </p>
                              <p class="data flex3" style="text-align: right;">
                                60.5A
                              </p>
                            </div>
                          </div>
                        </div>
                        <!-- 第二块结束 -->
                      </div>
                    </BorderBg>
                  </div>
                  <div class="flex">
                    <BorderBg>
                      <div style="display:flex;height:90%;padding-top: 10%">
                        <div class="flex">
                          <Thermometer
                            title="内部温度"
                            value="35.6℃"
                          ></Thermometer>
                        </div>
                        <div class="flex">
                          <Thermometer
                            title="散热器温度"
                            value="35.6℃"
                          ></Thermometer>
                        </div>
                      </div>
                    </BorderBg>
                  </div>
                </div>
                <!-- 右左结束 -->
                <!-- 右中开始 -->
                <div class="flex" style="margin-right:2px;">
                  <BorderBgHigher>
                    <div
                      class="flex-column font-small flex-space-between"
                      style="height:100%;padding:8% 1% 0"
                    >
                      <!-- 第一块开始 -->
                      <p style="color:#46A6B5">
                        设备信息
                      </p>
                      <div class="text-bottom flex-column flex">
                        <div class="flex-column flex-center flex">
                          <div class="flex-row">
                            <p class="title flex5">
                              U相PF值
                            </p>
                            <p class="data flex3">
                              0.99
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex5">
                              V相PF值
                            </p>
                            <p class="data flex3">
                              0.99
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex5">
                              W相PF值
                            </p>
                            <p class="data flex3">
                              0.99
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- 第一块结束 -->
                      <!-- 第二块开始 -->
                      <div class="text-bottom flex-column flex">
                        <div class="flex-column flex-center flex">
                          <div class="flex-row">
                            <p class="title flex5">
                              U相负载量
                            </p>
                            <p class="data flex3">
                              10%
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex5">
                              V相负载量
                            </p>
                            <p class="data flex3">
                              10%
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex5">
                              W相PF值
                            </p>
                            <p class="data flex3">
                              10%
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- 第二块结束 -->
                      <!-- 第三块开始 -->
                      <div class="text-bottom flex-column flex">
                        <div class="flex-column flex-center flex">
                          <div class="flex-row">
                            <p class="title flex5">
                              离网频率
                            </p>
                            <p class="data flex3">
                              50.0Hz
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex5">
                              电网频率
                            </p>
                            <p class="data flex3">
                              50.0Hz
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex5">
                              交流漏电流
                            </p>
                            <p class="data flex3">
                              0.1A
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- 第三块结束 -->
                      <!-- 第四块开始 -->
                      <div class="text-bottom flex-column flex">
                        <div class="flex-column flex-center flex">
                          <div class="flex-row">
                            <p class="title flex5">
                              直流电压
                            </p>
                            <p class="data flex3">
                              53.6V
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex5">
                              直流电流
                            </p>
                            <p class="data flex3">
                              124.2A
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex5">
                              总直流功率
                            </p>
                            <p class="data flex3">
                              6.7kw
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- 第四块结束 -->
                      <!-- 第五块开始 -->
                      <div class="text-bottom flex-column flex">
                        <div class="flex-column flex-center flex">
                          <div class="flex-row">
                            <p class="title flex5">
                              并离网状态
                            </p>
                            <p class="data flex3">
                              并网
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex5">
                              远控状态
                            </p>
                            <p class="data flex3">
                              开启
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- 第五块结束 -->
                    </div>
                  </BorderBgHigher>
                </div>
                <!-- 右中结束 -->
                <!-- 右右开始 -->
                <div class="right-right flex-column">
                  <div class="flex" style="margin-bottom:2px;">
                    <BorderBgLonger>
                      <div id="myChart1" class="charts"></div>
                    </BorderBgLonger>
                  </div>
                  <div class="flex">
                    <BorderBgLonger>
                      <div style="display:flex;height:100%;">
                        <div class="flex">
                          <IndicatingInstrument
                            title="总负载量"
                            value="30%"
                            rotate="0"
                          ></IndicatingInstrument>
                        </div>
                        <div class="flex">
                          <IndicatingInstrument
                            title="当日充电量"
                            value="15.111Kwh"
                            rotate="112"
                          ></IndicatingInstrument>
                        </div>
                        <div class="flex">
                          <IndicatingInstrument
                            title="当日放电量"
                            value="15.111Kwh"
                            rotate="45"
                          ></IndicatingInstrument>
                        </div>
                      </div>
                    </BorderBgLonger>
                  </div>
                </div>
                <!-- 右右结束 -->
              </div>
            </BorderRightLonger>
          </div>
          <!-- 右边结束 -->
        </div>
        <!-- 上结束 -->
        <!-- 下开始 -->
        <div class="flex flex-row">
          <BorderRightLongest>
            <div class="bottom-box">
              <div class="flex-column flex" style="margin-right:2px;">
                <div class="flex" style="margin-bottom:2px;">
                  <BorderBg>
                    <div
                      class="flex-column font-small"
                      style="height:100%;padding:10px 0;"
                    >
                      <!-- 电压开始 -->
                      <div class="text-bottom flex-column flex">
                        <p class="title">
                          电压及位置
                        </p>
                        <div class="flex-column flex-center flex">
                          <div class="flex-row">
                            <p class="title flex">
                              最高
                            </p>
                            <p class="data flex" style="text-align: center;">
                              3.67V
                            </p>
                            <p class="data flex" style="text-align: right;">
                              15号
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex">
                              最低
                            </p>
                            <p class="data flex" style="text-align: center;">
                              3.67V
                            </p>
                            <p class="data flex" style="text-align: right;">
                              15号
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- 电压结束 -->
                      <!-- 温度开始 -->
                      <div class="text-bottom flex-column flex">
                        <p class="title">
                          温度及位置
                        </p>
                        <div class="flex-column flex-center flex">
                          <div class="flex-row">
                            <p class="title flex">
                              最高
                            </p>
                            <p class="data flex" style="text-align: center;">
                              34℃
                            </p>
                            <p class="data flex" style="text-align: right;">
                              15号
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex">
                              最低
                            </p>
                            <p class="data flex" style="text-align: center;">
                              34℃
                            </p>
                            <p class="data flex" style="text-align: right;">
                              15号
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- 温度结束 -->
                    </div>
                  </BorderBg>
                </div>
                <div class="flex">
                  <BorderBg>
                    <div
                      class="flex-column font-small"
                      style="height:100%;padding:10px 0;"
                    >
                      <!-- 内阻开始 -->
                      <div class="text-bottom flex-column flex">
                        <p class="title">
                          内阻及位置
                        </p>
                        <div class="flex-column flex-center flex">
                          <div class="flex-row">
                            <p class="title flex">
                              最高
                            </p>
                            <p class="data flex" style="text-align: center;">
                              15.2mΩ
                            </p>
                            <p class="data flex" style="text-align: right;">
                              15号
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex">
                              最低
                            </p>
                            <p class="data flex" style="text-align: center;">
                              15.2mΩ
                            </p>
                            <p class="data flex" style="text-align: right;">
                              15号
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- 内阻结束 -->
                      <!-- 绝缘开始 -->
                      <div class="text-bottom flex-column flex">
                        <p class="title">
                          绝缘及位置
                        </p>
                        <div class="flex-column flex-center flex">
                          <div class="flex-row">
                            <p class="title flex">
                              最高
                            </p>
                            <p class="data flex" style="text-align: center;">
                              13.2kΩ
                            </p>
                            <p class="data flex" style="text-align: right;">
                              15号
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex">
                              最低
                            </p>
                            <p class="data flex" style="text-align: center;">
                              13.2kΩ
                            </p>
                            <p class="data flex" style="text-align: right;">
                              15号
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- 绝缘结束 -->
                    </div>
                  </BorderBg>
                </div>
              </div>
              <div class="bottom-right">
                <BorderBgLongest title="电池单体电压">
                  <div class="flex-row batter-box">
                    <div v-for="item in battery" :key="item.id" class="battery">
                      <Battery
                        :batteryNum="item.num"
                        :batteryValue="item.value"
                      ></Battery>
                    </div>
                  </div>
                </BorderBgLongest>
              </div>
            </div>
          </BorderRightLongest>
        </div>
        <!-- 下结束 -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usp: [
        {
          label: "SOC",
          value: "86%"
        },
        {
          label: "SOH",
          value: "86%"
        },
        {
          label: "状态",
          value: "充电"
        }
      ],
      seriesLabel: {
        normal: {
          show: true,
          // textBorderColor: "#333",
          // textBorderWidth: 2
        }
      },
      battery: [
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "111号",
          value: "3.33"
        },
        {
          num: "1号",
          value: "3.337"
        },

        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        },
        {
          num: "1号",
          value: "3.337"
        }
      ]
    };
  },
  methods: {
    getEcharts() {
      // 第一个图
      var myChart1 = this.$echarts.init(document.getElementById("myChart1"));
      myChart1.setOption({
        color: ["#F7931F", "#029246", "#D4155A"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: "2%",
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
          data: ["输出\n视在\n功率", "输出\n有功\n功率"],
          axisLabel: { color: "#46a6b5", lineHeight: 18 }, // x轴字体颜色
          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          }
        },
        series: [
          {
            name: "U",
            type: "bar",
            data: [165, 170],
            label: this.seriesLabel
          },
          {
            name: "V",
            type: "bar",
            label: this.seriesLabel,
            data: [150, 105]
          },
          {
            name: "W",
            type: "bar",
            label: this.seriesLabel,
            data: [220, 82]
          }
        ]
      });
      setTimeout(function() {
        window.onresize = () => {
          myChart1.resize();
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

.box-right {
  flex: 7;
}

.box-right .right-top {
  flex: 1;
  display: flex;
  min-height: 0;
}

.box-right .right-top .left {
  height: 100%;
  flex: 2;
  min-height: 0;
}

.box-right .right-top .right {
  flex: 5;
  min-height: 0;
}

.left .usp-content {
  padding: 0 10px;
  height: calc(80%);
  /* border-bottom: 1px solid #46A6B5; */
}

.left .usp-text {
  height: 20%;
  width: 70%;
  margin-left: 15%;
  border-top: 1px solid rgb(70, 166, 181, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left .usp-text .text-box {
  flex: 1;
  text-align: center;
}

.left .usp-text .text-box .label {
  display: inline-block;
  margin-right: 5px;
  color: #46a6b5;
}

.left .usp-text .text-box .value {
  display: inline-block;
  color: #f7931f;
}

.right-box,
.bottom-box {
  display: flex;
  width: 100%;
  height: 100%;
}

.right-box .right-right {
  flex: 3;
}

.bottom-box .bottom-right {
  flex: 7;
}

.text-bottom .title {
  color: #46a6b5;
}

.text-bottom .data {
  color: #f7931f;
}

.batter-box {
  height: 100%;
  flex-wrap: wrap;
}

.battery {
  width: 4.6%;
  height: 50%;
  margin-left: 1px;
  margin-top: 10px;
}

@media screen and (max-width: 1500px) {
  .left .usp-text .text-box p {
    font-size: 14px;
  }
}

@media screen and (min-width: 1500px) {
  .left .usp-text .text-box p {
    font-size: 16px;
  }
}
</style>
