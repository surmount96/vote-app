<template>
  <layout-card class="home">
    <template>
      <keep-alive>
        <component :is="component"></component>
      </keep-alive>
    </template>
  </layout-card>
</template>

<script>
// @ is an alias to /src
import StageOne from "./StageOne.vue";
import StageTwo from "./StageTwo.vue";
import StageThree from "./StageThree.vue";
import StageFour from "./StageFour.vue";
import StageFive from "./StageFive";
import StageSix from "./StageSix";
import { eventBus } from "../../../EventBus";
import LayoutCard from "../../../components/LayoutCard.vue";

export default {
  name: "Home",
  components: {
    LayoutCard,
    StageOne,
    StageTwo,
    StageThree,
    StageFour,
    StageFive,
    StageSix
  },
  data() {
    return {
      component: "StageOne"
    };
  },
  created() {
    // this.$toast.success("Welcome Ayo", { timeout: false });
    // this.$toast.error("I'm a toast!");
    // this.$toast.warning("Do not stay long");
    eventBus.$on("EventListener", data => {
      this.component = data.name;
    });
  },
  methods: {}
};
</script>

<style lang="scss">
label {
  color: rgba(17, 17, 17, 0.69);
  font-weight: 400;
  font-size: 0.8rem;
  letter-spacing: 0.2px;
}
.multiselect__tags {
  min-height: 40px;
  border:1px solid #49CBFB;
}
.multiselect__select {
  height: 49px;
}
.multiselect__placeholder {
  padding-top: 7px;
  font-size: 0.8rem;
}
.heading {
  font-size: 1.4rem;
  color: rgba(17, 17, 17, 0.69);
  font-weight: 900;
}
.place-font::placeholder {
  font-size: 0.8rem;
}
</style>
