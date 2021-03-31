<template>
  <div class="home">
    <!-- <app-navbar /> -->
    <div class="container-fluid pt-3">
      <div class="content p-3 rounded shadow lg:w-2/3 md:w-2/3 lg:mx-auto md:mx-auto lg:my-16 md:my-16 my-10 ">
        <slot />
      </div>
      <!-- <app-footer /> -->
    </div>
  </div>
</template>

<script>
// import AppFooter from "./ui/AppFooter";
// import AppNavbar from "./ui/AppNavbar";
export default {
  name: "LayoutCard",
  components: { }
};
</script>

<style scoped>
.home {
  background-color: #f1f1f1;
  height: auto;
  overflow-x: hidden;
  /*padding-bottom: 5rem;*/
}
.sidebar {
  background-color: rgba(17, 17, 17, 0.69);
  height: auto;
}
.content {
  background-color: #fff;
  position: relative;
}
label {
  color: rgba(17, 17, 17, 0.69);
  font-weight: 400;
  font-size: 0.8rem;
  letter-spacing: 0.2px;
}
.place-font::placeholder {
  font-size: 0.8rem;
}
</style>
