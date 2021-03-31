<template>
  <div class="">
    <div class="flex">
      <div class="w-2/12 z-50 border-r border-gray fixed top-0 left-0 bg-white" style="height: 100vh;width:225px">
        <side-panel />
      </div>
      <div class="lg:w-10/12 md:w-10/12 w-full absolute right-0 top-0">
        <div>
          <app-navbar />
        </div>
        <router-view />
        <!-- <keep-alive>
          <component :is="dashComponent"></component>
        </keep-alive> -->
        <div>
          <app-footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from "../../../components/ui/AppNavbar";
import AppFooter from "../../../components/ui/AppFooter";
import SidePanel from "../../../components/ui/SidePanel";

export default {
  name: "Dashboard",
  components: {
    SidePanel,
    AppFooter,
    AppNavbar,
  },
  data() {
    return {
      dashComponent: "Index"
    };
  },
  created() {
  }
};
</script>

<style scoped></style>
