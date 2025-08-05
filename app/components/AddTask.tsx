import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "~/redux/slice/todoSlice";

const AddTask = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (!name.length) return;
    dispatch(addItem(name));
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
    </div>
  );
};

export default AddTask;
