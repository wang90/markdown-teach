<template>
    <n-layout-header bordered>Teach-markdown</n-layout-header>
    <n-layout>
      <n-grid :cols="1"> 
        <teach-message></teach-message>
      </n-grid>
      <n-grid :cols="2">
        <edit-rich @value="getValue"></edit-rich>
      </n-grid>
      <n-grid  :cols="2">
        <to-markdown :value="value"></to-markdown>
      </n-grid>
    </n-layout>
    <n-layout-footer bordered>

    </n-layout-footer>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue'
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter, NGrid,NGi } from 'naive-ui'
import TeachMessage from '@src/components/TeachMessage.vue'
import ToMarkdown from '@src/components/ToMarkdown.vue'
import EditRich from '@src/components/EditRich.vue'

export default defineComponent({
    name: 'Home',
    components: {
      TeachMessage,
      ToMarkdown,
      EditRich,
      NLayout,
      NLayoutHeader,
      NLayoutContent,
      NLayoutFooter,
      NGrid,
    },
    data() {
      return {
        value: ''
      }
    },
    methods: {
      getValue( value: string ) {
        this.value = value
      }
    }
})
</script>
  
<style scoped>
 
</style>