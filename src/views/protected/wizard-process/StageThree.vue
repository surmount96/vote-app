<template>
  <div class="pb-20 lg:px-24 md:px-24">
    <h1 class="text-center text-blue text-h4 font-bold">Organization Details</h1>
    <div class="flex flex-wrap mt-16 pl-3 pr-4">
      <div class="lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
        <label for="">Group Name</label>
        <input
          type="text"
          class="w-full place-font focus:outline-none border border-blue px-5 py-3"
          placeholder="Group Name"
          :value="$store.state.auth.groupName"
          disabled
        />
      </div>
      <div class="lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
        <label for="" class="ml-2">Vote Title</label>
        <input
          type="text"
          class="w-full lg:ml-2 md:ml-2 place-font focus:outline-none border border-blue px-5 py-3"
          placeholder="Vote Title"
          @keyup="setTitle"
        />
      </div>
    </div>
    <div class="flex flex-wrap mt-5 pl-3 pr-4">
      <div class="lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
        <label for="">Vote Start Date</label>
        <datetime
          type="datetime"
          placeholder="Select date"
          class="w-full focus:outline-none border border-blue  px-5 py-3"
        />
      </div>
      <div class="lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
        <label for="" class="ml-2">Vote End Date</label>
        <datetime
          type="datetime"
          placeholder="Select date"
          class="w-full lg:ml-2 md:ml-2 focus:outline-none border border-blue  px-5 py-3"
        />
      </div>
    </div>
    <div class="flex justify-between mt-10">
      <button
        @click="prev"
        class="bg-blue py-3 px-16 text-white focus:outline-none rounded-full"
      >
        Back
      </button>
      <button
        @click="next"
        class="bg-blue py-3 px-16 text-white focus:outline-none rounded-full"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../../EventBus";
import { createNamespacedHelpers } from "vuex";

const { mapMutations } = createNamespacedHelpers("auth");

export default {
  name: "StageThree",
  data() {
    return {
      option: ["Vote 1", "Vote 2", "Vote 3"]
    };
  },
  methods: {
    ...mapMutations(["updateVoteTitle"]),
    prev() {
      eventBus.$emit("EventListener", { name: "StageOne" });
    },
    next() {
      if (!this.$store.state.auth.party) {
        eventBus.$emit("EventListener", { name: "StageFour" });
      } else {
        eventBus.$emit("EventListener", { name: "StageTwo" });
      }
    },
    setTitle(e) {
      this.updateVoteTitle(e.target.value);
    }
  }
};
</script>

<style>
.vdatetime-input::placeholder {
  font-size: 0.8rem;
}
</style>
