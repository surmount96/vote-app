<template>
  <div class="bg-white shadow p-8 w-full rounded h-32 mb-3">
    <div class="flex">
      <div class="h-10 mr-3">
        <svg
          class="w-10"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          ></path>
        </svg>
      </div>
      <div class="">
        <h2>{{ title }}</h2>
        <p>{{ name }}</p>
        <p>
          {{ value }}
          <k-progress :percent="bar" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: { type: String },
    name: { type: String },
    value: { type: String },
    bar: { type: String }
  }
};
</script>

<style scoped></style>
