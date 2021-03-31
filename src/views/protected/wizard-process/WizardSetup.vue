<template>
  <div class="wizard-option">
    <div class="lg:w-1/3 md:w-1/3 shadow mx-auto bg-white lg:my-32 md:my-32 ">
      <div class="p-5 h-20 bg-blue-100 flex items-center justify-center">
         <h2 class="text-white text-body-2font-bold text-center text-uppercase">
          Do you wish to create a new Vote Session
        </h2>
      </div>
      <div class="p-5 flex items-center  h-32">
        <div class="flex justify-between">
          <router-link to="/setup" tag="button" class="border bordder-blue-100 py-2 px-3 text-medium focus:outline-none"
            >Yes, Create vote session</router-link
          >
          <router-link
            to="/dashboard"
            tag="button"
            class="bg-blue-100 focus:outline-none ml-4 text-medium text-white py-2 px-3"
            >No, Proceed to Dashboard</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WizardOption",
  created() {
    console.log("Created");
  }
};
</script>

<style lang="scss" scoped>
.button {
  border-radius: 5px;
  padding: 0.7rem 1.5rem;

  &-gray {
    border: 1px solid #eba350;
    color: rgba(17, 17, 17, 0.69);
  }
  &-warning {
    background-color: #eba350;
    color: #fff;
  }

  &:hover {
    opacity: 0.6;
  }
}
.heading {
  font-size: 1.4rem;
  color: rgba(17, 17, 17, 0.69);
  font-weight: 900;
}
</style>
