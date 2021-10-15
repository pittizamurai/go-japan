<template>
  <li class="top__cityListItem">
    <nuxt-link :to="`${parent}`" class="top__cityListItemLink">
      <img
        class="top__cityListItemThumb"
        :src="require(`~/assets/images/page/top/top_${parent}.jpg`)"
        alt=""
      />
      <p class="top__cityListItemSlogan">{{ slogan }}</p>
      <p class="top__cityListItemCity">{{ parent }}</p>
    </nuxt-link>
  </li>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    parent: {
      type: String,
      required: true,
    },
    slogan: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss">
@import "~/assets/scss/style.scss";

.top {
  &__cityListItem {
    position: relative;
    margin-top: 80px;
    overflow: hidden;
    @include u-mqMax {
      margin-top: 30px;
    }
  }
  &__cityListItemLink {
    display: block;
    .city & {
      pointer-events: none;
    }
  }
  &__cityListItemThumb {
    filter: grayscale(60%);
    .city & {
      filter: none !important;
    }
    @include u-trs;
    &:hover {
      filter: none;
      transform: scale(1.05);
    }
  }
  &__cityListItemSlogan {
    color: $white;
    font-family: "Abel", sans-serif;
    font-size: 7rem;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 5%;
    .top__cityListItem:nth-of-type(even) & {
      right: 5%;
      left: inherit;
    }
    @include u-mqMax {
      font-size: 3rem;
    }
  }
  &__cityListItemCity {
    color: $white;
    font-family: "RopaSans", sans-serif;
    font-size: 4rem;
    font-weight: bold;
    text-transform: uppercase;
    position: absolute;
    top: 75%;
    left: 5%;
    .top__cityListItem:nth-of-type(even) & {
      right: 5%;
      left: inherit;
    }
    @include u-mqMax {
      font-size: 1.5rem;
      top: 85%;
    }
  }
}
</style>
