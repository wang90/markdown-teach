<template>
    <div class='footer-component'> 
        ©2021 hello markdown
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Footerbar',
})
</script>
<style lang='scss' scoped>
.footer-component {
    padding: 10px 15px;
    font-size: 14px;
    letter-spacing: 1px;
    text-align: center;
}
</style>
  