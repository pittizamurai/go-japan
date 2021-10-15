<template>
  <div class="top__container">
    <div>
      <ul class="top__cityList">
        <TopCityLink parent="tokyo" slogan="Cool & New" />
        <TopCityLink parent="yokohama" slogan="Modern & Retro" />
        <TopCityLink parent="kyoto" slogan="Historic & Tasteful" />
        <TopCityLink parent="osaka" slogan="Fun & Fine" />
        <TopCityLink parent="sapporo" slogan="Gourmet & Nature" />
        <TopCityLink parent="nagoya" slogan="Easy & Busy" />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {},
};
</script>

<style lang="scss">
@import "~/assets/scss/style.scss";

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  // border-radius: $radius;
}
</style>
