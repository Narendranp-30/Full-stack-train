import { useContext } from "react";
import { StudentContext } from "../contexts/Student";
import './Student.css'

function Student(){
    const {rollno,mark1,mark2,mark3}=useContext(StudentContext)
    return(
        <>
        <div className="dis">
        <div>Student RollNo:{rollno}</div>
        <div>Student Mark1:{mark1}</div>
        <div>Student Mark2:{mark2}</div>
        <div>Student Mark3:{mark3}</div>
        </div>
        </>
    )
}
export default Student;