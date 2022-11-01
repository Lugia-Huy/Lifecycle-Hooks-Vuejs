<template>
  <div><br>
    <input v-model="name" placeholder="Name"/>
    <p>My Name is: {{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "tabInfo",
  data() {
    return {
      name: "",
    };
  },
  // bắt các sự kiện thay đổi dữ liệu của component
  // (ở ví dụ là dữ liệu nhập vào input)
  renderTracked({key, target, type}) {
    console.log({key, target, type});
  },
}
</script>

<style scoped>

</style>