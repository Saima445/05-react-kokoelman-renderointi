import ReactDOM from "react-dom/client";
// import axios from "axios";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// const promise = axios.get("http://localhost:3001/notes");
// console.log(promise);
// promise.then((response) => {
//   console.log(response);
// });

// const promise2 = axios.get("http://localhost:3001/foobar");
// console.log(promise2);

// const notes = [
//   {
//     id: 1,
//     content: "HTML is easy",
//     important: true,
//   },
//   {
//     id: 2,
//     content: "Browser can execute only JavaScript",
//     impotant: false,
//   },
//   {
//     id: 3,
//     content: "GET and POST are the most important methods of HTTP protocol",
//     important: true,
//   },
// ];

// const result = notes.map((note) => note.id);
// console.log(result);

// täydellinen kirjoitus funktiolle:
// const result2 = notes.map((note) => {
//   return note.id;
// });
// console.log(result2);

// axios.get("http://localhost:3001/notes").then((response) => {
//   const notes = response.data;
//   // console.log(notes);

//   ReactDOM.createRoot(document.getElementById("root")).render(
//     <App notes={notes} />
//   );
// });
