<template>
  <div class="indicating-instrument-box">
    <div class="indicating-instrument-svg">
      <svg
        version="1.1"
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
        <g>
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
            stroke="#F7931E"
            stroke-width="5"
            stroke-miterlimit="10"
            x1="58.976"
            y1="34.458"
            x2="64.441"
            y2="43.958"
          />
          <line
            fill="none"
            stroke="#F7931E"
            stroke-width="5"
            stroke-miterlimit="10"
            x1="123.801"
            y1="36.684"
            x2="117.618"
            y2="45.732"
          />
          <line
            fill="none"
            stroke="#F7931E"
            stroke-width="5"
            stroke-miterlimit="10"
            x1="28.321"
            y1="76.204"
            x2="39.095"
            y2="78.213"
          />
          <line
            fill="none"
            stroke="#F7931E"
            stroke-width="5"
            stroke-miterlimit="10"
            x1="151.097"
            y1="76.204"
            x2="140.322"
            y2="78.213"
          />
          <line
            fill="none"
            stroke="#F7931E"
            stroke-width="5"
            stroke-miterlimit="10"
            x1="45.214"
            y1="52.61"
            x2="50.05"
            y2="56.548"
          />
          <line
            fill="none"
            stroke="#F7931E"
            stroke-width="5"
            stroke-miterlimit="10"
            x1="138.228"
            y1="56.85"
            x2="133.039"
            y2="60.309"
          />
          <line
            fill="none"
            stroke="#F7931E"
            stroke-width="5"
            stroke-miterlimit="10"
            x1="92.799"
            y1="31.466"
            x2="92.468"
            y2="37.692"
          />
        </g>
      </svg>
    </div>
    <div
      class="indicating-instrument-svg"
      style="transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s;transform-origin: 50% 66%;"
      :style="{ transform: delay ? 0 : 'rotate(' + rotate + 'deg)' }"
    >
      <svg
        version="1.1"
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
        <g>
          <circle fill="#F7931E" cx="90" cy="119" r="12" />
          <polygon fill="#F7931E" points="86,126 62,101 95,114" />
        </g>
      </svg>
    </div>

    <div class="indicating-instrument-div"></div>
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
    value: String,
    rotate: {
      type: String,
      default: "0"
    }
  },
  data() {
    return {
      delay: true
    };
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      this.delay = false;
    }, 200);
  }
};
</script>

<style scoped>
.indicating-instrument-box {
  width: 100%;
  height: 100%;
  position: relative;
}
.indicating-instrument-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.indicating-instrument-box p {
  text-align: center;
}
.indicating-instrument-box .title {
  color: #46a6b5;
}
.indicating-instrument-box .value {
  color: #f7931f;
}
@media screen and (max-width: 1300px) {
  .indicating-instrument-box p {
    transform: scale(0.7);
  }
  .indicating-instrument-svg,
  .indicating-instrument-div {
    height: 50%;
  }
}
@media screen and (min-width: 1300px) {
  .indicating-instrument-box p {
    font-size: 12px;
  }
  .indicating-instrument-svg,
  .indicating-instrument-div {
    height: 70%;
  }
}
@media screen and (min-width: 1500px) {
  .indicating-instrument-box p {
    font-size: 16px;
  }
  .indicating-instrument-svg,
  .indicating-instrument-div {
    height: 70%;
  }
}
</style>
