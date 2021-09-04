<template>
  <div class="classify">
    <div class="cla_content">
      <ClassBlock
        :classify="classify.A_import_food"
        :icon="'&#xe72a;'"
      ></ClassBlock>
      <ClassBlock
        :classify="classify.B_food_drink"
        :icon="'&#xe615;'"
      ></ClassBlock>
      <ClassBlock
        :classify="classify.C_n_staple_food"
        :icon="'&#xe62f;'"
      ></ClassBlock>
      <ClassBlock
        :classify="classify.D_cosmetology"
        :icon="'&#xe600;'"
      ></ClassBlock>
      <ClassBlock
        :classify="classify.E_house_furnishing"
        :icon="'&#xe6fd;'"
        :top="-73"
      ></ClassBlock>
      <ClassBlock
        :classify="classify.F_house_cleaning"
        :icon="'&#xe62e;'"
        :top="-146"
      ></ClassBlock>
      <ClassBlock
        :classify="classify.G_mon_baby"
        :icon="'&#xe605;'"
        :top="-219"
      ></ClassBlock>
      <DailyServe :classify="classify.H_day_life"></DailyServe>
    </div>
  </div>
</template>

<script>
import ClassBlock from "./ClassBlock.vue";
import DailyServe from "./DailyServe.vue";
export default {
  name: "Classify",
  props: {
    classify: {
      type: Object,
    },
  },
  methods: {},
  components: {
    ClassBlock,
    DailyServe,
  },
};
</script>

<style>
.classify {
  display: flex;
  width: 240px;
  flex-direction: column;
}

.cla_content {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 0 0 10px;
  border: 1px solid #e7e7e7;
}
</style>