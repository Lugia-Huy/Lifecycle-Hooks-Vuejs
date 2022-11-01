<template>
  <div class="demo mt-5">
    <testComponent v-if="show"></testComponent>
    <button class="btn btn-danger" @click="show = !show">DESTROY</button>
  </div>
</template>

<script>
import testComponent from "@/components/4-main-categories/testComponent";

export default {
  name: "destroyHook",
  components: {
    testComponent
  },
  data() {
    return {
      show: true,
    }
  },

  beforeCreate() {
    console.clear()
  },
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