<template>
  <div class="border-box">
    <div class="border-svg">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 203 216"
        enable-background="new 0 0 203 216"
        xml:space="preserve"
        preserveAspectRatio="none"
      >
        <g id="图层_1">
          <line
            fill="#2BD0E3"
            stroke="#2BD0E3"
            stroke-miterlimit="10"
            x1="2"
            y1="1.5"
            x2="17"
            y2="1.5"
          />
          <line
            fill="#2BD0E3"
            stroke="#2BD0E3"
            stroke-miterlimit="10"
            x1="1.5"
            y1="16"
            x2="1.5"
            y2="1"
          />
          <line
            fill="#2BD0E3"
            stroke="#2BD0E3"
            stroke-miterlimit="10"
            x1="201.5"
            y1="2"
            x2="201.5"
            y2="17"
          />
          <line
            fill="#2BD0E3"
            stroke="#2BD0E3"
            stroke-miterlimit="10"
            x1="187"
            y1="1.5"
            x2="202"
            y2="1.5"
          />
          <line
            fill="#2BD0E3"
            stroke="#2BD0E3"
            stroke-miterlimit="10"
            x1="2"
            y1="214.5"
            x2="17"
            y2="214.5"
          />
          <line
            fill="#2BD0E3"
            stroke="#2BD0E3"
            stroke-miterlimit="10"
            x1="1.5"
            y1="200"
            x2="1.5"
            y2="215"
          />
          <line
            fill="#2BD0E3"
            stroke="#2BD0E3"
            stroke-miterlimit="10"
            x1="201.5"
            y1="214"
            x2="201.5"
            y2="199"
          />
          <line
            fill="#2BD0E3"
            stroke="#2BD0E3"
            stroke-miterlimit="10"
            x1="187"
            y1="214.5"
            x2="202"
            y2="214.5"
          />
        </g>
        <g id="图层_2">
          <linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="185"
            y1="108"
            x2="201"
            y2="108"
          >
            <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
            <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
          </linearGradient>
          <rect x="185" y="2" fill="url(#SVGID_1_)" width="16" height="212" />

          <linearGradient
            id="SVGID_2_"
            gradientUnits="userSpaceOnUse"
            x1="274"
            y1="108"
            x2="290"
            y2="108"
            gradientTransform="matrix(-1 0 0 1 292 0)"
          >
            <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
            <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
          </linearGradient>
          <rect x="2" y="2" fill="url(#SVGID_2_)" width="16" height="212" />

          <linearGradient
            id="SVGID_3_"
            gradientUnits="userSpaceOnUse"
            x1="241"
            y1="68.5"
            x2="257"
            y2="68.5"
            gradientTransform="matrix(0 -1 1 0 33.0005 259)"
          >
            <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
            <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
          </linearGradient>
          <rect x="2" y="2" fill="url(#SVGID_3_)" width="199" height="16" />

          <linearGradient
            id="SVGID_4_"
            gradientUnits="userSpaceOnUse"
            x1="231"
            y1="68.5"
            x2="247"
            y2="68.5"
            gradientTransform="matrix(0 1 1 0 33.0005 -33)"
          >
            <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
            <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
          </linearGradient>
          <rect x="2" y="198" fill="url(#SVGID_4_)" width="199" height="16" />
        </g>
      </svg>
    </div>
    <p id="title">
      {{ title }}
    </p>
    <div class="border-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style scoped>
.border-box {
  position: relative;
  width: 100%;
  height: 100%;
}

.border-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.border-content {
  width: 100%;
  height: 100%;
  /* padding: 30px 20px; */
  padding: 1vh 25px;
  /* padding: 3vh 20px 1vh; */
  box-sizing: border-box;
}
#title {
  color: #46a6b5;
  position: absolute;
  top: calc(2vh - 5px);
  left: 20px;
}
@media screen and (max-width: 1500px) {
  #title {
    font-size: 12px;
  }
}
@media screen and (min-width: 1500px) {
  #title {
    font-size: 16px;
  }
}
</style>
