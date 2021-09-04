<template>
  <div
    class="navsus"
    :style="{ display: sus_show, transform: 'scale(' + sus_scale + ')' }"
  >
    <a :class="{ a_click: index[0] == currentIndex }" @click.prevent="click1"
      >进口酒饮
      <i class="iconfont">&#xe603;</i>
    </a>
    <a :class="{ a_click: index[1] == currentIndex }" @click.prevent="click2"
      >酒水饮料
      <i class="iconfont">&#xe603;</i>
    </a>
    <a :class="{ a_click: index[2] == currentIndex }" @click.prevent="click3"
      >米面杂粮
      <i class="iconfont">&#xe603;</i>
    </a>
    <a :class="{ a_click: index[3] == currentIndex }" @click.prevent="click4"
      >油品调味
      <i class="iconfont">&#xe603;</i>
    </a>
    <a :class="{ a_click: index[4] == currentIndex }" @click.prevent="click5"
      >美容护肤
      <i class="iconfont">&#xe603;</i>
    </a>
    <a href="javascript:;" class="navsus_img">
      <img src="../../assets/images/navSusImg.png" alt="" />
    </a>
    <div class="online_cs">在线咨询</div>
  </div>
</template>

<script>
export default {
  name: "NavSus",
  data() {
    return {
      a_disp: false,
      currentIndex: -1,
      index: [0, 1, 2, 3, 4],
      sus_show: "none",
      sus_scale: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScrollx, true);
  },
  methods: {
    click1() {
      document.getElementById("im_drink").scrollIntoView();
      window.scrollBy(0, -30);
      this.currentIndex = 0;
    },
    click2() {
      document.getElementById("drink_wine").scrollIntoView();
      window.scrollBy(0, -30);
      this.currentIndex = 1;
    },
    click3() {
      document.getElementById("rice").scrollIntoView();
      window.scrollBy(0, -30);
      this.currentIndex = 2;
    },
    click4() {
      document.getElementById("oil").scrollIntoView();
      window.scrollBy(0, -30);
      this.currentIndex = 3;
    },
    click5() {
      document.getElementById("cosme").scrollIntoView();
      window.scrollBy(0, -30);
      this.currentIndex = 4;
    },
    handleScrollx() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop, this.currentIndex);
      if (scrollTop > 700) {
        this.sus_show = "flex";
        let timer = setInterval(() => {
          this.sus_scale += 0.1;
          if (this.sus_scale >= 0.99) {
            this.sus_scale = 1;
            clearInterval(timer);
          }
        }, 50);
        if (scrollTop >= 3430) {
          this.currentIndex = 4;
        } else if (scrollTop >= 2793) {
          this.currentIndex = 3;
        } else if (scrollTop >= 2145) {
          this.currentIndex = 2;
        } else if (scrollTop >= 1504) {
          this.currentIndex = 1;
        } else if (scrollTop >= 890) {
          this.currentIndex = 0;
        } else {
          this.currentIndex = 0;
        }
      } else {
        new Promise((resolve, reject) => {
          let timer = setInterval(() => {
            this.sus_scale -= 0.1;
            if (this.sus_scale <= 0.01) {
              this.sus_scale = 0;
              clearInterval(timer);
              resolve();
            }
          }, 50);
        }).then(() => {
          this.sus_show = "none";
        });
      }

      return scrollTop;
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScrollx);
  },
};
</script>

<style>
.navsus {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 218px;
  top: 79px;
  left: 79px;
  border: 1px solid #e7e7e7;
  overflow: hidden;
  z-index: 666;
  background-color: #fff;
}
.navsus a {
  color: #666666;
  font-size: 12px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid #e7e7e7;
}
.navsus a:hover {
  color: #fff;
  background-color: #e5374d;
}
.a_click {
  color: #fff !important;
  background-color: #e5374d;
}
.navsus a i {
  display: inline-block;
  font-size: 12px;
  transform: rotate(-90deg) scale(0.8);
  margin-left: -3px;
}
.navsus .navsus_img {
  display: block;
  width: 80px;
  height: 80px;
}
.navsus_img img {
  width: 80px;
  height: 80px;
  cursor: default;
}
.online_cs {
  position: relative;
  color: #666666;
  font-size: 12px;
  text-indent: 0.6em;
  line-height: 22px;
  border-top: 1px solid #e7e7e7;
  cursor: pointer;
}
.online_cs::after {
  content: "";
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-left: 5px solid #666666;
  top: 6px;
  right: 7px;
}
</style>