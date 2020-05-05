import React from 'react';

import StudentStore from '../../stores/StudentsStores/index'
import AddStudent from './addStudent/index'
import StudentComponent from './studentComponent/index'
import { observer } from "mobx-react";

@observer
class StudentsPage extends React.Component {
    
    getStudentStore = () => {
        return StudentStore
    }
    
    onStudentAdd = (studentName:string,gender?:string) => {
        this.getStudentStore().addStudents(studentName,gender)
    }

    renderStudentsList = () => {
        return this.getStudentStore().students.map((student) => {
            return <StudentComponent key={student.id} student={student}/>
        })
    }

    render() { 
        return ( 
        <div>
            <AddStudent onStudentAdd={this.onStudentAdd}/>
            {this.renderStudentsList()}
        </div>
         );
    }
}
 
export default StudentsPage;