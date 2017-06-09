import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  mutations: {
    addSubject (state, {name, teacher}) {
      state.calender.subjectarray[name] = {
        name,
        teacher,
        classes: [],
        assignments: [],
        tests: [],
        grades: []
      }
    },
    addClass (state, day, {hour, subject}) {
      state.calender.subjectarray[subject].classes.push({
        day,
        hour,
        subject
      })
    },
    addAssignment (state, {name, date, subject}) {
      state.calender.subjectarray[subject].assignments.push({
        name,
        date,
        subject
      })
    },
    addTest (state, {time, subject}) {
      state.calender.subjectarray[subject].tests.push({
        time,
        subject
      })
    },
    addReminder (state, {date, daytime, remindOf}) {
      state.calender.reminder.push({
        date,
        daytime,
        remindOf
      })
    },
    addSport (state, {time, name}) {
      state.calender.sports.push({
        time, //  Maybe format time
        name
      })
    },
    addSleep (state, {startTime, endTime}) {
      state.calender.sleep.push({
        startTime,
        endTime
      })
    },
    addHoliday (state, {startDate, endDate}) {
      state.calender.holidays.push({
        startDate,
        endDate
      })
    },
    addGrades (state, {subject, grade}) {
      state.calender.subjectarray[subject].grades.push(grade)
    }
  },
  state: {
    tasks: [
      {name: 'Subject', mutation: 'addSubject', options: ['name', 'teacher']},
      {name: 'Class', mutation: 'addClass', options: ['hour', 'subject']},
      {name: 'Assignemt', mutation: 'addAssignment', options: ['date', 'subject']},
      {name: 'Test', mutation: 'addTest', options: ['time', 'subject']},
      {name: 'Reminder', mutation: 'addReminder', options: ['date', 'daytime', 'remindOf']},
      {name: 'Sport', mutation: 'addSport', options: ['time, name']},
      {name: 'Sleep', mutation: 'addSleep', options: ['time, endTime']},
      {name: 'Holiday', mutation: 'addHoliday', options: ['date, endDate']},
      {name: 'Grades', mutation: 'addGrades', options: ['subject, grade']},
      {name: 'Resit', mutation: 'addTest', options: ['time, subject']}
      // {name: 'Other', mutation: 'addOther}
    ],
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    hours: ['8:20-9:10', '9:10-10:00', '10:20-11:10', '11:10-12:00', '12:30-13:20', '13:20-14:10', '14:25-15:15', '15:15-16:05'],
    calender: {
      subjectarray: {},
      sports: [],
      holidays: [],
      sleep: [],
      reminder: []
      // other: []
    }
  },
  getters: {
    getAllClasses: (state) => {
      return state.calender.subjectarray.values.map((before, current, index) => {

      })
    }
  }
})

export default store
