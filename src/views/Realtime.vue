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
              <!-- 右左开始 -->
              <div class="right-box">
                <div class="flex-column flex" style="margin-right:2px;">
                  <div class="flex" style="margin-bottom:2px;">
                    <BorderBg></BorderBg>
                  </div>
                  <div class="flex">
                    <BorderBg>
                      <div style="display:flex;height:100%">
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
                <div class="flex" style="margin-right:2px;">
                  <BorderBgHigher></BorderBgHigher>
                </div>
                <div class="right-right flex-column">
                  <div class="flex" style="margin-bottom:2px;">
                    <BorderBgLonger></BorderBgLonger>
                  </div>
                  <div class="flex">
                    <BorderBgLonger>
                      <div style="display:flex;height:100%;">
                        <div class="flex">
                          <IndicatingInstrument
                            title="总负载量"
                            value="30%"
                            rotate="-10"
                          ></IndicatingInstrument>
                        </div>
                        <div class="flex">
                          <IndicatingInstrument
                            title="当日充电量"
                            value="15.111Kwh"
                            rotate="30"
                          ></IndicatingInstrument>
                        </div>
                        <div class="flex">
                          <IndicatingInstrument
                            title="当日放电量"
                            value="15.111Kwh"
                            rotate="55"
                          ></IndicatingInstrument>
                        </div>
                      </div>
                    </BorderBgLonger>
                  </div>
                </div>
              </div>
              <!-- 右左结束 -->
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
                  <BorderBg></BorderBg>
                </div>
                <div class="flex">
                  <BorderBg></BorderBg>
                </div>
              </div>
              <div class="bottom-right">
                <BorderBgLongest></BorderBgLongest>
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
      ]
    };
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
}
.box-right .right-top .left {
  height: 100%;
  flex: 2;
}
.box-right .right-top .right {
  flex: 5;
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
