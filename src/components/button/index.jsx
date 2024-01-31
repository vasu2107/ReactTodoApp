import "./index.css"

export default function Button({ onClick, text, className }) {
    return (
        <button className={`button ${className}`} onClick={onClick}>{text}</button>
    )
}