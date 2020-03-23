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
        viewBox="0 0 656 230"
        enable-background="new 0 0 656 230"
        xml:space="preserve"
        preserveAspectRatio="none"
      >
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="1.5"
          y1="0.5"
          x2="16.5"
          y2="0.5"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="1"
          y1="15"
          x2="1"
          y2="0"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="655"
          y1="1"
          x2="655"
          y2="16"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="640.5"
          y1="0.5"
          x2="655.5"
          y2="0.5"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="1.5"
          y1="229.5"
          x2="16.5"
          y2="229.5"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="1"
          y1="215"
          x2="1"
          y2="230"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="655"
          y1="229"
          x2="655"
          y2="214"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="640.5"
          y1="229.5"
          x2="655.5"
          y2="229.5"
        />
        <linearGradient
          id="右_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_little_1_"
          gradientUnits="userSpaceOnUse"
          x1="638.5"
          y1="115"
          x2="654.5"
          y2="115"
        >
          <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
          <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
        </linearGradient>
        <rect
          id="右_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_little"
          x="638.5"
          y="1"
          fill="url(#右_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_little_1_)"
          width="16"
          height="228"
        />
        <linearGradient
          id="左_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_little_1_"
          gradientUnits="userSpaceOnUse"
          x1="1381.5"
          y1="115"
          x2="1397.5"
          y2="115"
          gradientTransform="matrix(-1 0 0 1 1399 0)"
        >
          <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
          <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
        </linearGradient>
        <rect
          id="左_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_little"
          x="1.5"
          y="1"
          fill="url(#左_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_little_1_)"
          width="16"
          height="228"
        />
        <linearGradient
          id="上_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_little_1_"
          gradientUnits="userSpaceOnUse"
          x1="917.5"
          y1="-136.5005"
          x2="933.5"
          y2="-136.5005"
          gradientTransform="matrix(0 -1 1 0 464.5005 934.5)"
        >
          <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
          <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
        </linearGradient>
        <rect
          id="上_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_little"
          x="1.5"
          y="1"
          fill="url(#上_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_little_1_)"
          width="653"
          height="16"
        />
        <linearGradient
          id="下_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_little_1_"
          gradientUnits="userSpaceOnUse"
          x1="677.5"
          y1="-136.5005"
          x2="693.5"
          y2="-136.5005"
          gradientTransform="matrix(0 1 1 0 464.5005 -464.5)"
        >
          <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
          <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
        </linearGradient>
        <rect
          id="下_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_little"
          x="1.5"
          y="213"
          fill="url(#下_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_little_1_)"
          width="653"
          height="16"
        />
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
