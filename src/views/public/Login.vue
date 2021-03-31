<template>
  <div class="">
    <div class="flex flex-wrap" style="height:100vh;">
      <div class="lg:w-1/3 md:w-1/3 mx-auto w-full bg-white " >
        <div
              class=" px-10 lg:pt-16 pb-16 text-medium"
            >
              <div class="mb-4">
                <img src="../../assets/images/login.svg" alt="" class="w-48 mx-auto">
              </div>
              <h2 class="text-h4 font-semibold text-center">Welcome Back,</h2>
              <form action="">
                <div class="mt-4">
                  <label for=""></label>
                  <input
                    type="text"
                    class="w-full login-place focus:outline-none border border-gray bg-gray  px-5 py-3"
                    placeholder="Phone/Email"
                  />
                </div>
                <div class="my-5">
                  <label for=""></label>
                  <input
                    type="password"
                    class="w-full login-place focus:outline-none border border-gray px-5 py-3"
                    placeholder="password"
                  />
                </div>
                <div class="">
                  <router-link
                    to="/wizard-guide"
                    tag="button"
                    class="bg-blue-100 w-full shadow px-10 py-5 text-white"
                  >
                    sign in
                  </router-link>
                </div>
                <div class="flex justify-between">
                  <router-link to="/forgot-password" class="reg-link">{{
                    "Forgot password?"
                  }}</router-link>
                  <router-link to="/signup" class="reg-link">sign up</router-link>
                </div>
              </form>
            </div>
      </div>
      <!-- <div class="lg:w-1/2 md:w-1/2 w-full lg:block md:block hidden bg-blue">
        <img src="../../assets/images/login.svg" alt="ald">
          
      </div> -->
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      dropdown: false
    };
  },
  methods: {}
};
</script>

<style scoped>

</style>
