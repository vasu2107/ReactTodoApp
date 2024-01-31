import classNames from "classnames";
import { IoMdDoneAll, IoMdClose, IoIosAlert } from "react-icons/io";
import "./index.css"
import { TASK_STATUS } from "../../constants/task";

export default function Task({ id, message, onDblClick, deleteTask, status }) {
    const isTaskCompleted = status === TASK_STATUS.DONE;
    const taskClasses = classNames('task', {
        done: isTaskCompleted,
    });
    const taskIconClasses = classNames(isTaskCompleted ? 'tick' : 'pending');

    const onDblClickProxy = () => {
        onDblClick(id);
    };

    const onClickProxy = () => {
        deleteTask(id);
    };

    const TaskIcon = isTaskCompleted ? IoMdDoneAll : IoIosAlert;

    return (
        <div className={taskClasses} >
            <span className="task_message" onDoubleClick={onDblClickProxy}><TaskIcon className={taskIconClasses} />{message}</span>
            <span onClick={onClickProxy} className="deleteButton"><IoMdClose className="cross" /></span>
        </div>
    )
}