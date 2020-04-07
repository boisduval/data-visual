<template>
  <div class="thermometer-box">
    <div class="thermometer-svg"></div>
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
    value: String
  }
};
</script>

<style scoped>
.thermometer-box {
  width: 100%;
  height: 100%;
}
.thermometer-box p {
  text-align: center;
}
.thermometer-box .title {
  color: #46a6b5;
}
.thermometer-box .value {
  color: #f7931f;
}
.thermometer-svg {
  background: url("../assets/img/thermometer.png") center no-repeat;
  background-size: contain;
}
@media screen and (max-width: 1300px) {
  .thermometer-box p {
    transform: scale(0.7);
  }
  .thermometer-svg {
    height: 50%;
  }
}
@media screen and (min-width: 1300px) {
  .thermometer-box p {
    font-size: 12px;
  }
  .thermometer-svg {
    height: 65%;
  }
}
@media screen and (min-width: 1500px) {
  .thermometer-box p {
    font-size: 16px;
  }
  .thermometer-svg {
    height: 70%;
  }
}
</style>
