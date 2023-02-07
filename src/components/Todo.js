import React, { useState } from 'react';
import '../App.css';

export default function Todo() {


    const [task,setTask]=useState([]);
    const[message,setMessage]=useState("");

    const handlemessage = (event) => {
        setMessage(event.target.value);
    }
    const newElement =  () => {
        
       setTask(prev=>([
        ...prev, message]
    )); 
       console.log(task);
    }

    const handleChange = (targetindex) =>{
        setTask( (prev)=> {
  return prev.filter((item,index)=>index!=targetindex);

        } 
        )

    }

  return (
    <>
    <div>
<div id="myDIV" class="header">
  <h2 style={{margin: '5px'}}>My To Do List</h2>
  <input type="text" id="myInput"  value={message} onChange={handlemessage} placeholder="Title..."/>
  <span onClick={newElement} className="addBtn">Add</span>
</div>

<ul id="myUL">
{task.map((items,index) => {
    return (
<>
<li onClick={()=>handleChange(index)}>{items}</li>
</>


    );
})}


</ul>


    </div>
    </>
  )
}
