import { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);

  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: notes.length + 1,
    };

    setNotes(notes.concat(noteObject));
    setNewNote("write another note...");
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
      <h1>Notes (kovakoodi)</h1>
      <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>
      <hr></hr>
      {/* tapa 2 käyttäen map-metodia */}
      <h1>Notes (map)</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
      <hr></hr>
      {/* tapa 3 antipattern, ei ole suositeltava tapa! */}
      <h1>Notes (taulukon indeksit avaimina)</h1>
      <ul>
        {notes.map((note, i) => (
          <li key={i}>{note.content}</li>
        ))}
      </ul>
      <hr></hr>
      {/* tapa 4 tehdään Notelle oma komponentti */}
      <h1>Notes (omalla komponentilla)</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <hr></hr>
      <hr></hr>
      {/* tapa 5 tallettaa muuttujaan notesToShow ehdoilla */}
      <h1>Notes (muuttujalla notesToShow/important:all)</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </>
  );
};

export default App;
