import classNames from "classnames";
import { IoMdDoneAll, IoMdClose, IoIosAlert } from "react-icons/io";
import "./index.css"
import { TASK_STATUS } from "../../constants/task";

export default function Task({ id, message, onDblClick, status }) {
    const isTaskCompleted = status === TASK_STATUS.DONE;
    const taskClasses = classNames('task', {
        done: isTaskCompleted,
    });
    const taskIconClasses = classNames(isTaskCompleted ? 'tick' : 'pending');

    const onDblClickProxy = () => {
        onDblClick(id);
    };
    const TaskIcon = isTaskCompleted ? IoMdDoneAll : IoIosAlert;

    return (
        <div onDoubleClick={onDblClickProxy} className={taskClasses} >
            <span><TaskIcon className={taskIconClasses} />{message}</span>
            <span><IoMdClose className="cross" /></span>
        </div>
    )
}