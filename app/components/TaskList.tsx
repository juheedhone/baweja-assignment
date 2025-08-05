import { MagnifyingGlassIcon, TrashIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "~/redux/slice/todoSlice";
import type { RootState } from "~/redux/store";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const TaskList = () => {
	const todos = useSelector((state: RootState) => state.todoSlice.items);
	const [searchQuery, setSearchQuery] = useState("");

	const dispatch = useDispatch();

	const handleDeleteTask = (id: number) => {
		dispatch(removeItem(id));
	};

	const filteredTodos = todos.filter((todo) =>
		todo.name.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<div className="mt-20 space-y-4">
			<div className="flex justify-end w-[80%] mx-auto mb-4">
				<div className="relative w-64">
					<Input
						type="text"
						placeholder="Search tasks..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="pr-8"
					/>
					<MagnifyingGlassIcon className="absolute text-gray-500 -translate-y-1/2 right-2 top-1/2 size-4" />
				</div>
			</div>
			{filteredTodos.map((t) => (
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
