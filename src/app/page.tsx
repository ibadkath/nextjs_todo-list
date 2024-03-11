import Image from "next/image";
import TodoList from "./components/todoList";
import AddTodo from "./components/addTodo";
import { getTodos } from "../../api";

export default async function Home() {

  const tasks= await getTodos();
  console.log(tasks);

  return (

   <main className="max-w-4xl mx-auto mt-4">
    <div className="text-center my-5 flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Todo App</h1>
      <AddTodo />     
      </div>
      <TodoList tasks={tasks}/>
     </main>

  );
};
