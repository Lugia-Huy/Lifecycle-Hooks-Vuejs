<template>
  <div class="demo-tab mt-5">
    Archive component
  </div>
</template>

<script>
export default {
  name: "tabAbout",
  created() {
    throw new Error('test')
  },
  // bắt sự kiện lỗi được throw lỗi không mong muốn
  // hoặc khi truy cập vào biến không tồn tại
  errorTriggered(error) {
    console.log(error)
  },
}
</script>

<style scoped>
.demo-tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>