import Task from "../task"
import "./index.css"

export default function TaskList({tasks}){
    return (    
          <div className="task-list">
            {
                tasks.map(({id,message}) => {
                    return <Task key={id} message={message}/>
                })
            }
          </div>   
    )
}

