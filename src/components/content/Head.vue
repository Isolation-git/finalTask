<template>
  <div class="head">
    <LogoImage :logoURL="logoURL"></LogoImage>
    <div class="area"><AreaSelect :city="city"></AreaSelect></div>
    <SearchBox></SearchBox>
    <HeadRest :headRestIMG="headRestIMG"></HeadRest>
  </div>
</template>

<script>
import LogoImage from "./LogoImage.vue";
import AreaSelect from "./AreaSelect.vue";
import SearchBox from "../common/SearchBox.vue";
import HeadRest from "./HeadRest.vue";
export default {
  name: "Head",
  props: {
    logoURL: {
      type: String,
    },
    city: {
      type: Object,
    },
    headRestIMG: {
      type: Object,
    },
  },
  components: {
    LogoImage,
    AreaSelect,
    SearchBox,
    HeadRest,
  },
};
</script>

<style>
.head {
  display: flex;
  width: 1190px;
  height: 95px;
  margin: 0 auto;
}
.area {
  display: flex;
  width: 160px;
  height: 95px;
  justify-content: center;
}
</style>