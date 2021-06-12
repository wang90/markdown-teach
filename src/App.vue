<template>
  <n-config-provider :theme="darkTheme">
    <home />
  </n-config-provider>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from './views/home.vue'
import { darkTheme, NConfigProvider } from 'naive-ui'

export default defineComponent({
    name: 'App',
    components: {
        Home,
        NConfigProvider,
    },
    setup() {
      return {
        darkTheme,
      }
    }
})
</script>

<style>
</style>
