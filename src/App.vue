<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-light">
      <div class="container">
        <router-link :to="{name: 'home'}" class="navbar-brand" :class="[{active: $route.name === 'home'}]">Home
        </router-link>
        <router-link :to="{name: 'create'}" class="nav-link" :class="[{active: $route.name === 'create'}]">Creat
        </router-link>
        <router-link :to="{name: 'mount'}" class="nav-link" :class="[{active: $route.name === 'mount'}]">Mount
        </router-link>
        <router-link :to="{name: 'update'}" class="nav-link" :class="[{active: $route.name === 'update'}]">Update
        </router-link>
        <router-link :to="{name: 'destroy'}" class="nav-link" :class="[{active: $route.name === 'destroy'}]">Destroy
        </router-link>
        <router-link :to="{name: 'keepAlive'}" class="nav-link" :class="[{active: $route.name === 'keepAlive'}]">
          Keep-alive
        </router-link>
        <router-link :to="{name: 'error'}" class="nav-link" :class="[{active: $route.name === 'error'}]">Error
        </router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

  methods: {
    is_active(path) {
      if (path === this.$route.name) {
        return 'active'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
