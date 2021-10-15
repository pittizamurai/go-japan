<template>
  <ul class="siteFooter__navList">
    <li class="siteFooter__navListItem" v-for="item in navItems" :key="item.id">
      <nuxt-link :to="item.url" class="siteFooter__navListItemLink"
        >{{ item.city }}
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
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

.siteFooter {
  &__navList {
    @include u-flex($fd: row, $fw: nowrap, $jc: flex-start, $ai: stretch);

    @include u-mqMax {
      overflow-x: scroll;
      margin: 0 5%;
    }
  }
  &__navListItem {
    color: $white;
    text-transform: uppercase;
    margin: 0 10px;
  }
  &__navListItemLink {
    color: $black01;
    font-size: 1.6rem;
    font-family: "Oswald", sans-serif;
    padding: 4px 0;
    display: block;
    &:hover {
      color: $red01 !important;
    }
  }
}
</style>
