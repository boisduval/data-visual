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
          <div style="position: absolute;bottom: 10px;left: 15px">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="190px"
              height="110px"
              viewBox="0 0 190 110"
              enable-background="new 0 0 190 110"
              xml:space="preserve"
            >
              <g id="图层_2">
                <text
                  transform="matrix(1 0 0 1 11.2148 91.1436)"
                  fill="#FFFFFF"
                  font-family="'MicrosoftYaHei-Bold'"
                  font-size="60"
                >
                  16
                </text>
                <text
                  transform="matrix(1 0 0 1 86.7148 55)"
                  fill="#FFFFFF"
                  font-family="'MicrosoftYaHei-Bold'"
                  font-size="14"
                >
                  ℃
                </text>
                <text
                  transform="matrix(1 0 0 1 35.7148 28.1436)"
                  fill="#FFFFFF"
                  font-family="'MicrosoftYaHei-Bold'"
                  font-size="14"
                >
                  浙江 杭州
                </text>
                <path
                  fill="#009DD9"
                  d="M27.315,15.496c-1.127-1.863-3.115-3.036-5.291-3.12h-0.556c-1.986,0.076-3.821,1.083-4.951,2.719
		c-1.168,1.669-1.497,3.787-0.888,5.731c0.11,0.336,0.25,0.661,0.417,0.973l4.918,9.416c0.143,0.297,0.445,0.485,0.774,0.483
		c0.33,0.001,0.631-0.188,0.773-0.485l5.106-9.764l0.011-0.021C28.544,19.528,28.425,17.291,27.315,15.496L27.315,15.496z
		 M21.781,21.228c-1.305,0-2.363-1.058-2.363-2.364c0-1.305,1.058-2.363,2.363-2.363c1.306,0,2.364,1.059,2.364,2.363l0,0
		C24.145,20.169,23.086,21.228,21.781,21.228z"
                />
                <text
                  transform="matrix(1 0 0 1 105.7148 72.5)"
                  fill="#FFFFFF"
                  font-family="'MicrosoftYaHei-Bold'"
                  font-size="12"
                >
                  南风 2级
                </text>
                <path
                  fill="#009DD9"
                  d="M166,52.072c0,3.826-3.102,6.928-6.928,6.928h-46.145c-3.826,0-6.928-3.102-6.928-6.928v-0.144
		c0-3.826,3.102-6.928,6.928-6.928h46.145c3.826,0,6.928,3.102,6.928,6.928V52.072z"
                />
                <text
                  transform="matrix(1 0 0 1 106 88.5)"
                  fill="#FFFFFF"
                  font-family="'MicrosoftYaHei-Bold'"
                  font-size="12"
                >
                  相对湿度 38%
                </text>
                <text
                  transform="matrix(1 0 0 1 123.2148 56)"
                  fill="#FFFFFF"
                  font-family="'MicrosoftYaHei-Bold'"
                  font-size="10"
                >
                  60 良
                </text>
              </g>
              <g id="天气状态">
                <g id="晴天">
                  <path
                    fill="#FFFFFF"
                    d="M135.001,15.222c-5.393,0-9.778,4.386-9.778,9.778s4.386,9.778,9.778,9.778
			c5.392,0,9.777-4.387,9.777-9.778S140.393,15.222,135.001,15.222z M135.001,33c-4.412,0-8.001-3.588-8.001-8
			c0-4.411,3.589-8,8.001-8c4.41,0,7.999,3.589,7.999,8C143,29.411,139.411,33,135.001,33z M124.334,25
			c0-0.491-0.397-0.888-0.888-0.889h-0.001h-3.556c-0.491,0-0.89,0.398-0.89,0.889s0.398,0.888,0.89,0.889h3.556
			c0.489,0,0.888-0.397,0.889-0.888C124.334,25,124.334,25,124.334,25z M150.111,24.111h-3.556c-0.49,0-0.889,0.397-0.889,0.888
			c0,0.491,0.397,0.889,0.888,0.89c0.001,0,0.001,0,0.001,0h3.556c0.491,0,0.889-0.398,0.889-0.89
			C151,24.508,150.603,24.111,150.111,24.111L150.111,24.111z M126.203,32.541l-2.517,2.515c-0.347,0.348-0.347,0.91,0,1.257
			c0.348,0.347,0.909,0.347,1.258,0l0,0l2.515-2.515c0.348-0.347,0.348-0.91,0-1.257C127.112,32.193,126.549,32.193,126.203,32.541z
			 M143.17,17.719c0.236,0,0.462-0.094,0.628-0.261l2.517-2.516c0.347-0.347,0.347-0.91,0-1.256c-0.348-0.347-0.909-0.347-1.258,0
			l-2.515,2.515c-0.348,0.348-0.348,0.91,0,1.257C142.709,17.625,142.935,17.719,143.17,17.719L143.17,17.719z M135.001,35.666
			c-0.491,0-0.889,0.397-0.89,0.888c0,0,0,0,0,0.001v3.555c0,0.491,0.397,0.889,0.889,0.889s0.889-0.397,0.89-0.889v0v-3.555
			C135.89,36.064,135.492,35.667,135.001,35.666C135.001,35.666,135.001,35.666,135.001,35.666z M135.001,14.333
			c0.49,0,0.888-0.397,0.889-0.888c0,0,0,0,0-0.001V9.888C135.889,9.397,135.491,9,135,9c-0.491,0-0.888,0.398-0.889,0.888v3.556
			c0,0.491,0.397,0.889,0.888,0.889C134.999,14.333,135,14.333,135.001,14.333z M143.798,32.541c-0.346-0.347-0.909-0.347-1.256,0
			c-0.348,0.347-0.348,0.91,0,1.257l2.515,2.515c0.349,0.347,0.91,0.347,1.258,0c0.347-0.347,0.347-0.909,0-1.257l0,0
			L143.798,32.541z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M126.203,17.458c0.346,0.347,0.909,0.347,1.256,0c0.348-0.347,0.348-0.909,0-1.257l-2.515-2.515
			c-0.349-0.347-0.91-0.347-1.258,0c-0.347,0.347-0.347,0.91,0,1.256L126.203,17.458z"
                  />
                </g>
                <path
                  id="阴天"
                  display="none"
                  fill="#FFFFFF"
                  d="M149.313,29.032c-0.848-1.03-1.917-1.718-3.084-1.999
		c-0.183-2.487-1.085-4.798-2.587-6.588c-1.271-1.513-2.856-2.518-4.582-2.928l-0.461-2.052c-0.002-0.013-0.006-0.026-0.009-0.039
		c-0.933-3.667-3.778-6.246-7.082-6.417c-3.983-0.206-7.407,3.12-7.999,7.574c-0.973,0.205-1.877,0.726-2.614,1.522
		c-0.997,1.077-1.58,2.536-1.641,4.11c-0.063,1.598,0.408,3.122,1.326,4.291c0.417,0.531,0.903,0.961,1.438,1.279
		c-0.577,0.389-1.101,0.893-1.546,1.497C119.523,30.57,119,32.221,119,33.932c0,3.897,2.678,7.068,5.969,7.068h20.086
		c1.575,0,3.065-0.736,4.195-2.073c1.128-1.336,1.75-3.104,1.75-4.978C151,32.102,150.4,30.356,149.313,29.032z M121.458,22.33
		c0.035-0.903,0.369-1.741,0.942-2.359c0.572-0.618,1.319-0.949,2.101-0.933c0.607,0.013,1.108-0.541,1.123-1.242
		c0-0.011,0.001-0.022,0.002-0.034c0.002-0.033,0.004-0.067,0.005-0.101c0.137-3.523,2.729-6.262,5.778-6.104
		c2.356,0.122,4.388,1.957,5.059,4.569l0.27,1.201c-3.111,0.22-5.882,2.335-7.353,5.535c-0.611-0.389-1.303-0.599-2.02-0.599
		c-1.867,0-3.458,1.427-4.032,3.408c-0.424-0.183-0.806-0.481-1.118-0.878C121.691,24.125,121.422,23.251,121.458,22.33z
		 M147.671,37.145c-0.71,0.841-1.64,1.305-2.616,1.305h-20.086c-2.074,0-3.762-2.026-3.762-4.517c0-2.249,1.395-4.172,3.244-4.475
		c0.307-0.05,0.582-0.247,0.757-0.543c0.175-0.296,0.233-0.664,0.163-1.012c-0.041-0.197-0.061-0.398-0.061-0.599
		c0-1.372,0.922-2.488,2.055-2.488c0.615,0,1.192,0.329,1.585,0.903c0.252,0.368,0.657,0.547,1.057,0.466s0.728-0.409,0.856-0.854
		c0.942-3.272,3.519-5.471,6.411-5.471c3.739,0,6.781,3.641,6.781,8.116c0,0.04,0.001,0.078,0.002,0.116
		c0,0.017,0.001,0.035,0.001,0.052c-0.013,0.701,0.467,1.282,1.072,1.301c0.978,0.032,1.895,0.509,2.582,1.346
		c0.696,0.848,1.08,1.97,1.08,3.159C148.793,35.153,148.395,36.288,147.671,37.145z"
                />
                <g id="多云" display="none">
                  <path
                    display="inline"
                    fill="#FFFFFF"
                    d="M126.749,12.343c0.112,0.28,0.38,0.45,0.662,0.45c0.089,0,0.181-0.017,0.269-0.053
			c0.365-0.15,0.541-0.57,0.393-0.938l-0.947-2.352c-0.148-0.369-0.564-0.546-0.931-0.396c-0.365,0.149-0.541,0.57-0.393,0.938
			L126.749,12.343z"
                  />
                  <path
                    display="inline"
                    fill="#FFFFFF"
                    d="M119.501,16.993l2.318,0.987c0.091,0.039,0.186,0.057,0.278,0.057
			c0.278,0,0.543-0.166,0.658-0.44c0.153-0.366-0.017-0.789-0.38-0.944l-2.319-0.987c-0.363-0.155-0.782,0.017-0.936,0.383
			C118.967,16.415,119.138,16.838,119.501,16.993z"
                  />
                  <path
                    display="inline"
                    fill="#FFFFFF"
                    d="M122.315,25.412c0.365-0.15,0.541-0.57,0.394-0.938
			c-0.148-0.369-0.565-0.546-0.931-0.396l-2.333,0.955c-0.365,0.15-0.541,0.57-0.393,0.938c0.112,0.28,0.38,0.45,0.662,0.45
			c0.089,0,0.181-0.017,0.269-0.053L122.315,25.412z"
                  />
                  <path
                    display="inline"
                    fill="#FFFFFF"
                    d="M139.949,18.133c0.09,0,0.181-0.017,0.269-0.053l2.264-0.927
			c0.365-0.15,0.541-0.57,0.393-0.938s-0.564-0.546-0.931-0.396l-2.264,0.927c-0.365,0.149-0.541,0.57-0.393,0.938
			C139.399,17.963,139.667,18.133,139.949,18.133z"
                  />
                  <path
                    display="inline"
                    fill="#FFFFFF"
                    d="M134.43,12.815c0.091,0.039,0.186,0.057,0.278,0.057c0.278,0,0.543-0.165,0.658-0.44
			l0.979-2.338c0.154-0.367-0.017-0.789-0.38-0.944s-0.782,0.017-0.936,0.383l-0.979,2.338
			C133.896,12.238,134.066,12.661,134.43,12.815z"
                  />
                  <path
                    display="inline"
                    fill="#FFFFFF"
                    d="M149.42,31.521c-0.854-0.879-1.951-1.442-3.142-1.621
			c-0.25-4.412-3.808-7.945-8.205-8.115c0.018-0.207,0.027-0.416,0.027-0.624c0-3.967-3.2-7.193-7.133-7.193
			c-3.934,0-7.134,3.227-7.134,7.193c0,2.025,0.82,3.899,2.246,5.243c-1.213,0.655-2.04,1.946-2.04,3.428
			c0,0.061,0.001,0.121,0.004,0.181c-2.371,0.654-4.083,2.858-4.083,5.395c0,3.083,2.49,5.592,5.551,5.592h19.962
			c1.458,0,2.839-0.579,3.889-1.63c1.056-1.059,1.638-2.461,1.638-3.949C151,33.955,150.439,32.57,149.42,31.521z M125.263,21.16
			c0-3.172,2.56-5.752,5.705-5.752s5.704,2.581,5.704,5.752c0,0.231-0.014,0.462-0.041,0.69c-2.842,0.375-5.316,2.167-6.573,4.764
			c-0.631-0.433-1.381-0.669-2.164-0.669c-0.03,0-0.061,0-0.091,0.001C126.208,24.875,125.263,23.105,125.263,21.16z
			 M148.355,38.348c-0.78,0.781-1.804,1.211-2.882,1.211h-19.962c-2.272,0-4.122-1.863-4.122-4.152c0-2.064,1.526-3.832,3.551-4.112
			c0.2-0.027,0.38-0.139,0.493-0.308c0.114-0.168,0.151-0.377,0.104-0.576c-0.046-0.19-0.068-0.385-0.068-0.58
			c0-1.227,0.899-2.245,2.069-2.419c0.036,0.005,0.072,0.009,0.108,0.009c0.074,0,0.147-0.012,0.218-0.035
			c0.01,0,0.02-0.001,0.029-0.001c0.732,0,1.418,0.329,1.882,0.902c0.163,0.203,0.424,0.3,0.679,0.254
			c0.256-0.046,0.466-0.228,0.551-0.476c0.986-2.9,3.694-4.849,6.736-4.849c3.928,0,7.122,3.221,7.122,7.179
			c0,0.03,0.001,0.06,0.002,0.089c0,0.02,0.001,0.039,0.001,0.059c-0.009,0.396,0.302,0.724,0.694,0.735
			c1.077,0.029,2.085,0.473,2.84,1.249c0.755,0.778,1.171,1.805,1.171,2.892C149.571,36.522,149.14,37.562,148.355,38.348z"
                  />
                </g>
                <path
                  id="大雨"
                  display="none"
                  fill="#FFFFFF"
                  d="M144.777,17.209c-0.122,0-0.246,0.013-0.369,0.021
		C143.237,12.408,139.406,9,135,9c-3.679-0.001-7.045,2.383-8.711,6.168c-0.061-0.001-0.117-0.012-0.178-0.012
		c-3.922,0-7.111,3.682-7.111,8.208c0,4.526,3.189,8.208,7.111,8.208h18.666c3.431,0,6.223-3.222,6.223-7.181
		C151,20.43,148.208,17.209,144.777,17.209z M144.777,29.521h-18.666c-2.941,0-5.334-2.761-5.334-6.156s2.393-6.155,5.334-6.155
		c0.207,0.001,0.414,0.016,0.619,0.045c0.018,0.003,0.034-0.006,0.052-0.005c0.116-0.004,0.23-0.022,0.343-0.054
		c0.102-0.054,0.197-0.119,0.288-0.193c0.038-0.043,0.073-0.09,0.104-0.14c0.041-0.054,0.076-0.112,0.105-0.173
		c0.007-0.018,0.021-0.029,0.027-0.047c1.262-3.391,4.152-5.589,7.35-5.589c3.833,0,7.136,3.152,7.853,7.494v0.008
		c0.003,0.016,0.013,0.027,0.016,0.043c0.022,0.11,0.061,0.214,0.112,0.31c0.023,0.035,0.048,0.069,0.075,0.1
		c0.114,0.152,0.263,0.265,0.43,0.325c0.047,0.014,0.095,0.024,0.143,0.029c0.032,0.009,0.063,0.015,0.096,0.02
		c0.057,0,0.112-0.006,0.168-0.018c0,0,0.002,0,0.004-0.002h0.003c0.289-0.066,0.583-0.1,0.878-0.1c2.451,0,4.444,2.302,4.444,5.13
		c0,2.829-1.992,5.129-4.443,5.129V29.521z M129.667,33.76c-0.424-0.285-0.967-0.119-1.214,0.37
		c-0.001,0.002-0.002,0.004-0.003,0.006l-2.666,5.33c-0.243,0.492-0.095,1.119,0.332,1.4c0.423,0.278,0.962,0.111,1.208-0.374
		l2.666-5.33C130.236,34.671,130.091,34.044,129.667,33.76z M136.777,33.76c-0.423-0.284-0.966-0.119-1.213,0.37
		c-0.001,0.002-0.002,0.004-0.003,0.006l-2.665,5.33c-0.243,0.492-0.095,1.119,0.332,1.4c0.424,0.278,0.962,0.111,1.208-0.374
		l2.666-5.33C137.349,34.671,137.203,34.043,136.777,33.76z M143.889,33.76c-0.423-0.285-0.966-0.119-1.213,0.37
		c-0.001,0.002-0.002,0.004-0.003,0.006l-2.665,5.33c-0.243,0.492-0.095,1.119,0.332,1.4c0.423,0.278,0.962,0.111,1.208-0.374
		l2.668-5.33C144.461,34.671,144.314,34.043,143.889,33.76C143.889,33.76,143.889,33.76,143.889,33.76z"
                />
                <path
                  id="中雨"
                  display="none"
                  fill="#FFFFFF"
                  d="M144.777,17.209c-0.122,0-0.246,0.013-0.369,0.021
		C143.237,12.408,139.406,9,135,9c-3.679-0.001-7.045,2.383-8.711,6.168c-0.061-0.001-0.117-0.012-0.178-0.012
		c-3.922,0-7.111,3.682-7.111,8.208c0,4.526,3.189,8.208,7.111,8.208h18.666c3.431,0,6.223-3.222,6.223-7.181
		C151,20.43,148.208,17.209,144.777,17.209z M144.777,29.521h-18.666c-2.941,0-5.334-2.761-5.334-6.156s2.393-6.155,5.334-6.155
		c0.207,0.001,0.414,0.016,0.619,0.045c0.018,0.003,0.034-0.006,0.052-0.005c0.116-0.004,0.23-0.022,0.343-0.054
		c0.102-0.054,0.197-0.119,0.288-0.193c0.038-0.043,0.073-0.09,0.104-0.14c0.041-0.054,0.076-0.112,0.105-0.173
		c0.007-0.018,0.021-0.029,0.027-0.047c1.262-3.391,4.152-5.589,7.35-5.589c3.833,0,7.136,3.152,7.853,7.494v0.008
		c0.003,0.016,0.013,0.027,0.016,0.043c0.022,0.11,0.061,0.214,0.112,0.31c0.023,0.035,0.048,0.069,0.075,0.1
		c0.114,0.152,0.263,0.265,0.43,0.325c0.047,0.014,0.095,0.024,0.143,0.029c0.032,0.009,0.063,0.015,0.096,0.02
		c0.057,0,0.112-0.006,0.168-0.018c0,0,0.002,0,0.004-0.002h0.003c0.289-0.066,0.583-0.1,0.878-0.1c2.451,0,4.444,2.302,4.444,5.13
		c0,2.829-1.992,5.129-4.443,5.129V29.521z M131.777,33.76c-0.423-0.284-0.966-0.119-1.213,0.37
		c-0.001,0.002-0.002,0.004-0.003,0.006l-2.665,5.33c-0.243,0.492-0.095,1.119,0.332,1.4c0.424,0.278,0.962,0.111,1.208-0.374
		l2.666-5.33C132.349,34.671,132.203,34.043,131.777,33.76z M138.889,33.76c-0.423-0.285-0.966-0.119-1.213,0.37
		c-0.001,0.002-0.002,0.004-0.003,0.006l-2.665,5.33c-0.243,0.492-0.095,1.119,0.332,1.4c0.423,0.278,0.962,0.111,1.208-0.374
		l2.668-5.33C139.461,34.671,139.314,34.043,138.889,33.76C138.889,33.76,138.889,33.76,138.889,33.76z"
                />
                <path
                  id="小雨"
                  display="none"
                  fill="#FFFFFF"
                  d="M144.777,17.209c-0.122,0-0.246,0.013-0.369,0.021
		C143.237,12.408,139.406,9,135,9c-3.679-0.001-7.045,2.383-8.711,6.168c-0.061-0.001-0.117-0.012-0.178-0.012
		c-3.922,0-7.111,3.682-7.111,8.208c0,4.526,3.189,8.208,7.111,8.208h18.666c3.431,0,6.223-3.222,6.223-7.181
		C151,20.43,148.208,17.209,144.777,17.209z M144.777,29.521h-18.666c-2.941,0-5.334-2.761-5.334-6.156s2.393-6.155,5.334-6.155
		c0.207,0.001,0.414,0.016,0.619,0.045c0.018,0.003,0.034-0.006,0.052-0.005c0.116-0.004,0.23-0.022,0.343-0.054
		c0.102-0.054,0.197-0.119,0.288-0.193c0.038-0.043,0.073-0.09,0.104-0.14c0.041-0.054,0.076-0.112,0.105-0.173
		c0.007-0.018,0.021-0.029,0.027-0.047c1.262-3.391,4.152-5.589,7.35-5.589c3.833,0,7.136,3.152,7.853,7.494v0.008
		c0.003,0.016,0.013,0.027,0.016,0.043c0.022,0.11,0.061,0.214,0.112,0.31c0.023,0.035,0.048,0.069,0.075,0.1
		c0.114,0.152,0.263,0.265,0.43,0.325c0.047,0.014,0.095,0.024,0.143,0.029c0.032,0.009,0.063,0.015,0.096,0.02
		c0.057,0,0.112-0.006,0.168-0.018c0,0,0.002,0,0.004-0.002h0.003c0.289-0.066,0.583-0.1,0.878-0.1c2.451,0,4.444,2.302,4.444,5.13
		c0,2.829-1.992,5.129-4.443,5.129V29.521z M136.777,33.76c-0.423-0.284-0.966-0.119-1.213,0.37
		c-0.001,0.002-0.002,0.004-0.003,0.006l-2.665,5.33c-0.243,0.492-0.095,1.119,0.332,1.4c0.424,0.278,0.962,0.111,1.208-0.374
		l2.666-5.33C137.349,34.671,137.203,34.043,136.777,33.76z"
                />
              </g>
            </svg>
          </div>
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
        <BorderRight class="box-r" :title="Event_statistics.name">
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
          right: "10%",
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
          },
          {
            name: this.Monthly_energy_consumption_statistics.SeriesData[1].name,
            type: "bar",
            data: this.Monthly_energy_consumption_statistics.SeriesData[1].data
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
            center: ["50%", "50%"],
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
  position: relative;
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
