import { useState } from "react";
import Button from "../button";

export default function AddTodo({ addTask }) {
    const [text,setText] = useState("");
    const addTaskProxy = () => addTask(text);

    return (
        <>
        <input type="text"  onChange={e => setText(e.target.value)}/>
        <Button onClick={addTaskProxy} text='add' />
        </>
    )
}