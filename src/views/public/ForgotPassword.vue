<template>
  <layout-card>
    <template>
      <div class="mb-4 flex flex-col justify-center" style="height:80vh">
        <h3 class="heading">Forgot Password</h3>
        <div class="flex ">
          <div class="w-9/12">
            <input
              type="text"
              class="w-full focus:outline-none border border-gray place-font px-5 py-3"
              placeholder="Email"
            />
          </div>
          <div class="w-3/12">
            <button class="bg-warning py-3 px-6 text-white focus:outline-none">
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </template>
  </layout-card>
</template>

<script>
import LayoutCard from "../../components/LayoutCard";
export default {
  name: "ForgotPassword",
  components: { LayoutCard }
};
</script>

<style scoped></style>
