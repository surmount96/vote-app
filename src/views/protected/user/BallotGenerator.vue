<template>
  <div class="text-medium mx-auto lg:w-1/3 md:w-1/3 w-full bg-white mt-3 py-16 px-4" style="height:65vh">
    <h2 class="text-blue font-bold mb-3">Ballot Generator</h2>
    <form action="" class="">
      <div class="form-group">
        <label for="" class="font-bold mb-3">Select Vote/Election</label>
        <multiselect
          :options="option"
          label-select=" mine"
          :searchable="false"
          :allow-empty="false"
          required
        >
        </multiselect>
      </div>
      <button type="submit" class="my-5 w-full hover:bg-blue hover:text-white text-center text-blue border py-3 px-5">
        Generate
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "BallotGenerator",
  data() {
    return {
      option: ["Vote 1", "Vote 2", "Vote 3"]
    };
  }
};
</script>

<style>
.multiselect__tags {
  min-height: 40px;
  border:1px solid #49CBFB;
}
</style>
