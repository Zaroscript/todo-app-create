import { useState, useRef } from "react";
import TodoList from "./TodoList";


const Todo = () => {

    const [todo, setTodo] = useState<string[]>(["todo1", "todo2", "todo3"]);
    const [newTodo, setNewTodo] = useState<string>("");

    const inputRef = useRef<HTMLInputElement>(null);



    const submitTodo = (e: React.FormEvent) => {
        e.preventDefault();

        setTodo([...todo, newTodo]);

        console.log(inputRef.current)
    }



  return (
    <section className="px-8 py-4">
      <form onSubmit={submitTodo} className="flex justify-between flex-wrap gap-4">
        <input
          type="text"
          placeholder="Write what you want to do..."
          className="bg-gray-400 px-4 py-2 rounded-md min-w-[400px] text-2xl"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewTodo(e.target.value);
          }}
          ref={inputRef}
        />
        <input
          type="text"
          placeholder="Write what you want to do2..."
          className="bg-gray-400 px-4 py-2 rounded-md min-w-[400px] text-2xl"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewTodo(e.target.value);
          }}
          ref={inputRef}
        />
        <button
          className="py-2 px-6 bg-green-600 rounded-full uppercase text-[1.1rem] cursor-pointer"
          type="submit"
        >
          Add
        </button>
      </form>

      <TodoList todos={todo} />
    </section>
  );
};

export default Todo;
