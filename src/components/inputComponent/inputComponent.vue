<template>
  <div class="inputs">
    <label >
      {{option.label}}
    <input type="text" id="name"
           v-if="['name', 'teacher'].includes(option.name)"
           @input="$emit('input', $event.target.value)" :placeholder="option.placeholder" required>
      <input type="time" id="time"
             v-else-if="['time', 'endTime'].includes(option.name)"
             @input="$emit('input', $event.target.value)" required>
      <input type="datetime-local" id="date"
             v-else-if="['date', 'endDate'].includes(option.name)"
             @input="$emit('input', $event.target.value)">
      <select name="subjects" id="subject" v-else-if="option.name === 'subject'"
              @change="$emit('input', $event.target.value)" required>
        <option value="" selected disabled :key="-1">Change Subjcect</option>
        <option v-for="(subject, key) in subjects" :value="key" :key="key">{{subject.name}}</option>
      </select>
      <select name="hour" id="hour" v-else-if="option.name === 'hour'" required>
        <option value="" selected disabled :key="-1">Change Class Time</option>
        <option v-for="(hour, index) in hours" :value="key" :key="index">{{hour}}</option>
      </select>
      <select name="daytime" id="daytime" v-else-if="option.name === 'daytimes'" required>
        <option value="" selected disabled :key="-1">Change Daytime</option>
        <option v-for="(daytime, index) in daytimes" :value="key" :key="index">{{daytime}}</option>
      </select>
      <select name="color" id="color" v-else-if="option.name === 'color'" required>
        <option value="" selected disabled :key="-1">Change Color</option>
        <option v-for="(color, index) in colors" :value="key" :key="index">{{color}}</option>
      </select>
    </label>
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'
  export default {
    props: ['option'],
    computed: {
      ...mapGetters(['getAllClasses']),
      ...mapState({
        subjects: state => state.calender.subjectarray,
        hours: state => state.hours,
        daytimes: state => state.daytimes,
        colors: state => state.colors
      })
    }
  }
</script>
<style scoped>
</style>
