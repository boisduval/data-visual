<template>
  <div class="thermometer-box">
    <div class="thermometer-svg">
      <svg
        version="1.1"
        id="图层_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 40 160"
        enable-background="new 0 0 40 160"
        xml:space="preserve"
      >
        <path
          fill="#F7931E"
          d="M32,128.842c0,6.438-5.373,11.658-12,11.658l0,0c-6.627,0-12-5.22-12-11.658V76.158
	C8,69.72,13.373,64.5,20,64.5l0,0c6.627,0,12,5.22,12,11.658V128.842z"
        />
        <g>
          <circle fill="#F7931E" cx="20.658" cy="133.592" r="16.658" />
          <g>
            <path
              fill="none"
              stroke="#4DA2B0"
              stroke-width="3"
              stroke-miterlimit="10"
              d="M31.132,119.935
			c3.837,3.162,6.283,7.95,6.283,13.311c0,9.521-7.718,17.238-17.238,17.238s-17.238-7.718-17.238-17.238
			c0-4.906,2.05-9.334,5.34-12.474"
            />
            <line
              fill="none"
              stroke="#4DA2B0"
              stroke-width="3"
              stroke-miterlimit="10"
              x1="8.5"
              y1="122"
              x2="8.5"
              y2="16"
            />
            <line
              fill="none"
              stroke="#4DA2B0"
              stroke-width="3"
              stroke-miterlimit="10"
              x1="31.5"
              y1="122"
              x2="31.5"
              y2="16"
            />
            <path
              fill="none"
              stroke="#4DA2B0"
              stroke-width="3"
              stroke-miterlimit="10"
              d="M8.375,17.893
			c1.422-5.165,6.153-8.958,11.77-8.958c5.27,0,9.759,3.339,11.468,8.018"
            />
            <g>
              <g>
                <path
                  fill="#4DA2B0"
                  d="M22,100c3,0,6,0,9,0c1.935,0,1.935-3,0-3c-3,0-6,0-9,0C20.065,97,20.065,100,22,100L22,100z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#4DA2B0"
                  d="M22,82c3,0,6,0,9,0c1.935,0,1.935-3,0-3c-3,0-6,0-9,0C20.065,79,20.065,82,22,82L22,82z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#4DA2B0"
                  d="M22,64c3,0,6,0,9,0c1.935,0,1.935-3,0-3c-3,0-6,0-9,0C20.065,61,20.065,64,22,64L22,64z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#4DA2B0"
                  d="M21,44c3,0,6,0,9,0c1.935,0,1.935-3,0-3c-3,0-6,0-9,0C19.065,41,19.065,44,21,44L21,44z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  fill="#4DA2B0"
                  d="M21,26c3,0,6,0,9,0c1.935,0,1.935-3,0-3c-3,0-6,0-9,0C19.065,23,19.065,26,21,26L21,26z"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
    <div class="title">
      <p>
        {{ title }}
      </p>
    </div>
    <div class="value">
      <p>
        {{ value }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#F7931E"
    },
    title: String,
    value: String
  }
};
</script>

<style scoped>
.thermometer-box {
  width: 100%;
  height: 100%;
}
.thermometer-box p {
  text-align: center;
}
.thermometer-box .title {
  color: #46a6b5;
}
.thermometer-box .value {
  color: #f7931f;
}
@media screen and (max-width: 1300px) {
  .thermometer-box p {
    transform: scale(0.7);
  }
  .thermometer-svg {
    height: 50%;
  }
}
@media screen and (min-width: 1300px) {
  .thermometer-box p {
    font-size: 12px;
  }
  .thermometer-svg {
    height: 65%;
  }
}
@media screen and (min-width: 1500px) {
  .thermometer-box p {
    font-size: 16px;
  }
  .thermometer-svg {
    height: 70%;
  }
}
</style>
