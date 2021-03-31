<template>
  <div class="">
    <div class="lg:w-1/3 md:w-1/3 mx-auto w-full bg-white px-10 pb-16 text-medium">
      <div class="mb-4">
        <img src="../../assets/images/login.svg" alt="" class="w-48 mx-auto">
      </div>
      <h2 class="heading">Signup</h2>
      <form action="">
        <div class="mt-4">
          <label for="">Full Name</label>
          <input
            type="text"
            class="w-full signup-place focus:outline-none border border-gray bg-gray  px-5 py-3"
            placeholder="Full name"
          />
        </div>
        <div class="my-5">
          <label for="">Phone number</label>
          <input
            type="number"
            class="w-full signup-place focus:outline-none border border-gray px-5 py-3"
            placeholder="Phone number"
          />
        </div>
        <div class="my-5">
          <label for="">Email</label>
          <input
            type="email"
            class="w-full signup-place focus:outline-none border border-gray px-5 py-3"
            placeholder="Email"
          />
        </div>
        <div class="my-5">
          <label for="">Password</label>
          <input
            type="password"
            class="w-full signup-place focus:outline-none border border-gray px-5 py-3"
            placeholder="password"
          />
        </div>
        <div class="my-5">
          <label for="">Confirm Password</label>
          <input
            type="password"
            class="w-full signup-place focus:outline-none border border-gray px-5 py-3"
            placeholder="password"
          />
        </div>
        <div class="">
          <router-link
            to="/wizard-guide"
            tag="button"
            class="bg-blue-100 w-full shadow px-10 py-3 text-white"
          >
            sign up
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp"
};
</script>

<style scoped>
/* .signup {
  background: #c4c4c4;
  height: 100vh;
  padding: 1rem;
}
.signup-place::placeholder {
  font-size: 0.8rem;
}
.heading {
  font-size: 1.4rem;
  color: rgba(17, 17, 17, 0.69);
  font-weight: 900;
}
label {
  color: rgba(17, 17, 17, 0.69);
  font-weight: 400;
  font-size: 0.8rem;
  letter-spacing: 0.2px;
} */
</style>
