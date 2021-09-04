<template>
  <div class="areaSelect" @mouseover="over" @mouseleave="leave">
    <div class="area-content">
      {{ nowCity }}
      <i class="iconfont icon" :style="{ transform: rotate }">&#xe603;</i>
    </div>
    <div class="area-select" :style="{ display: isShow }">
      <div class="hot-city">
        <div class="hot-city-hot">热门城市:</div>
        <div class="hot-city-list">
          <span
            v-for="(item, index) in hot_city"
            :key="(item, index)"
            @mouseover="cover(index)"
            @mouseleave="cleave"
            :class="{ changered: currentIndex === index }"
            @click="cclick"
            >{{ item }}</span
          >
        </div>
      </div>
      <div class="all-city-head">
        <div class="all-city-title">
          <div @mouseenter="enter0" :class="{ city_border: city_border[0] }">
            ABCDE
          </div>
          <div @mouseenter="enter1" :class="{ city_border: city_border[1] }">
            FGHJ
          </div>
          <div @mouseenter="enter2" :class="{ city_border: city_border[2] }">
            KLMNP
          </div>
          <div @mouseenter="enter3" :class="{ city_border: city_border[3] }">
            QRSTW
          </div>
          <div @mouseenter="enter4" :class="{ city_border: city_border[4] }">
            XYZ
          </div>
        </div>
      </div>
      <div class="all-city-content">
        <div class="A-Z" :style="{ display: city_lists[0] }">
          <div id="A">
            <div class="letter">A</div>
            <div class="all-city-list">
              <span v-for="item in all_city.A" :key="item" @click="cclick">{{
                item
              }}</span>
            </div>
          </div>
          <div id="B">
            <div class="letter">B</div>
            <div class="all-city-list">
              <span v-for="item in all_city.B" :key="item" @click="cclick">{{
                item
              }}</span>
            </div>
          </div>
          <div id="C">
            <div class="letter">C</div>
            <div class="all-city-list">
              <span v-for="item in all_city.C" :key="item" @click="cclick">{{
                item
              }}</span>
            </div>
          </div>
          <div id="D">
            <div class="letter">D</div>
            <div class="all-city-list">
              <span v-for="item in all_city.D" :key="item" @click="cclick">{{
                item
              }}</span>
            </div>
          </div>
          <div id="E">
            <div class="letter">E</div>
            <div class="all-city-list">
              <span v-for="item in all_city.E" :key="item" @click="cclick">{{
                item
              }}</span>
            </div>
          </div>
        </div>
        <div class="A-Z" :style="{ display: city_lists[1] }">
          <div id="F">
            <div class="letter">F</div>
            <div class="all-city-list">
              <span v-for="item in all_city.F" :key="item" @click="cclick">{{
                item
              }}</span>
            </div>
          </div>
          <div id="G">
            <div class="letter">G</div>
            <div class="all-city-list">
              <span v-for="item in all_city.G" :key="item" @click="cclick">{{
                item
              }}</span>
            </div>
          </div>
          <div id="H">
            <div class="letter">H</div>
            <div class="all-city-list">
              <span v-for="item in all_city.H" :key="item" @click="cclick">{{
                item
              }}</span>
            </div>
          </div>
          <div id="J">
            <div class="letter">J</div>
            <div class="all-city-list">
              <span v-for="item in all_city.J" :key="item" @click="cclick">{{
                item
              }}</span>
            </div>
          </div>
        </div>
        <div class="A-Z" :style="{ display: city_lists[2] }">
          <div id="K">
            <div class="letter">K</div>
            <div class="all-city-list">
              <span v-for="item in all_city.K" :key="item" @click="cclick">{{
                item
              }}</span>
            </div>
          </div>
          <div id="L">
            <div class="letter">L</div>
            <div class="all-city-list">
              <span v-for="item in all_city.L" :key="item" @click="cclick">{{
                item
              }}</span>
            </div>
          </div>
          <div id="M">
            <div class="letter">M</div>
            <div class="all-city-list">
              <span v-for="item in all_city.M" :key="item" @click="cclick">{{
                item
              }}</span>
            </div>
          </div>
          <div id="N">
            <div class="letter">N</div>
            <div class="all-city-list">
              <span v-for="item in all_city.N" :key="item" @click="cclick">{{
                item
              }}</span>
            </div>
          </div>
          <div id="P">
            <div class="letter">P</div>
            <div class="all-city-list">
              <span v-for="item in all_city.P" :key="item">{{ item }}</span>
            </div>
          </div>
        </div>
        <div class="A-Z" :style="{ display: city_lists[3] }">
          <div id="Q">
            <div class="letter">Q</div>
            <div class="all-city-list">
              <span v-for="item in all_city.Q" :key="item" @click="cclick">{{
                item
              }}</span>
            </div>
          </div>
          <div id="R">
            <div class="letter">R</div>
            <div class="all-city-list">
              <span v-for="item in all_city.R" :key="item" @click="cclick">{{
                item
              }}</span>
            </div>
          </div>
          <div id="S">
            <div class="letter">S</div>
            <div class="all-city-list">
              <span v-for="item in all_city.S" :key="item" @click="cclick">{{
                item
              }}</span>
            </div>
          </div>
          <div id="T">
            <div class="letter">T</div>
            <div class="all-city-list">
              <span v-for="item in all_city.T" :key="item" @click="cclick">{{
                item
              }}</span>
            </div>
          </div>
          <div id="W">
            <div class="letter">W</div>
            <div class="all-city-list">
              <span v-for="item in all_city.W" :key="item">{{ item }}</span>
            </div>
          </div>
        </div>
        <div class="A-Z" :style="{ display: city_lists[4] }">
          <div id="X">
            <div class="letter">X</div>
            <div class="all-city-list">
              <span v-for="item in all_city.X" :key="item" @click="cclick">{{
                item
              }}</span>
            </div>
          </div>
          <div id="Y">
            <div class="letter">Y</div>
            <div class="all-city-list">
              <span v-for="item in all_city.Y" :key="item" @click="cclick">{{
                item
              }}</span>
            </div>
          </div>
          <div id="Z">
            <div class="letter">Z</div>
            <div class="all-city-list">
              <span v-for="item in all_city.Z" :key="item" @click="cclick">{{
                item
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AreaSelect",
  data() {
    return {
      nowCity: "重庆",
      isShow: "none",
      deg: 0,
      currentIndex: -1,
      city_border: [true, false, false, false, false],
      city_lists: ["felx", "none", "none", "none", "none"],
    };
  },
  props: {
    city: {
      type: Object,
    },
  },
  methods: {
    over() {
      this.isShow = "flex";
      this.deg = 180;
      //   console.log(this.city);
    },
    leave() {
      this.isShow = "none";
      this.deg = 0;
    },
    cover(index) {
      this.currentIndex = index;
      // console.log(this.currentIndex);
    },
    cleave() {
      this.currentIndex = -1;
      // console.log(this.currentIndex);
    },
    cclick(e) {
      this.nowCity = e.target.innerHTML;
      // console.log(this.all_city.A);
    },
    enter0() {
      let temp = this.city_border;
      let temp0 = this.city_lists;
      for (let i in temp) {
        temp[i] = false;
      }
      for (let i in temp0) {
        temp0[i] = "none";
      }
      temp[0] = true;
      temp0[0] = "flex";
    },
    enter1() {
      let temp = this.city_border;
      let temp0 = this.city_lists;
      for (let i in temp) {
        temp[i] = false;
      }
      for (let i in temp0) {
        temp0[i] = "none";
      }
      temp[1] = true;
      temp0[1] = "flex";
    },
    enter2() {
      let temp = this.city_border;
      let temp0 = this.city_lists;
      for (let i in temp) {
        temp[i] = false;
      }
      for (let i in temp0) {
        temp0[i] = "none";
      }
      temp[2] = true;
      temp0[2] = "flex";
    },
    enter3() {
      let temp = this.city_border;
      let temp0 = this.city_lists;
      for (let i in temp) {
        temp[i] = false;
      }
      for (let i in temp0) {
        temp0[i] = "none";
      }
      temp[3] = true;
      temp0[3] = "flex";
    },
    enter4() {
      let temp = this.city_border;
      let temp0 = this.city_lists;
      for (let i in temp) {
        temp[i] = false;
      }
      for (let i in temp0) {
        temp0[i] = "none";
      }
      temp[4] = true;
      temp0[4] = "flex";
    },
  },
  computed: {
    rotate() {
      return "rotate(" + this.deg + "deg)";
    },
    hot_city() {
      return this.city.hot_city;
    },
    all_city() {
      return this.city.all_city;
    },
  },
};
</script>

<style>
.changered {
  color: #e22a40 !important;
}
.areaSelect {
  display: flex;
  position: relative;
  /* width: 80px; */
  padding: 0 10px;
  height: 40px;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  justify-content: center;
  border-radius: 4px;
  line-height: 40px;
  align-self: center;
  z-index: 777;
}

.area-content {
  color: #30b30e;
}
.area-content i {
  display: inline-block;
  color: #30b30e;
  transform-origin: 50% 50%;
  transition: transform 0.3s;
}
.area-select {
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 480px;
  top: 35px;
  left: -1px;
  /* height: 400px; */
  border: 1px solid #e5e5e5;
  background-color: #fff;
  z-index: 666;
}
.hot-city {
  height: 126px;
  padding: 15px 15px 0 15px;
}
.hot-city-hot {
  font-size: 14px;
  margin-left: 10px;
}
.hot-city-hot::before {
  content: "";
  display: block;
  position: absolute;
  top: -1px;
  left: 0px;
  width: 79px;
  height: 1px;
  background-color: #fff;
}
.hot-city-list {
  display: flex;
  height: 65px;
  padding-left: 10px;
  justify-content: space-around;
  flex-wrap: wrap;
}
.hot-city-list span {
  color: #333333;
  display: flex;
  font-size: 16px;
  width: 73px;
  height: 30px;
  cursor: pointer;
}
.all-city-head {
  display: flex;
  padding: 15px 15px 0 15px;
  flex-direction: column;
  border-bottom: 1px solid #eeeeee;
}
.all-city-title {
  display: flex;
}
.all-city-title div {
  display: flex;
  position: relative;
  color: #333333;
  width: 89px;
  height: 40px;
  line-height: 40px;
  justify-content: center;
  cursor: pointer;
}
.city_border {
  border: 1px solid #eee;
}
.city_border::after {
  content: "";
  display: block;
  position: absolute;
  top: 38px;
  width: 87px;
  height: 2px;
  background-color: #fff;
  z-index: 888;
}

.all-city-content {
  display: flex;
  position: relative;
  color: #333333;
  padding: 20px 20px 0 20px;
}
.A-Z {
  display: flex;
  flex-direction: column;
  width: 480px;
}
.A-Z #A,
#B,
#C,
#D,
#E,
#F,
#G,
#H,
#J,
#K,
#L,
#M,
#N,
#P,
#Q,
#R,
#S,
#T,
#W,
#X,
#Y,
#Z {
  display: flex;
  width: 480px;
  flex-direction: row;
  margin-bottom: 15px;
}
.all-city-list {
  display: flex;
  font-size: 14px;
  width: 480px;
  flex-wrap: wrap;
}
.letter {
  width: 40px;
  color: #e24a4a;
}
.all-city-list span {
  display: flex;
  width: 68px;
  height: 30px;
  overflow: hidden;
  cursor: pointer;
  /* flex-wrap: nowrap; */
}
.all-city-list span:hover {
  color: #e22a40;
}
</style>