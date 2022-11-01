<template>
  <h1>Content: {{ content }}</h1>
</template>

<script>
export default {
  name: "testComponent",
  data() {
    return {
      content: 'This is content',
      interval: '',
    }
  },
  created() {
    this.interval = setInterval(() => {
      console.log("Data not removed")
    }, 1000)
  },

  beforeDestroy() {
    console.log("# beforeDestroy")
    console.log("Content of component: " + this.content)
    // loại bỏ các biến hay các event listening trước khi xóa component
    this.content = null
    delete this.content
    clearInterval(this.interval)
  },

  destroyed() {
    console.log("# destroyed")
    console.log("Data and events of component were destroyed!")
    console.log("Content of component: " + this.content)
    // data đã bị xóa bỏ, event cũng được loại bỏ
  }
}
</script>

<style scoped>

</style>