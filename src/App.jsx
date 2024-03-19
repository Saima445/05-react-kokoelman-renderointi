import { useState } from "react";
import Note from "./components/Note";

const App = ({ notes }) => {
  // destrukturoidaan alempi apumuuttuja pois ja lisätään notes suoraan nuolifunktioon propsin sijaan
  // const { notes } = props;
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
    </>
  );
};

export default App;
