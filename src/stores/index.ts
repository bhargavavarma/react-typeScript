import CounterStore from './CounterStore'
import StudentStore from './StudentsStores'

const counterStore = new CounterStore()
const studentStore = new StudentStore()

export default {
  counterStore,
  studentStore
}
