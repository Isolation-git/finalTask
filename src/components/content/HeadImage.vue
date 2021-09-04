<template>
  <div id="HeadImage">
    <a href="#">
      <img :src="headURL" />
    </a>
  </div>
</template>

<script>
export default {
  name: "HeadImage",
  props: {
    headURL: {
      type: String,
    },
  },
};
</script>

<style>
#HeadImage {
  height: 110px;
  text-align: center;
  background-color: #319df5;
}
</style>