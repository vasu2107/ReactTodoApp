import classnames from 'classnames'
import "./index.css"

export default function Button({ onClick, text, className, disabled }) {
    const btnClasses = classnames('button', className, {
        disabled,
    });

    return (
        <button  className={btnClasses} onClick={onClick}>{text}</button>
    )
}