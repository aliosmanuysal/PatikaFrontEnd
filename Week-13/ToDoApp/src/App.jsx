import { useState } from 'react'
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [displayStatus, setDisplayStatus] = useState({ all: true, active: false, completed: false });

  return (
    <>
      <div className='header'><h1>ToDoApp</h1></div>
      <NewTodo items={items} setItems={setItems} />
      {items.length > 0 && <TodoList items={items} setItems={setItems} displayStatus={displayStatus} />}
      {items.length > 0 && <Footer items={items} setItems={setItems} displayStatus={displayStatus} setDisplayStatus={setDisplayStatus} />}
    </>
  )
}

export default App
