<template>
  <div class="semicircle-box">
    <div class="semicircle-svg">
      <svg
        version="1.1"
        id="图层_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 120 120"
        enable-background="new 0 0 120 120"
        xml:space="preserve"
      >
        <g>
          <path
            fill="none"
            :stroke="color"
            stroke-width="10"
            stroke-miterlimit="10"
            d="M20.758,98.24
		C13.716,89.517,9.5,78.418,9.5,66.334C9.5,38.259,32.259,15.5,60.334,15.5c28.074,0,50.833,22.759,50.833,50.834
		c0,12.045-4.189,23.111-11.19,31.822"
          />
          <line
            fill="none"
            :stroke="color"
            stroke-width="10"
            stroke-miterlimit="10"
            x1="17"
            y1="97"
            x2="104"
            y2="97"
          />
        </g>
      </svg>
    </div>
    <div class="semicircle-content" :style="{ color: color }">
      <slot></slot>
    </div>
    <div class="title" :style="{ color: color }">
      <p>
        {{ title }}
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
    title: String
  }
};
</script>

<style scoped>
.semicircle-box {
  position: relative;
  width: 100%;
  height: 100%;
}
.semicircle-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 5px;
  height: calc(100% - 30px);
  /* padding-bottom: 30px; */
}

.semicircle-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 30px);
  flex-direction: column;
  /* padding-bottom: 30px; */
  /* padding: 30px 20px; */
  /* padding: calc(2vh + 5px) calc(3vh + 5px); */
  /* box-sizing: border-box; */
}
.semicircle-box .title {
  height: 30px;
  text-align: center;
  margin-top: calc(-3vh + 5px);
  font-size: 18px;
}
@media screen and (max-width: 1300px) {
  .semicircle-box .title {
    font-size: 14px;
  }
}
@media screen and (min-width: 1300px) {
  .semicircle-box .title {
    font-size: 16px;
  }
}
@media screen and (min-width: 1500px) {
  .semicircle-box .title {
    font-size: 18px;
  }
}
</style>
