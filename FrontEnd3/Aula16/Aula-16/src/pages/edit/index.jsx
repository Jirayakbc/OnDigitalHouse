import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function editaCadastro(){
  const [alunos, getAlunos] = useState([]);
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("")
  const [curso, setCurso] = useState("");
  const [bimestre, setBimestre] = useState("")
  const [_id, setId]=useState("");
  const {id} = useParams();
  const navigate = useNavigate();

  function preencheFormulario(){
    setNome(nome);
    setMatricula(matricula);
    setCurso(curso);
    setBimestre(bimestre);
    setId(_id);
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
    
        useEffect(() => {
          editAlunos();
        }, []);
      
      }

    return (
      <>
       <h1>edicao</h1>
      </>
    );
}