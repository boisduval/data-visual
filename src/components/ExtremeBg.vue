<template>
  <div class="extreme-bg-box">
    <div class="extreme-bg-svg">
      <svg
        version="1.1"
        id="图层_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 624 230"
        enable-background="new 0 0 624 230"
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
          x1="623.5"
          y1="1"
          x2="623.5"
          y2="16"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="609"
          y1="0.5"
          x2="624"
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
          x1="623.5"
          y1="229"
          x2="623.5"
          y2="214"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="609"
          y1="229.5"
          x2="624"
          y2="229.5"
        />
        <linearGradient
          id="右_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left_1_"
          gradientUnits="userSpaceOnUse"
          x1="607"
          y1="115"
          x2="623"
          y2="115"
        >
          <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
          <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
        </linearGradient>
        <rect
          id="右_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left"
          x="607"
          y="1"
          fill="url(#右_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left_1_)"
          width="16"
          height="228"
        />
        <linearGradient
          id="左_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left_1_"
          gradientUnits="userSpaceOnUse"
          x1="697"
          y1="115"
          x2="713"
          y2="115"
          gradientTransform="matrix(-1 0 0 1 714 0)"
        >
          <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
          <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
        </linearGradient>
        <rect
          id="左_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left"
          x="1"
          y="1"
          fill="url(#左_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left_1_)"
          width="16"
          height="228"
        />
        <linearGradient
          id="上_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left_1_"
          gradientUnits="userSpaceOnUse"
          x1="460"
          y1="75"
          x2="476"
          y2="75"
          gradientTransform="matrix(0 -1 1 0 237.0005 477)"
        >
          <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
          <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
        </linearGradient>
        <rect
          id="上_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left"
          x="1"
          y="1"
          fill="url(#上_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left_1_)"
          width="622"
          height="16"
        />
        <linearGradient
          id="下_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left_1_"
          gradientUnits="userSpaceOnUse"
          x1="450"
          y1="75"
          x2="466"
          y2="75"
          gradientTransform="matrix(0 1 1 0 237.0005 -237)"
        >
          <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
          <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
        </linearGradient>
        <rect
          id="下_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left"
          x="1"
          y="213"
          fill="url(#下_x5F_extremum_x5F_panel_x5F_shadow_x5F_below_x5F_left_1_)"
          width="622"
          height="16"
        />
      </svg>
    </div>
    <div id="title" class="flex-column flex-center">
      <p>
        {{ title }}
      </p>
    </div>
    <div class="extreme-bg-content">
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
.extreme-bg-box {
  position: relative;
  width: 100%;
  height: 100%;
}

.extreme-bg-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.extreme-bg-content {
  width: 100%;
  height: 100%;
  padding: 1% 25px;
  box-sizing: border-box;
}
#title {
  /*color: #46a6b5;*/
  /*position: absolute;*/
  /*left: 20px;*/
  color: #46a6b5;
  position: absolute;
  height: 100%;
  left: 3%;
  width: 20px;
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
