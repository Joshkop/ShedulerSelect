<template>
  <div class="inputs">
    <input type="text" id="name"
           placeholder="option.toUpperCase()" v-if="option in ['name', 'teacher']"
           :value="inputVal" @input="$emit('input', $event.target.value)">
  </div>
    <input type="time" id="time"
           placeholder="option.toUpperCase()" v-else-if="option in ['name', 'teacher']"
           :value="inputVal" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
  export default {
    props: ['option'],
    data () {
      return {
        inputval: ''
      }
    }
  }
</script>
<style scoped>
</style>
