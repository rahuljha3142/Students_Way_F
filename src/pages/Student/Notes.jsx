import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../../Styles/Notes.css";
import Sidebar from './Sidebar';

const Notes = () => {
  let [notes, setNotes] = useState([]);
  let [newTitle, setNewTitle] = useState("");
  let [newNote, setNewNote] = useState("");
  let [editingNoteId, setEditingNoteId] = useState(null);
  let [editedTitle, setEditedTitle] = useState("");
  let [editedNote, setEditedNote] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  let addNewNote = (event) => {
    event.preventDefault();
    if (!newTitle || !newNote) {
      alert("Please fill in all fields");
      return;
    }
    setNotes((prevNotes) => [
      ...prevNotes,
      { title: newTitle, note: newNote, id: uuidv4() },
    ]);
    setNewTitle("");
    setNewNote("");
  };

  let updateTitleValue = (event) => {
    setNewTitle(event.target.value);
  };

  let updateNoteValue = (event) => {
    setNewNote(event.target.value);
  };

  let editNote = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);
    setEditingNoteId(id);
    setEditedTitle(noteToEdit.title);
    setEditedNote(noteToEdit.note);
  };

  let saveNote = (event) => {
    event.preventDefault();
    if (!editedTitle || !editedNote) {
      alert("Please fill in all fields");
      return;
    }
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === editingNoteId
          ? { ...note, title: editedTitle, note: editedNote }
          : note
      )
    );
    setEditingNoteId(null);
    setEditedTitle("");
    setEditedNote("");
  };

  let deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((prevNote) => prevNote.id !== id));
  };

  let highlightText = (text) => {
    const wordsToHighlight = ['important', 'urgent']; // Example words to highlight
    const regex = new RegExp(`(${wordsToHighlight.join('|')})`, 'gi');
    return text.replace(regex, (match) => `<mark>${match}</mark>`);
  };

  return (
    <div>
      <div className="NotesContainer">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="Content" style={{ marginLeft: isOpen ? '270px' : '70px' }}>
          <div className="NotesContent">
            <h2 className="NotesHeader">Student Notes</h2>
            {editingNoteId ? (
              <form onSubmit={saveNote}>
                <label htmlFor="editedTitle">Note Title:</label>
                <input 
                  type="text" 
                  className="AddNoteInput" 
                  placeholder="Enter note title"
                  value={editedTitle} 
                  onChange={(e) => setEditedTitle(e.target.value)}
                  id="editedTitle"
                  name="editedTitle"
                />
                <label htmlFor="editedNote">Note Content:</label>
                <textarea 
                  className="AddNoteInput" 
                  placeholder="Enter note content"
                  value={editedNote} 
                  onChange={(e) => setEditedNote(e.target.value)}
                  id="editedNote"
                  name="editedNote"
                />
                <button type="submit" className="AddNoteButton">Save Note</button>
                <button type="button" className="CancelButton" onClick={() => setEditingNoteId(null)}>Cancel</button>
              </form>
            ) : (
              <form onSubmit={addNewNote}>
                <label htmlFor="title">Note Title:</label>
                <input 
                  type="text" 
                  className="AddNoteInput" 
                  placeholder="Enter note title"
                  value={newTitle} 
                  onChange={updateTitleValue}
                  id="title"
                  name="title"
                />
                <label htmlFor="note">Note Content:</label>
                <textarea 
                  className="AddNoteInput" 
                  placeholder="Enter note content"
                  value={newNote} 
                  onChange={updateNoteValue}
                  id="note"
                  name="note"
                />
                <button type="submit" className="AddNoteButton">Add Note</button>
              </form>
            )}
            {notes.length > 0 ? (
              <ul className="NoteList">
                {notes.map((note) => (
                  <li className='NoteItem' key={note.id}>
                    <span dangerouslySetInnerHTML={{ __html: highlightText(note.title + ": " + note.note) }} />
                    &nbsp;&nbsp;
                    <button className="EditButton" onClick={() => editNote(note.id)}>Edit</button>
                    <button className="DeleteButton" onClick={() => deleteNote(note.id)}>Delete</button>
                  </li>
                ))}
              </ul>    
            ) : (
              <p>No notes to display</p>
            )}  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
