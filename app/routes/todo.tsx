import { TrashIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "~/redux/slice/todoSlice";
import type { RootState } from "~/redux/store";

const Todo = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todoSlice.items);
  console.log("🚀 ~ Todo ~ todos:", todos);

  const handleAddTask = () => {
    if (!name.length) return;
    dispatch(addItem(name));
  };
  const handleDeleteTask = (id: number) => {
    console.log("clicked")
    dispatch(removeItem(id));
  };

  return (
    <div>
      <label className="block font-semibold mb-1" htmlFor="name">
        Add new task
      </label>
      <input
        onChange={(event) => setName(event.target.value)}
        className="w-full border rounded px-3 py-2 border-gray-300"
        id="name"
        type="text"
        placeholder="Enter task..."
      />
      <button
        onClick={handleAddTask}
        type="submit"
        className="bg-pink-500 text-white px-4 py-2 rounded "
      >
        Submit
      </button>
      <div className="space-y-2 mt-4">
        {todos.map((t) => (
          <div
            className="rounded-xl p-4 border border-gray-500 w-52 shadow-2xl flex justify-between"
            key={t.id}
          >
            {t.name}
            <button onClick={() => handleDeleteTask(t.id)} type="button">
              {<TrashIcon />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
