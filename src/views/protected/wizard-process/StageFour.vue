<template>
  <div class="">
    <div class="flex flex-wrap">
      <div
        class="lg:w-6/12 md:w-6/12 p-3 w-full md:order-none text-medium lg:order-none order-last mb-10 font-size border border-gray"
      >
        <div class="flex p-3 border-b border-gray font-bold ">
          <h2 class="flex-1">Firstname</h2>
          <h2 class="flex-1">Lastname</h2>
          <h2 class="flex-1">Email</h2>
        </div>
        <div class="flex p-3 bg-gray">
          <p class="flex-1">Ayodeji</p>
          <p class="flex-1">Ayanwoye</p>
          <p class="flex-1">ayanwoye74@gmail.com</p>
        </div>
      </div>
      <div class="lg:w-6/12 md:w-6/12 p-2 ">
        <h1 class="text-center text-h4 text-blue font-bold">
          Enter or Upload voters/group members
        </h1>
        <div class="flex flex-wrap mt-16">
          <div class="lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
            <label for="">Phone Number</label>
            <input
              type="number"
              class="w-full place-font focus:outline-none border border-blue  px-5 py-3"
              placeholder="Phone Number"
            />
          </div>
          <div class="lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
            <label for="" class="ml-2">Email</label>
            <input
              type="text"
              class="w-full place-font lg:ml-2 md:ml-2 focus:outline-none border border-blue  px-5 py-3"
              placeholder="Email Address"
            />
          </div>
        </div>
        <div class="flex flex-wrap my-3">
          <div class="lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
            <label for="">First Name</label>
            <input
              type="text"
              class="w-full place-font focus:outline-none border border-blue  px-5 py-3"
              placeholder="First Name"
            />
          </div>
          <div class="lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
            <label for="" class="ml-2">Last Name</label>
            <input
              type="text"
              class="w-full place-font ml-2 focus:outline-none border border-blue  px-5 py-3"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div class="">
          <file-pond label-idle="Upload voters in excel format" />
        </div>
        <div class="text-center mt-3 ">
          <button
            class="bg-blue text-medium py-2 px-8 text-white focus:outline-none rounded"
          >
            Add members
          </button>
        </div>
        <div class="flex justify-between mt-10">
          <button
            @click="prev"
            class="bg-blue text-medium py-3 px-16 text-white focus:outline-none rounded-full"
          >
            Back
          </button>
          <button
            @click="next"
            class="bg-blue text-medium py-3 px-16 text-white focus:outline-none rounded-full"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../../EventBus";

export default {
  name: "StageFour",
  methods: {
    prev() {
      if (this.$store.state.auth.party) {
        eventBus.$emit("EventListener", { name: "StageTwo" });
      } else {
        eventBus.$emit("EventListener", { name: "StageThree" });
      }
    },
    next() {
      eventBus.$emit("EventListener", { name: "StageFive" });
    }
  }
};
</script>

<style scoped></style>
