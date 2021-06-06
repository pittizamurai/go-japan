<template>
  <ul class="siteHeader__navList">
    <li class="siteHeader__navListItem" v-for="item in navItems" :key="item.id">
      <nuxt-link :to="item.url" class="siteHeader__navListItemLink"
        >{{ item.city }}
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
// import axios from "axios";
export default {
  data() {
    return {
      navItems: [
        { city: "tokyo", url: "/tokyo" },
        { city: "yokohama", url: "/yokohama" },
        { city: "kyoto", url: "/kyoto" },
        { city: "osaka", url: "/osaka" },
        { city: "sapporo", url: "/sapporo" },
        { city: "nagoya", url: "/nagoya" },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "~/assets/scss/style.scss";

.siteHeader {
  &__navList {
    @include u-flex($fd: row, $fw: nowrap, $jc: flex-start, $ai: stretch);

    @include u-mqMax {
      overflow-x: scroll;
      margin-left: 10px;
    }
  }

  &__navListItem {
    color: $white;
    text-transform: uppercase;
    margin: 0 10px;
  }
  &__navListItemLink {
    color: $white;
    font-size: 1.6rem;
    font-family: "Oswald", sans-serif;
    padding: 4px 0;
    display: block;
    &:hover {
      color: $red01 !important;
    }
    .-fixed & {
      @include u-trs;
      color: $black01;
    }
  }
}
</style>
