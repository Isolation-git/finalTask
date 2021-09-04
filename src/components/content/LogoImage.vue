<template>
  <div id="LogoImage">
    <a href="#">
      <img :src="logoURL" />
    </a>
  </div>
</template>

<script>
export default {
  name: "LogoImage",
  props: {
    logoURL: {
      type: String,
    },
  },
};
</script>
s
<style>
#LogoImage {
  display: flex;
  width: 180px;
  height: 95px;
  justify-content: center;
}
#LogoImage a {
  display: flex;
  width: 130px;
  height: 48px;
  align-self: center;
}
#LogoImage img {
  width: 130px;
  height: 48px;
}
</style>