<template>
  <div class="demo-tab">
    <p style="display: inline-block">Home component:</p>
    <button
        class="btn btn-danger ml-3"
        style="display: inline-block;"
        v-on:click="notDefineMethod()"
    >
      Trigger
    </button>
  </div>
</template>

<script>
export default {
  name: "tabHome"
}
</script>

<style scoped>
.demo-tab {
  border: 1px solid #ccc;
  padding: 10px;
}

</style>