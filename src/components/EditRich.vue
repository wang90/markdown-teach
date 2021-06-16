<template>
    <n-input
        type="textarea"
        :autosize="true"
        placeholder="ready ..."
        @update:value="update"
    />
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
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
        update( html: any ) {
            this.$emit( 'value', html )
        }
    }
})
</script>
  
<style scoped>

</style>
  