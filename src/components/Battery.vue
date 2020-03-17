<template>
  <div class="battery-box">
    <div class="battery-svg">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 100 300"
        enable-background="new 0 0 100 300"
        xml:space="preserve"
      >
        <g id="图层_1">
          <path
            opacity="0.5"
            fill="#00FF00"
            d="M94,206.66c0,7.367-5.373,13.34-12,13.34H19c-6.627,0-12-5.973-12-13.34v-87.82
		C7,111.472,12.373,106,19,106h63c6.627,0,12,5.472,12,12.84V206.66z"
          />
          <g>
            <path
              fill="none"
              stroke="#46A6B5"
              stroke-width="2"
              stroke-miterlimit="10"
              d="M95,208c0,6.627-5.373,12-12,12H18
			c-6.627,0-12-5.373-12-12V36c0-6.627,5.373-12,12-12h65c6.627,0,12,5.373,12,12V208z"
            />
            <path
              fill="#46A6B5"
              stroke="#46A6B5"
              stroke-width="2"
              stroke-miterlimit="10"
              d="M70,23.143C70,23.616,67.766,24,65.012,24
			H37.989C35.233,24,33,23.616,33,23.143V10.857C33,10.384,35.233,10,37.989,10h27.023C67.766,10,70,10.384,70,10.857V23.143z"
            />
            <line
              fill="none"
              stroke="#46A6B5"
              stroke-width="2"
              stroke-miterlimit="10"
              x1="6"
              y1="73"
              x2="95"
              y2="73"
            />
            <line
              fill="none"
              stroke="#46A6B5"
              stroke-width="2"
              stroke-miterlimit="10"
              x1="6"
              y1="116"
              x2="95"
              y2="116"
            />
            <line
              fill="none"
              stroke="#46A6B5"
              stroke-width="2"
              stroke-miterlimit="10"
              x1="7"
              y1="162"
              x2="96"
              y2="162"
            />
          </g>
          <g>
            <rect
              x="7"
              y="225"
              fill="none"
              stroke="#46A6B5"
              stroke-width="2"
              stroke-miterlimit="10"
              width="88"
              height="70"
            />
            <rect x="8" y="226" fill="#808080" width="86" height="36" />
          </g>
        </g>
        <g id="图层_2">
          <text
            id="序号"
            transform="translate(52 251)"
            fill="#FFFFFF"
            font-family="'MicrosoftYaHei'"
            font-size="24"
            text-anchor="middle"
          >
            {{ batteryNum }}
          </text>
          <text
            id="电压"
            transform="translate(52 286)"
            fill="#F7931E"
            font-family="'MicrosoftYaHei'"
            font-size="24"
            text-anchor="middle"
          >
            {{ batteryValue }}
          </text>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    batteryNum: {
      type: String,
      default: "1号"
    },
    batteryValue: {
      type: String,
      default: "3.337"
    }
  }
};
</script>

<style scoped>
.battery-box {
  width: 100%;
  height: 100%;
}
.battery-svg {
  height: 100%;
}
</style>
