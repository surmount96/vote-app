<template>
  <div class="">
    <div class="flex flex-wrap">
      <div
        class="lg:w-5/12 md:w-5/12 w-full md:order-none lg:order-none order-last mb-10  mx-auto font-size border border-gray"
      >
        <div class="flex p-3 border-b border-gray font-bold">
          <h2 class="flex-1">Post</h2>
          <h2 class="flex-1">Category</h2>
          <h2 class="flex-1">Photo</h2>
        </div>
        <div class="flex p-3 bg-gray">
          <p class="flex-1">Governor</p>
          <p class="flex-1">Tunde</p>
          <p class="flex-1">
            <img src="data.img" alt="logo" />
          </p>
        </div>
      </div>
      <div class="lg:w-6/12 md:w-6/12">
        <div class="w-11/12 mx-auto">
          <h1 class="text-center text-h4 text-blue">
            Indicate Candidate/Nominees for the post/categories of your voting
          </h1>
        </div>
        <div class="">
          <div class="flex flex-wrap mt-16">
            <div class="lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
              <label for="">Post</label>
              <input
                type="text"
                class="w-full place-font focus:outline-none border border-gray  px-5 py-3"
                placeholder="Post"
              />
            </div>
            <div class="lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
              <label for="">Candidate</label>
              <multiselect
                :options="option"
                label-select=" mine"
                :searchable="false"
                :allow-empty="false"
                required
                class="lg:ml-2 md:ml-2"
              >
              </multiselect>
            </div>
          </div>
          <div class="my-4">
            <file-pond label-idle="Upload candidate's photo" />
          </div>
          <div class="text-center mt-3">
            <button
              class="bg-blue text-medium py-2 px-8 text-white focus:outline-none rounded"
            >
              Add post
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
              class="bg-blue text-medium py-3 px-16 text-white focus:outline-none rounded-full"
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../../EventBus";

export default {
  name: "StageSix",
  data() {
    return {
      option: ["Vote 1", "Vote 2", "Vote 3"]
    };
  },
  methods: {
    prev() {
      eventBus.$emit("EventListener", { name: "StageFive" });
    }
  }
};
</script>

<style scoped></style>
