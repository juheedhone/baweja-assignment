import AddTask from "~/components/AddTask";
import TaskList from "~/components/TaskList";

const Todo = () => {
	return (
		<div className="w-3/5 py-8 mx-auto">
			<AddTask />
			<TaskList />
		</div>
	);
};

export default Todo;
