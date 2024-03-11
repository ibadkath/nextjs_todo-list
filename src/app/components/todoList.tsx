import { ITasks } from "../../../types/tasks"
import Task from "./task"

interface TodolistProps{
  tasks: ITasks[]
};

// function for todolist
export default function TodoList({tasks}:TodolistProps){
    return(
           
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-lg">
        <th>Tasks</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task)=>(
      <Task key={task.id} task={task}/>
      ))}
    </tbody>
  </table>
</div>
  
  )};