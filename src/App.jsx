import { Header } from "./components/Header"
import { TaskList } from "./components/TaskList";
import Button from '@mui/material/Button';
import { useTask } from "./hooks/useTask";

function App() {

  const [tasks, addTask, editTask, deleteTask, taskDone] = useTask();
  
  const handleTaskClick = (taskId) => {
    taskDone(taskId);
  };

  const handleTaskDelete = (taskId) => {
    deleteTask(taskId);
  };

  const handleTaskEdit = (taskId, text) => {
    editTask(taskId, text);
  };

  const handleTaskNew = () => {
    addTask();
  };

  return (
    <div className="App">
      <Header title="List Tasks"/>
      <div className="new_task">
        <Button size="medium" startIcon= '➕' onClick={() => handleTaskNew()}>
          Add new task
        </Button>
      </div>
      <TaskList tasks = {tasks} onTaskClick = {handleTaskClick} onTaskDelete = {handleTaskDelete} onTaskEdit = {handleTaskEdit}/>
    </div>
  )
}
export default App
