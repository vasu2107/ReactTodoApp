import Task from "../task"
import "./index.css"

export default function TaskList({ tasks, handleTaskDblClick, deleteTask}) {

    return (
        <div className="task-list">
            {
                tasks.map(({ id, message, status }) => {
                    return <Task key={id} id={id} message={message} deleteTask={deleteTask} onDblClick={handleTaskDblClick} status={status} />
                })
            }
        </div>
    )
}

