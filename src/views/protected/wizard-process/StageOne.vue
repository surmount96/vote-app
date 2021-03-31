<template>
  <div class="pt-6 ">
    <div class="w-6/12 mx-auto text-center">
      <h1 class="text-large font-bold text-blue">{{ title }}</h1>
    </div>
    <div class="px-5 g:px-24 md:px-24">
      <div class="flex flex-wrap mt-16">
        <div class="lg:w-1/2 md:w-1/2 sm:w-1/2 w-full" v-show="dropdown">
          <label for="">Choose existing group</label>
          <multiselect
            :options="option"
            label-select=" mine"
            :searchable="false"
            :allow-empty="false"
            required
          >
          </multiselect>
        </div>
        <div
          class="sm:w-1/2 w-full"
          :class="{
            'lg:w-full md:w-full': dropdown === false,
            'lg:w-1/2 md:w-1/2 ': dropdown
          }"
        >
          <label for="" class="ml-2">Create a new group</label>
          <input
            type="text"
            class="lg:ml-2 md:ml-2 w-full focus:outline-none border border-blue rounded place-font px-5 py-2"
            placeholder="New group"
            @keyup="changeOption"
          />
        </div>
      </div>
      <div class="mt-3 flex items-center ">
        <input
          type="checkbox"
          @change="updateParty"
          :checked="$store.state.auth.party"
          id="parties"
          class="mr-3 focus:outline-none border border-gray  px-5 py-3"
        />
        <label for="parties"
          >Include political parties/ cliques in this voting</label
        >
      </div>
      <div class="lg:text-right md:text-right text-left my-12">
        <button
          class="bg-blue py-3 px-16 text-white focus:outline-none rounded-full"
          @click="changeObject"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../../EventBus";
import { createNamespacedHelpers } from "vuex";

const { mapMutations } = createNamespacedHelpers("auth");

export default {
  name: "StageOne",
  data() {
    return {
      party: false,
      dropdown: true,
      title:
        "Indicate group or organization name conducting the voting| nomination | Election",
      option: ["Vote 1", "Vote 2", "Vote 3"]
    };
  },
  filters: {
    capitalize(value) {
      return value.toUpperCase();
    }
  },
  methods: {
    ...mapMutations(["updateParty", "setGroupName"]),
    changeOption(e) {
      this.setGroupName(e.target.value);
      this.dropdown = false;
    },
    changeObject() {
      eventBus.$emit("EventListener", { name: "StageThree" });
    }
  }
};
</script>

<style lang="scss" scoped></style>
