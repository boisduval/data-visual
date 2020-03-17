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
        viewBox="0 0 1380 460"
        enable-background="new 0 0 1380 460"
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
          x1="1379.5"
          y1="1"
          x2="1379.5"
          y2="16"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="1365"
          y1="0.5"
          x2="1380"
          y2="0.5"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="1"
          y1="459.5"
          x2="16"
          y2="459.5"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="0.5"
          y1="445"
          x2="0.5"
          y2="460"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="1379.5"
          y1="459"
          x2="1379.5"
          y2="444"
        />
        <line
          fill="#2BD0E3"
          stroke="#2BD0E3"
          stroke-miterlimit="10"
          x1="1365"
          y1="459.5"
          x2="1380"
          y2="459.5"
        />
        <linearGradient
          id="右_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big_1_"
          gradientUnits="userSpaceOnUse"
          x1="1363"
          y1="230"
          x2="1379"
          y2="230"
        >
          <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
          <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
        </linearGradient>
        <rect
          id="右_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big"
          x="1363"
          y="1"
          fill="url(#右_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big_1_)"
          width="16"
          height="458"
        />
        <linearGradient
          id="左_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big_1_"
          gradientUnits="userSpaceOnUse"
          x1="1453"
          y1="230"
          x2="1469"
          y2="230"
          gradientTransform="matrix(-1 0 0 1 1470 0)"
        >
          <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
          <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
        </linearGradient>
        <rect
          id="左_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big"
          x="1"
          y="1"
          fill="url(#左_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big_1_)"
          width="16"
          height="458"
        />
        <linearGradient
          id="上_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big_1_"
          gradientUnits="userSpaceOnUse"
          x1="953"
          y1="190"
          x2="969"
          y2="190"
          gradientTransform="matrix(0 -1 1 0 500.0005 970)"
        >
          <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
          <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
        </linearGradient>
        <rect
          id="上_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big"
          x="1"
          y="1"
          fill="url(#上_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big_1_)"
          width="1378"
          height="16"
        />
        <linearGradient
          id="下_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big_1_"
          gradientUnits="userSpaceOnUse"
          x1="943"
          y1="190"
          x2="959"
          y2="190"
          gradientTransform="matrix(0 1 1 0 500.0005 -500)"
        >
          <stop offset="0" style="stop-color:#2BD0E3;stop-opacity:0" />
          <stop offset="0.9944" style="stop-color:#2BD0E3;stop-opacity:0.2" />
        </linearGradient>
        <rect
          id="下_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big"
          x="1"
          y="443"
          fill="url(#下_x5F_interior_x5F_panel_x5F_rectangle_x5F_crosswise_x5F_big_1_)"
          width="1378"
          height="16"
        />
      </svg>
    </div>
    <div id="title" class="flex-column flex-center">
      <p>
        {{ title }}
      </p>
    </div>
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
  padding: calc(2%) calc(2% + 20px) calc(2% + 20px);
  /* padding: 3vh 20px 1vh; */
  box-sizing: border-box;
}
#title {
  color: #46a6b5;
  position: absolute;
  height: 100%;
  left: 1.5%;
  width: 20px;
}
@media screen and (max-width: 1500px) {
  #title {
    font-size: 12px;
  }
}
@media screen and (min-width: 1500px) {
  #title {
    font-size: 14px;
  }
}
</style>
