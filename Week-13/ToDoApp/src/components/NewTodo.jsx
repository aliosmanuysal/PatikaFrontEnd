import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const NewTodo = ({ items, setItems }) => {
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.type === 'blur') {
            if (e.target.value.trim() !== '') {
                const maxId = items.length > 0 ? Math.max(...items.map(item => item.id)) : 0;
                const newItem = { id: maxId + 1, content: inputValue.trim(), isCompleted: false };
                setItems((prevItems) => [...prevItems, newItem]);
            }
            setInputValue('');
        }
    }

    const handleAngleIcon = () => {
        if (items.filter(item => item.isCompleted === false).length) {
            setItems(prevItems => prevItems.map(item => ({ ...item, isCompleted: true })))
        } else {
            setItems(prevItems => prevItems.map(item => ({ ...item, isCompleted: false })))
        }
    }

    return (
        <div className="new-todo-container">
            <div className="angleDownIcon"
                onClick={handleAngleIcon}
                style={{ color: items.length > 0 ? (items.some(item => item.isCompleted === false) ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.6)') : 'rgba(0, 0, 0, 0.2)' }}>
                <FontAwesomeIcon icon={faAngleDown} /></div>
            <input
                type="text"
                placeholder="What needs to be done?"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={(e) => handleKeyDown(e)}
                onKeyDown={(e) => handleKeyDown(e)} />
        </div>
    )
}

export default NewTodo;