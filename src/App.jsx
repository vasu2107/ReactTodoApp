import { useState } from "react"
import TaskList from "./components/taskList"
import AddTodo from "./components/addTodo";
import './App.css'

const defaultTasks = [
  {
    id: 0, message: 'do'
  },
  {
    id: 1, message: 'do it'
  }
];

export default function App() {
  const [tasks, SetTasks] = useState(defaultTasks);
  const addTask = (message) => {
    console.log(message);
    let len = tasks.length;
    SetTasks([...tasks,{
      id: len, message: message, 
    }]);
    console.log(tasks);
  };

  return (
    <div className="todo-app">
      <AddTodo addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  )
}