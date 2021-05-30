<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">jp-base</h1>
      <p>{{ lists }}</p>
      <div v-for="(list, index) in lists">
        <div class="fixAreaDetail__inner">
          <h2 class="fixAreaDetail__title">
            {{ list }}
          </h2>
          <!-- <p class="fixAreaDetail__title">{{ list.id }}</p> -->
          <!-- <p class="fixAreaDetail__year">{{ list.acf.top_itemYear }}</p>
            <p class="fixAreaDetail__position">
              {{ list.acf.top_itemPosition }}
            </p>
            <div
              class="fixAreaDetail__text"
              v-html="list.content.rendered"
            ></div>
            <figure class="fixAreaDetail__figure">
              <img v-bind:src="list.acf.top_headerImg.url" alt="" />
            </figure> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     lists: [],
  //   };
  // },
  data() {
    return {
      test: [],
    };
  },

  async asyncData({ $axios }) {
    const myClientId = process.env.MY_CLIENT_ID;
    const myClientPass = process.env.MY_CLIENT_PASS;
    // const baseUrl = "https://api.foursquare.com/v2/venues/search";
    const baseUrl = "https://api.foursquare.com/v2/venues/explore";
    const locate = "&locate=ja";
    const version = "&v=20210530";
    const nearTokyo = "near=tokyo";
    const mySearchBaseUrl = `${baseUrl}?${nearTokyo}${myClientId}${myClientPass}${locate}${version}`;
    const urlEntertainment = `${mySearchBaseUrl}`;
    const res = await $axios.$get(urlEntertainment);
    // console.log(res.response.groups);
    // const venueId = response.venues.id;
    // const test = response["response"]["venues"][0]["id"];

    // const images = `${baseUrl}${venueId}/photos/?${myClientId}${myClientPass}${locate}${version}`;
    // console.log(images);
    return {
      // lists: response.response.venues,
      lists: res.response,
    };
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
</style>
