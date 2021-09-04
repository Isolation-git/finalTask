<template>
  <div class="good">
    <div class="good_pic">
      <img :src="data.imgURL" alt="" />
      <div :style="{ display: soldout_show }" class="soldout">
        <img src="../../assets/images/soldout.png" alt="" />
      </div>
      <h3>{{ data.title }}</h3>
      <p>{{ data.discribe }}</p>
      <p class="good_price">
        <i>￥</i>
        <span>{{ data.price }}</span>
      </p>
      <div
        class="shop_cart_icon iconfont"
        :style="{ background: bgColor }"
        @click="addToCart($event)"
      >
        &#xe60b;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Good",
  data() {
    return {
      flag: false,
    };
  },
  props: {
    data: {
      type: Object,
    },
  },
  computed: {
    soldout_show() {
      if (this.data.store > 0) {
        return "none";
      } else {
        return "block";
      }
    },
    bgColor() {
      if (this.data.store > 0) {
        this.flag = true;
        return "#e9394e";
      } else {
        this.flag = false;
        return "#999999";
      }
    },
  },
  methods: {
    addToCart(e) {
      if (this.flag) {
        if (window.localStorage.getItem("token")) {
          this.$emit("animate", e.target.getBoundingClientRect());
          this.$emit("buy", this.data);
        } else {
          this.$router.push("/login");
        }
      } else {
        return 0;
      }
    },
  },
};
</script>

<style>
.good {
  float: left;
  width: 200.5px;
  height: 278px;
  background-color: #fff;
  border-left: 1px solid #e7e7e7;
  border-right: 1px solid #e7e7e7;
  margin-right: -1px;
  padding: 20px;
}
.good_pic {
  position: relative;
  cursor: pointer;
}
.good_pic img {
  display: block;
  margin: 0 auto;
}
.soldout {
  position: absolute;
  top: 32px;
  left: 34px;
}
.good_pic h3 {
  color: #2f2f2f;
  font-size: 12px;
  margin-top: 10px;
  height: 18px;
}
.good_pic p:nth-child(4) {
  font-size: 12px;
  color: #666666;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.good_price {
  font-size: 20px;
  color: #2f2f2f;
  margin-top: 20px;
  font-family: arial;
}
.good_price i {
  font-style: normal;
  font-size: 0.5em;
  vertical-align: top;
  margin-right: -2px;
}
.good_price span {
  font-weight: 700;
  margin: 0;
  padding: 0;
}
.shop_cart_icon {
  position: absolute;
  width: 34px;
  height: 34px;
  border-radius: 17px;
  right: 0px;
  bottom: 0px;
  color: #fff;
  line-height: 34px;
  text-align: center;
  font-size: 26px;
}
</style>