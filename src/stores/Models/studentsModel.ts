import { observable } from "mobx"

export type StudentObjectType = {
    id : string,
    name : string,
    gender ?: string
}

class Student {
    id : string
    @observable name : string
    @observable gender ?: string

    constructor(studentObject : StudentObjectType) {
        this.id = studentObject.id;
        this.name = studentObject.name;
        this.gender = studentObject.gender;
    }

    updateName (updatedName : string) {
        this.name = updatedName;
    }
}

export default Student;