<template>
  <div class="page">
    <n-layout-header bordered>
      <navbar></navbar>
    </n-layout-header>
    <n-layout class="page-contain">
      <div>
        <teach-message></teach-message>
      </div>
      <div class="edit-rich">
        <edit-rich @value="getValue"></edit-rich>
        <to-markdown :value="value"></to-markdown>
      </div>
    </n-layout>
    <n-layout-footer bordered class="footer">
      <footerbar></footerbar>
    </n-layout-footer>
  </div>
</template>
<style lang="scss"> 
.page {
  .page-contain {
  }
  .edit-rich {
    display: flex;
    padding: 20px 10px 40px;
    > div {
      flex: 1;
      padding: 10px;
      &:last-child {
        margin-left: 25px;
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}

</style>
<script lang="ts">
import { ref, defineComponent } from 'vue'
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter, NGrid,NGi } from 'naive-ui'
import TeachMessage from '@src/components/TeachMessage.vue'
import ToMarkdown from '@src/components/ToMarkdown.vue'
import EditRich from '@src/components/EditRich.vue'
import Navbar from '@src/components/Navbar.vue'
import Footerbar from '@src/components/Footerbar.vue'

export default defineComponent({
    name: 'Home',
    components: {
      NLayout,
      NLayoutHeader,
      NLayoutContent,
      NLayoutFooter,
      NGrid,
      TeachMessage,
      ToMarkdown,
      EditRich,
      Navbar,
      Footerbar,
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