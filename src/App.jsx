import React from 'react'
// import './App.css'
// import Newcom from './Newcom';
import Comp3 from './Comp3';




function App() {


const Details={ name:"Pavan Kumar Rao",age:22,edu:"Btech"}
const{name,age,edu}=Details;
  return (
    <>
    {/* <Newcom/> */}
     {/* <Newcom  Name={name} Age={age} Edu={edu}/> */}
     <Comp3/>
    </>
  )
}

export default App;
