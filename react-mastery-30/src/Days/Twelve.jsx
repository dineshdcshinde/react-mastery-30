import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { FiTrash2, FiEdit2, FiCheckCircle, FiCircle } from "react-icons/fi";

function Twelve() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    if (editId) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, text: inputValue } : todo
        )
      );
      setEditId(null);
    } else {
      let newTodo = { id: nanoid(), text: inputValue, status: false };
      setTodos([...todos, newTodo]);
    }
    setInputValue("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleUpdate = (id) => {
    const updatedTodo = todos.find((todo) => todo.id === id);
    setInputValue(updatedTodo.text);
    setEditId(updatedTodo.id);
  };

  const handleStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-950 text-white p-6">
      <div className="w-full max-w-md bg-gray-900 p-6 rounded-xl shadow-xl">
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md">
            {editId ? "Update Task" : "Add Task"}
          </button>
        </form>
        <ul className="mt-4 space-y-2">
          {todos.map((todo) => {
            const { id, text, status } = todo;
            return (
              <li
                key={id}
                className={`flex items-center justify-between p-3 rounded-md shadow-md transition-colors duration-200 ${
                  status ? "bg-green-800" : "bg-gray-800"
                }`}
              >
                <span
                  className={
                    status ? "line-through text-gray-400" : "text-white"
                  }
                >
                  {text}
                </span>
                <div className="flex space-x-2">
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() => handleDelete(id)}
                  >
                    <FiTrash2 size={20} />
                  </button>
                  <button
                    className="text-yellow-500 hover:text-yellow-600"
                    onClick={() => handleUpdate(id)}
                  >
                    <FiEdit2 size={20} />
                  </button>
                  <button
                    className="text-blue-500 hover:text-blue-600"
                    onClick={() => handleStatus(id)}
                  >
                    {status ? (
                      <FiCheckCircle size={20} />
                    ) : (
                      <FiCircle size={20} />
                    )}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Twelve;

// Responsive Todo Application
