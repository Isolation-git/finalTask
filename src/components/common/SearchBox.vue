<template>
  <div class="search">
    <input
      type="text"
      placeholder="搜索天猫超市商品"
      v-model="value"
      title="请输入搜索文字"
      @focus="getFocus"
      @blur="lostFocus"
    />
    <span @click="searchClick">搜 索</span>
    <div class="keyWords_lists" v-show="arr.length && focus">
      <a
        href="#"
        v-for="(item, index) in arr"
        :key="(item, index)"
        :class="{ bgcRed: currentIndex == index }"
        @mouseenter="turn(index)"
        @mouseleave="turnBack(index)"
      >
        <i
          class="kw_left"
          style="margin-left: 5px"
          :style="{ color: font_color[index] }"
          >{{ item.split(value)[0] }}</i
        >
        <i :style="{ color: font_color[index] }">{{ value }}</i>
        <i class="kw_right" :style="{ color: font_color[index] }">{{
          item.split(value)[1]
        }}</i>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SearchBox",
  data() {
    return {
      value: "",
      arr: [],
      currentIndex: -1,
      font_color: [],
      focus: false,
    };
  },
  methods: {
    searchClick() {
      console.log(this.value);
    },
    select(arr, value) {
      // console.log(arr, value);
      let list = [];
      for (let i in arr) {
        if (arr[i].indexOf(value) != -1) {
          list.push(arr[i]);
        }
      }
      // console.log(list);
      // console.log(list);
      let res = [],
        arr1 = [],
        arr2 = [],
        arr3 = [];
      this.font_color.splice(0);
      for (let i in list) {
        if (list[i].split(value)[0] == "") {
          arr1.push(list[i]);
          this.font_color.push("#000000");
        } else {
          if (list[i].split(value)[1] == "") {
            arr2.push(list[i]);
            this.font_color.push("#000000");
          } else {
            arr3.push(list[i]);
            this.font_color.push("#000000");
          }
        }
      }
      for (let i in arr1) {
        res.push(arr1[i]);
        if (res.length >= 10) return res;
      }
      for (let i in arr2) {
        res.push(arr2[i]);
        if (res.length >= 10) return res;
      }
      for (let i in arr3) {
        res.push(arr3[i]);
        if (res.length >= 10) return res;
      }
      return res;
    },
    turn(index) {
      this.currentIndex = index;
      for (let i in this.font_color) {
        this.font_color[i] = "#000000";
      }
      this.font_color[index] = "#fff";
    },
    turnBack(index) {
      this.font_color[index] = "#000000";
      this.currentIndex = -1;
    },
    getFocus() {
      this.focus = true;
    },
    lostFocus() {
      this.focus = false;
    },
  },
  watch: {
    value(newValue, oldValue) {
      let value = newValue.replace(" ", "");
      if (value != "" && value != oldValue) {
        axios({
          method: "get",
          url: "http://localhost:3456",
        })
          .then((res) => {
            // console.log(res.data.keyWords);
            this.arr = this.select(res.data.keyWords, value);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.arr.splice(0);
      }
    },
  },
};
</script>

<style>
.bgcRed {
  background-color: #ff0036;
}
.search {
  display: flex;
  position: relative;
  width: 540px;
  margin-left: 20px;
  padding-top: 5px;
  padding-left: 5px;
  height: 40px;
  align-self: center;
  background-color: #30b30e;
}
.search input {
  width: 447px;
  height: 20px;
  padding: 5px;
  outline: none;
  font-size: 12px;
  box-sizing: content-box;
  border: none;
}
.search span {
  display: inline-block;
  color: #fff;
  width: 100px;
  height: 35px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}
input::-webkit-input-placeholder {
  padding-left: 5px;
  color: #666666;
  font-size: 12px;
  line-height: 25px;
}
input:focus::-webkit-input-placeholder {
  color: #cccccc;
}
.keyWords_lists {
  flex-direction: column;
  position: absolute;
  top: 35px;
  left: 4px;
  width: 440px;
  height: auto;
  z-index: 999;
  background-color: #fff;
  border: 1px solid #bebebe;
}
.keyWords_lists a {
  display: block;
  height: 25px;
  line-height: 25px;
}
.keyWords_lists i {
  font-style: normal;
  padding: 0;
  margin: 0;
  display: inline-block;
  color: #000000;
  width: auto;
  font-size: 12px;
}
.keyWords_lists .kw_left,
.kw_right {
  font-weight: 700;
}
</style>