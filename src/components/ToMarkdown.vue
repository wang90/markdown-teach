<template>
    <div v-html="htmlToMd"></div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import showdown  from 'showdown'
const converter = new showdown.Converter()

export default defineComponent({
    name: 'ToMarkdown',
    props: {
        value: {
            type: String,
            default: '',
        },
    },
    computed: {
        htmlToMd(): string {
            return converter.makeHtml( this.value )
        }
    },
    setup: () => {
        return {}
    }
})
</script>
  
<style scoped>

</style>
  