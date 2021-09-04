<template>
  <div class="shopcart" @mouseleave="mouseleave">
    <div class="shoping_cart" @mouseenter="mouseenter">
      <i class="iconfont icon_shop">&#xe60b;</i>
      <span class="total_price">
        <strong>￥{{ totalPrice }}</strong>
        <a href="javascript:;">元</a>
      </span>
      <span class="total_kilo">
        <strong>{{ totalKilo }}</strong>
        <a href="javascript:;">kg</a>
      </span>
      <div class="miniTri">
        <div class="tri_animate" :class="{ hover: hover }">
          <div class="miniTri_top"></div>
          <div class="miniTri_bot"></div>
        </div>
      </div>
      <div
        class="sus_shop"
        :style="{ display: sus_disp, height: sus_height + 'px' }"
      >
        <div class="shop_car_title">
          <span>商品</span><span>数量</span><span>价格</span><span>删除</span>
        </div>
        <div class="shop_car_content">
          <slot name="mes">
            <p>
              如果您还未登录，可能导致购物车为空，请
              <a href="javascript:;" @click.prevent="gotoLogin">马上登录</a>
            </p>
          </slot>
        </div>
      </div>
    </div>
    <div
      class="toShopCart"
      :style="{
        display: animate_img.isShow,
        right: right + 'px',
        top: top + 'px',
      }"
    >
      <img :src="animate_img.url" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopCart",
  data() {
    return {
      hover: false,
      sus_disp: "none",
      sus_con_disp: "none",
      sus_height: 1,
      timer1: null,
      timer2: null,
      right: Number,
      top: Number,
    };
  },
  props: {
    total: {
      type: Number,
    },
    goods: {
      type: Array,
    },
    totals: {
      type: Array,
    },
    animate_img: {
      type: Object,
    },
  },
  methods: {
    mouseenter() {
      this.hover = true;
      clearInterval(this.timer2);
      setTimeout(() => {
        this.sus_disp = "block";
        let speed = 10;
        this.timer1 = setInterval(() => {
          this.sus_height += speed;
          speed = (364 - this.sus_height) / 10 + 1;
          if (this.sus_height > 364) {
            this.sus_height = 364;
            clearInterval(this.timer1);
          }
        }, 10);
      }, 500);
    },
    mouseleave() {
      this.hover = false;
      clearInterval(this.timer1);
      setTimeout(() => {
        new Promise((resolve, reject) => {
          let speed = 10;
          this.timer2 = setInterval(() => {
            this.sus_height -= speed;
            speed = this.sus_height / 10 + 1;
            if (this.sus_height < 2) {
              this.sus_height = 2;
              clearInterval(this.timer2);
              resolve();
            }
          }, 10);
        }).then(() => {
          this.sus_disp = "none";
        });
      }, 100);
    },
    gotoLogin() {
      this.$router.push("/login");
    },
    animate() {
      new Promise((resolve, reject) => {
        let xLength = 1321 - this.animate_img.x;
        let yLength = this.animate_img.y;
        let speed = {};
        this.right = xLength;
        this.top = yLength;
        this.timer = setInterval(() => {
          speed.x = (this.right - 100) / 10 + 1;
          speed.y = this.top / 10 + 1;
          this.right -= speed.x;
          if (this.right < 100) this.right = 100;
          this.top -= speed.y;
          if (this.top < 0) this.top = 0;
          if (this.right == 100 && this.top == 0) {
            clearInterval(this.timer);
            resolve();
          }
        }, 25);
      }).then(() => {
        this.$emit("animate_end", this.animate_img);
      });
    },
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      for (let i in this.goods) {
        totalPrice += this.goods[i].price * this.totals[i];
      }
      return totalPrice.toFixed(2);
    },
    totalKilo() {
      let totalKilo = 0;
      for (let i in this.goods) {
        totalKilo += this.goods[i].weight * this.totals[i];
      }
      return totalKilo.toFixed(1);
    },
  },
};
</script>

<style>
.shopcart {
  display: flex;
  width: 250px;
  height: 36px;
  position: absolute;
  right: 0;
  top: 0;
}
.icon_shop {
  position: absolute;
  display: inline-block;
  width: 34px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  height: 34px;
  font-size: 20px;
  left: -21px;
  z-index: 3;
  background-color: #333333;
  border-radius: 17px;
  border: 3px solid #fff;
}
.shoping_cart {
  position: absolute;
  top: 0;
  right: 0;
  width: 208px;
  height: 33px;
  background-color: #bf0000;
  transition: all 0.2s linear 0.3s;
  cursor: pointer;
}
.shoping_cart span {
  line-height: 33px;
}
.total_price {
  margin-left: 20px;
  color: #fbf900;
  font-size: 22px;
}
.total_price a {
  font-size: 12px;
  color: #fbf900;
  vertical-align: top;
}
.total_kilo {
  margin-left: 10px;
  font-size: 12px;
  vertical-align: top;
  color: #fff;
}
.total_kilo a {
  font-size: 12px;
  color: #fff;
}
.shoping_cart:hover {
  width: 248px;
  transition: all 0.2s linear 0.3s;
}
.miniTri {
  display: block;
  position: absolute;
  width: 10px;
  height: 10px;
  top: 15px;
  right: 10px;
  /* background-color: pink; */
  overflow: hidden;
  transition: all 0.2s linear 0.3s;
}
.miniTri .hover {
  top: -12px;
  transition: all 0.2s linear 0.3s;
}
.tri_animate {
  position: absolute;
  width: 10px;
  height: 12px;
  top: 0px;
  transition: all 0.2s linear 0.3s;
}
.tri_animate div {
  width: 0;
  height: 0;
  border: 5px solid transparent;
  position: absolute;
}
.miniTri .miniTri_top {
  border-top: 5px solid #fff;
  top: 0;
}
.miniTri .miniTri_bot {
  border-bottom: 5px solid#fff;
  top: 7px;
}
.sus_shop {
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 34px;
  right: 0;
  width: 248px;
  /* height: 364px; */
  /* height: 10px; */
  z-index: 6;
  background-color: #fff;
  border: 5px solid #e22a40;
  border-top: none;
  cursor: default;
  overflow: hidden;
}

.shop_car_title {
  display: flex;
  width: 100%;
  height: 30px;
  justify-content: space-around;
  background-color: #f4f4f4;
}
.shop_car_title span {
  color: #666666;
  font-size: 12px;
  cursor: text;
}
.shop_car_content {
  width: 100%;
  height: 100%;
}
.shop_car_content p {
  font-size: 12px;
  color: #333333;
  padding: 32px 10px;
  text-align: center;
  cursor: text;
}
.shop_car_content a {
  color: #0000ff;
}
.shop_car_content a:hover {
  text-decoration: underline;
}

.toShopCart {
  position: absolute;
}
.toShopCart img {
  width: 34px;
  height: 34px;
}
</style>