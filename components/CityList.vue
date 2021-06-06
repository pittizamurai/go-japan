<template>
  <ul class="top__cardlist">
    <li
      class="top__cardlistitem"
      v-for="(list, index) in listsCity"
      :key="list.item"
    >
      <nuxt-link
        :to="`${parent}/${list.venue.id}`"
        class="top__cardlistitemLink"
      >
        <div class="top__cardlistItemImg">
          <figure class="top__cardlistItemFigure">
            <img :src="`${list.venue.categories[0].icon.prefix}120.png`" />
          </figure>
        </div>
        <div class="overlay">
          <h3 class="top__cardlistItemText">
            {{ list.venue.name }}
          </h3>
        </div>
        <p class="top__cardlistItemTag">
          {{ list.venue.categories[0].pluralName }}
        </p>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {};
  },
  props: {
    listsCity: {
      type: Array,
      required: false,
    },
    parent: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>
<style lang="scss">
@import "~/assets/scss/style.scss";

.container {
  width: $contentCenter;
  margin: 0 auto;
}

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
$radius: 0.5rem;
.top {
  &__areaTitle {
    font-size: 3rem;
  }
  &__cardlist {
    @include u-flex($fd: row, $fw: wrap, $jc: flex-start, $ai: stretch);
    margin-bottom: 30px;
  }
  &__cardlistitem {
    width: calc((100% - 15%) / 4);
    position: relative;
    margin-top: 30px;
    @include u-mqMax {
      width: calc((100% - 5%) / 2);
      margin-top: 5%;
    }

    &:not(:nth-of-type(4n)) {
      margin-right: 5%;
      @include u-mqMax {
        margin-right: 0;
      }
    }
    &:nth-of-type(2n) {
      @include u-mqMax {
        margin-left: 5%;
      }
    }
  }
  &__cardlistitemLink {
    display: block;
    @include u-trs;
    @include u-hoverOp;
  }
  &__cardlistItemImg {
    background-color: $gray;
    // border-radius: $radius;
  }
  &__cardlistItemFigure {
    padding: 3rem 6rem;
  }
  &__cardlistItemText {
    width: 80%;
    color: $white;
    font-size: 1.6rem;
    text-align: center;
    word-break: keep-all;
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
    @include u-mqMax {
      font-size: 1.4rem;
    }
  }
  &__cardlistItemTag {
    color: $black01;
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: yellow;
    border-radius: $radius;
    padding: 7px 10px;
    font-weight: bold;
  }
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
