<template>
  <div class="">
    <div class="flex flex-wrap items-center" style="height:100vh;">
      <div class="lg:w-1/3 md:w-1/2 lg:mx-auto md:mx-auto mx-5 w-full bg-white " style="height:70vh" >
        <div
              class=" px-10 lg:pt-16 pb-16 text-medium"
            >
              <div class="mb-4">
                <img src="../../assets/images/login.svg" alt="" class="w-48 mx-auto">
              </div>
              <h2 class="text-h4 font-semibold text-center">Welcome Back,</h2>
              <form action="">
                <div v-show="loginStart">
                  <div class="my-5">
                    <label for=""></label>
                    <input
                      type="text"
                      v-model="form.email"
                      class="w-full login-place focus:outline-none border border-gray bg-gray px-5 py-4 rounded-sm"
                      placeholder="Email"
                    />
                  </div>
                  <div class="">
                    <button
                      class="bg-blue w-full shadow px-10 py-4 text-white rounded-sm"
                      @click.prevent="confirmEmail"
                    >
                      {{ message }}
                    </button>
                  </div>
                
                </div>

                <div v-show="!loginStart">
                  <div class="my-5">
                    <label for=""></label>
                    <input
                      type="password"
                      v-model="form.password"
                      class="w-full login-place focus:outline-none border border-gray bg-gray px-5 py-4 rounded-sm"
                      placeholder="passcode"
                    />
                  </div>
                  <div class="">
                    <button
                      class="bg-blue w-full shadow px-10 py-4 text-white rounded-sm"
                      @click.prevent="signIn"
                    >
                      Login
                    </button>
                  </div>
                
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
/* eslint-disable */
import { createNamespacedHelpers } from 'vuex';

const { mapActions } = createNamespacedHelpers('auth');


export default {
  name: "Login",
  data() {
    return {
      dropdown: false,
      loginStart:true,
      form:{
        email:'',
        password:''
      },
      message: 'Proceed'
    };
  },
  methods: {
    ...mapActions(["login","verifyMail"]),
    async confirmEmail(){
      this.message = 'Verifying email.....';
      try{
        const res = await this.verifyMail(this.form);
        this.message = 'Email verified!';
        this.loginStart = false;
        this.$toast.success(res.data.message);
      } catch(err){
        this.$toast.error(err.response.data.message);
        this.message = 'Retry';
      }
    },
    async signIn(){
      try{
        const res = await this.login(this.form);
        this.$router.push({path: '/dashboard'});
      } catch(err){
        this.$toast.error(err.response.data.message);
        console.log(err.response)
      }
    }
  }
};
</script>

<style scoped>

</style>
