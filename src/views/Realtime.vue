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
            <!--      usp      -->
            <BorderCenter>
              <Usp class="usp-content"></Usp>
              <div class="usp-text">
                <div class="text-box" v-for="item in usp" :key="item.id">
                  <p class="label">{{ item.name }}</p>
                  <p class="value">{{ item.value }}{{ item.unit }}</p>
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
                            <div class="flex-row" v-if="VoltageAndPositionU">
                              <p class="title flex">
                                {{ VoltageAndPositionU.valueUnits.Input.name }}
                              </p>
                              <p class="data flex">
                                {{ VoltageAndPositionU.valueUnits.Input.value
                                }}{{
                                  VoltageAndPositionU.valueUnits.Input.unit
                                }}
                              </p>
                              <p class="data flex" style="text-align: right;">
                                {{ VoltageAndPositionU.valueUnits.Output.value
                                }}{{
                                  VoltageAndPositionU.valueUnits.Output.unit
                                }}
                              </p>
                            </div>
                            <div class="flex-row" v-if="VoltageAndPositionV">
                              <p class="title flex">
                                {{ VoltageAndPositionV.valueUnits.Input.name }}
                              </p>
                              <p class="data flex">
                                {{ VoltageAndPositionV.valueUnits.Input.value
                                }}{{
                                  VoltageAndPositionV.valueUnits.Input.unit
                                }}
                              </p>
                              <p class="data flex" style="text-align: right;">
                                {{ VoltageAndPositionV.valueUnits.Output.value
                                }}{{
                                  VoltageAndPositionV.valueUnits.Output.unit
                                }}
                              </p>
                            </div>
                            <div class="flex-row" v-if="VoltageAndPositionW">
                              <p class="title flex">
                                {{ VoltageAndPositionW.valueUnits.Input.name }}
                              </p>
                              <p class="data flex">
                                {{ VoltageAndPositionW.valueUnits.Input.value
                                }}{{
                                  VoltageAndPositionW.valueUnits.Input.unit
                                }}
                              </p>
                              <p class="data flex" style="text-align: right;">
                                {{ VoltageAndPositionW.valueUnits.Output.value
                                }}{{
                                  VoltageAndPositionW.valueUnits.Output.unit
                                }}
                              </p>
                            </div>
                          </div>
                        </div>
                        <!-- 第一块结束 -->
                        <!-- 第二块开始 -->
                        <div class="text-bottom flex-column flex">
                          <div
                            class="flex-column flex-center flex"
                            v-if="OutputCurrent"
                          >
                            <div class="flex-row">
                              <p class="title flex5">
                                {{ OutputCurrent.Uare.name }}
                              </p>
                              <p class="data flex3" style="text-align: right;">
                                {{ OutputCurrent.Uare.value
                                }}{{ OutputCurrent.Uare.unit }}
                              </p>
                            </div>
                            <div class="flex-row">
                              <p class="title flex5">
                                {{ OutputCurrent.Vare.name }}
                              </p>
                              <p class="data flex3" style="text-align: right;">
                                {{ OutputCurrent.Vare.value
                                }}{{ OutputCurrent.Vare.unit }}
                              </p>
                            </div>
                            <div class="flex-row">
                              <p class="title flex5">
                                {{ OutputCurrent.Vare.name }}
                              </p>
                              <p class="data flex3" style="text-align: right;">
                                {{ OutputCurrent.Vare.value
                                }}{{ OutputCurrent.Vare.unit }}
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
                      <div
                        style="display:flex;height:90%;padding-top: 10%"
                        v-if="PCSTemp"
                      >
                        <div class="flex">
                          <Thermometer
                            :title="PCSTemp.InternalTemp.name"
                            :value="
                              PCSTemp.InternalTemp.value +
                                PCSTemp.InternalTemp.unit
                            "
                          ></Thermometer>
                        </div>
                        <div class="flex">
                          <Thermometer
                            :title="PCSTemp.RadiatorTemp.name"
                            :value="
                              PCSTemp.RadiatorTemp.value +
                                PCSTemp.RadiatorTemp.unit
                            "
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
                      v-if="FacilityInfo"
                    >
                      <!-- 第一块开始 -->
                      <p style="color:#46A6B5">
                        {{ FacilityInfo.totalname }}
                      </p>
                      <div class="text-bottom flex-column flex">
                        <div class="flex-column flex-center flex">
                          <div class="flex-row">
                            <p class="title flex5">
                              {{ FacilityInfo.valueUnits.PFU.name }}
                            </p>
                            <p class="data flex3">
                              {{ FacilityInfo.valueUnits.PFU.value
                              }}{{ FacilityInfo.valueUnits.PFU.unit }}
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex5">
                              {{ FacilityInfo.valueUnits.PFV.name }}
                            </p>
                            <p class="data flex3">
                              {{ FacilityInfo.valueUnits.PFV.value
                              }}{{ FacilityInfo.valueUnits.PFV.unit }}
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex5">
                              {{ FacilityInfo.valueUnits.PFW.name }}
                            </p>
                            <p class="data flex3">
                              {{ FacilityInfo.valueUnits.PFW.value
                              }}{{ FacilityInfo.valueUnits.PFW.unit }}
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
                              {{ FacilityInfo.valueUnits.ChargeNumberU.name }}
                            </p>
                            <p class="data flex3">
                              {{ FacilityInfo.valueUnits.ChargeNumberU.value
                              }}{{ FacilityInfo.valueUnits.ChargeNumberU.unit }}
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex5">
                              {{ FacilityInfo.valueUnits.ChargeNumberV.name }}
                            </p>
                            <p class="data flex3">
                              {{ FacilityInfo.valueUnits.ChargeNumberV.value
                              }}{{ FacilityInfo.valueUnits.ChargeNumberV.unit }}
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex5">
                              {{ FacilityInfo.valueUnits.ChargeNumberW.name }}
                            </p>
                            <p class="data flex3">
                              {{ FacilityInfo.valueUnits.ChargeNumberW.value
                              }}{{ FacilityInfo.valueUnits.ChargeNumberW.unit }}
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
                              {{
                                FacilityInfo.valueUnits.OffGridFrequency.name
                              }}
                            </p>
                            <p class="data flex3">
                              {{ FacilityInfo.valueUnits.OffGridFrequency.value
                              }}{{
                                FacilityInfo.valueUnits.OffGridFrequency.unit
                              }}
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex5">
                              {{ FacilityInfo.valueUnits.LineFrequency.name }}
                            </p>
                            <p class="data flex3">
                              {{ FacilityInfo.valueUnits.LineFrequency.value
                              }}{{ FacilityInfo.valueUnits.LineFrequency.unit }}
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex5">
                              {{
                                FacilityInfo.valueUnits.AcLeakageCurrent.name
                              }}
                            </p>
                            <p class="data flex3">
                              {{ FacilityInfo.valueUnits.AcLeakageCurrent.value
                              }}{{
                                FacilityInfo.valueUnits.AcLeakageCurrent.unit
                              }}
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
                              {{ FacilityInfo.valueUnits.DCVoltage.name }}
                            </p>
                            <p class="data flex3">
                              {{ FacilityInfo.valueUnits.DCVoltage.value
                              }}{{ FacilityInfo.valueUnits.DCVoltage.unit }}
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex5">
                              {{ FacilityInfo.valueUnits.DCCurrent.name }}
                            </p>
                            <p class="data flex3">
                              {{ FacilityInfo.valueUnits.DCCurrent.value
                              }}{{ FacilityInfo.valueUnits.DCCurrent.unit }}
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex5">
                              {{ FacilityInfo.valueUnits.TotalDCPower.name }}
                            </p>
                            <p class="data flex3">
                              {{ FacilityInfo.valueUnits.TotalDCPower.value
                              }}{{ FacilityInfo.valueUnits.TotalDCPower.unit }}
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
                              {{ FacilityInfo.valueUnits.AndOffTheGrid.name }}
                            </p>
                            <p class="data flex3">
                              {{ FacilityInfo.valueUnits.AndOffTheGrid.value
                              }}{{ FacilityInfo.valueUnits.AndOffTheGrid.unit }}
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex5">
                              {{
                                FacilityInfo.valueUnits.StateOfTheRemote.name
                              }}
                            </p>
                            <p class="data flex3">
                              {{ FacilityInfo.valueUnits.StateOfTheRemote.value
                              }}{{
                                FacilityInfo.valueUnits.StateOfTheRemote.unit
                              }}
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
                        <div class="flex" v-if="TotalLoad">
                          <IndicatingInstrument
                            :title="TotalLoad.data.name"
                            :value="TotalLoad.data.value + TotalLoad.data.unit"
                            :rotate="TotalLoad.scale + ''"
                          ></IndicatingInstrument>
                        </div>
                        <div class="flex" v-if="DailyCharge">
                          <IndicatingInstrument
                            :title="DailyCharge.data.name"
                            :value="
                              DailyCharge.data.value + DailyCharge.data.unit
                            "
                            :rotate="DailyCharge.scale + ''"
                          ></IndicatingInstrument>
                        </div>
                        <div class="flex" v-if="DailyDischarge">
                          <IndicatingInstrument
                            :title="DailyDischarge.data.name"
                            :value="
                              DailyDischarge.data.value +
                                DailyDischarge.data.unit
                            "
                            :rotate="DailyDischarge.scale + ''"
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
                      <div
                        class="text-bottom flex-column flex"
                        v-if="VoltageAndPosition"
                      >
                        <p class="title">
                          {{ VoltageAndPosition.totalname }}
                        </p>
                        <div class="flex-column flex-center flex">
                          <div class="flex-row">
                            <p class="title flex">
                              {{ VoltageAndPosition.valueUnits.Max.name }}
                            </p>
                            <p class="data flex" style="text-align: center;">
                              {{ VoltageAndPosition.valueUnits.Max.value.value
                              }}{{
                                VoltageAndPosition.valueUnits.Max.value.unit
                              }}
                            </p>
                            <p class="data flex" style="text-align: right;">
                              {{
                                VoltageAndPosition.valueUnits.Max.position
                                  .value
                              }}{{
                                VoltageAndPosition.valueUnits.Max.position.unit
                              }}
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex">
                              {{ VoltageAndPosition.valueUnits.Min.name }}
                            </p>
                            <p class="data flex" style="text-align: center;">
                              {{ VoltageAndPosition.valueUnits.Min.value.value
                              }}{{
                                VoltageAndPosition.valueUnits.Min.value.unit
                              }}
                            </p>
                            <p class="data flex" style="text-align: right;">
                              {{
                                VoltageAndPosition.valueUnits.Min.position
                                  .value
                              }}{{
                                VoltageAndPosition.valueUnits.Min.position.unit
                              }}
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- 电压结束 -->
                      <!-- 温度开始 -->
                      <div
                        class="text-bottom flex-column flex"
                        v-if="TempAndPosition"
                      >
                        <p class="title">
                          {{ TempAndPosition.totalname }}
                        </p>
                        <div class="flex-column flex-center flex">
                          <div class="flex-row">
                            <p class="title flex">
                              {{ TempAndPosition.valueUnits.Max.name }}
                            </p>
                            <p class="data flex" style="text-align: center;">
                              {{ TempAndPosition.valueUnits.Max.value.value
                              }}{{ TempAndPosition.valueUnits.Max.value.unit }}
                            </p>
                            <p class="data flex" style="text-align: right;">
                              {{ TempAndPosition.valueUnits.Max.position.value
                              }}{{
                                TempAndPosition.valueUnits.Max.position.unit
                              }}
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex">
                              {{ TempAndPosition.valueUnits.Min.name }}
                            </p>
                            <p class="data flex" style="text-align: center;">
                              {{ TempAndPosition.valueUnits.Min.value.value
                              }}{{ TempAndPosition.valueUnits.Min.value.unit }}
                            </p>
                            <p class="data flex" style="text-align: right;">
                              {{ TempAndPosition.valueUnits.Min.position.value
                              }}{{
                                TempAndPosition.valueUnits.Min.position.unit
                              }}
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
                      <div
                        class="text-bottom flex-column flex"
                        v-if="InternalResistanceAndPosition"
                      >
                        <p class="title">
                          {{ InternalResistanceAndPosition.totalname }}
                        </p>
                        <div class="flex-column flex-center flex">
                          <div class="flex-row">
                            <p class="title flex">
                              {{
                                InternalResistanceAndPosition.valueUnits.Max
                                  .name
                              }}
                            </p>
                            <p class="data flex" style="text-align: center;">
                              {{
                                InternalResistanceAndPosition.valueUnits.Max
                                  .value.value
                              }}{{
                                InternalResistanceAndPosition.valueUnits.Max
                                  .value.unit
                              }}
                            </p>
                            <p class="data flex" style="text-align: right;">
                              {{
                                InternalResistanceAndPosition.valueUnits.Max
                                  .position.value
                              }}{{
                                InternalResistanceAndPosition.valueUnits.Max
                                  .position.unit
                              }}
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex">
                              {{
                                InternalResistanceAndPosition.valueUnits.Min
                                  .name
                              }}
                            </p>
                            <p class="data flex" style="text-align: center;">
                              {{
                                InternalResistanceAndPosition.valueUnits.Min
                                  .value.value
                              }}{{
                                InternalResistanceAndPosition.valueUnits.Min
                                  .value.unit
                              }}
                            </p>
                            <p class="data flex" style="text-align: right;">
                              {{
                                InternalResistanceAndPosition.valueUnits.Min
                                  .position.value
                              }}{{
                                InternalResistanceAndPosition.valueUnits.Min
                                  .position.unit
                              }}
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- 内阻结束 -->
                      <!-- 绝缘开始 -->
                      <div
                        class="text-bottom flex-column flex"
                        v-if="InsulationAndPosition"
                      >
                        <p class="title">
                          {{ InsulationAndPosition.totalname }}
                        </p>
                        <div class="flex-column flex-center flex">
                          <div class="flex-row">
                            <p class="title flex">
                              {{ InsulationAndPosition.valueUnits.Max.name }}
                            </p>
                            <p class="data flex" style="text-align: center;">
                              {{
                                InsulationAndPosition.valueUnits.Max.value
                                  .value
                              }}{{
                                InsulationAndPosition.valueUnits.Max.value.unit
                              }}
                            </p>
                            <p class="data flex" style="text-align: right;">
                              {{
                                InsulationAndPosition.valueUnits.Max.position
                                  .value
                              }}{{
                                InsulationAndPosition.valueUnits.Max.position
                                  .unit
                              }}
                            </p>
                          </div>
                          <div class="flex-row">
                            <p class="title flex">
                              {{ InsulationAndPosition.valueUnits.Min.name }}
                            </p>
                            <p class="data flex" style="text-align: center;">
                              {{
                                InsulationAndPosition.valueUnits.Min.value
                                  .value
                              }}{{
                                InsulationAndPosition.valueUnits.Min.value.unit
                              }}
                            </p>
                            <p class="data flex" style="text-align: right;">
                              {{
                                InsulationAndPosition.valueUnits.Min.position
                                  .value
                              }}{{
                                InsulationAndPosition.valueUnits.Min.position
                                  .unit
                              }}
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
                  <div style="height: 100%;" class="infinite-list-wrapper">
                    <ul
                      class="flex-row batter-box"
                      v-infinite-scroll="load"
                      infinite-scroll-disabled="disabled"
                    >
                      <li
                        v-for="(item, index) in battery"
                        :key="index"
                        class="battery"
                      >
                        <Battery
                          :batteryNum="item.bATTERY_INDEX + '号'"
                          :batteryValue="item.vOLTAGE + ''"
                        ></Battery>
                      </li>
                    </ul>
                    <p v-if="loading" class="tips">加载中...</p>
                    <p v-if="noMore" class="tips">没有更多了</p>
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
import { mapState } from "vuex";
export default {
  data() {
    return {
      usp: "",
      VoltageAndPosition: "",
      TempAndPosition: "",
      InternalResistanceAndPosition: "",
      InsulationAndPosition: "",
      VoltageAndPositionU: "",
      VoltageAndPositionV: "",
      VoltageAndPositionW: "",
      OutputCurrent: "",
      PCSTemp: "",
      FacilityInfo: "",
      OutputPower: "",
      TotalLoad: "",
      DailyCharge: "",
      DailyDischarge: "",
      seriesLabel: {
        normal: {
          show: true
          // textBorderColor: "#333",
          // textBorderWidth: 2
        }
      },
      SingleCellVoltage: "",
      count: 0,
      maxCount: "",
      loading: false,
      battery: ""
    };
  },
  computed: {
    ...mapState("nav", ["currentDevice"]),
    noMore() {
      return this.count > this.maxCount;
    },
    disabled() {
      return this.loading || this.noMore;
    }
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
          },
          formatter(value) {
            let str = value[0].name + "<br/>";
            value.forEach(item => {
              str +=
                item.marker +
                item.seriesName +
                ": " +
                item.data +
                "KVA" +
                "<br/>";
            });
            return str;
          }
        },
        grid: {
          left: "2%",
          right: "5%",
          top: "10%",
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
            show: false
          }
        },
        yAxis: {
          type: "category",
          inverse: true,
          data: ["输出\n视在\n功率", "输出\n有功\n功率"],
          axisLabel: { color: "#46a6b5", lineHeight: 14 }, // x轴字体颜色
          axisLine: {
            lineStyle: { color: "#46a6b5" } // x轴坐标轴颜色
          }
        },
        series: [
          {
            name: this.OutputPower.SeriesData[0].name,
            type: "bar",
            data: [
              this.OutputPower.SeriesData[0].data[0].value,
              this.OutputPower.SeriesData[0].data[1].value
            ]
          },
          {
            name: this.OutputPower.SeriesData[1].name,
            type: "bar",
            data: [
              this.OutputPower.SeriesData[1].data[0].value,
              this.OutputPower.SeriesData[1].data[1].value
            ]
          },
          {
            name: this.OutputPower.SeriesData[2].name,
            type: "bar",
            data: [
              this.OutputPower.SeriesData[2].data[0].value,
              this.OutputPower.SeriesData[2].data[1].value
            ]
          }
        ]
      });
      setTimeout(function() {
        window.onresize = () => {
          myChart1.resize();
        };
      }, 200);
    },
    getData() {
      let url = `/api/Statement/GetRealTimeStatus?SystemToken=0&DeviceSystemID=${this.currentDevice.SystemID}`;
      this.$axios
        .get(url)
        .then(res => {
          if (res.data.code === 0) {
            let data = res.data.data;
            this.usp = [];
            this.usp.push(data.SOC);
            this.usp.push(data.SOH);
            this.usp.push(data.TotalState);
            this.VoltageAndPosition = data.VoltageAndPosition;
            this.TempAndPosition = data.TempAndPosition;
            this.InsulationAndPosition = data.InsulationAndPosition;
            this.InternalResistanceAndPosition =
              data.InternalResistanceAndPosition;
            this.VoltageAndPositionU = data.VoltageAndPositionU;
            this.VoltageAndPositionV = data.VoltageAndPositionV;
            this.VoltageAndPositionW = data.VoltageAndPositionW;
            this.OutputCurrent = data.OutputCurrent;
            this.PCSTemp = data.PCSTemp;
            this.FacilityInfo = data.FacilityInfo;
            this.OutputPower = data.OutputPower;
            this.TotalLoad = data.TotalLoad;
            this.DailyDischarge = data.DailyDischarge;
            this.DailyCharge = data.DailyCharge;
            this.SingleCellVoltage = data.SingleCellVoltage;
            if (this.SingleCellVoltage.length >= 42) {
              this.battery = this.SingleCellVoltage.slice(0, 42);
            } else if (this.SingleCellVoltage.length <= 42) {
              this.battery = this.SingleCellVoltage.slice(0);
            }

            this.maxCount = Math.ceil(this.SingleCellVoltage.length / 42) - 1;
            this.$nextTick(() => {
              this.getEcharts();
            });
          }
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.error(err);
        });
    },
    load() {
      this.loading = true;
      this.count++;
      if (this.count < this.maxCount) {
        this.battery = [
          ...this.battery,
          ...this.SingleCellVoltage.slice(
            42 * this.count,
            42 * (this.count + 1)
          )
        ];
      } else if (this.count === this.maxCount) {
        this.battery = [
          ...this.battery,
          ...this.SingleCellVoltage.slice(42 * this.count)
        ];
      }
      this.loading = false;
    }
  },
  mounted() {
    this.$(".batter-box").niceScroll({
      cursorborder: "none",
      hwacceleration: true,
      mousescrollstep: 30,
      scrollspeed: 40,
      preventmultitouchscrolling: true,
      autohidemode: "leave",
      hidecursordelay: 100
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
  width: 80%;
  margin-left: 10%;
  border-top: 1px solid rgba(70, 166, 181, 0.4);
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
  height: 93%;
  flex-wrap: wrap;
  overflow: auto;
}
.battery {
  width: 4.75%;
  height: calc(50% - 10px);
  /*margin-left: 1px;*/
  margin-top: 10px;
}
.tips {
  color: #46a6b5;
  font-size: 12px;
  text-align: center;
  margin-top: 5px;
}
/deep/.happy-scroll-container {
  height: 100% !important;
  width: 100% !important;
}
/deep/.happy-scroll-container .happy-scroll-content {
  width: 100%;
  display: block;
  height: 100%;
}
/deep/.el-scrollbar__view {
  height: 100%;
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
/*css主要部分的样式*/
/*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/

/*::-webkit-scrollbar {*/
/*  width: 6px; !*对垂直流动条有效*!*/
/*  height: 6px; !*对水平流动条有效*!*/
/*}*/

/*!*定义滚动条的轨道颜色、内阴影及圆角*!*/
/*::-webkit-scrollbar-track {*/
/*  border-radius: 4px;*/
/*  opacity: 0;*/
/*  transition: opacity 0.12s ease-out;*/
/*}*/

/*!*定义滑块颜色、内阴影及圆角*!*/
/*::-webkit-scrollbar-thumb {*/
/*  cursor: pointer;*/
/*  border-radius: 4px;*/
/*  background-color: rgba(144, 147, 153, 0.3);*/
/*  transition: background-color 0.3s;*/
/*}*/
/*!*定义两端按钮的样式*!*/
/*::-webkit-scrollbar-button {*/
/*  opacity: 0;*/
/*}*/
</style>
