<template>
  <div class="pt-6">
    <div class="flex flex-wrap">
      <div
        class="lg:w-5/12 md:w-5/12 w-full md:order-none lg:order-none order-last mb-10  mx-auto font-size border border-blue"
      >
        <h3 class="text-center text-blue my-3">
          {{ newValue.length }} Parties Added to
          {{ $store.state.auth.voteTitle }}
        </h3>
        <hr class="border-b border-gray" />
        <table class="table">
          <tr class="font-bold border-b border-gray">
            <td>Party</td>
            <td>Slogan</td>
            <td>Acronym</td>
          </tr>
          <tr v-for="data in newValue" :key="data.id">
            <td>{{ data.voter }}</td>
            <td>{{ data.slogan }}</td>
            <td>{{ data.acronym }}</td>
          </tr>
        </table>
      </div>
      <div class="lg:w-6/12 md:w-6/12 lg:pr-5 md:pr-5">
        <h3 class="text-center heading">Political Parties/Clique</h3>
        <div class="flex flex-wrap mt-16 text-medium">
          <div class="lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
            <label for="">Choose existing parties</label>
            <multiselect
              :options="option"
              label-select=" mine"
              :searchable="false"
              :allow-empty="false"
              required
            >
            </multiselect>
          </div>
          <div class="lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
            <label for="" class="ml-2">Create a new party</label>
            <input
              type="text"
              class="w-full lg:ml-2 md:ml-2 place-font focus:outline-none border border-blue  px-5 py-3"
              placeholder="New party"
              v-model="form.voter"
            />
          </div>
        </div>
        <div class="flex flex-wrap mt-4">
          <div class="lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
            <label for="">Acronym</label>
            <input
              type="text"
              class="w-full place-font focus:outline-none border border-blue  px-5 py-3"
              placeholder="Acronym"
              v-model="form.acronym"
            />
          </div>
          <div class="lg:w-1/2 md:w-1/2 sm:w-1/2 w-full">
            <label for="" class="ml-2">Slogan</label>
            <input
              type="text"
              class="w-full place-font lg:ml-2 md:ml-2 focus:outline-none border border-blue  px-5 py-3"
              placeholder="Slogan"
              v-model="form.slogan"
            />
          </div>
        </div>
        <div class="mt-3">
          <file-pond label-idle="Upload party logo" />
        </div>
        <div class="text-center mt-3">
          <button
            class="bg-blue text-medium py-2 px-8 text-white focus:outline-none rounded"
            @click="submitData"
          >
            Add party
          </button>
        </div>
        <div class="flex justify-between my-10">
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
import { createNamespacedHelpers } from "vuex";

const { mapMutations } = createNamespacedHelpers("auth");

import vueFilePond from "vue-filepond";

// Import plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js";
import FilePondPluginImagePreview from "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js";
// Import styles
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

// Create FilePond component
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
);

export default {
  name: "StageTwo",
  components: {
    FilePond
  },
  data() {
    return {
      option: ["Vote 1", "Vote 2", "Vote 3"],
      newValue: [],
      form: {
        voter: "",
        acronym: "",
        slogan: "",
        img: "img.jpg"
      }
    };
  },
  methods: {
    ...mapMutations(["updatePartyTable"]),
    prev() {
      eventBus.$emit("EventListener", { name: "StageOne" });
    },
    next() {
      eventBus.$emit("EventListener", { name: "StageFour" });
    },
    submitData() {
      this.newValue.push(this.form);
    }
  }
};
</script>

<style>
.bg-gray:nth-child(even) {
  background-color: #f1f1f1;
}
.font-size {
  font-size: 0.85rem;
  color: rgba(17, 17, 17, 0.69);
}
</style>
