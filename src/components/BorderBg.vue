<template>
  <div class="border-box">
    <div class="border-svg">
      <svg
        version="1.1"
        id="图层_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 230 230"
        enable-background="new 0 0 230 230"
        xml:space="preserve"
        preserveAspectRatio="none"
      >
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="1"
          y1="0.5"
          x2="16"
          y2="0.5"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="0.5"
          y1="15"
          x2="0.5"
          y2="0"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="229.5"
          y1="1"
          x2="229.5"
          y2="16"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="215"
          y1="0.5"
          x2="230"
          y2="0.5"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="1"
          y1="229.5"
          x2="16"
          y2="229.5"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="0.5"
          y1="215"
          x2="0.5"
          y2="230"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="229.5"
          y1="229"
          x2="229.5"
          y2="214"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="215"
          y1="229.5"
          x2="230"
          y2="229.5"
        />
        <linearGradient
          id="SVGID_1_"
          gradientUnits="userSpaceOnUse"
          x1="213"
          y1="115"
          x2="229"
          y2="115"
        >
          <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
          <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
        </linearGradient>
        <rect x="213" y="1" fill="url(#SVGID_1_)" width="16" height="228" />
        <linearGradient
          id="SVGID_2_"
          gradientUnits="userSpaceOnUse"
          x1="303"
          y1="115"
          x2="319"
          y2="115"
          gradientTransform="matrix(-1 0 0 1 320 0)"
        >
          <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
          <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
        </linearGradient>
        <rect x="1" y="1" fill="url(#SVGID_2_)" width="16" height="228" />
        <linearGradient
          id="SVGID_3_"
          gradientUnits="userSpaceOnUse"
          x1="263"
          y1="75"
          x2="279"
          y2="75"
          gradientTransform="matrix(0 -1 1 0 40.0005 280)"
        >
          <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
          <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
        </linearGradient>
        <rect x="1" y="1" fill="url(#SVGID_3_)" width="228" height="16" />
        <linearGradient
          id="SVGID_4_"
          gradientUnits="userSpaceOnUse"
          x1="253"
          y1="75"
          x2="269"
          y2="75"
          gradientTransform="matrix(0 1 1 0 40.0005 -40)"
        >
          <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
          <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
        </linearGradient>
        <rect x="1" y="213" fill="url(#SVGID_4_)" width="228" height="16" />
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
  padding: 1% 25px;
  box-sizing: border-box;
}
#title {
  color: #46a6b5;
  position: absolute;
  top: 5%;
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
