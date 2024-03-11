'use client'

import { ITasks } from "../../../types/tasks";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import Modal from "./modal";
import { useState } from "react";
import { FormEventHandler } from "react";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "../../../api";

interface TaskProps{
    task: ITasks
};

//function for handling task
export default function Task({task}:TaskProps){
    const router= useRouter();
    const [openModalEdit, setOpenModalEdit]=useState(false);
    const [openModalDelete, setOpenModalDelete]=useState(false);
    const [taskToEdit, setTaskToEdit]=useState(task.text);

    //function to edit task
    const handleSubmitEditTask:FormEventHandler<HTMLFormElement>=async (e)=>{
        e.preventDefault();
        await editTodo({
          id:task.id,
          text:taskToEdit
        });
        setTaskToEdit("");
        setOpenModalEdit(false);
        router.refresh();
      };

      //function to delete task
      const handleDeleteTask=async(id:string)=>{
         await deleteTodo(id);
         setOpenModalDelete(false);
         router.refresh();
      };

    return(
        <tr key={task.id}>
        <td className="w-full text-lg">{task.text}</td>
        <td className="flex gap-5 cursor-pointer ">

          {/* Edit icon */}
        <AiOutlineEdit size={25} className="text-purple-500"
        onClick={()=> setOpenModalEdit(true)}/>
         
         {/* Modal for edit task */}
        <Modal openModal={openModalEdit} setOpenModal={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTask}>
            <h3 className="font-bold">Edit task</h3>
            <div className="modal-action">
            <input 
            value={taskToEdit}
            onChange={e  => setTaskToEdit(e.target.value)}
            type="text"
             placeholder="Type here"
              className="input input-bordered w-full "/>
              <button type="submit" className="btn btn-neutral">
                Submit
                </button>
            </div>
          </form>
          </Modal>
           
        {/* Delete icon */}
        <RiDeleteBin6Line size={25} className="text-red-500"
        onClick={()=>setOpenModalDelete(true)}/>

       {/* Modal for delete task */}
        <Modal openModal={openModalDelete} setOpenModal={setOpenModalDelete}>   
           <h3 className="font-bold">Are you sure you want to delete?</h3>
           <div className="modal-action gap-5">
            <button className="btn btn-outline" onClick={()=>handleDeleteTask(task.id)}>Yes</button>
            <button className="btn btn-outline" onClick={()=>setOpenModalDelete(false)}>No</button>
           </div>
            
          </Modal>
        </td>
      </tr>
    )};