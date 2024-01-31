import { useState } from "react"
import TaskList from "./components/taskList"
import AddTodo from "./components/addTodo";

const defaultTasks = [
  {
    id: 0, message: 'do'
  },
  {
    id: 1, message: 'do it'
  }
];

export default function App() {  
  const [tasks,SetTasks]=useState(defaultTasks);
  const addTask = (message) => {
    console.log(message);
  };

  return(
    <>
    <AddTodo addTask={addTask}/>
    <TaskList tasks={tasks}/>
    </>
  )
 }