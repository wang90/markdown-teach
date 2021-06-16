<template>
    <div class='navbar-component'> 
        <span v-for="(v,i)  in data" :key='i' :class="[v.classname]">{{ v.value }}</span>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Navbar',
    setup: () => {
        return {
          data : [
            { value: 'm', classname: 'blue' },
            { value: 'a', classname: 'red' },
            { value: 'r', classname: 'yellow' },
            { value: 'k', classname: 'blue' },
            { value: 'd', classname: 'green' },
            { value: 'o', classname: 'red' },
            { value: 'w', classname: 'yellow' },
            { value: 'n', classname: 'blue' }
        ]
      }
    }
})
</script>
  
<style lang='scss' scoped>
.navbar-component {
    padding: 10px 15px;
    font-size: 30px;
    letter-spacing: 3px;
    font-weight: 600;
    span {
        text-shadow: 1px 1px 2px rgba(255,255,255,0.4);
        &.green {
            color : $green;
        }
        &.red {
            color : $red;
        }
        &.blue {
            color: $blue;
        }
        &.yellow {
            color: $yellow;
        }
    }
}
</style>
  