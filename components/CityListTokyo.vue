<template>
  <div>
    <h2 class="top__areaTitle">Tokyo</h2>
    <ul class="top__cardlist">
      <li class="top__cardlistitem" v-for="(list, index) in listsTokyo">
        <a class="top__cardlistitemLink" href="#">
          <div class="top__cardlistItemImg">
            <figure class="top__cardlistItemFigure">
              <img
                v-bind:src="`${list.venue.categories[0].icon.prefix}120.png`"
              />
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
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const myClientId = process.env.MY_CLIENT_ID;
    const myClientPass = process.env.MY_CLIENT_PASS;
    const baseUrl = "https://api.foursquare.com/v2/venues/explore";
    const nearTokyo = "near=tokyo";
    const nearYokohama = "near=yokohama";
    const locate = "&locate=ja";
    const version = "&v=20210530";
    const sort = "&sortByPopularity=1";
    const limit = "&limit=8";
    const mySearchBaseUrlTokyo = `${baseUrl}?${nearTokyo}${sort}${limit}${myClientId}${myClientPass}${locate}${version}`;
    const resTokyo = await $axios.$get(mySearchBaseUrlTokyo);
    const resTokyoData = resTokyo["response"]["groups"][0]["items"];
    const mySearchBaseUrlYokohama = `${baseUrl}?${nearYokohama}${sort}${limit}${myClientId}${myClientPass}${locate}${version}`;
    const resYokohama = await $axios.$get(mySearchBaseUrlYokohama);
    const resYokohamaData = resYokohama["response"]["groups"][0]["items"];

    return {
      listsTokyo: resTokyoData,
      listsYokohama: resYokohamaData,
    };
  },
};
</script>
<style lang="scss">
@import "~/assets/scss/_mixin/_u-flex";
@import "~/assets/scss/_mixin/_u-trs";
@import "~/assets/scss/_mixin/_u-hover";
@import "~/assets/scss/_base/_variable";
@import "~/assets/scss/_base/_reset";
@import "~/assets/scss/_mixin/_u-mediaquery";
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

    &:not(:nth-of-type(4n)) {
      margin-right: 5%;
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
    width: 100%;
    color: $white;
    font-size: 2rem;
    text-align: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
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
