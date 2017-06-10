<template>
  <div id="app">
    <select name="taskSelect" id="tasks" v-model="selected" autofocus @change="clearForm()">
      <option value="" disabled selected>Select your option</option>
      <option v-for="(task, index) in tasks" :value="task" :key="index">{{task.name}}</option>
    </select>
    <div id="form">
      <input-component v-for="(option, index) in selected.options"
                       key="index" :option="option" v-model="formData[option.name]">
      </input-component>
      <button @click="commitForm()" :disabled="formValid !== true">Submit</button>
    </div>
    <div id="data">
      data: {{calender}} <br>
      selected: {{selected}} <br>
      formData: {{formData}}
    </div>
  </div>
</template>

<script>

import inputComponent from '@/components/inputComponent/inputComponent'
import {mapState} from 'vuex'
export default {
  name: 'app',
  components: {
    'input-component': inputComponent
  },
  data () {
    return {
      a: 1,
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
    }),
    formValid: function () {
      let valid = true
      if (this.selected !== '') {
        this.selected.options.forEach((val) => {
          if (this.formData[val.name] === '') {
            valid = false
            return false
          }
        })
      } else valid = false
      return valid
    }
  },
  methods: {
    commitForm () {
      this.$store.commit(this.selected.mutation, this.formData)
      this.$nextTick()
    },
    clearForm () {
      this.formData = {
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
  }
}
</script>

<style>

</style>
