<template>
  <div class="demo mt-5">
    <div v-if="user != null">
      <h1>User name:</h1>
      <hr>
      <h3 style="color: red">{{ user.name }}</h3>
      <p ref="messages">this is message from system</p>
    </div>
    <div v-if="error != null">
      <h1>{{ error.message }}</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios"
// url API chứa thông tin các users
const url = 'http://127.0.0.1:8000/api/users/1'

export default {
  name: "mountHook",
  data() {
    return {
      user: null,
      error: null,
    }
  },

  beforeCreate() {
    console.clear()
  },

  beforeMount() {
    console.log("# beforeMount");
    console.log(this.$el);
  },

  async mounted() {
    try {
      console.log("# mounted")
      this.user = await axios.get(url).then(res => res.data);
      this.error = null;
      console.log("User: " + JSON.stringify(this.user));
      console.log(this.$el);
    } catch (error) {
      this.user = null;
      this.error = error
    }
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