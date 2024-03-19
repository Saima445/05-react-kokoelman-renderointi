import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    impotant: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

const result = notes.map((note) => note.id);
console.log(result);

// täydellinen kirjoitus funktiolle:
// const result2 = notes.map((note) => {
//   return note.id;
// });
// console.log(result2);

ReactDOM.createRoot(document.getElementById("root")).render(
  <App notes={notes} />
);
