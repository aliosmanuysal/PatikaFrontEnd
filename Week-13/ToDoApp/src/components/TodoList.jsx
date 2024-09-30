import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const TodoList = ({ items, setItems, displayStatus }) => {
    const inputRefs = useRef([]);
    const [itemsShown, setItemsShown] = useState([]);

    useEffect(() => {
        if (displayStatus.all) {
            setItemsShown(items);
        }
        if (displayStatus.active) {
            setItemsShown(items.filter(item => item.isCompleted === false));
        }
        if (displayStatus.completed) {
            setItemsShown(items.filter(item => item.isCompleted === true));
        }
    }, [items, displayStatus]);

    const handleKeyDown = (e, id, index) => {
        if (e.key === 'Enter') {
            if (inputRefs.current[index + 1]) {
                inputRefs.current[index + 1].focus();
            } else {
                inputRefs.current[0].focus();
                if (!inputRefs.current[1]) {
                    inputRefs.current[0].blur();
                }
            }
        }
        if (e.key === 'Backspace' && e.target.value === '') {
            setItems(prevItems => prevItems.filter(item => item.id !== id));
            setTimeout(() => {
                if (inputRefs.current[index - 1]) {
                    inputRefs.current[index - 1].focus();
                } else {
                    inputRefs.current[0].focus();
                }
            }, 0);
        }
    }

    const handleChange = (e, id) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, content: e.target.value } : item
            )
        );
    }

    const handleCompleted = (id) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ?
                    (item.isCompleted ? { ...item, isCompleted: false } : { ...item, isCompleted: true })
                    : item
            )
        );
    }

    const handleDelete = (id) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    }

    return (
        <div className="todo-list-container">
            {itemsShown.map((item, index) => {
                return (
                    <div key={item.id} className="todo-list-card">
                        <div className="checkbox" onClick={() => handleCompleted(item.id)}>{item.isCompleted ? '✔' : ''}</div>
                        <input
                            ref={el => inputRefs.current[index] = el}
                            id={item.id}
                            type="text"
                            placeholder="(Text)"
                            value={item.content}
                            onChange={(e) => handleChange(e, item.id)}
                            onKeyDown={(e) => handleKeyDown(e, item.id, index)}
                            className={item.isCompleted ? 'completed' : ''} />
                        <div className="delete-icon" onClick={() => handleDelete(item.id)}><FontAwesomeIcon icon={faXmark} /></div>
                    </div>

                )
            })}
        </div>
    )
}

export default TodoList