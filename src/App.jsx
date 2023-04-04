import { Header } from "./components/Header"
import { TaskList } from "./components/TaskList";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';

function App() {
  
  const [tasks, setTasks] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [
    {name :"Trabajo - Finalizar", id: 1, descripcion : "Terminar el proyecto", done : false},
    {name :"Trabajo - Arreglar", id: 2, descripcion : "Arreglar los bugs de la aplicacion", done : false},
    {name :"Universidad - Aprender", id: 3, descripcion : "Aprender React", done : false},
    {name :"Universidad - Laboratorio", id: 4, descripcion : "Terminar el laboratorio de React", done : false},
  ]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleSaveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

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
    const descripcion = prompt('Type new task description');
    if(text !== null && text.length > 0 && descripcion !== null && descripcion.length > 0){
      setTasks(
        tasks.concat({name: text, id: tasks.length + 1, descripcion: descripcion, done: false})
      );
    }
    else{
      alert("Task cannot be empty");
    }
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
