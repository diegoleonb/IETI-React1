import { Task } from "./Task";

export const TaskList = (props) => {
    const { tasks, onTaskClick, onTaskDelete, onTaskEdit } = props;

    const handleTaskClick = (taskId) => {
        onTaskClick(taskId);
    };

    const handleTaskDelete = (taskId) => {
        onTaskDelete(taskId);
    };

    const handleTaskEdit = (taskId, text) => {
        onTaskEdit(taskId, text);
    };

    return (
        <div className="task-list">   
            {tasks.map((task) => (
                <div key={task.id}>
                    <Task name={task.name} id={task.id} descripcion={task.descripcion} done={task.done} onTaskClick = {handleTaskClick} onTaskDelete = {handleTaskDelete} onTaskEdit = {handleTaskEdit}/>
                </div>
            ))}
        </div>
    );
};