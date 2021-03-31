<template>
  <div class="relative">
    <div class="circle-shade" @click="show = !show">
      AJ
    </div>
    <div
      class="w-6/12 bg-white p-4 dropdown shadow"
      :class="{ visible: show, hide: !show }"
    >
      <ul>
        <li>
          <router-link to="dashboard">
            Dashboard
          </router-link>
        </li>
        <li>
          <router-link to="/">
            Logout
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  data() {
    return {
      show: false
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.circle-shade {
  border-radius: 50%;
  height: 3.1rem;
  width: 3.1rem;
  border: 2px solid #eba350;
  color: #eba350;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    opacity: 0.5;
  }
}
.dropdown {
  position: absolute;
  z-index: 999;
  top: 4rem;
  right: 0;
  width: 12rem;
  height: 10rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);

  & > ul > li {
    color: #777;
    font-size: 0.85rem;
    font-weight: 300;
    cursor: pointer;
  }
}
.visible {
  visibility: visible;
  opacity: 1;
  transition: all 0.6s;
}
.hide {
  visibility: hidden;
  opacity: 0;
  transition: all 0.6s;
}
</style>
