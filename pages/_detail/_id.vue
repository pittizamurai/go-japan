<template>
  <div class="container">
    <div class="detailSec01">
      <div class="detailSec01__inner">
        <div class="detailSec01__thumbArea">
          <figure class="detailSec01__thumb">
            <img :src="BestPhotoUrl" alt="" />
            <!-- <img
              src="https://fastly.4sqi.net/img/general/original/36380081_Kee1f9pHRJU_Sepu7ARYgR_afLlZg7klsaSF3JtPtQA.jpg"
              alt=""
            /> -->
          </figure>
        </div>
        <div class="detailSec01__informationArea">
          <p class="detailSec01__informationAreaTitle">{{ resDetail.name }}</p>
          <!-- <p class="detailSec01__informationAreaTitle">上野恩賜公園</p> -->
          <!-- <p class="detailSec01__informationAreaGenre">公園</p> -->
          <p class="detailSec01__informationAreaGenre">
            {{ resDetail.categories[0].name }}
          </p>
          <!-- <p class="detailSec01__informationAreaAdress01">上野公園/池之端3</p> -->
          <p class="detailSec01__informationAreaAdress01">
            {{ resDetail.location.address }}
          </p>
          <!-- <p class="detailSec01__informationAreaAdress02">東京都</p> -->
          <p class="detailSec01__informationAreaAdress02">
            {{ resDetail.location.state }}
          </p>

          <!-- <p class="detailSec01__informationAreaContact">03-3828-5644</p> -->
          <p class="detailSec01__informationAreaContact">
            {{ resDetail.contact.formattedPhone }}
          </p>
          <!-- <a class="detailSec01__informationAreaUrlLink" href="#"
            ><p class="detailSec01__informationAreaUrl">
              http://www.kensetsu.metro.tokyo.jp
            </p>
          </a> -->
          <a class="detailSec01__informationAreaUrlLink">
            <p class="detailSec01__informationAreaUrl"></p>
            {{ resDetail.url }}</a
          >
          <!-- <p>{{ resDetail }}</p> -->
        </div>
      </div>
    </div>
    <div class="detailSec02">
      <h2 class="detailSec02__title">Photo Gallery</h2>
      <ul class="detailSec02__list" v-masonry item-selector=".item">
        <li
          class="detailSec02__listItem item"
          v-for="list in photoGalleryLists"
          :key="list.id"
          v-masonry-tile
        >
          <img :src="`${list.prefix}original${list.suffix}`" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NoSSR from "vue-no-ssr";
export default {
  components: {
    "no-ssr": NoSSR,
  },
  data() {},
  async asyncData(context) {
    const { $axios, params } = context;
    const myClientId = process.env.MY_CLIENT_ID;
    const myClientPass = process.env.MY_CLIENT_PASS;
    const baseUrl = "https://api.foursquare.com/v2/venues/";
    const detailId = context.params.id;
    const detailUrl = `${baseUrl}${detailId}?&limit=20${myClientId}${myClientPass}&v=20210530`;
    const resDetail = await $axios.$get(detailUrl);
    const resDetail02 = resDetail.response.venue;
    //bestPhoto
    const bestPhotoBaseUrl = resDetail02.bestPhoto;
    const BestPhotoPrefix = bestPhotoBaseUrl.prefix;
    const BestPhotoSuffix = bestPhotoBaseUrl.suffix;
    const BestPhotoUrl = `${BestPhotoPrefix}original${BestPhotoSuffix}`;
    //photoGallery API
    const detailPhotoUrl = `${baseUrl}${detailId}/?&limit=30${myClientId}${myClientPass}&v=20210530`;
    const resDetailPhoto = await $axios.$get(detailPhotoUrl);
    const photoGalleryLists =
      resDetailPhoto.response.venue.photos.groups[0].items;
    //photoGallery ローカル
    // const MyphotoGalleryLists = require(`~/assets/venueDetail.json`);
    //     const photoGalleryLists = MyphotoGalleryLists.photos.groups[0].items;

    return {
      resDetail: resDetail02,
      BestPhotoUrl: BestPhotoUrl,
      // resDetailPhoto: resDetailPhoto,
      photoGalleryLists: photoGalleryLists,
    };
  },
  mounted() {
    if (this.$redrawVueMasonry === "function") {
      this.$redrawVueMasonry();
    }
  },
};
</script>
<style lang="scss">
@import "~/assets/scss/style.scss";
.detailSec01 {
  background-color: $lightGray;
  padding: 50px;
  border-radius: 3rem;
  margin-top: 80px;
  @include u-mqMax {
    padding: 30px;
  }
  &__inner {
    @include u-flex($fd: row, $fw: wrap, $jc: flex-start, $ai: stretch);
    @include u-mqMax {
      flex-direction: column;
    }
  }
  &__thumbArea {
    width: 40%;
    @include u-mqMax {
      width: 100%;
    }
  }
  &__thumb {
    width: 30vw;
    height: 30vw;
    overflow: hidden;
    @include u-mqMax {
      width: 100%;
      height: 70vw;
    }
  }
  &__informationArea {
    width: 60%;
    padding: 50px;
    @include u-mqMax {
      width: 100%;
      padding: 30px 0 10px 0;
    }
  }
  &__informationAreaTitle {
    font-size: 2.8rem;
  }
  &__informationAreaGenre {
    font-size: 1.6rem;
    margin-top: 40px;
    @include u-mqMax {
      margin-top: 20px;
    }
  }
  &__informationAreaAdress01 {
    font-size: 1.6rem;
    margin-top: 20px;
    @include u-mqMax {
      margin-top: 10px;
    }
  }
  &__informationAreaAdress02 {
    font-size: 1.6rem;
    margin-top: 10px;
  }
  &__informationAreaContact {
    font-size: 1.6rem;
    margin-top: 20px;
    @include u-mqMax {
      margin-top: 10px;
    }
  }
  &__informationAreaUrlLink {
    display: block;
    margin-top: 20px;
    @include u-mqMax {
      margin-top: 10px;
    }
  }
  &__informationAreaUrlLink {
    font-size: 1.6rem;
  }
}
.detailSec02 {
  padding: 0 30px;
  @include u-mqMax {
    padding: 0;
  }
  &__title {
    color: $black01;
    font-family: "Abel", sans-serif;
    font-size: 5rem;
    font-weight: bold;
    margin: 150px 0 50px 0;
    @include u-mqMax {
      font-size: 3rem;
      margin: 30px 0 20px 0;
    }
  }
  &__list {
    margin: auto;
    // @include u-flex($fd: row, $fw: wrap, $jc: flex-start, $ai: stretch);
  }
  &__listItem {
  }
}
.item {
  width: calc(100% / 3 - 24px);
  margin: 8px;
  @include u-mqMax {
    width: calc(100% / 3 - 12px);
    margin: 4px;
  }
  img {
    display: block;
    width: 100%;
  }
}
</style>
