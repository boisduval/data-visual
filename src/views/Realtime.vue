<template>
  <div class="content">
    <section>
      <div class="box-left">
        <Nav></Nav>
      </div>
      <div class="box-right"></div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  height: 100%;
  display: flex;
}
.box-left {
  flex: 1;
}
.box-right {
  flex: 7;
}
</style>
