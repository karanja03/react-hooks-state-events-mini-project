import React, { useState } from "react";
import Task from "./Task";
import { TASKS } from "../data";

function TaskList() {
  
  const[taskList, setTaskList]=useState(TASKS)

  //what happens when the delete button is clicked
  const handleDeleteClick=(taskTest)=>{


    //return everything that is not equal to the task that has been clicked
   const newTaskList=taskList.filter((TASK)=> TASK.text !==taskTest)
   setTaskList(newTaskList)
  }
  return (
    <div className="tasks">
      <ul>
      {TASKS.map((TASK)=>(
      <li key={TASK.text}>
       {<Task text={TASK.text} category={TASK.category} handleClick={handleDeleteClick}/>}
      </li>
      ))}
      </ul>
      
    </div>
  );
}

export default TaskList;
