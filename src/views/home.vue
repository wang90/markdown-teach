<template>
    <div>
        <teach-message></teach-message>
        <edit-rich></edit-rich>
    </div>
    <to-markdown></to-markdown>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue';
import TeachMessage from '../components/TeachMessage.vue';
import ToMarkdown from '../components/ToMarkdown.vue';
import EditRich from '../components/EditRich.vue';

export default defineComponent({
    name: 'Home',
    components: {
      TeachMessage,
      ToMarkdown,
      EditRich,
    },
    setup: () => {
    }
})
</script>
  
<style scoped>
 
</style>
  