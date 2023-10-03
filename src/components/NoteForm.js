import React from "react";

const NoteForm = ({ handleSubmit, setNote, note, editId }) => {
  return (
    <form className="noteForm" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setNote(e.target.value)}
        value={note}
      />
      <button type="submit">{editId ? "Update" : "Save"}</button>
    </form>
  );
};

export default NoteForm;
