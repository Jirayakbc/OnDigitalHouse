import { Link, useNavigate } from "react-router-dom";

import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [alunos, getAlunos] = useState([]);
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("")
  const [curso, setCurso] = useState("");
  const [bimestre, setBimestre] = useState("")
  const [_id, setId]=useState("");

  const navigate = useNavigate();

  const url = ('https://api-aluno.vercel.app/aluno/')

  async function getAll(){
    try {
      const response = await axios.get(url)
      getAlunos(response.data)
    } catch (error) {
      alert("Nao foi possivel acessar a API")
    }
  }

  async function deletaAlunos(_id){
    try {
      await axios.delete(url+_id)
      getAll();
      alert("Registro apagado")
    } catch (error) {
      alert("Não foi possível apagar o registro")
    }
  }


  
  useEffect(() => {
    getAll();
  }, []);
  
  return (
    <div className="App">
      <h1>Consumo API Aula 16</h1>
      <Link to={`/novo/`}>Nova tarefa</Link>
      {alunos.length > 0 ?(

      <ul>
        {alunos.map((t)=>(
          <li key={t._id}
          style={{ border: "1px solid #999", marginBottom: 5, listStyle: "none" }}
          >

            <p>Nome.....: {t.nome}</p>
            <p>Matrícula: {t.matricula}</p>
            <p>Curso......: {t.curso}</p>
            <p>Bimestre.: {t.bimestre}</p>

            <button onClick={()=>navigate(`/edit/${t._id}`)}>Editar</button>
            <button onClick={()=>deletaAlunos(t._id)}>Apagar</button>
           
          </li>
        ))}
      </ul>
      ) : (
        <p>Nenhum aluno cadastrado!</p>
      )}
    </div>
  )
}

export default App