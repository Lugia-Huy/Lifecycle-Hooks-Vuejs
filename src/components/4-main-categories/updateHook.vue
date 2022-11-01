<template>
  <div class="demo mt-5">
    <h1>Data count of component:</h1>
    <h3 ref="dom-element">{{ data }}</h3>
    <button class="btn btn-danger" @click="stopCounting">Stop</button>
  </div>
</template>

<script>
export default {
  name: "updateHook",
  data() {
    return {
      data: 0,
      interval: '',
    }
  },

  methods: {
    stopCounting() {
      clearInterval(this.interval)
    }
  },

  beforeCreate() {
    console.clear()
  },

  created() {
    this.interval = setInterval(() => {
      this.data++
      console.log("~ Start change data count of component: " + this.data)
    }, 1000)
  },

  beforeUpdate() {
    console.log("# beforeUpdate")
    console.log("Data get before update: " + this.data)
  },

  updated() {
    console.log("# updated")
    console.log("Data updated: " + this.data)
    console.log(+this.$refs['dom-element'].textContent === this.data)
  },

  // hủy sự kiện đếm trước khi chuyển sang component khác
  beforeDestroy() {
    clearInterval(this.interval)
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