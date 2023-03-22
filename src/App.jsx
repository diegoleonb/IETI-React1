import { Header } from "./components/Header"
import { TaskList } from "./components/TaskList";
import { useState } from "react";
import Button from '@mui/material/Button';

function App() {

  const [tasks, setTasks] = useState([
    {name :"Task 1", id: 1, done : false},
    {name :"Task 2", id: 2,  done : false},
    {name :"Task 3", id: 3,  done : false},
    {name :"Task 4", id: 4,  done : false},
    {name :"Task 5", id: 5,  done : false},
    {name :"Task 6", id: 6,  done : false},
    {name :"Task 7", id: 7,  done : false},
  ]);

  const handleTaskClick = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) return {...task, done: !task.done};
        return task;
      })
    );
  };

  const handleTaskDelete = (taskId) => {
    setTasks(
      tasks.filter((task) => task.id !== taskId)
    );
  };

  const handleTaskEdit = (taskId, text) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) return {...task, name: text};
        return task;
      })
    );
  };

  const newTask = () => {
    const text = prompt('Type new task');
    setTasks(
      tasks.concat({name: text, id: tasks.length + 1, done: false})
    );
  };

  return (
    <div className="App">
      <Header title="List Tasks"/>
      <div className="new_task">
        <Button size="medium" startIcon= '➕' onClick={() => newTask()}>
          Add new task
        </Button>
      </div>
      <TaskList tasks = {tasks} onTaskClick = {handleTaskClick} onTaskDelete = {handleTaskDelete} onTaskEdit = {handleTaskEdit}/>
    </div>
  )
}

export default App
