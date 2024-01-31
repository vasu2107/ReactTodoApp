import { useState } from "react";
import { isEmpty } from 'ramda';
import Button from "../button";
import './index.css'

export default function AddTodo({ addTask }) {
    const [text, setText] = useState("");
    const addTaskProxy = () => {
        addTask(text);
        setText("");
    };

    return (
        <div className="addTodo">
            <input className="input" type="text" value={text} onChange={e => setText(e.target.value)} />
            <Button  disabled={isEmpty(text)} className="add-btn" onClick={addTaskProxy} text='Add Todo' />
        </div>
    )
}

