import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: input, completed: false },
      ]);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-salar  dark:bg-moon bg-no-repeat bg-center bg-auto  bg-fixed  dark:text-white" >
      <div className="bg-secondary bg-opacity-25 shadow-lg rounded-3xl p-16 ">
        <div className="flex justify-center gap-5 text-center">
        <FcCalendar className="w-7 h-7" />
      <h1
          className=" mb-7  font-title
   text-center  text-2xl text-head dark:text-black"
        >
          Todo App
        </h1>
        </div>
        <div className="mb-4 flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Add something new"
            className="flex-grow px-3 py-2  bg-opacity-25 dark:bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 font-placehold "
          />
          <button
            onClick={addTodo}
            className="bg-yellow-500 hover:bg-buttonHov active:bg-orange-900 focus:outline-none focus:ring focus:ring-buttonCol text-head dark:text-black px-4 py-2 rounded-lg font-title dark:bg-gray-800"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center p-3 rounded-lg bg-orange-300 border-gray-500 dark:bg-black dark:text-white"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() =>
                  setTodos(
                    todos.map((seckin) =>
                      seckin.id === todo.id
                        ? {
                            ...seckin,
                            completed: !seckin.completed,
                          }
                        : seckin
                    )
                  )
                }
                className="mr-2 h-5 w-5 text-grey-500 "
              />
              <span
                className={`flex-grow font-todos ${
                  todo.completed
                    ? "line-through text-gray-500"
                    : "text-red-800 dark:text-blue-500"
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() =>
                  setTodos(
                    todos.filter(
                      (seckin) => seckin.id !== todo.id
                    )
                  )
                }
                className="ml-2 border-none p-2 rounded-lg bg-red-800 text-white dark:bg-gray-700 
                hover:bg-red-600 flex items-center  font-title  "
              >
                Delete
                <MdDelete  />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
