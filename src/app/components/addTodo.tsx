'use client';

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./modal";
import { FormEventHandler, useState } from "react";
import { addTodo } from "../../../api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4} from "uuid";

//function to add todo
export default function AddTodo(){

  const[openModal, setOpenModal]= useState<boolean>(false);
  const[newTaskValue, setNewTaskValue]= useState<string>("");
  const router=useRouter();  

  //function to handle new todo
  const handleSubmitNewTodo:FormEventHandler<HTMLFormElement>=async (e)=>{
    e.preventDefault();
    await addTodo({
      id:uuidv4(),
      text:newTaskValue
    });
    setNewTaskValue("");
    setOpenModal(false);
    router.refresh();
  };

    return(
        <div>
        <button onClick={()=> setOpenModal(true)}
         className="btn btn-primary w-full text-white my-2">Add Task 
         
         {/* Plus icon to add todo */}
        <AiOutlinePlus size={18}/></button>

         {/* Modal to add todo */}
         <Modal openModal={openModal} setOpenModal={setOpenModal}>
          <form onSubmit={handleSubmitNewTodo}>
            <h3 className="font-bold">Add new task</h3>
            <div className="modal-action">
            <input 
            value={newTaskValue}
            onChange={e  => setNewTaskValue(e.target.value)}
            type="text"
             placeholder="Type here"
              className="input input-bordered w-full "/>
              
              <button type="submit" className="btn btn-neutral">
                Submit
                </button>

            </div>
          </form>
          </Modal>        
      </div>
    )};