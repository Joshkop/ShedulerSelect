<template>
  <div id="app">
    <select name="taskSelect" id="tasks" v-model="selected" autofocus>
      <option value="" disabled selected>Select your option</option>
      <option v-for="(task, index) in tasks" :value="task.name" :key="index">{{task.name}}</option>
    </select>
    <div id="form">
      <input-component v-for="(option, index) in selected.options"
                       key="index" :option="option" v-model="formData[option]">
      </input-component>
      <button @click="subjects.push(subject)">Submit</button>
    </div>
    <div id="data">
      {{calender}}
    </div>
  </div>
</template>

<script>
import mainInput from '@/components/mainInput/mainInput'
import mainSelect from '@/components/mainSelect/mainSelect'
import {mapState} from 'vuex'
export default {
  name: 'app',
  components: {
    'main-select': mainSelect,
    'main-input': mainInput
  },
  data () {
    return {
      selected: '',
      formData: {
        day: '',
        hour: '',
        name: '',
        teacher: '',
        date: '',
        time: '',
        subject: '',
        daytime: '',
        reminder: '',
        endTime: '',
        endDate: ''
      }
    }
  },
  computed: {
    ...mapState({
      calender: state => state.calender,
      tasks: state => state.tasks,
      days: state => state.days
    })
  }
}
</script>

<style>

</style>
