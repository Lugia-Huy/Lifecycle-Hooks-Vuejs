<template>
  <div class="demo form-group mt-4">
    <h1>Current component: Send Message</h1>
    <span style="display: block;">
      <h3>Message is: <span class="mess">{{ msg }}</span></h3>
    </span>
    <input v-model="msg">
  </div>
</template>

<script>
export default {
  name: "sendMess",
  data() {
    return {
      msg: ''
    }
  },
  activated() {
    console.log("Send message component has activated")
  },
  deactivated() {
    console.log("Send message component has deactivated")
  }
}
</script>

<style scoped>
.mess {
  color: dodgerblue;
}

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