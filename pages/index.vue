<template>
  <div class="top__container">
    <div>
      <!-- <h2 class="top__areaTitle">Tokyo</h2> -->
      <!-- <p>東京</p>
      <CityList :listsCity="resSearchTokyoData" parent="tokyo" />
      <h2 class="top__areaTitle">yokohama</h2>
      <p>横浜</p>
      <CityList :listsCity="resSearchYokohamaData" parent="yokohama" /> -->
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
import axios from "axios";
export default {
  data() {},
  async asyncData(context) {
    // console.log("$axios", $axios);
    const myClientId = process.env.MY_CLIENT_ID;
    const myClientPass = process.env.MY_CLIENT_PASS;
    const baseUrl = "https://api.foursquare.com/v2/venues/";
    const exploreUrl = `${baseUrl}explore`;
    const locate = "&locate=ja";
    const version = "&v=20210530";
    const sort = "&sortByPopularity=1";
    const limit = "&limit=8";
    //東京のデータ
    const mySearchTokyo = `${exploreUrl}?near=tokyo${sort}${limit}${myClientId}${myClientPass}${locate}${version}`;
    const resSearchTokyo = await axios.get(mySearchTokyo);
    const resSearchTokyoData =
      resSearchTokyo["data"]["response"]["groups"][0]["items"];
    //横浜のデータ
    const mySearchYokohama = `${exploreUrl}?near=yokohama${sort}${limit}${myClientId}${myClientPass}${locate}${version}`;
    const resSearchYokohama = await axios.get(mySearchYokohama);
    const resSearchYokohamaData =
      resSearchYokohama["data"]["response"]["groups"][0]["items"];

    // const cityItemId = resSearchTokyoData[0].venue.id;
    // const detailUrl = `${baseUrl}${cityItemId}/?${myClientId}${myClientPass}${locate}${version}`;
    // const resDetail = await axios.get(detailUrl);
    // const resDetailData = resDetail.data;
    // const bestPhoto = resDetailData.response.venue.bestPhoto;
    // const bestPhotoUrl1 = bestPhoto.prefix;
    // const bestPhotoUrl2 = bestPhoto.suffix;
    // console.log(bestPhotoUrl2);
    return {
      resSearchTokyoData: resSearchTokyoData,
      resSearchYokohamaData: resSearchYokohamaData,
      // bestPhotoUrl1: bestPhotoUrl1,
      // bestPhotoUrl2: bestPhotoUrl2,
    };
  },
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
// $radius: 0.5rem;
// .top {
//   &__areaTitle {
//     font-size: 3rem;
//   }
//   &__cardlist {
//     @include u-flex($fd: row, $fw: wrap, $jc: flex-start, $ai: stretch);
//     margin-bottom: 30px;
//   }
//   &__cardlistitem {
//     width: calc((100% - 15%) / 4);
//     position: relative;
//     margin-top: 30px;

//     &:not(:nth-of-type(4n)) {
//       margin-right: 5%;
//     }
//   }
//   &__cardlistitemLink {
//     display: block;
//     @include u-trs;
//     @include u-hoverOp;
//   }
//   &__cardlistItemImg {
//     background-color: $gray;
//     // border-radius: $radius;
//   }
//   &__cardlistItemFigure {
//     padding: 3rem 6rem;
//   }
//   &__cardlistItemText {
//     width: 100%;
//     color: $white;
//     font-size: 2rem;
//     text-align: center;
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//   }
//   &__cardlistItemTag {
//     color: $black01;
//     position: absolute;
//     top: -5px;
//     right: -5px;
//     background-color: yellow;
//     border-radius: $radius;
//     padding: 7px 10px;
//     font-weight: bold;
//   }
// }
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
