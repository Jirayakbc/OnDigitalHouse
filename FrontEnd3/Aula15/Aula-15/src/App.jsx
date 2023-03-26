
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [alunos, getAlunos] = useState([]);
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("")
  const [curso, setCurso] = useState("");
  const [bimestre, setBimestre] = useState("")
  const [_id, setId]=useState("");

  const url = ('https://api-aluno.vercel.app/aluno/')

  function limpaCampos(){
    setNome("");
    setMatricula("");
    setCurso("");
    setBimestre("");
    setId("");
  }

  async function addAlunos(event){
    event.preventDefault();

    try {
      await axios.post(`${url}`,{
        nome: nome,
        matricula: matricula,
        curso: curso,
        bimestre: bimestre,
      }); 
      limpaCampos();
      getAll();

    } catch (error) {
      alert("Não foi possível cadastrar aluno")
    }
  }

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

  function preencheFormulario(t){
    setNome(t.nome);
    setMatricula(t.matricula);
    setCurso(t.curso);
    setBimestre(t.bimestre);
    setId(t._id);
  }

  async function editAlunos(event){
    event.preventDefault();

    try {
      await axios.put(url+_id, {
        nome: nome,
        matricula: matricula,
        curso: curso,
        bimestre: bimestre,
      })
      limpaCampos();
      getAll();
    } catch (error) {
      alert("Não foi possível atualziar o registro!")
    }

  
  }


  useEffect(() => {
    getAll();
  }, []);
  
  return (
    <div className="App">
      <h1>Consumo API Aula 15</h1>
      <form onSubmit={_id ? editAlunos : addAlunos}
      /*style={{ border: "1px solid #999", marginBottom: 5, alignItems: "center" }}*/
      >
        <input type="text" 
        placeholder='Digite seu nome' 
        value={nome}
        onChange={(event)=>setNome(event.target.value)}
        />
        <br />
        <input type="text" 
        placeholder='Digite Matricula'
        value={matricula}
        onChange={(event)=>setMatricula(event.target.value)}
        />
        <br />
        <input type="text" 
        placeholder='Digite o Curso'
        value={curso}
        onChange={(event)=>setCurso(event.target.value)}
        />
        <br />
        <input type="text" 
        placeholder='Digite o Bimestre'
        value={bimestre}
        onChange={(event)=>setBimestre(event.target.value)}
        />
        <br />
        <input type="submit"
        value={_id ? "Editar" : "Incluir"} />
      </form>
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

            <button onClick={()=>preencheFormulario(t)}>Editar</button>
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
