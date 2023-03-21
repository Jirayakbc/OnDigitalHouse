import { useEffect, useState } from "react";


function App() {

  const [users, setUsers] = useState([]);
  async function obterUsuarios(){
    try {
      const conexao = await fetch ('https://dummyjson.com/users/');
      const data = await conexao.json();
      setUsers(data.users);
      console.log(data)
    } catch (error) {
      console.log("algo deu errado")
    }
  }

  useEffect(()=>{
    obterUsuarios();
  },[])

  return (
    <div className="App">
     <h1>Usuarios</h1>

     <table>
      <thead>
        <th>ID</th>
        <th>Nome</th>
        <th>Sobrenome</th>
        <th>Idade</th>
        <th>Peso</th>
        <th>Altura</th>
        <th>Cor Olhos</th>
        <th>Cabelo Cor</th>
        <th>Cabelo Tipo</th>
        <th>Endereço</th>
      </thead>
      <tbody>{users.map((usuarios)=>(
  
      <tr key={usuarios.id}>
        
        <td>{usuarios.id}</td>
        <td>{usuarios.firstName}</td>
        <td>{usuarios.lastName}</td>
        <td>{usuarios.age}</td>
        <td>{usuarios.height}</td>
        <td>{usuarios.weight}</td>
        <td>{usuarios.eyeColor}</td>
        <td>{usuarios.hair.color}</td>
        <td>{usuarios.hair.type}</td>
        <td>{usuarios.address.address}</td>
      </tr>
     ))};
     </tbody>
     </table>
    </div>
  )
}

export default App
