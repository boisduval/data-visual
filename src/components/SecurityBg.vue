<template>
  <div class="security-bg-box">
    <div class="security-bg-svg">
      <svg
        version="1.1"
        id="图层_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 380 380"
        enable-background="new 0 0 380 380"
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
          x1="379.5"
          y1="1"
          x2="379.5"
          y2="16"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="365"
          y1="0.5"
          x2="380"
          y2="0.5"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="1"
          y1="379.5"
          x2="16"
          y2="379.5"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="0.5"
          y1="365"
          x2="0.5"
          y2="380"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="379.5"
          y1="379"
          x2="379.5"
          y2="364"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="365"
          y1="379.5"
          x2="380"
          y2="379.5"
        />
        <linearGradient
          id="right_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left_1_"
          gradientUnits="userSpaceOnUse"
          x1="363"
          y1="190"
          x2="379"
          y2="190"
        >
          <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
          <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
        </linearGradient>
        <rect
          id="right_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left"
          x="363"
          y="1"
          fill="url(#right_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left_1_)"
          width="16"
          height="378"
        />
        <linearGradient
          id="left_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left_1_"
          gradientUnits="userSpaceOnUse"
          x1="473"
          y1="190"
          x2="489"
          y2="190"
          gradientTransform="matrix(-1 0 0 1 490 0)"
        >
          <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
          <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
        </linearGradient>
        <rect
          id="left_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left"
          x="1"
          y="1"
          fill="url(#left_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left_1_)"
          width="16"
          height="378"
        />
        <linearGradient
          id="top_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left_1_"
          gradientUnits="userSpaceOnUse"
          x1="433"
          y1="150"
          x2="449"
          y2="150"
          gradientTransform="matrix(0 -1 1 0 40.0005 450)"
        >
          <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
          <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
        </linearGradient>
        <rect
          id="top_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left"
          x="1"
          y="1"
          fill="url(#top_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left_1_)"
          width="378"
          height="16"
        />
        <linearGradient
          id="bottom_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left_1_"
          gradientUnits="userSpaceOnUse"
          x1="403"
          y1="150"
          x2="419"
          y2="150"
          gradientTransform="matrix(0 1 1 0 40.0005 -40)"
        >
          <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
          <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
        </linearGradient>
        <rect
          id="bottom_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left"
          x="1"
          y="363"
          fill="url(#bottom_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left_1_)"
          width="378"
          height="16"
        />
      </svg>
    </div>
    <p id="title">
      {{ title }}
    </p>
    <div class="security-bg-content">
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
.security-bg-box {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 999;
}

.security-bg-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.security-bg-content {
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
