import Button from '@mui/material/Button';
import { useTask } from "../hooks/useTask";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Header } from "../components/Header"
import { TaskList } from "../components/TaskList";

export function Tasks(){

    const [tasks, addTask, editTask, deleteTask, taskDone] = useTask();
    
    const [form, setForm] = useState(false);

    const { register , handleSubmit, formState : {errors}} = useForm();

    const onSubmit = (data) => {
        addTask(data.title, data.description);
        setForm(false);
    };

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
        setForm(true);
    };

    return (
        <div className="App">
      <Header title="List Tasks"/>
      {form && <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>
                <input type="text" placeholder="Title"{...register("title", { 
                  required: true, 
                  minLength: 3,
                  })}/>
              </label>
              {errors.title?.type === 'required' && <span className="error" role="alert">Title is required</span>}
              {errors.title?.type === 'minLength' && <span className="error" role="alert">Title is too short</span>}
            </div>
            <div>
              <label>
                <input type="text"  placeholder="Description" {...register("description")}/>
              </label>
            </div>
            <button>Add Task</button>
          </form>
        </div>
      }
      {!form &&
        <div className="new_task">
          <Button size="medium" startIcon= '➕' onClick={handleTaskNew}>
            Add new task
          </Button>
      </div>
      }
      <TaskList tasks = {tasks} onTaskClick = {handleTaskClick} onTaskDelete = {handleTaskDelete} onTaskEdit = {handleTaskEdit}/>
    </div>
    );
};