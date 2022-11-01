<template>
  <div class="demo mt-5">
    <button class="btn btn-primary" @click="current = 'counting'">Counting</button>
    <button class="btn btn-warning ml-3" @click="current = 'sendMess'">Send Message</button>
    <KeepAlive>
      <component :is="current"></component>
    </KeepAlive>
  </div>
</template>

<script>
import counting from "@/components/keep-alive/counting";
import sendMess from "@/components/keep-alive/sendMess";

export default {
  name: "keepAlive",
  components: {
    counting,
    sendMess,
  },
  data() {
    return {
      current: 'counting'
    }
  },
  beforeCreate() {
    console.clear()
  }
}
</script>

<style scoped>

</style>