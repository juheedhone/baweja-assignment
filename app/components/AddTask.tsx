import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { addItem } from "~/redux/slice/todoSlice";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const AddTask = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (!name.length) {
      toast.error("Task name is required");
      return;
    }

    dispatch(addItem(name));
    toast.success("Task added successfully!");
  };

  return (
    <div className="flex flex-col">
      <label className="block mb-2 font-semibold" htmlFor="name">
        Add new task
      </label>
      <Input
        onChange={(event) => setName(event.target.value)}
        className="mb-4"
        id="name"
        type="text"
        placeholder="Enter task..."
      />
      <Button onClick={handleAddTask} type="button" className="ml-auto">
        Submit
      </Button>
    </div>
  );
};

export default AddTask;
