import React from "react";

function NoteList({ notes, filterText }) {
  return (
    <div className="note-list">
      {notes
        .filter((note) =>
          note.text.toLowerCase().includes(filterText.toLowerCase()) 
        )
        .map((note, index) => (
          <div
            key={index}
            className="note"
            style={{ backgroundColor: note.color }} 
          >
            {note.text} 
          </div>
        ))}
    </div>
  );
}

export default NoteList;
