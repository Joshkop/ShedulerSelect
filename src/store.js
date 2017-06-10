import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  mutations: {
    addSubject (state, {name, teacher}) {
      console.log(name, teacher)
      Vue.set(state.calender.subjectarray, name, {
        name,
        teacher,
        classes: [],
        assignments: [],
        tests: [],
        grades: []
      })
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
      { name: 'Subject',
        mutation: 'addSubject',
        options: [
          {name: 'name', label: 'Name of the Subject', placeholder: 'e.G. Math'},
          {name: 'teacher', label: 'Name of the teacher', placeholder: 'e.G. Mr. A'}
        ]},
      { name: 'Class',
        mutation: 'addClass',
        options: [
          {name: 'daytime', label: 'Day of the week', placeholder: 'e.G. Monday'},
          {name: 'hour', label: 'Time of the class'},
          {name: 'subject', label: 'Corresponding subject'}
        ]},
      { name: 'Assignemt',
        mutation: 'addAssignment',
        options: [
          {name: 'date', label: 'Assignment Date'},
          {name: 'subject', label: 'Corresponending subject'}
        ]},
      { name: 'Test',
        mutation: 'addTest',
        options: [
          {name: 'name', label: 'Name of the test', placeholder: 'e.G. Math finals'},
          {name: 'date', label: 'Time of the test'},
          {name: 'subject', label: 'Corresponending subject'}

        ]},
      { name: 'Reminder',
        mutation: 'addReminder',
        options: [
          {name: 'name', label: ''}
        ]},
      {name: 'Sport', mutation: 'addSport', options: ['time', 'name']},
      {name: 'Sleep', mutation: 'addSleep', options: ['time', 'endTime']},
      {name: 'Holiday', mutation: 'addHoliday', options: ['date', 'endDate']},
      {name: 'Grades', mutation: 'addGrades', options: ['subject', 'grade']},
      {name: 'Resit', mutation: 'addTest', options: ['time', 'subject']}
      // {name: 'Other', mutation: 'addOther}
    ],
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    daytimes: ['Morning', 'Noon', 'Afternoon', 'Evening', 'Night', 'Midnight'],
    hours: ['8:20-9:10', '9:10-10:00', '10:20-11:10', '11:10-12:00', '12:30-13:20', '13:20-14:10', '14:25-15:15', '15:15-16:05'],
    calender: {
      subjectarray: {},
      sports: [],
      holidays: [],
      sleep: [],
      reminder: []
      // other: []  #TODO
    }
  },
  getters: {
    getAllClasses: (state) => {
      let classes = Object.keys(state.calender.subjectarray).map((original, current, ind) => {
        return original.classes
      })
      console.log(classes)
      return 1
    }
  }

})

export default store
