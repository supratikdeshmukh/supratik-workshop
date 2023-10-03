import React from "react";

const NoteList = ({ notes, handleEdit, handleDelete }) => {
  return (
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
  );
};

export default NoteList;
