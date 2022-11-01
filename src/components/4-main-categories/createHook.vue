<template>
  <div id="root" class="demo mt-5">
    <h1>Property of component:</h1>
    <hr>
    <h3 style="color: red">Property: {{ property }}</h3>
    <h3 style="color: forestgreen">Property Computed: {{ propertyComputed }}</h3>
  </div>
</template>

<script>
import axios from "axios";

const url = 'http://127.0.0.1:8000/api/users/1'
// lấy data user có id=1 từ API có sẵn

export default {
  name: "createHook",
  data() {
    return {
      property: 'first value',
      user: null,
      error: null,
    }
  },

  computed: {
    propertyComputed() {
      // update khi this.property thay đổi
      return this.property
    }
  },

  beforeCreate() {
    console.clear()
    console.log('# before create')
    console.log("Property: " + this.property)
    // không đọc được dữ liệu của property
    this.property = 'second value'
    console.log("Property Computed: " + this.propertyComputed)
    // propertyComputed chưa update được vì chưa lấy được dữ liệu
  },

  async created() {
    try {
      console.log('# created')
      console.log("Property: " + this.property)
      this.user = await axios.get(url).then(res => res.data);
      this.property = this.user.name
      console.log("Property Computed: " + this.propertyComputed)
      // propertyComputed sẽ update vì this.property đã thay đổi
    } catch (error) {
      this.user = null;
      this.error = error
    }
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