<template>
  <div class="demo mt-5">
    <h1>4 main categories lifecycle hooks in Vuejs</h1>
    <hr>
    <div>
      <h3 ref="mess" v-if="show">{{ message }}</h3>
      <button class="btn btn-primary" @click="change">Click to change</button>
      <button class="btn btn-danger ml-3" @click="destroyData">Delete message</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "allHooks",
  data() {
    return {
      message: '',
      thirdPartyInstance: null,
      show: true
    }
  },
  methods: {
    fetchMessage() {
      this.message = 'Hello'
    },
    change() {
      this.message = this.message + ' Client'
    },
    destroyData() {
      this.$destroy()
    }
  },
  // mặc định beforeCreate luôn chạy đâu tiên và destroyed luôn kết thúc vòng đời của vuejs
  beforeCreate() {
    console.clear()
    console.log("# beforeCreate: can't access data or method yet")
  },
  created() {
    console.log("# created:")
    // dữ liệu ban đầu
    console.log("  The message is: " + this.message)
    this.fetchMessage()
    // dữ liệu sau khi fetch
    console.log("  The message is: " + this.message)
  },
  beforeMount() {
    console.log("# beforeMount: still not access elements in DOM tree yet")
    this.thirdPartyInstance = new Date()
  },
  mounted() {
    // truy cập vào DOM
    console.log('# mounted: ', this.$el.textContent)
  },
  beforeUpdate() {
    // dữ liệu hiển thị trước trong DOM ảo trước khi render vào DOM và hiển thị lại
    console.log("# beforeUpdate: " + this.message)
    // dữ liệu bên trong DOM tại thời điểm trước update
    console.log("# beforeUpdate: " + this.$refs['mess'].textContent)
  },
  updated() {
    // dữ liệu bên trong DOM sau khi update
    console.log("# updated: ", this.$refs['mess'].textContent)
  },
  beforeDestroy() {
    // dữ liệu trước khi hủy
    console.log("# beforeDestroy: ")
    console.log("  message: ", this.message)
    console.log("  third Party Instance: ", this.thirdPartyInstance)
    delete this.message
    delete this.thirdPartyInstance
  },
  destroyed() {
    console.log("# destroyed: children and event listeners have been removed")
    // dữ liệu đã bị hủy
    console.log("  message: ", this.message)
    console.log("  third Party Instance: ", this.thirdPartyInstance)
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