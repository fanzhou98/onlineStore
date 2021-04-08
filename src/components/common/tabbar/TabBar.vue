<template>
  <div>
    <div class="container-fluid"  id="nav">
      <div class="row text-center  align-items-center">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
  }
</script>

<style scoped>
  #nav{
    text-decoration: none;
    width: 100vw;
  }
</style>
