import { useState } from "react";
import Button from "../button";
import './index.css'

export default function AddTodo({ addTask }) {
    const [text, setText] = useState("");
    const addTaskProxy = () => addTask(text);

    return (
        <div className="addTodo">
            <input className="input" type="text" onChange={e => setText(e.target.value)} />
            <Button className="add-btn" onClick={addTaskProxy} text='add Todo' />
        </div>
    )
}

