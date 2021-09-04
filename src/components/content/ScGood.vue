<template>
  <div class="scGood">
    <img :src="data.imgURL" alt="" :title="data.discribe" />
    <div class="nums">
      <button
        class="sub"
        @click="sub"
        :disabled="disabled"
        :class="{ disabled: disabled }"
      >
        -
      </button>
      <input type="text" v-model="total" />
      <button class="add" @click="add">+</button>
    </div>
    <div class="good_totalPrice" :title="'&yen' + totalPrice + '元'">
      ￥{{ totalPrice }}
    </div>
    <div class="good_del"><span @click="del">+</span></div>
  </div>
</template>

<script>
export default {
  name: "ScGood",
  data() {
    return {
      disabled: false,
    };
  },
  props: {
    data: {
      type: Object,
    },
    total: {
      type: Number,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    sub() {
      if (this.total > 1) {
        this.$emit("sub", this.index);
        if (this.total == 2) {
          //因为向外层发射事件的缘故，total判定条件不再是1
          this.disabled = true;
        }
      }
    },
    add() {
      this.$emit("add", this.index);
      if (this.total >= 1) {
        //同上
        this.disabled = false;
      }
    },
    del() {
      this.$emit("del", this.data);
    },
  },
  computed: {
    totalPrice() {
      return (this.data.price * this.total).toFixed(2);
    },
  },
};
</script>

<style>
.scGood img {
  width: 48px;
  height: 46px;
  cursor: pointer;
}
.nums {
  width: 80px;
  height: 48px;
  padding: 15px 7px;
}
.scGood {
  position: relative;
  overflow: hidden;
}
.nums button {
  width: 18px;
  height: 18px;
  font-weight: 700;
  line-height: 16px;
  color: #bcbcbc;
  border: 1px solid #dbdbdb;
  background-color: #fff;
  cursor: pointer;
}
.nums .disabled {
  cursor: not-allowed;
  color: #ebebeb;
}
.nums input {
  width: 30px;
  height: 18px;
  vertical-align: top;
  outline: none;
  border-width: 1px 0;
  border-color: #dbdbdb;
  padding-left: 12px;
  font-size: 12px;
}
.good_totalPrice {
  width: 48px;
  height: 48px;
  font-size: 12px;
  line-height: 48px;
  color: #c61f1f;
  cursor: text;
}
.good_del {
  position: absolute;
  width: 48px;
  height: 48px;
  line-height: 44px;
  font-size: 24px;
  text-align: center;
  transform: rotate(45deg);
  top: 0px;
  right: 7px;
}
.good_del span:hover {
  color: #cdcdcd;
  cursor: pointer;
}
</style>