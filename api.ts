import { ITasks } from "./types/tasks";

//Base url for an api
const url= "http://localhost:3001";

//function to fetch an api
export const getTodos= async() : Promise<ITasks[]> => {
    const res= await fetch(`${url}/tasks`, {cache:'no-store'});
    const todos= await res.json();
    return todos;
};

//function to add todo
export const addTodo= async (todo:ITasks): Promise<ITasks>=>{
    const res= await fetch(`${url}/tasks`, {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(todo)
    });

    const newTodo= await res.json();
    return newTodo;
};

//function to edit todo
export const editTodo= async (todo:ITasks): Promise<ITasks>=>{
    const res= await fetch(`${url}/tasks/${todo.id}`, {
        method: 'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(todo)
    });
    const editTodo= await res.json();
    return editTodo;
};

//function to delete todo
export const deleteTodo= async (id:string): Promise<void>=>{
    await fetch(`${url}/tasks/${id}`,
     {
        method: 'DELETE',

    });
};