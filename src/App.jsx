import { useState, useEffect } from "react";
import Note from "./components/Note";
import noteService from "./services/notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
      })
      .catch((error) => {
        alert(`the note '${note.content}' was already deleted from server`);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    };

    noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote("");
    });
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);
  // : notes.filter((note) => note.important === true);
  // Pidempi vertailuoperaatio on oikeastaan turha. Koska note.important on arvoltaan joko true tai false.
  // const tulos = ehto ? val1 : val2. muuttujan tulos arvoksi asetetaan
  // val1:n arvo jos ehto on tosi. Jos ehto ei ole tosi, muuttujan tulos arvoksi tulee val2:n arvo.

  return (
    <>
      {/* tapa 1 kovakoodilla */}
      {/* <h1>Notes (kovakoodi)</h1>
      <ul>
        {notes.length > 0 && <li>{notes[0].content}</li>}
        {notes.length > 1 && <li>{notes[1].content}</li>}
        {notes.length > 2 && <li>{notes[2].content}</li>}
      </ul>
      <hr></hr> */}
      {/* tapa 2 käyttäen map-metodia */}
      {/* <h1>Notes (map)</h1>
      <ul>
        {notes.map((note) => <li key={note.id}>{note.content}</li>)}
      </ul>
      <hr></hr> */}
      {/* tapa 3 antipattern, ei ole suositeltava tapa! */}
      {/* <h1>Notes (taulukon indeksit avaimina)</h1>
      <ul>
        {notes.map((note, i) => <li key={i}>{note.content}</li>)}
      </ul>
      <hr></hr> */}
      {/* tapa 4 tehdään Notelle oma komponentti */}
      {/* <h1>Notes (omalla komponentilla)</h1>
      <ul>
        {notes.map((note) => <Note key={note.id} note={note} />)}
      </ul>
      <hr></hr> */}
      {/* tapa 5 tallettaa muuttujaan notesToShow ehdoilla (muuttujalla notesToShow/important:all) */}
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input
          id="noteInput"
          name="note"
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </>
  );
};

export default App;
