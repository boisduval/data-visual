<template>
  <div class="thermometer-kw-box">
    <div class="thermometer-kw-svg">
      <svg
        version="1.1"
        id="图层_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 180 180"
        enable-background="new 0 0 180 180"
        xml:space="preserve"
      >
        <g class="rotate" :transform="'rotate(' + rotate + ',90,119)'">
          <animateTransform
            attributeType="XML"
            attributeName="transform"
            begin="0s"
            dur="1.5s"
            type="rotate"
            from="0 90 119"
            :to="this.rotate + ' 90 119'"
            repeatCount="1"
            fill="freeze"
          />
          <circle :fill="scaleColor" cx="89.63" cy="119.505" r="11.749" />
          <polygon
            :fill="scaleColor"
            points="84.948,125.676 63.368,98.311 94.598,113.781"
          />
        </g>
        <g id="indicating_x5F_instrument_x5F_scale">
          <g>
            <circle
              fill="none"
              stroke="#46A6B5"
              stroke-width="5"
              stroke-miterlimit="10"
              cx="89.895"
              cy="89.228"
              r="79.472"
            />
            <path
              fill="none"
              stroke="#46A6B5"
              stroke-width="5"
              stroke-miterlimit="10"
              d="M105.101,119.673
			c0.01,0.226,0.015,0.452,0.015,0.681c0,8.475-6.871,15.346-15.346,15.346c-8.476,0-15.347-6.871-15.347-15.346
			c0-0.175,0.003-0.349,0.009-0.521"
            />
            <line
              fill="none"
              stroke="#46A6B5"
              stroke-width="5"
              stroke-miterlimit="10"
              x1="103"
              y1="120.5"
              x2="164"
              y2="120.5"
            />
            <line
              fill="none"
              stroke="#46A6B5"
              stroke-width="5"
              stroke-miterlimit="10"
              x1="17"
              y1="120.5"
              x2="77"
              y2="120.5"
            />
          </g>
          <line
            fill="none"
            :stroke="scaleColor"
            stroke-width="5"
            stroke-miterlimit="10"
            x1="58.976"
            y1="34.458"
            x2="64.441"
            y2="43.958"
          />
          <line
            fill="none"
            :stroke="scaleColor"
            stroke-width="5"
            stroke-miterlimit="10"
            x1="123.801"
            y1="36.684"
            x2="117.618"
            y2="45.732"
          />
          <line
            fill="none"
            :stroke="scaleColor"
            stroke-width="5"
            stroke-miterlimit="10"
            x1="28.321"
            y1="76.204"
            x2="39.095"
            y2="78.213"
          />
          <line
            fill="none"
            :stroke="scaleColor"
            stroke-width="5"
            stroke-miterlimit="10"
            x1="151.097"
            y1="76.204"
            x2="140.322"
            y2="78.213"
          />
          <line
            fill="none"
            :stroke="scaleColor"
            stroke-width="5"
            stroke-miterlimit="10"
            x1="45.214"
            y1="52.61"
            x2="50.05"
            y2="56.548"
          />
          <line
            fill="none"
            :stroke="scaleColor"
            stroke-width="5"
            stroke-miterlimit="10"
            x1="138.228"
            y1="56.85"
            x2="133.039"
            y2="60.309"
          />
          <line
            fill="none"
            :stroke="scaleColor"
            stroke-width="5"
            stroke-miterlimit="10"
            x1="92.799"
            y1="31.466"
            x2="92.468"
            y2="37.692"
          />
        </g>
        <text
          transform="matrix(1 0 0 1 73.25 156.25)"
          fill="#46A6B5"
          font-family="'MicrosoftYaHei-Bold'"
          font-size="18"
        >
          KW
        </text>
        <text
          transform="translate(90 76)"
          :fill="textColor"
          font-family="'MicrosoftYaHei-Bold'"
          font-size="20"
          text-anchor="middle"
        >
          {{ value }}
        </text>
      </svg>
    </div>
    <div class="title">
      <p>
        {{ title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    scaleColor: {
      type: String,
      default: "#F7931E"
    },
    textColor: {
      type: String,
      default: "#F7931E"
    },
    title: String,
    value: String,
    rotate: {
      type: String,
      default: "0"
    }
  }
};
</script>

<style scoped>
.thermometer-kw-box {
  width: 100%;
  height: 100%;
}
.thermometer-kw-svg {
  height: 85%;
}
.thermometer-kw-box p {
  text-align: center;
}
.thermometer-kw-box .title {
  color: #46a6b5;
}
.rotate {
  /*animation: rotate_before 2.2s linear 1;*/
  /*-webkit-animation: rotate_before 2.2s linear 1;*/
  /*-webkit-transform-origin: 90 119;*/
  /*transform: rotate(0);*/
  /*animation-fill-mode: forwards;*/
  /*transition: all 2s linear;*/
}

@media screen and (max-width: 1300px) {
  .thermometer-kw-box p {
    transform: scale(0.7);
  }
}
@media screen and (min-width: 1300px) {
  .thermometer-kw-box p {
    font-size: 18px;
  }
}
@media screen and (min-width: 1500px) {
  .thermometer-kw-box p {
    font-size: 22px;
    font-weight: 500;
  }
}
</style>
