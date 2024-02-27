import { useState } from "react";

function App(props) {
  const [value, setValue] = useState(0);

  return (
    <>
      {value}
      <button onClick={() => setValue(0)}>button</button>
    </>
  );
}

// HUOM Hookeja siis kuuluu kutsua ainoastaan React-komponentin
// määrittelevän funktion rungosta:

// const App = (props) => {
//   // nämä ovat ok
//   const [age, setAge] = useState(0)
//   const [name, setName] = useState('Juha Tauriainen')

//   if ( age > 10 ) {
//     // ei ehtolauseessa
//     const [foobar, setFoobar] = useState(null)
//   }

//   for ( let i = 0; i < age; i++ ) {
//     // eikä myöskään loopissa
//     const [rightWay, setRightWay] = useState(false)
//   }

//   const notGood = () => {
//     // ei muiden kuin komponentin määrittelevän funktion sisällä
//     const [x, setX] = useState(-1000)
//   }

//   return (
//     //...
//   )
// }

export default App;
