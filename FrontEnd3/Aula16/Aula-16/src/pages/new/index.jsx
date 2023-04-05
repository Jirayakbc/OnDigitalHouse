import axios from 'axios';
import { useState } from 'react';

export default function novoCadastro(){
  const url = ('https://api-aluno.vercel.app/aluno/') 
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("")
  const [curso, setCurso] = useState("");
  const [bimestre, setBimestre] = useState("")

  function limpaCampos(){
    setNome= (""),
    setMatricula= (""),
    setCurso= (""),
    setBimestre= ("")
  };
    async function addAlunos(event){
        event.preventDefault();

        try {
          await axios.post(url,{
            nome: nome,
            matricula: matricula,
            curso: curso,
            bimestre: bimestre,
          }); 
          limpaCampos();
        } catch (error) {
          alert("Não foi possível cadastrar aluno")
        }

      }



    return(
        <>
        <form onSubmit={addAlunos}
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
        value={"Incluir"} />
        </form>
        </>
        
    )
}