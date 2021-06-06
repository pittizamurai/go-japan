<template>
  <!-- <figure>
    <img src="~/assets/images/common/top_kv.jpg" alt="" />
  </figure> -->
  <div>
    <div class="siteHeader" :class="{ '-fixed': scrollY > 50 }">
      <div class="siteHeader__inner">
        <h1 class="siteHeader__logoArea">
          <a href="/">
            <img
              class="siteHeader__logo"
              src="~/assets/images/common/logo.png"
              alt=""
            />
          </a>
        </h1>
        <NavLink />
      </div>
    </div>

    <div class="top__videoWrap">
      <video
        class="top__video"
        src="~/assets/movie/top_video.mp4"
        preload="metadata"
        autoplay
        loop
        muted
      ></video>
      <p class="top__title">
        FIND <br class="u-spDb" />YOUR <br class="u-spDb" />JOURNEY
      </p>
      <div class="top__subTitleArea">
        <p class="top__subTitle">{{ $route.params.city }}</p>
        <!-- <p class="top__subTitle">{{ $route.params.id }}</p> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scrollY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/style.scss";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.siteHeader {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  &.-fixed {
    @include u-trs;
    background-color: $white;
  }
  &__logoArea {
    opacity: 0;
    .-fixed & {
      @include u-trs;
      opacity: 1;
    }
  }
  &__logo {
    width: 140px;
    display: block;
  }
  &__inner {
    @include u-flex($fd: row, $fw: nowrap, $jc: space-between, $ai: center);
    padding: 28px 4.7619% 24px;
    @include u-mqMax {
      width: 100%;
      padding: 5%;
    }
  }
}
.top {
  &__videoWrap {
    position: relative;
    width: 100%;
    min-width: 980px;
    @include u-mqMax {
      height: 70vh;
      width: 100%;
      min-width: 0;
      position: relative;
      overflow: hidden;
    }
  }
  &__video {
    filter: grayscale(40%);
    width: 100%;
    @include u-mqMax {
      width: auto;
      height: 70vh;
      position: absolute;
      top: 0;
      left: -100%;
    }
  }
  &__title {
    color: $white;
    font-size: 6rem;
    font-weight: bold;
    font-family: "Oswald", sans-serif;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    letter-spacing: 0.2em;
    white-space: nowrap;
    @include u-mqMax {
      font-size: 4rem;
      text-align: center;
      line-height: 1.5;
    }
  }
  &__subTitleArea {
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);

    @include u-mqMax {
      width: 80%;
      top: 75%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &__subTitle {
    color: $white;
    font-size: 6rem;
    font-weight: bold;
    font-family: "Oswald", sans-serif;
    letter-spacing: 0.2em;
    white-space: nowrap;
    text-transform: uppercase;
    @include u-mqMax {
      width: 100%;
      font-size: 4rem;
      white-space: normal;
      word-break: break-all;
    }
  }
}
</style>
