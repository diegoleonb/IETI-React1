import { useState, useEffect } from 'react';

export function useTask(){

    const [tasks, setTasks] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [
        {name :"Trabajo - Finalizar", id: 1, descripcion : "Terminar el proyecto", done : false},
        {name :"Trabajo - Arreglar", id: 2, descripcion : "Arreglar los bugs de la aplicacion", done : false},
        {name :"Universidad - Aprender", id: 3, descripcion : "Aprender React", done : false},
        {name :"Universidad - Laboratorio", id: 4, descripcion : "Terminar el laboratorio de React", done : false},
      ]);

    useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function addTask(text, description){
        if(text !== null && text.length > 0){
        setTasks(
            tasks.concat({name: text, id: tasks.length + 1, descripcion: description, done: false})
        );
        }
        else{
            alert("Task cannot be empty");
        }
    }

    function editTask(taskId, text){
        setTasks(tasks.map((task) => {
            if (task.id === taskId) return {...task, name: text};
                return task;
            })
        );
    }

    function deleteTask(taskId){
        setTasks(
            tasks.filter((task) => task.id !== taskId)
        );
    }

    function taskDone(taskId){
        setTasks(
            tasks.map((task) => {
            if (task.id === taskId) return {...task, done: !task.done};
              return task;
            })
        );
    }

    return [tasks, addTask, editTask, deleteTask, taskDone];
}