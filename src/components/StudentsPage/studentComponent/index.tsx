import React from 'react';
import { observer } from "mobx-react";
import { observable } from "mobx";
import Student from "../../../stores/Models/studentsModel";

type StudentComponentProps = {
    student : Student
}

@observer
class StudentComponent extends React.Component<StudentComponentProps> {
    
    @observable studentName : string
   
    constructor(props : StudentComponentProps) {
        super(props)
        const {student} = this.props;
        const {name} = student;
        this.studentName = name;
    }

    render() {
        const {student} = this.props;
        const {gender} = student;
        return ( <div>
            <div>{student.name}</div>
            <div>{gender}</div>
        </div> );
    }
}
 
export default StudentComponent;