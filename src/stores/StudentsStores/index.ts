import { observable, action } from "mobx";
import Student, {StudentObjectType} from '../Models/studentsModel';

class StudentStore {
    
    @observable students : Array<Student>

    constructor() {
        this.students = [];
    }

    @action.bound
    addStudents(name : string, gender?: string) {
        const studentObject : StudentObjectType = {
            name,
            gender,
            id:Math.random().toString()
        }
        const studentModel : Student = new Student(studentObject); // automatic ga model anedhi infer avutundi so no need to give type
        this.students.push(studentModel);
    }

}

export default StudentStore;