<template>
  <!-- <figure>
    <img src="~/assets/images/common/top_kv.jpg" alt="" />
  </figure> -->
  <div>
    <div class="siteFooter">
      <div class="siteFooter__inner">
        <h1 class="siteFooter__logoArea">
          <a href="#">
            <img
              class="siteFooter__logo"
              src="~/assets/images/common/logo.png"
              alt=""
            />
          </a>
        </h1>
        <ul class="siteFooter__navListArea">
          <NavLinkFooter />
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
@import "~/assets/scss/style.scss";

.siteFooter {
  width: 100%;
  margin-top: 50px;

  &__logoArea {
  }
  &__logo {
    width: 140px;
    display: block;
  }
  &__inner {
    @include u-flex($fd: column, $fw: nowrap, $jc: space-between, $ai: center);
    padding: 100px 4.7619% 50px;
    @include u-mqMax {
      padding: 5%;
    }
  }
  &__navListArea {
    @include u-flex($fd: row, $fw: nowrap, $jc: flex-start, $ai: stretch);
    margin-top: 50px;
    @include u-mqMax {
      width: 100%;
      justify-content: flex-start;
    }
  }
}
</style>
