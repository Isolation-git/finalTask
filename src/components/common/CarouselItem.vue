<template>
  <transition>
    <div class="carouselitem" v-show="selfIndex === currentIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import { getCurrentInstance, reactive, toRefs, watch } from "vue";
export default {
  name: "CarouselItem",
  setup() {
    const instance = getCurrentInstance();
    // console.log(instance);
    const state = reactive({
      selfIndex: instance.vnode.key,
      currentIndex: instance.parent.ctx.currentIndex,
    });
    watch(
      () => {
        return instance.parent.ctx.currentIndex;
      },
      (value) => {
        state.currentIndex = value;
      }
    );
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style>
.carouselitem {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.carouselitem img {
  width: 100%;
  height: 100%;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s linear;
}
.v-enter-active {
  transform: translateX(100%);
}
.v-enter-to {
  transform: translateX(0);
}
.v-leave-active {
  transform: translateX(0);
}
.v-leave-to {
  transform: translateX(-100%);
}
</style>