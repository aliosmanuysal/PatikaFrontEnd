import React, { useState } from "react";

function NoteInput({ onAddNote }) {
  const [noteText, setNoteText] = useState(""); // Not metni
  const [selectedColor, setSelectedColor] = useState("yellow"); // Seçilen renk

  // Not ekleme işlemi
  const handleAddNote = () => {
    if (noteText.trim()) {
      // Not metni boş değilse
      onAddNote({ text: noteText, color: selectedColor });
      setNoteText(""); // Not eklendikten sonra metni sıfırlama
    }
  };

  return (
    <div className="note-input">
      <textarea
        placeholder="Enter your note here..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <div className="color-picker">
        <button
          className={`color-button color-pink ${
            selectedColor === "pink" ? "selected" : ""
          }`}
          onClick={() => setSelectedColor("red")}
          style={{ backgroundColor: "red" }}
        />
        <button
          className={`color-button color-purple ${
            selectedColor === "purple" ? "selected" : ""
          }`}
          onClick={() => setSelectedColor("purple")}
          style={{ backgroundColor: "purple" }}
        />
        <button
          className={`color-button color-yellow ${
            selectedColor === "yellow" ? "selected" : ""
          }`}
          onClick={() => setSelectedColor("yellow")}
          style={{ backgroundColor: "yellow" }}
        />
        <button
          className={`color-button color-blue ${
            selectedColor === "blue" ? "selected" : ""
          }`}
          onClick={() => setSelectedColor("blue")}
          style={{ backgroundColor: "blue" }}
        />
        <button
          className={`color-button color-green ${
            selectedColor === "green" ? "selected" : ""
          }`}
          onClick={() => setSelectedColor("green")}
          style={{ backgroundColor: "green" }}
        />
        <button
          className={`color-button color-orange ${
            selectedColor === "orange" ? "selected" : ""
          }`}
          onClick={() => setSelectedColor("orange")}
          style={{ backgroundColor: "orange" }}
        />
        <button
          className={`color-button color-Brown ${
            selectedColor === "Brown" ? "selected" : ""
          }`}
          onClick={() => setSelectedColor("Brown")}
          style={{ backgroundColor: "Brown" }}
        />
        <button
          className={`color-button color-Khaki ${
            selectedColor === "Khaki" ? "selected" : ""
          }`}
          onClick={() => setSelectedColor("Khaki")}
          style={{ backgroundColor: "Khaki" }}
        />
        <button
          className={`color-button color-Coral ${
            selectedColor === "Coral" ? "selected" : ""
          }`}
          onClick={() => setSelectedColor("Coral")}
          style={{ backgroundColor: "Coral" }}
        />
      </div>
      <button className="add-button" onClick={handleAddNote}>
        Add
      </button>
    </div>
  );
}

export default NoteInput;
