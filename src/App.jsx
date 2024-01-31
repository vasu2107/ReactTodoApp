import { v4 as uuidv4 } from 'uuid';
import { values } from 'ramda';
import { useState } from "react"
import TaskList from "./components/taskList"
import AddTodo from "./components/addTodo";
import { TASK_STATUS } from './constants/task';
import './App.css'

const TASKS_KEY = 'tasks';

export default function App() {
  const persistedTasks = localStorage.getItem(TASKS_KEY) || JSON.stringify({});
  const [tasks, setTasks] = useState(JSON.parse(persistedTasks));
  const updateTasks = (updatedTasks) => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  }

  const addTask = (message) => {
    const id = uuidv4();
    const newTask = { id, message, status: TASK_STATUS.TODO, };
    const updatedTasks = { ...tasks, [id]: newTask };
    updateTasks(updatedTasks);
  };

  const toggleTaskStatus = (id) => {
    const { status } = tasks[id];
    const updatedTasks = {
      ...tasks,
      [id]: {
        ...tasks[id],
        status: status === TASK_STATUS.TODO ? TASK_STATUS.DONE : TASK_STATUS.TODO,
      }
    };
    updateTasks(updatedTasks);
  };

  return (
    <div className="todo-app">
      <AddTodo addTask={addTask} />
      <TaskList tasks={values(tasks)} handleTaskDblClick={toggleTaskStatus} />
    </div>
  )
}