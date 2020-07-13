<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="100%"
    height="100%"
    viewBox="0 0 995 467"
    enable-background="new 0 0 995 467"
    xml:space="preserve"
  >
    <rect
      x="819.167"
      y="33"
      display="none"
      fill="#1F8896"
      width="138.667"
      height="143"
    />
    <path
      display="none"
      fill="#248497"
      d="M880.705,35.334c0,1.289-1.045,2.333-2.333,2.333h-48.705c-1.288,0-2.333-1.044-2.333-2.333
	l0,0c0-1.289,1.045-2.333,2.333-2.333h48.705C879.66,33,880.705,34.045,880.705,35.334L880.705,35.334z"
    />
    <path
      display="none"
      opacity="0.6"
      fill="#F39800"
      d="M879.04,34.687c0,0.932-0.989,1.688-2.208,1.688h-46.123
	c-1.218,0-2.208-0.756-2.208-1.688l0,0c0-0.932,0.99-1.687,2.208-1.687h46.123C878.051,33,879.04,33.755,879.04,34.687
	L879.04,34.687z"
    />
    <text
      transform="matrix(1 0 0 1 846.5 65.5)"
      fill="#FFFFFF"
      font-family="'MicrosoftYaHei-Bold'"
      font-size="14"
    >
      安全运行时间
    </text>
    <text
      id="安全运行时间_x5F_天"
      transform="matrix(1 0 0 1 846.5 93)"
      fill="#F39800"
      font-family="'MicrosoftYaHei'"
      font-size="14"
    >
      {{ days }}
    </text>
    <text
      id="安全运行时间_x5F_时"
      transform="matrix(1 0 0 1 846.5 116)"
      fill="#F39800"
      font-family="'MicrosoftYaHei'"
      font-size="14"
    >
      {{ hours }}
    </text>
    <text
      id="安全运行时间_x5F_分"
      transform="matrix(1 0 0 1 846.5 139.5)"
      fill="#F39800"
      font-family="'MicrosoftYaHei'"
      font-size="14"
    >
      {{ minutes }}
    </text>
  </svg>
</template>

<script>
export default {
  name: "IndexBoard",
  props: {
    days: {
      type: String,
      default: "111 天"
    },
    hours: {
      type: String,
      default: "11 时"
    },
    minutes: {
      type: String,
      default: "11 分"
    }
  }
};
</script>

<style scoped></style>
