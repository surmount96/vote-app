<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500&display=swap');
body {
  font-family: 'Mulish', sans-serif;
  background-color: #f1f1f1;
  color: rgba(17, 17, 17, 0.69);
}
.table {
  width: 100%;

  & > tr > td {
    padding: 1rem 2rem;
  }
  & > tr:nth-child(odd) {
    background-color: #fff;
  }
  & > tr:nth-child(even) {
    background-color: transparent;
  }
}
</style>
