import { useState } from 'react';
import './App.css';
import Studentdata from './components/Studentdata';
import Staffdata from './components/Staffdata';

function App() {
    const [currentTab, setCurrentTab] = useState('students');

    return (
        <>
            <nav>
                <button onClick={() => setCurrentTab('students')}>Students</button>
                <button onClick={() => setCurrentTab('staff')}>Staff</button>
            </nav>
            {currentTab === 'students' ? <Studentdata /> : <Staffdata />}
        </>
    );
}

export default App;




















/*
function App() {
  const [person, setPerson] = useState('Staff')
  const [rollno,setRollno]=useState('')
   const [mark1,setMark1]=useState()
   const [mark2,setMark2]=useState()
   const [mark3,setMark3]=useState()

   function roll1(e){
    setRollno(e.target.value)
   }
   function mark11(e){
    setMark1(e.target.value)
   }
   function mark21(e){
    setMark2(e.target.value)
   }
   function mark31(e){
    setMark3(e.target.value)
   }
   const Submit=(e)=>{
        e.prevent.default
        console.log(rollno," ",mark1," ",mark2," ",mark3)
   }
  function togglePerson() {
    setPerson(person === 'Staff' ? 'Student' : 'Staff')
  }

  return (
    <>
      
       <SwitchContext.Provider value={{person:person,togglePerson:togglePerson}}>
      <StudentContext.Provider value={{rollno:rollno,mark1:mark1,mark2:mark2,mark3:mark3,roll1:roll1,mark11:mark11,mark21:mark21,mark31:mark31,Submit:Submit}}>
      <Header/>
      {person=="Staff" && <Staff/>}
      {person=="Student" && <Student/>}
      </StudentContext.Provider>
      </SwitchContext.Provider>
    </>
  )
}
*/
