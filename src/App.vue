<template>
<div id="app">
  <router-view />
</div>
</template>

<style lang="scss">
#app {
  // text-align: center;
  color: #2c3e50;
  font-family: "Nunito", sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;

  a {
    color: #2c3e50;
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
