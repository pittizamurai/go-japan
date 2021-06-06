<template>
  <div class="container city">
    <div>
      <!-- <h2 class="citySec01__areaTitle">{{ this.$route.params.city }}</h2> -->
      <TopCityLink :parent="parent" />
      <section class="weatherSec">
        <h3 class="lowerTitle">8 DAY FORECAST</h3>
        <ul class="weatherSec__list">
          <li
            v-for="list in weatherList"
            :key="list.item"
            class="weatherSec__listItem"
          >
            <!-- <li>天気：{{ list.weather[0].main }}</li> -->
            <div class="weatherSec__listItemDate" ref="date">{{ list.dt }}</div>
            <div class="weatherSec__listItemThumb">
              <img
                :src="
                  'https://openweathermap.org/img/w/' +
                  list.weather[0].icon +
                  '.png'
                "
              />
            </div>
            <dic class="weatherSec__listItemTemp">
              <div class="weatherSec__listItemTempMax">
                <span ref="maxTem">{{ list.temp.max - 273.15 }}</span
                >℃
              </div>
              <div class="weatherSec__listItemTempMin">
                <span ref="minTem">{{ list.temp.min - 273.15 }}</span
                >℃
              </div>
            </dic>
          </li>
        </ul>
      </section>
      <br />
      <!-- <img v-bind:src="`${bestPhotoUrl1}original${bestPhotoUrl2}`" /> -->
      <hr class="border" />
      <div class="detaileSec">
        <h3 class="lowerTitle">PICK UP</h3>
        <CityList :listsCity="listsCity" :parent="parent" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      weatherList: [],
    };
  },
  methods: {
    changeTem: function (target) {
      const strings = Array.from(target);
      strings.map((string) => {
        let contents = string.innerText;
        const math = parseInt(contents, 10);
        string.innerHTML = math;
      });
    },
    changeDate: function (targetDate) {
      const stringsDate = Array.from(targetDate);
      stringsDate.map((stringDate) => {
        let contentsDate = stringDate.innerText;
        let mathDate = new Date(contentsDate * 1000);
        mathDate = mathDate.toLocaleDateString("ja-JP").slice(5);
        stringDate.innerHTML = mathDate;
      });
    },
    // cityLocation: function(){
    //   let city = cityName03;
    //   if(city === tokyo){
    //     let cityLocated = "lat=35.6804&lon=139.769017";
    //   };
    //   console.log(cityLocated);
    // },
  },

  mounted() {
    const targetMax = this.$refs.maxTem;
    this.changeTem(targetMax);
    const targetMin = this.$refs.minTem;
    this.changeTem(targetMin);
    const targetDate = this.$refs.date;
    this.changeDate(targetDate);
  },

  async asyncData(context) {
    // console.log("$axios", $axios);
    const myClientId = process.env.MY_CLIENT_ID;
    const myClientPass = process.env.MY_CLIENT_PASS;
    const baseUrl = "https://api.foursquare.com/v2/venues/";
    const exploreUrl = `${baseUrl}explore`;
    const cityName03 = context.params.city;
    const locate = "&locate=ja";
    const version = "&v=20210530";
    const sort = "&sortByPopularity=1";
    const limit = "&limit=30";
    const mySearchBaseUrl = `${exploreUrl}?near=${cityName03}${sort}${limit}${myClientId}${myClientPass}${locate}${version}`;
    const resCity = await axios.get(mySearchBaseUrl);
    const resCity02 = resCity.data;
    const resCityData = resCity02["response"]["groups"][0]["items"];
    const cityItemId = resCityData[0].venue.id;
    // const detailUrl = `${baseUrl}${cityItemId}/?${myClientId}${myClientPass}${locate}${version}`;
    // const resDetail = await axios.get(detailUrl);
    // const resDetailData = resDetail.data;
    // const bestPhoto = resDetailData.response.venue.bestPhoto;
    // const bestPhotoUrl1 = bestPhoto.prefix;
    // const bestPhotoUrl2 = bestPhoto.suffix;
    // console.log(bestPhotoUrl2);

    //天気
    // this.cityLocation();
    const myApiKeyWeather = process.env.MY_API_KEY_WEATHER;
    let city = "null";
    if (cityName03 === "tokyo") {
      city = "lat=35.6804&lon=139.769017";
    } else if (cityName03 === "yokohama") {
      city = "lat=35.4437&lon=139.638";
    } else if (cityName03 === "kyoto") {
      city = "lat=35.0116&lon=135.768";
    } else if (cityName03 === "osaka") {
      city = "lat=34.6937&lon=135.5021";
    } else if (cityName03 === "sapporo") {
      city = "lat=43.06417&lon=141.34694";
    } else if (cityName03 === "nagoya") {
      city = "lat=35.1814&lon=136.9063";
    }
    const itemWeather = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?${city}&exclude=current,minutely,alerts&appid=${myApiKeyWeather}`
    );

    const weatherList = itemWeather.data.daily;
    return {
      listsCity: resCityData,
      parent: cityName03,
      weatherList: weatherList,

      // bestPhotoUrl1: bestPhotoUrl1,
      // bestPhotoUrl2: bestPhotoUrl2,
    };
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/style.scss";

.citySec01 {
  &__areaTitle {
    color: $black01;
    font-family: "RopaSans", sans-serif;
    font-size: 4rem;
    font-weight: bold;
    text-transform: uppercase;
  }
}
.border {
  height: 1px;
  background-color: $lightGray;
  width: 80%;
  margin: 0 auto;
  margin-top: 100px;
  @include u-mqMax {
    margin-top: 30px;
  }
}
.lowerTitle {
  color: #101010;
  font-family: "Abel", sans-serif;
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0 0 50px 0;
  @include u-mqMax {
    font-size: 2rem;
    margin: 0 0 30px 0;
  }
}
.weatherSec {
  margin-top: 100px;
  @include u-mqMax {
    margin-top: 30px;
  }

  &__title {
  }
  &__list {
    @include u-flex($fd: row, $fw: nowrap, $jc: center, $ai: center);
    @include u-mqMax {
      overflow-x: scroll;
      justify-content: flex-start;
    }
  }
  &__listItem {
    width: calc(100% / 8);
    padding: 5px 20px;
    position: relative;
    &:not(:last-of-type) {
      &:after {
        content: "";
        position: absolute;
        right: 0;
        width: 1px;
        height: 30%;
        top: 50%;
        background-color: $lightGray;
        transform: translateY(-50%);
      }
    }
    @include u-mqMax {
      min-width: 80px;
      padding: 5px 10px;
    }
  }
  &__listItemThumb {
    width: 100%;
  }
  &__listItemDate {
    text-align: center;
  }
  &__listItemTemp {
    @include u-flex($fd: row, $fw: nowrap, $jc: space-around, $ai: stretch);
  }
  &__listItemTempMax {
    color: $red02;

    span {
      color: $red02;
    }
  }
  &__listItemTempMin {
    color: $blue01;

    span {
      color: $blue01;
    }
  }
}
.detaileSec {
  margin-top: 100px;
  @include u-mqMax {
    margin-top: 30px;
  }
}
</style>
