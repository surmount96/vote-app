<template>
  <div class="text-medium mt-3 lg:mx-20 md:mx-8 mx-5 mb-4">
    <h3 class="my-4 font-bold text-blue text-medium uppercase ">Vote Result</h3>
    <div class="flex flex-wrap">
      <div class="lg:w-1/2 md:w-1/2 w-full">
        <div class="mr-2">
          <card
            :title="'PDP (People Democratic Party)'"
            :name="'Toluwalase Emmanuel'"
            :value="140 + ' votes ' + 70 + '%'"
            :bar="70"
          />
        </div>
      </div>
      <div class="lg:w-1/2 md:w-1/2 w-full">
        <div class="mr-2">
          <card
            :title="'ADC (Aluminum ..)'"
            :name="'Ifeoluwa Omolola'"
            :value="50 + ' votes ' + 29 + '%'"
            :bar="29"
          />
        </div>  
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="lg:w-1/2 md:w-1/2 w-full">
        <div class="mr-2">
          <card
            :title="'ANPP (All Democratic Party)'"
            :name="'Toluwalase Emmanuel'"
            :value="1 + ' votes ' + 0.5 + '%'"
            :bar="0.5"
          />
        </div>
        <div class="bg-white h-20 flex items-center p-3 w-48">
          <div class="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center">
            <i class="ri-star-line text-h4 text-blue ri-fw"></i>
          </div>
          <div class="ml-3">
            <p>Average rating</p>
            <h4 class="text-black font-bold">8.8</h4>
          </div>
        </div>
      </div>
    </div>
    
    
  </div>
</template>

<script>
import Card from "../../../components/Card";

export default {
  name: "VotingResult",
  data() {
    return {
      amount: 0
    };
  },
  mounted() {},
  components: {
    Card
  }
};
</script>

<style scoped>

</style>
