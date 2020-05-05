import * as React from 'react'
import { observable } from "mobx"
import { observer } from "mobx-react"

type InputEvent = React.ChangeEvent<HTMLInputElement>;

type AddStudentProps = {
    onStudentAdd : (name:string, gender?: string) => void
    onStudentOnCallBack : Function
    //onStudentOnCallBack ?: Function
    studentName : string
}

@observer
class AddStudent extends React.Component<AddStudentProps> {
    // if you didnot give optional props
    static defaultProps = {
        onStudentOnCallBack : () => {},
        studentName : ''
    }

    @observable studentName : string = ''
    @observable gender : string = ''

    onChangeStudentName = (event : InputEvent) => {
        this.studentName = event.target.value;
    }

    onChangeGender = (event : InputEvent) => {
        this.gender = event.target.value;
    }

    onKeyDown = (event : React.KeyboardEvent) => {
        if(event.keyCode === 13) {
            const {onStudentAdd} = this.props;
            onStudentAdd(this.studentName,this.gender)
        }
    }

    render() { 

        return (
            <div>
                <input style={{backgroundColor : 'green'}} onChange={this.onChangeStudentName} 
                    onKeyDown={this.onKeyDown} value={this.studentName}/>
                <input style={{backgroundColor : 'red'}} onChange={this.onChangeGender} 
                    onKeyDown={this.onKeyDown} value={this.gender}/>
                    
            </div>
         );
    }
}

export default AddStudent;