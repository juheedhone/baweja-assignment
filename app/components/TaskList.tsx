import { TrashIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "~/redux/slice/todoSlice";
import type { RootState } from "~/redux/store";

const TaskList = () => {
  const todos = useSelector((state: RootState) => state.todoSlice.items);

  const dispatch = useDispatch();

  const handleDeleteTask = (id: number) => {
    dispatch(removeItem(id));
  };

  return (
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
  );
};

export default TaskList;
