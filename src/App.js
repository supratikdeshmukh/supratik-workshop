import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editNote = notes.find((e) => e.id === editId);
      const updatedNotes = notes.map((e) =>
        e.id === editNote.id
          ? (e = { id: e.id, note })
          : { id: e.id, note: e.note }
      );
      setNotes(updatedNotes);
      setEditId(0);
      setNote("");
      return;
    }

    if (note !== "") {
      setNotes([{ id: `${note}-${Date.now()}`, note }, ...notes]);
      setNote("");
    }
  };

  const handleDelete = (id) => {
    const delNote = notes.filter((e) => e.id !== id);
    setNotes([...delNote]);
  };

  const handleEdit = (id) => {
    const editNote = notes.find((e) => e.id === id);
    setNote(editNote.note);
    setEditId(id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Note Application</h1>
        <form className="noteForm" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setNote(e.target.value)}
            value={note}
          />
          <button type="submit">{editId ? "Update" : "Save"}</button>
        </form>

        <ul className="allNote">
          {notes.map((e) => (
            <li className="singleNote">
              <span className="noteText" key={e.id}>
                {e.note}
              </span>
              <button onClick={() => handleEdit(e.id)}>Edit</button>
              <button onClick={() => handleDelete(e.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
