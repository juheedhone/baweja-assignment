import { TrashIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "~/redux/slice/todoSlice";
import type { RootState } from "~/redux/store";
import { Button } from "./ui/button";

const TaskList = () => {
  const todos = useSelector((state: RootState) => state.todoSlice.items);

  const dispatch = useDispatch();

  const handleDeleteTask = (id: number) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="mt-20 space-y-4">
      {todos.map((t) => (
        <div
          className="flex justify-between items-center p-4 border border-gray-200 hover:border-gray-500 h-20 shadow rounded-xl w-[80%] mx-auto"
          key={t.id}
        >
          <p className="text-lg font-semibold">{t.name}</p>
          <Button
            onClick={() => handleDeleteTask(t.id)}
            type="button"
            variant="secondary"
            size="icon"
            className="text-red-600 hover:bg-red-50"
          >
            <TrashIcon className="size-6" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
