import "./App.css";
import React, { useState } from "react";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  const [filterText, setFilterText] = useState("");

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div className="app">
      <h1>NotesApp</h1>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <NoteInput onAddNote={handleAddNote} />
      <NoteList notes={notes} filterText={filterText} />
    </div>
  );
}

export default App;
