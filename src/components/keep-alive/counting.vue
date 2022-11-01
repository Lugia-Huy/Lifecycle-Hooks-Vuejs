<template>
  <div class="demo form-group mt-4">
    <h1>Current component: Counting</h1>
    <span class="form-group mt-1" style="display: inline-block">
      <h3>Count: {{ count }}</h3>
    </span>
    <button
        class="btn btn-success ml-3"
        style="display: inline-block"
        @click="count++"
    >
      <i class="fa fa-plus"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "counting",
  data() {
    return {
      count: 0
    }
  },
  activated() {
    console.log("Counting component has activated")
  },
  deactivated() {
    console.log("Counting component has deactivated")
  }
}
</script>

<style scoped>
.demo {
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>