<template>
  <nav class="bg-white py-2 border-b border-gray px-2 flex  items-center">
    <!-- <ul>
        <li class="ml-4 relative">
            <input type="search" placeholder="search" class="py-2 focus:outline-none px-6 border border-gray rounded-full text-medium w-64">
            <div class="absolute top-0 right-0 mt-2 mr-5">
                <i class="ri-mic-2-line text-gray-darker text-medium ri-fw"></i>
            </div>
        </li>
    </ul> -->
    <ul class="flex items-center ml-auto">
        <li class="mr-5 relative cursor-pointer">
            <i class="ri-notification-3-line text-large text-gray-darker ri-fw"></i>
            <span class="bg-red h-3 w-3 rounded-full flex items-center justify-center text-white absolute top-0 right-0" style="font-size: 10px">1</span>
        </li>
        <li class="mr-5">
            <div class="bg-gray h-10 w-10 rounded-full flex items-center justify-center">
                <i class="ri-user-line text-h4  ri-fw"></i>
            </div>
        </li>
        <li class="mr-4 text-gray-darker flex items-center justify-center">
            <span class="text-medium" style="letter-spacing: 1px">Johnson</span>
            <i class="ri-arrow-drop-down-line text-h4  ri-fw"></i>
        </li>
    </ul>
</nav>

</template>

<script>
// import Dropdown from "./Dropdown";
export default {
  name: "AppNavbar",
  components: {  },
  data() {
    return {
      scrollHeight: "",
      width: ""
    };
  },
  created() {
    window.addEventListener("scroll", this.updateHeight);
  },
  methods: {
    updateHeight() {
      this.scrollHeight = window.scrollY;
    }
  }
};
</script>

<style scoped></style>
