<template>
  <div class="" style="height: 68vh">
    <div class="flex flex-wrap">
      <div
        class="lg:w-5/12 md:w-5/12 w-full md:order-none lg:order-none order-last mb-10  mx-auto font-size border border-gray"
      >
        <div class="flex p-3 border-b border-gray font-bold">
          <h2 class="flex-1 text-center">Post</h2>
        </div>
        <div class="flex p-3 bg-gray">
          <p class="flex-1">Governor</p>
        </div>
      </div>
      <div class="lg:w-6/12 md:w-6/12">
        <h1 class="text-center text-h4 text-blue font-bold">Upload vote posts/categories</h1>
        <div class="">
          <form action="" class="my-5 text-medium">
            <div class="w-full">
              <label for="">Post/Categories</label>
              <input
                type="text"
                class="w-full place-font focus:outline-none border border-blue  px-5 py-3"
                placeholder="Post/Categories"
              />
            </div>
            <div class="text-center mt-3">
              <button
                class="bg-blue text-medium py-2 px-8 text-white focus:outline-none rounded"
              >
                Add post
              </button>
            </div>
          </form>
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
  </div>
</template>

<script>
import { eventBus } from "../../../EventBus";

export default {
  name: "StageFive",
  methods: {
    prev() {
      eventBus.$emit("EventListener", { name: "StageFour" });
    },
    next() {
      eventBus.$emit("EventListener", { name: "StageSix" });
    }
  }
};
</script>

<style scoped></style>
