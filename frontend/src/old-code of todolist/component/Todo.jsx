import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoslice";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleUpdate = (id) => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, newText: editText }));
      setEditingId(null);
      setEditText("");
    }
  };

  return (
    <>
      <div className="text-xl font-bold mb-4">Todos</div>
      {todos.length === 0 ? (
        <p className="text-gray-400">No todos yet!</p>
      ) : (
        <ul className="list-none space-y-2">
          {todos.map((todo) => (
            <li
              className="flex justify-between items-center bg-zinc-800 px-4 py-3 rounded-lg"
              key={todo.id}
            >
              {editingId === todo.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="bg-gray-700 text-white px-2 py-1 rounded"
                  autoFocus
                />
              ) : (
                <span className="text-white">{todo.text}</span>
              )}

              <div className="flex space-x-2">
                {editingId === todo.id ? (
                  <>
                    <button
                      onClick={() => handleUpdate(todo.id)}
                      className="text-white bg-green-500 hover:bg-green-600 p-2 rounded-md"
                      aria-label={`Save "${todo.text}"`}
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="text-white bg-gray-500 hover:bg-gray-600 p-2 rounded-md"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => startEditing(todo.id, todo.text)}
                      className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-md"
                      aria-label={`Edit "${todo.text}"`}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => dispatch(removeTodo(todo.id))}
                      className="text-white bg-red-500 hover:bg-red-600 p-2 rounded-md"
                      aria-label={`Delete "${todo.text}"`}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Todos;
