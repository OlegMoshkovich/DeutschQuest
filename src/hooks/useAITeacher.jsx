const {create} = require('zustand')

export const useAITeacher = create((set,get) => ({
  messages: [],
  currentMessage: null,
  teachers: [0],
  setTeacher: (teacher) => set({
    teacher
  }),
  classRoom: 'default',
  setClassRoom: (classRoom) => set({
    classroom
  })
}))
