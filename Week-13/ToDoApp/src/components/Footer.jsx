
const Footer = ({ items, setItems, displayStatus, setDisplayStatus }) => {

    const handleDisplayStatus = (e) => {
        setDisplayStatus(prevDisplayStatus => ({
            ...prevDisplayStatus,
            all: false,
            active: false,
            completed: false,
            [e.target.id]: true
        }));
    };

    const handleClearCompleted = () => {
        setItems(prevItems => (prevItems.filter(item => item.isCompleted === false)));
    }

    return (
        <div className="footer">
            <p>{items.filter(item => item.isCompleted === false).length} items left</p>
            <button className={displayStatus.all ? 'active' : ''} id='all' onClick={(e) => handleDisplayStatus(e)}>All</button>
            <button className={displayStatus.active ? 'active' : ''} id='active' onClick={(e) => handleDisplayStatus(e)}>Active</button>
            <button className={displayStatus.completed ? 'active' : ''} id='completed' onClick={(e) => handleDisplayStatus(e)}>Completed</button>
            <span onClick={handleClearCompleted}
                className={(items.filter(item => item.isCompleted === true)).length > 0 ? 'clear-completed-shown' : ''}>
                Clear Completed
            </span>
        </div>
    )
}

export default Footer