import { useContext } from "react";
import { SwitchContext } from "../contexts/Switch";
import './SwitchButton.css'
function Switchbutton(){
    const {person,togglePerson}=useContext(SwitchContext);
    return(
        <>
        <div className="sw">
          <div>Staff</div>
          <label className="switch">
            <input type="checkbox" checked={person === "Student"} onChange={togglePerson} />
            <span className="slider"></span>
        </label>
        <div>Student</div>
        </div>
        </>
    )
}

export default Switchbutton;