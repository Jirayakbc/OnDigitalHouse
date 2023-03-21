import { useState } from "react";

function App() {
  const [numeros, setNumeros] = useState([]);

  function addNumber() {
    setNumeros([...numeros, numeros.length]);

    // const copiaNumeros = [...numeros];
    // copiaNumeros.push(60);

    // setNumeros(copiaNumeros);

    // numeros.push(60);
  }

  return (
    <div>
      <h1>Numeros</h1>

      <ul>
        {numeros.map((numero, index) => (
          <li key={index}>O item {numero} foi adicionado a lista!</li>
        ))}
      </ul>

      <button onClick={addNumber}>Clique</button>
    </div>
  );
}

export default App;