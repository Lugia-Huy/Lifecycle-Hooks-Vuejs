<template>
  <div class="form-group mt-4">
    <h1>Debug Hooks</h1>
    <div class="demo">
      <button class="btn btn-primary" @click="selectedComponent = 'tabHome'">Home</button>
      <button class="btn btn-primary ml-3" @click="selectedComponent = 'tabInfo'">Info</button>
      <button class="btn btn-primary ml-3" @click="selectedComponent = 'tabAbout'">About</button>

      <!--Note: remove keep-alive to see the difference for renderTracked hook
       Without keep-alive, it will re-render the component again. -->
      <keep-alive>
        <component class="mt-3" :is="selectedComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import tabAbout from "@/components/debugging/tab-about";
import tabHome from "@/components/debugging/tab-home";
import tabInfo from "@/components/debugging/tab-info";

export default {
  name: "error",
  components: {
    tabHome,
    tabInfo,
    tabAbout
  },
  beforeCreate() {
    console.clear()
  },
  data() {
    return {
      selectedComponent: "tabHome",
    };
  },
  // cap lại các lỗi bao gồm thông tin về thông báo lỗi, component chứa lỗi, loại lỗi đó
  errorCaptured(err, component, info) {
    console.log(err);
    console.log(component);
    console.log(info);
  },
  // bắt các sự kiện thay đổi một thuôc tính của component
  renderTriggered({key, target, type}) {
    console.log({key, target, type});
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