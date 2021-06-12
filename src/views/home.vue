<template>
    <n-layout-header bordered>Teach-markdown</n-layout-header>
    <n-layout>
      <n-grid x-gap="12" :cols="2">
        <teach-message></teach-message>
        <edit-rich></edit-rich>
      </n-grid>
      <n-grid x-gap="12" :cols="2">
        <to-markdown></to-markdown>
      </n-grid>
    </n-layout>
    <n-layout-footer bordered>footer</n-layout-footer>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue';
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter, NGrid,NGi } from 'naive-ui'
import TeachMessage from '@src/components/TeachMessage.vue';
import ToMarkdown from '@src/components/ToMarkdown.vue';
import EditRich from '@src/components/EditRich.vue';

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
    setup: () => {
      return {}
    },
})
</script>
  
<style scoped>
 
</style>