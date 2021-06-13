<template>
    <n-input
        type="textarea"
        :autosize="true"
        placeholder="基本的 Textarea"
        @update:value="update"
    />
</template>
  
<script lang="ts">
import { ref, defineComponent } from 'vue'
import { NInput } from 'naive-ui'

export default defineComponent({
    name: 'EditRich',
    components: {
        NInput,
    },
    data() {
        return {
            value: '',
        }
    },
    methods: {
        update( html: string ) {
            this.$emit( 'value', html )
        }
    }
})
</script>
  
<style scoped>

</style>
  